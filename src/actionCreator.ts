import * as action from './actionTypes';

export function ChangeDetails(property, value) {
    let type = "";
    switch (property) {
        case "YEAR":
            type = action.UPDATE_YEAR;
            break;
        case "MONTH":
            type = action.UPDATE_MONTH;
            break;
        case "DATE":
            type = action.UPDATE_DATE;
            break;
        case "HOUR":
            type = action.UPDATE_HOUR;
            break;
        case "MINUTE":
            type = action.UPDATE_MINUTE;
            break;
        case "DISPLAY":
            type = action.UPDATE_DISPLAYNAME;
            break;
        default:
            type = action.NONE;
            value = undefined;
    }

    return {
        type: type,
        payload: {
            value: value
        }
    }
}