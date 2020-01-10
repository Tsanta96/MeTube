export const UPDATE_SEARCH_FIELD = "UPDATE_SEARCH_FIELD"


export const updateSearchField = search => {
    return {
        type: UPDATE_SEARCH_FIELD,
        search
    }
}