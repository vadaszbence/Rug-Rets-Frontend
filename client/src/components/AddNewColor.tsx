import React from "react";
import {makeStyles} from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import {ColorAdderWrapper} from "./AddNewColor.styles";
import {useHistory} from "react-router-dom";
import {useMutation} from "@apollo/client";
import {GET_COLORS, UPLOAD_COLOR} from "../util/graphql";

type IColorAdderProps = {
    paddingNeeded: boolean
}

const AddNewColor = ({paddingNeeded}: IColorAdderProps) => {

    const [addColor] = useMutation(UPLOAD_COLOR)

    const MySwal = withReactContent(Swal);
    const useStyles = makeStyles(() => ({
        color: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 70,
            height: 70,
            borderRadius: 5,
            border: '1px solid black',
            cursor: 'pointer',
            marginBottom: 30
        },
        icon: {
            width: 40,
            height: 40
        }
    }));
    const classes = useStyles();

    const history = useHistory()

    const addNewColor = async () => {
        if (!localStorage.getItem('profile')) {
            Swal.fire({
                title: 'Please log in or sign up to save design',
                showDenyButton: true,
                confirmButtonText: `Log in`,
                denyButtonText: `Sign up`,
                denyButtonColor: '#424642',
                confirmButtonColor: '#424642'
            }).then(res => {
                if (res) {
                    if (res.isConfirmed) {
                        history.push('/login')
                    } else if (!res.isConfirmed && !res.isDismissed) {
                        history.push('/register')
                    }
                }
            })
        } else {
            MySwal.fire({
                title: 'Add new Color',
                input: 'text',
                inputValue: '#',
                inputAttributes: {
                    autocapitalize: 'off',
                },
                confirmButtonText: 'Add',
                showCancelButton: true,
            }).then((hexCode) => {
                const RegExp = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i;
                if (hexCode?.value?.length > 0 && !RegExp.test(hexCode.value)) {
                    fire('Hex code invalid')
                } else {
                    addColor(
                        {variables: {"name": '', "value": hexCode.value},
                        refetchQueries : [{ query: GET_COLORS }]})
                }
            })
        }
    }

    const fire = (text: string) => {
        Swal.fire({
            title: text,
            confirmButtonText: 'Ok',
        }).then(() => addNewColor())
    }

    return (
        <ColorAdderWrapper paddingNeeded={paddingNeeded} onClick={addNewColor}>
            <AddIcon className={classes.icon}/>
        </ColorAdderWrapper>
    );
}

export default AddNewColor;