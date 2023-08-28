import {FC} from 'react';
import styles from './LinkSocial.module.css';

interface ILinkSocialProps {
    image: string;
}

const LinkSocial: FC<ILinkSocialProps> = ({image}) => {
    return (
        <a href="" className={styles.social}>
            <img src={image} alt="social" className={styles.image} />
        </a>
    );
};

export default LinkSocial;
