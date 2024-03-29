import {
    START_LOADING,
    STOP_LOADING,
    DISPLAY_MESSAGE,
    CLEAR_DISPLAY_MESSAGE,
    SAVE_AUTH_TOKEN,
    DELETE_AUTH_TOKEN
} from "../../actions/common/actions.js";

export const loading = (state = false, action) => {
    const { type } = action;
    switch (type) {
        case START_LOADING:
            return true;
        case STOP_LOADING:
            return false;
        default:
            return state;
    }
};

export const message = (state = "", action) => {
    const { type, payload } = action;
    switch (type) {
        case DISPLAY_MESSAGE:
            return payload;
        case CLEAR_DISPLAY_MESSAGE:
            return "";
        default:
            return state;
    }
};


export const authToken = (state = "", action) => {
    const { type, payload } = action;
    switch (type) {
        case SAVE_AUTH_TOKEN:
            return payload;
        case DELETE_AUTH_TOKEN:
            return "";
        default:
            return state;
    }
};
