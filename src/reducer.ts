import * as action from './actionTypes';

//TODO define store class, and action class

const reducer = (state: any, action: any) => {
    if (state === undefined) {
        const d: Date = new Date();

        state = {
            DisplayName: "Fill In Event Name",
            Year: d.getFullYear(),
            Month: d.getMonth() + 1,
            Date: d.getDate(),
            Hour: d.getHours(),
            Minute: d.getMinutes(),
            EventDate: new Date(),
            EventAllDay: false
        }
    }

    //TODO check capitalization on properties
    //TODO unpluralize actions
    switch (action.type) {
        case action.UPDATE_DISPLAYNAME:
            return {...state, DisplayName: action.payload.displayName}
        case action.UPDATE_YEAR:
            return { ...state, Year: action.payload.Year };
        case action.UPDATE_MONTH:
            return { ...state, Month: action.payload.month };
        case action.UPDATE_DATE:
            return { ...state, Date: action.payload.date };
        case action.UPDATE_HOUR:
            return { ...state, hour: action.payload.hour };
        case action.UPDATE_MINUTE:
            return { ...state, minute: action.payload.minute };
        default:
            return state;
    }
}

export default reducer;