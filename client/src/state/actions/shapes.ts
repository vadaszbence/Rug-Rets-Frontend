import {FETCH_ALL, CREATE, DELETE, SET_SHAPE_TYPE, SET_SHAPE, SET_SHAPE_COLOR_ARRAY} from '../constants/actionTypes';
import * as api from '../../api';
import {Dispatch} from "redux";

export const getShapes = () => async (dispatch: Dispatch) => {
    try {
        const { data } = await api.fetchShapes();
        dispatch({ type: FETCH_ALL, payload: data });
    }
    catch (error) {
        console.log(error.message);
    }
}

export const uploadShape = (shape: any) => async (dispatch: Dispatch) => {
    try {
        const { data } = await api.uploadShape(shape);

        dispatch({ type: CREATE, payload: data });
    } catch (error) {
        console.log(error.message);
    }
};

export const deleteShape = (id: string) => async (dispatch: Dispatch) => {
    try {
        await api.deleteShape(id);

        dispatch({ type: DELETE, payload: id });
    } catch (error) {
        console.log(error.message);
    }
};

export const setShapeSelectionType = (type: string) => async (dispatch: Dispatch) => {
    try {
        dispatch({type: SET_SHAPE_TYPE, payload: type});
    } catch (error) {
        console.log(error.message);
    }
};

export const setShape = (name: string) => async (dispatch: Dispatch) => {
    try {
        dispatch({type: SET_SHAPE, payload: name});
    } catch (error) {
        console.log(error.message);
    }
};


export const setColorArray = (colorArray: string[]) => async (dispatch: Dispatch) => {
    try {
        dispatch({type: SET_SHAPE_COLOR_ARRAY, payload: colorArray});
    } catch (error) {
        console.log(error.message);
    }
};