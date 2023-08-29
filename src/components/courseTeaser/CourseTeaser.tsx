import styles from "./CourseTeaser.module.scss"
import favIcon from "../../assets/images/favIcon.svg"
import activeFavIcon from "../../assets/images/activeFavIcon.svg"
import superCourse from "../../assets/images/superCourse.svg"

interface Props {
    trainer: string
    isFavorite?: boolean
    header: string
    img: string
    isSuperCourse?: boolean
    onClick?: () => void
    onClickFav?: () => void
    alt?: string
}

const CourseTeaser = ({ trainer, isFavorite, header, img, isSuperCourse, onClick, alt, onClickFav }: Props) => {
    return (<div className={styles.container} onClick={onClick}>
        {isSuperCourse && <div className={styles.superCourse}><img src={superCourse} alt="Super" /></div>}
        <div className={styles.img}>
            <img src={img} alt={alt} className={styles.image} />
        </div>
        <div className={styles.textContainer}>
            <div className={styles.header}>{header}</div>
            <div className={styles.bottomLine}>
                <div className={styles.trainer}>{trainer}</div>
                <div className={styles.favorite} onClick={onClickFav}><img src={isFavorite ? activeFavIcon : favIcon} alt="Fav" /></div>
            </div>
        </div>
    </div>)
}

export default CourseTeaser