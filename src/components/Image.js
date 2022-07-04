import React from 'react';

function Image() {
    return (
        <>
            <img
                className="rounded-lg mx-auto bg-cover bg-center rounded-b-none cursor-pointer hover:scale-110 transition duration-300 ease-in-out transform"
                src="/img/logo.png"
                alt="thumbnail"
                loading="lazy"
            />
        </>
    );
}

export default Image;