export const initialState = {
    categories: ["food", "music", "shoes", "series"],
    // reminders: [
    //     {
    //         category: "food",
    //         text: "remind me...."
    //     },
    //     {
    //         category: "food",
    //         text: "remind me...."
    //     },
    //     {
    //         category: "food",
    //         text: "remind me...."
    //     }
    // ]
};

const reducer = (state, action) => {
    console.log(action);

    switch (action.type) {
        case 'CREATE_CATEGORY':
            return {
                ...state,
                categories: [...state.categories, action.payload]
            }
        
        default:
            return state;
    }
};

export default reducer;