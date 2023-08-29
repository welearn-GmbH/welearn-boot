import styles from "./DetailModal.module.scss"
import closeIcon from "../../assets/images/closeIcon.svg"
import trailerButton from "../../assets/images/trailerButton.svg"
import favIcon from "../../assets/images/favIcon.svg"
import { useState } from "react"

interface Props {
    onClose: () => void
}

const DetailModal = ({ onClose }: Props) => {
    const [openReadMore, setOpenReadMore] = useState<boolean>(false)

    return (
        <div className={styles.blur}>
            <div className={styles.container}>
                <div className={styles.imageContainer}>
                    <div className={styles.closePosition}>
                        <img onClick={onClose} style={{ cursor: "pointer" }} src={closeIcon} alt="Schließen" />
                    </div>
                    <div className={styles.trailerPosition}><img src={trailerButton} alt="Trailer abspielen" /></div>
                </div>
                <div className={styles.textContainer}>
                    <div className={styles.header}>Quisque feugiat id felis nec sodales in massa nunc mollis
                        <div className={styles.favButton}>
                            <img src={favIcon} alt="Favorit" style={{ width: 28, height: 28 }} />
                        </div>
                    </div>
                    <div className={styles.descriptionHeader}>Kurzbeschreibung</div>
                    {openReadMore ?
                        <div className={styles.description}>Leckerlis in der Hundeerziehung: Wann sie helfen und wann nicht
                            <div>Leckerlis sind eine gute Sache in der Hundeerziehung. Gerade Welpen helfen sie, motiviert zu bleiben. Spätestens ab der Pubertät werden dem Hund aber andere Dinge wichtiger. Mit einem Keks wedeln hilft da oft nicht weiter. Tiertrainer Michael Grewe zeigt, wie die Hundeerziehung auch ohne Leckerli klappt und der Hund allein auf die Stimme und Körpersprache des Menschen reagiert.</div></div>
                        :
                        <div className={styles.description} style={{ maxHeight: 100, textOverflow: "ellipsis" }}>
                            <div>Leckerlis in der Hundeerziehung: Wann sie helfen und wann nicht
                                <div>
                                    Leckerlis sind eine gute Sache in der Hundeerziehung. Gerade Welpen helfen sie, motiviert zu bleiben. Spätestens ab der Pubertät werden dem Hund aber andere Dinge wichtiger. Mit einem Keks wedeln hilft da oft nicht weiter. Tiertrainer Michael Grewe zeigt, wie die Hundeerziehung auch ohne Leckerli klappt und der Hund allein auf die Stimme und Körpersprache des Menschen reagiert.</div>
                            </div>
                            <div className={styles.readMore} onClick={() => setOpenReadMore(true)}>Mehr lesen</div>
                        </div>
                    }
                    <div className={styles.bottomContainer}>
                        <div className={styles.trainerContainer}>
                            <div className={styles.trainerHeader}>Trainer</div>
                            <div className={styles.trainerList}>
                                <div className={styles.trainerImg} />
                                <div>Peter Peters</div>
                            </div>
                            <div className={styles.trainerList}>
                                <div className={styles.trainerImg} />
                                <div>Peter Peters</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailModal