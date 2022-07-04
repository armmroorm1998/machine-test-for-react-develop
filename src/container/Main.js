import React from 'react';
import AppHeader from "../components/AppHeader";

function Main(props) {
    return (
        <div>
            <AppHeader/>
            <div className='md:container md:mx-auto'>
                {props.children}
            </div>
        </div>
    );
}

export default Main;