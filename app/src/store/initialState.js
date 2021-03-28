const filterOptions = [
    {
        "id": 1,
        "name": "ALL"
    },
    {
        "id": 2,
        "name": "DRAMA"
    },
    {
        "id": 3,
        "name": "ADVENTURE"
    },
    {
        "id": 4,
        "name": "HORROR"
    },
    {
        "id": 5,
        "name": "THRILLER"
    },
    {
        "id": 6,
        "name": "CRIME"
    }
];

const sorterOptions = [
    {
        "id": 1,
        "name": "GENRE",
        "field": "genre"
    }, 
    {
        "id": 2,
        "name": "RATING",
        "field": "rating"
    }, 
    {
        "id": 3,
        "name": "RELEASE DATE",
        "field": "age"
    }
];

const initialState = {
    movies: [],
    filter: {
        options: filterOptions,
        selectedOption: filterOptions[0]
    },
    sorter: {
        options: sorterOptions,
        selectedOption: sorterOptions[0]
    },
};

export { initialState }