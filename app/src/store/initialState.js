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
        "name": "RELEASE DATE",
        "field": "release_date"
    }, 
    {
        "id": 2,
        "name": "RATING",
        "field": "vote_average"
    }, 
    {
        "id": 3,
        "name": "TITLE",
        "field": "title"
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
        selectedOption: sorterOptions[0], 
        asc: true
    },
};

export { initialState }