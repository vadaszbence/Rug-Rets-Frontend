import styled from "@emotion/styled";
import {ToggleButton} from '@material-ui/lab';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import {ToggleButtonGroupProps} from '@material-ui/lab';

type CanvasProps = {
    colorChosen: boolean
}

export const Wrapper = styled.div({
    height: '90vh',
    width: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)',
    gridTemplateRows: 'repeat(9, 1fr)',
    gridColumnGap: 0,
    gridRowGap: 0
})

export const DesignTypesContainer = styled.div({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gridArea: '1 / 1 / 2 / 6'
});

export const ShapePicker = styled.div({
    gridArea: '2 / 1 / 4 / 6'
});

export const CanvasContainer = styled.div({
    gridArea: '4 / 1 / 10 / 5',
    backgroundImage: "linear-gradient(rgba(209, 207, 197, 0.5) 1px, transparent 1px), linear-gradient(to right,rgba(209, 207, 197, 0.5) 1px,rgba(245, 243, 231, 0.5) 1px)",
    backgroundSize: '20px 20px',
    overflow: 'scroll',
});

export const CanvaS = styled.div<CanvasProps>(
    (props: CanvasProps) => ({
        overflow: 'auto',
        cursor: props.colorChosen ? "pointer" : "",
        width: '100%',
        display: 'flex',
        justifyContent: 'center'
    })
)

export const ColorPickerContainer = styled.div({
    overflow: 'scroll',
    boxShadow: '0 1em 1em -1em rgba(0, 0, 0, 0.10)',
    gridArea: '5 / 5 / 9 / 6'
});

export const ColorBtnContainer = styled.div({
    gridArea: '4 / 5 / 5 / 6',
    display: 'flex',
    justifyContent: 'center'
});

export const ButtonContainer = styled.div({
    margin: '0 auto',
    width: '70%',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    gridArea: '9 / 5 / 10 / 6'
});

export const ToggleGroup = styled(ToggleButtonGroup)<ToggleButtonGroupProps>({
    height: '50%',
    boxShadow: 'rgba(0, 0, 0, 0.12) 0 1px 3px, rgba(0, 0, 0, 0.24) 0 1px 2px'
})

export const Toggle = styled(ToggleButton)({
    color: 'black !important'
})

export const ColorSelector = styled.div({
    display: 'flex',
    margin: '0 auto',
    flexFlow: 'row wrap',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '70%',
    right: 0,
    left: 0
})

export const Color = styled.div({
    width: 70,
    height: 70,
    borderRadius: 5,
    cursor: 'pointer',
    marginBottom: 30,
    boxShadow: 'rgba(0, 0, 0, 0.12) 0 1px 3px, rgba(0, 0, 0, 0.24) 0 1px 2px'
})