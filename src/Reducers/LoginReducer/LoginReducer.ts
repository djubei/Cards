type InitialStateType = {}

const initialState = {}


export const loginReducer = (state: InitialStateType = initialState, action: ActionType) => {
    switch (action.type) {
        default:
            return {...state}
    }
}

export type ActionType = any