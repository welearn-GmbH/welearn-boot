import {FC} from 'react';
import menuLogo from '../../../assets/images/menu.svg';
import styles from './Menu.module.css';

const Menu: FC = () => {
    return (
        <button id="menu" className={styles.menu}>
            <img src={menuLogo} alt="Menu" />
        </button>
    );
};

export default Menu;
