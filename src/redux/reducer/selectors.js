import {createSelector} from "reselect";

/*----------------------- user --------------------------- */
const selectUser = ({user}) => user;

export const userSelector = createSelector(selectUser, (allSelectUser) => allSelectUser);
