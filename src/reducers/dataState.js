import Immutable from 'immutable';

import {
    INIT_APP,
    SET_FEATURE,
    SET_LANG,
    SET_VIEW
} from '../constants/dataTypes';

const initialState = Immutable.Map({
    appInit:false,
    activeLang:'en',
    inView:['controller'],
    features: [
    {
            title:'New haptics.',
            content: 'Forget what you knew so far about controllers. This is the next step when talking about gaming!'
        },
        {
            title:'Features.',
            content: 'The new Phantom Controller comes with a bunch of new features that will maximize your gaming experience.'
        },
        {
            title:'Statement.',
            content: 'We are here to make a statement. Set a statement with the Phantom Controller and show it.'
        }
    ],
    activeFeature: 0
});

export default (state = initialState, action) => {
    switch(action.type) {

        case INIT_APP: {
            const newState = Immutable.Map(state);
            let updateState = newState.setIn(['appInit'], true);

            return updateState.toJS();
        }

        case SET_FEATURE: {
            const newState = Immutable.Map(state);
            let updateState = newState.setIn(['activeFeature'], action.index);

            return updateState.toJS();
        }

        case SET_LANG: {
            const newState = Immutable.Map(state);
            let updateState = newState.setIn(['activeLang'], action.lang);

            return updateState.toJS();
        }

        case SET_VIEW: {
            const newState = Immutable.Map(state);
            let updateState = newState.setIn(['inView'], action.view);

            return updateState.toJS();
        }

        default: {
            return state;
        }
    }
}