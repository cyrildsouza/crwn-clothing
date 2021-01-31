/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

export interface ICurrentUser {
    displayName?: string | undefined;
    email?: string | undefined;
    id: string,
}

export interface IState {
    currentUser: ICurrentUser | null;
}

const initialState: IState = {
    currentUser: null,
};

// eslint-disable-next-line
// @ts-ignore
export default (state = initialState, action) => {
    switch(action.type) {
    case 'SET_CURRENTUSER': 
        return {
            ...state,
            currentUser: action.data,
        };
    default:
        return state;
    }
};