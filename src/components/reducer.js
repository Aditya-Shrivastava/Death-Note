export const initialState = {
    categories: ["food", "music", "shoes", "series"],
    reminders: [
        {
            category: "food",
            id: 1,
            title: "Sunday Lunch",
            text: "On KFCOn KFCOn KFCOn KFCOn KFCOn KFCOn KFCOn KFCOn KFCOn KFCOn KFCOn KFCOn KFCOn KFCOn KFCOn KFCOn KFCOn KFCOn KFCOn KFC",
            time: "11:30",
            date: "10-08-2020"
        },
        {
            category: "food",
            id: 2,
            title: "Sunday Lunch",
            text: "On KFC",
            time: "11:30",
            date: "10-08-2020"
        },
        {
            category: "food",
            id: 3,
            title: "Sunday Lunch",
            text: "On KFC",
            time: "11:30",
            date: "10-08-2020"
        },
        {
            category: "food",
            id: 4,
            title: "Sunday Lunch",
            text: "On KFC",
            time: "11:30",
            date: "10-08-2020"
        },
        {
            category: "food",
            id: 5,
            title: "Sunday Lunch",
            text: "On KFC wewe wewe wewe wew we wewe wewe we we we we we . we w we we ",
            time: "11:30",
            date: "10-08-2020"
        },
        {
            category: "food",
            id: 6,
            title: "Sunday Lunch",
            text: "On KFC",
            time: "11:30",
            date: "10-08-2020"
        },
        {
            category: "food",
            id: 7,
            title: "Sunday Lunch",
            text: "On KFC",
            time: "11:30",
            date: "10-08-2020"
        },
        {
            category: "food",
            id: 8,
            title: "Sunday Lunch",
            text: "On KFC",
            time: "11:30",
            date: "10-08-2020"
        },
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
        
        default:
            return state;
    }
};

export default reducer;