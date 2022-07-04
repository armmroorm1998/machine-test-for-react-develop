import React from 'react';
import AppHeaderAdmin from "../components/AppHeaderAdmin";

function MainAdmin(props) {
    return (
        <div>
            <AppHeaderAdmin/>
            <div className='md:container md:mx-auto'>
                {props.children}
            </div>
        </div>
    );
}

export default MainAdmin;