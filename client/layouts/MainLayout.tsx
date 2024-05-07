import Navbar from '@/components/Navbar';
import React from 'react';

const MainLayout: React.FC<any> = ({children}) => {
    return (
        <>
            <Navbar/>
            {children}
        </>
    );
};

export default MainLayout;