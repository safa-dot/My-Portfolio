import './layout.css';

import React from 'react';
import Sidebar from '../Sidebar/Sidebar';



function Layout(props) {
    return (
        <>
            <Sidebar />
            <main  >
                {props.children}
            </main>
        </>
    )
}

export default Layout;
