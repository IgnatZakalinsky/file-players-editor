import React from 'react';

interface IUsersProps {

}

const Users: React.FC<IUsersProps> = (
    {

    }
) => {

    console.log('render Users');
    return (
        <>
            users

            {/*{loading*/}
            {/*    ? <div style={{color: 'orange'}}>loading...</div>*/}
            {/*    : error*/}
            {/*        ? <div style={{color: 'red'}}>{error}</div>*/}
            {/*        : name*/}
            {/*            ? <div style={{color: 'lime'}}>{name}</div>*/}
            {/*            : <div><br/></div>*/}
            {/*}*/}
        </>
    );
};

export default Users;
