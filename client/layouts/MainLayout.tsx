import Navbar from '@/components/Navbar';
import {FC} from 'react';
import classes from '@/styles/MainLayout.module.scss'
const MainLayout: FC<any> = ({children}) => {
    return (
        <div className={classes.wrapper}>
            <Navbar/>
            {children}
        </div>
    );
};

export default MainLayout;