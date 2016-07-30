import {
    SELECT_POST,
    SET_LOCATION,
    SWITCH_POST_LIST_SORT_TYPE,
    SWITCH_POST_SECTION,
    PostListSortTypes,
    SHOW_ADD_POST
} from "../actions";

export const VIEW_STATE_VERSION = 2;
export function migrateViewState(storedState, oldVersion) {
    if (oldVersion < 2) {
        storedState.location.country = "DE";
    }
    return storedState;
}

function viewState(state = {
    selectedPostId: null,
    location: {latitude: undefined, longitude: undefined, city: undefined, country: "DE"},
    postSection: "location",
    postListSortType: PostListSortTypes.RECENT,
    addPost: {visible: false, ancestor: undefined},
}, action) {
    switch (action.type) {
        case SELECT_POST:
            return Object.assign({}, state, {selectedPostId: action.postId});
        case SET_LOCATION:
            return Object.assign({}, state, {location: action.location});
        case SWITCH_POST_LIST_SORT_TYPE:
            return Object.assign({}, state, {postListSortType: action.sortType});
        case SWITCH_POST_SECTION:
            return Object.assign({}, state, {postSection: action.section});
        case SHOW_ADD_POST:
            return Object.assign({}, state, {addPost: {visible: action.visible, ancestor: action.ancestor}});
        default:
            return state
    }
}

export default viewState;