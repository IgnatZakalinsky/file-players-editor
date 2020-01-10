import React, {useEffect} from 'react';
import Users from "./Users";
import {useDispatch, useSelector} from "react-redux";
import {getUsers} from "../users-2-bll/usersThunks";
import {IAppStore} from "../../../../neko-1-main/main-2-bll/store";

const UsersContainer: React.FC = () => {
    const dispatch = useDispatch();

    const {users} = useSelector((store: IAppStore) => store.users);

    useEffect(() => {
        dispatch(getUsers());
    }, []);

    console.log('render UsersContainer');
    return (
        <Users
            users={users}
        />
    );
};

export default UsersContainer;
