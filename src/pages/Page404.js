import React from 'react';
import {useLocation} from 'react-router-dom'

function Page404(props) {
    let location = useLocation();
    return (
        <div>
            <h1 className='text-center text-4xl mt-6'>No match for <code>{location.pathname}</code></h1>
        </div>
    );
}

export default Page404;