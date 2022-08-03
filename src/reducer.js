export const initialState ={
    user:null,
    playlists:[],
    playing: false,
    item: null,
    token:null,
    // REMOVE After DEVELOPING
    // token:'BQD4zErCFWqz7g4aOEbEBtSVzmtImOzSPmlgLqV4nBNgTvTebPqdYcmjLrxdR21G5lsScjpwoT2F5eWtpaKr2bpnaVjjBNkrLKZE9cXbqoWs0pviTGlVQ4Ejkx4eoUmZGpPyygUm8OQVp43QsSYI2HbZvslK5JPDcJpB2aWV2QIr_43dgrnd',
    // token:'BQCgAD1bHU3B2ZXKz34ptWN011CC23PNXQH1knEeztCUDFU8EVE37RS2_K9KCTtWiOqrkWprBklGj2RdFyENYGk_ep5ex2EPNlhrJcVpygExqeFbDgxKgXdYiFbok9N0vhkBArA-9fj95_KRatLX9BUdv8lyjxZg57FLtoipalTdOqgKGFqb'
}

const reducer =(state,action)=>{
// console.log(action); 
switch(action.type){
// Action -> type of action , [payload]

    case 'SET_USER':
        return{
            ...state,
            user:action.user
        };
    case 'SET_TOKEN':
        return{
            ...state,
            token:action.token
        };
    case 'SET_PLAYLISTS':
        return{
            ...state,
            playlists:action.playlists,
        };
    case 'SET_DISCOVER':
        return{
            ...state,
            Discover:action.Discover,
        }
    default:
        return state;
}
}

export default reducer;