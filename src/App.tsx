import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Layout} from './Layout';
import CourseDetails from './pages/PageCourseDetails';
import Home from './pages/PageHome';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/course" element={<CourseDetails />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
