export const initialState = ({
    DATA : [],
    user : null
})

export const reducer = (action, state) => {
    switch(action.type){
        case 'SET_DATA' : 
            return ({
                ...state,
                user : [action.user],
                DATA : [...state, action.DATA]
            })

        default : 
            return state;
    }
}

