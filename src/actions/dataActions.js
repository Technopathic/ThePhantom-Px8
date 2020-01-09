import {
    INIT_APP,
    SET_FEATURE,
    SET_LANG,
    SET_VIEW
} from '../constants/dataTypes';

const initApp = () => dispatch => {
    dispatch({ type: INIT_APP });
}

const setFeature = (index) => async(dispatch) => {
    return dispatch({ type: SET_FEATURE, index });
}

const setLang = (lang) => dispatch => {
    dispatch({ type: SET_LANG, lang });
}

const setView = (view) => async(dispatch) => {
    return dispatch({ type: SET_VIEW, view });
}

export {
    initApp,
    setFeature,
    setLang,
    setView
}