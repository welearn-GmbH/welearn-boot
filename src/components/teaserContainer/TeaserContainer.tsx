import { CourseContent } from "../../interface/CourseContent"
import CourseTeaser from "../courseTeaser/CourseTeaser"
import styles from "./TeaserContainer.module.scss"

interface Props {
    teaserContents: CourseContent[]
    onClick?: () => void
}

const TeaserContainer = ({ teaserContents, onClick }: Props) => {
    return (
        <div className={styles.container}>
            {teaserContents && teaserContents.map((teaser, key) => {
                return <CourseTeaser key={key} onClick={onClick}
                    trainer={`${teaser.courseTrainerList[0].trainerFirstName} ${teaser.courseTrainerList[0].trainerLastName}`}
                    header={teaser.courseTitle}
                    img={teaser.courseImage}
                    alt={teaser.courseImageAlt}
                    isFavorite={key % 2 === 0} // TODO
                    isSuperCourse={teaser.hasModules} />
            })}
        </div>
    )
}

export default TeaserContainer