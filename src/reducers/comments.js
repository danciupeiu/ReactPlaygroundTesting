import {FETCH_COMMENTS, SAVE_COMMENT} from "actions/types";

export default (state = [], action) => {
    switch (action.type) {
        case SAVE_COMMENT:
            return [...state, action.payload];
        case FETCH_COMMENTS:
            const comments = action.payload.data.map(comment => {
                return comment.name
            });
            return [...state, ...comments];
        default:
            return state;
    }
}