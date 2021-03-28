export const initialState = {
    watchlist: [],
    user: null,
}

export const actionTypes = {
    SET_USER: 'SET_USER', 
    ADD_TO_LIST: 'ADD_TO_LIST',
    REMOVE_FROM_LIST: 'REMOVE_FROM_LIST',
};

const reducer = (state, action) => {
    console.log(action);
    switch(action.type){
        case actionTypes.ADD_TO_LIST:
            if([...state.watchlist].includes(action.movie)){
                alert('Movie Already added to watchlist');
            }
            else{
                return {
                    ...state,
                    watchlist: [...state.watchlist, action.movie]
                }
            }
        
        case actionTypes.REMOVE_FROM_LIST:
            let newWatchlist = [...state.watchlist];
            const index = state.watchlist.findIndex((newList) =>  newList === action.movie);

            if(index >= 0){
                newWatchlist.splice(index, 1);
            }
            else{
                console.warn(
                    `Can't remove movie ${action.movie.id} at ${index} as it is not in th list`
                )
            }
            return{
                ...state,
                watchlist: newWatchlist
            }

        case actionTypes.SET_USER:
            return{
                ...state,
                user: action.user,
            }
        default:
            return state;
    }
}


export default reducer;