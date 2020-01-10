import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {IAppStore} from "../../../../neko-1-main/main-2-bll/store";
import {UsersAPI} from "../users-3-dal/UsersAPI";
import {setUsers, IUsersActions} from "./bll-2-redux/usersActions";

type Return = void;
type ExtraArgument = {};
type IGetStore = () => IAppStore;

export const getUsers = (): ThunkAction<Return, IAppStore, ExtraArgument, IUsersActions> =>
    async (dispatch: ThunkDispatch<IAppStore, ExtraArgument, IUsersActions>, getStore: IGetStore) => {

        // nekoLoading(dispatch, true);

        try {
            const data = await UsersAPI.getUsers();
            if (data.error) {
                // nekoError(dispatch, data.error);

                console.log('Neko Get Users Error!', data.error);
            } else {

                dispatch(setUsers(data.users));
                // nekoSuccess(dispatch, true);

                console.log('Neko Get Users Success!', data.users)
            }
        } catch (e) {
            // nekoError(dispatch, e.response.data.error);

            console.log('Neko Get Users Error!', {...e})
        }
    };
