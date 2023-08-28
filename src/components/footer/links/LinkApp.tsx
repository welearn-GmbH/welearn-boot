import {FC} from 'react';
import styles from './LinkApp.module.css';

interface ILinkAppProps {
    image: string;
}

const LinkApp: FC<ILinkAppProps> = ({image}) => {
    return <img src={image} alt="app" className={styles.image} />;
};

export default LinkApp;
