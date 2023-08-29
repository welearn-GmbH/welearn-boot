import styles from "./PageHeader.module.scss"
import headerImage from "../../assets/images/Group 228.png"

interface Props {
    header: string
    description: string
}

const PageHeader = ({ description, header }: Props) => {
    return (
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <div className={styles.header}>{header}</div>
                <div className={styles.description}>{description}</div>
            </div>
            <div className={styles.image}>
                <img src={headerImage} alt="hallo" style={{ minWidth: "100%", height: "100%" }} />
            </div>
        </div>
    )
}

export default PageHeader