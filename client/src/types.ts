import {SET_ALERT_STATE, SET_SHAPE, SET_SHAPE_COLOR_ARRAY, TOGGLE_ALERT_NEEDED} from "./state/constants/actionTypes";

export const SIGN_IN = 'SIGN_IN';
export const SIGN_UP = 'SIGN_UP';
export const SIGN_OUT = 'SIGN_OUT';
export const EDIT = 'EDIT';
export const CREATE = 'CREATE';
export const FETCH_ALL = 'FETCH_ALL';
export const SET = 'SET';
export const SET_TYPE = 'SET_TYPE';
export const SET_SHAPE_TYPE = 'SET_SHAPE_TYPE';
export const CREATE_DESIGN = 'CREATE_DESIGN';


export type DesignContextState = {
    designs: [];
    setPage: (page: number) => void;
    currentPage: number;
    setParam: (param: string) => void;
    loading: boolean
  };

export type ThemeProps = {
    dark: boolean
}

export type DesignType = {
    id: string,
    title: string,
    colors: string[],
    imageUrl: string,
    description: string,
    userName: string,
    rank: number,
    numVotes: number,
}

export interface ParamTypes {
    id: string;
}

export interface signUpData {
    givenName: string,
    familyName: string,
    email: string,
    password: string,
    confirmPassword: string
}

export interface signInData {
    email: string,
    password: string
}

export interface User {
    givenName: string,
    familyName: string,
    password: string,
    email: string,
    phone?: string
}

export interface profileData {
    givenName: string,
    familyName: string,
    email: string,
    phone?: string
}

export interface Color {
    name: string,
    value: string
}

export interface UploadColorData {
    name: string,
    value: string,
    id: string
}

interface SignInAction {
    type: typeof SIGN_IN;
    payload: User;
}

interface SignUpAction {
    type: typeof SIGN_UP;
    payload: User;
}

interface SignOutAction {
    type: typeof SIGN_OUT;
}

export interface UpdatedUser {
    givenName: string | undefined,
    familyName: string | undefined,
    email: string | undefined,
    phone?: string | undefined
}

interface EditAction {
    type: typeof EDIT;
    payload: UpdatedUser;
}

export type UserState = {
    token?: string;
    givenName: string,
    familyName: string,
    email:string,
    phone: string,
    _id?: string | undefined
    googleId?: string | undefined
}

export type AuthAction = SignUpAction | SignInAction | SignOutAction | EditAction;

interface uploadColorAction {
    type: typeof CREATE;
    payload: Color;
}

interface fetchColorsAction {
    type: typeof FETCH_ALL;
    payload: Color[];
}

interface setColorAction {
    type: typeof SET;
    payload: Color;
}

interface setColorType {
    type: typeof SET_TYPE;
    payload: string;
}

export type ColorAction = uploadColorAction | fetchColorsAction | setColorAction | setColorType;

interface addShapeAction {
    type: typeof CREATE;
    payload: {}
}

interface setShapeSelectionAction {
    type: typeof SET_SHAPE_TYPE;
    payload: string;
}

interface fetchShapesAction {
    type: typeof FETCH_ALL;
    payload: []
}

interface setShapeAction {
    type: typeof SET_SHAPE;
    payload: string;
}

interface setColorArrayAction {
    type: typeof SET_SHAPE_COLOR_ARRAY,
    payload: Color[];
}

export type ShapeAction = addShapeAction | setShapeAction | setShapeSelectionAction | setColorArrayAction | fetchShapesAction

export type alertState = {
    text: string,
    severity: string
}

interface setAlertStateAction {
    type: typeof SET_ALERT_STATE,
    payload: alertState
}

interface toggleAlertAction {
    type: typeof TOGGLE_ALERT_NEEDED,
}

export type AlertAction = setAlertStateAction | toggleAlertAction;

export type DesignData = {
    shape: string,
    colors: string[],
    name?: string
}

interface fetchDesignsAction {
    type: typeof FETCH_ALL,
    payload: DesignData[]
}

interface saveDesign {
    type: typeof CREATE_DESIGN,
    payload: DesignData
}

export type DesignAction = fetchDesignsAction | saveDesign;