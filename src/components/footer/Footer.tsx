import {FC} from 'react';
import app1 from '../../assets/images/app1.svg';
import app2 from '../../assets/images/app2.svg';
import social1 from '../../assets/images/social1.svg';
import social2 from '../../assets/images/social2.svg';
import social3 from '../../assets/images/social3.svg';
import social4 from '../../assets/images/social4.svg';
import wedog from '../../assets/images/wedog-full.svg';
import styles from './Footer.module.css';
import LinkApp from './links/LinkApp';
import LinkSocial from './links/LinkSocial';

const Footer: FC = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.inner}>
                <div className={styles.group}>
                    <div className={styles.flex}>
                        <h4>Unternehmen</h4>
                        <a href="">Über uns</a>
                        <a href="">Impressum</a>
                        <a href="">Jobs</a>
                    </div>
                    <div className={styles.flex}>
                        <h4>Nützliche Links</h4>
                        <a href="">Hilfe</a>
                        <a href="">Gutscheine</a>
                        <a href="">Newsletter</a>
                    </div>
                </div>
                <div className={styles.group}>
                    <div className={styles.flex}>
                        <h4>Social</h4>
                        <LinkSocial image={social1} />
                        <LinkSocial image={social2} />
                        <LinkSocial image={social3} />
                        <LinkSocial image={social4} />
                    </div>
                    <div className={styles.flex}>
                        <h4>Download</h4>
                        <LinkApp image={app1} />
                        <LinkApp image={app2} />
                    </div>
                    <img src={wedog} alt="logo" className={styles.logo} />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
