import {FC} from 'react';
import {Link} from 'react-router-dom';
import wedogLogo from '../../assets/images/wedog.svg';
import Button from '../shared/button/Button';
import styles from './Nav.module.css';
import Menu from './menu/Menu';

const Nav: FC = () => {
    return (
        <nav className={styles.nav}>
            <div className={styles.inner}>
                <img src={wedogLogo} alt="wedog logo" className={styles.logo} />
                <div className={styles.links}>
                    <Link className={styles.link} to="">
                        Kurse
                    </Link>
                    <Link className={styles.link} to="">
                        Trainer
                    </Link>
                    <Link className={styles.link} to="">
                        Gratis-Wissen
                    </Link>
                    <div className={styles.separator} />
                    <Link className={styles.link} to="">
                        Einloggen
                    </Link>
                    <Button>Jetzt kostenlos testen</Button>
                </div>

                <Menu />
            </div>
        </nav>
    );
};

export default Nav;
