import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {IAppStore} from "../../../../neko-1-main/main-2-bll/store";
import {useBooleanSelector} from "../../../features-3-common/common-1-boolean-reducer/useBooleanSelectors";
import PrivateChats from "./PrivateChats";

const PrivateChatContainer: React.FC = () => {
    // const [loading, error, success] = useBooleanSelector(USERS_ACTION_NAMES);
    // const {users} = useSelector((store: IAppStore) => store.users);
    // const dispatch = useDispatch();
    //
    // useEffect(() => {
    //     dispatch(getUsers());
    // }, []);
    //
    // const startPrivateChatCallback = (userId: string) => () => dispatch(startPrivateChat(userId));

    console.log('render PrivateChatContainer');
    return (
        <PrivateChats
            // loading={loading.value} error={error.data.message || ''}
            //
            // users={users}
            // startPrivateChatCallback={startPrivateChatCallback}
        />
    );
};

export default PrivateChatContainer;
