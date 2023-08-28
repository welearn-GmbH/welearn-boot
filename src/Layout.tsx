import {FC} from 'react';
import {Outlet} from 'react-router-dom';
import styles from './Layout.module.css';
import Footer from './components/footer/Footer';
import Nav from './components/nav/Nav';

export const Layout: FC = () => {
    return (
        <>
            <Nav />
            <main className={styles.main}>
                <Outlet />
            </main>
            <Footer />
        </>
    );
};
