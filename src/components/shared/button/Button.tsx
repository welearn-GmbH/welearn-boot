import classNames from 'classnames';
import {FC} from 'react';
import styles from './Button.module.css';

const Button: FC<
    React.DetailedHTMLProps<
        React.ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    >
> = ({children, className, ...rest}) => {
    return (
        <button className={classNames(styles.button, className)} {...rest}>
            {children}
        </button>
    );
};

export default Button;
