export const initialState = {
    // categories: ["food", "music", "shoes", "series"],
    categories: [],
    reminders: [
        // {
        //     category: "food",
        //     id: 1,
        //     title: "sunday lunch",
        //     text: "on kfc",
        //     time: "11:30",
        //     date: "10-08-2020"
        // },
    ],
    activeCategory: ""

};

const reducer = (state, action) => {

    // console.log(action);

    switch (action.type) {
        
        case 'CREATE_CATEGORY':
            return {
                ...state,
                categories: [...state.categories, action.payload],
                // delete if needed !!!
                activeCategory: action.payload
            }

        case 'ACTIVE_CATEGORY':
            return {
                ...state,
                activeCategory: action.payload
            }
        
        case 'ADD_REMINDER':
            return {
                ...state,
                reminders: [action.payload, ...state.reminders]
            }
            
        default:
            return state;
    }
};

export default reducer;