import { FC, useEffect, useState } from 'react';
import PageHeader from "../components/pageHeader/PageHeader"
import TeaserContainer from '../components/teaserContainer/TeaserContainer';
import storeContext from '../storeContext/storeContext';
import { CourseContent } from '../interface/CourseContent';
import DetailModal from "../components/detailModal/DetailModal"

const PageHome: FC = () => {
    const [courses, setCourses] = useState<CourseContent[]>()
    const [openModal, setOpenModal] = useState<boolean>(false)

    useEffect(() => {
        (async () => {
            setCourses(await storeContext())
        })()
    }, [])

    return (
        <div>{openModal && <DetailModal onClose={() => { setOpenModal(false) }} />}

            <PageHeader
                description='Jeder Kurs ist mit ausgewählten Experten auf ihrem Gebiet erstellt mit dem Ziel Probleme und Herausforderungen zu lösen.'
                header='Gemacht, um dir zu helfen'
            />
            {courses &&
                <TeaserContainer onClick={() => {
                    setOpenModal(true)

                }} teaserContents={courses} />
            }

        </div>
    );
};

export default PageHome;
