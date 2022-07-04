import React from 'react';

function AppGrid(props) {
    const cssGrid = `grid grid-cols-1 md:grid-cols-${props.grid} gap-4 m-6`
    return (
        <>
            <div className={cssGrid}>
                {props.children}
            </div>
        </>
    );
}

export default AppGrid;