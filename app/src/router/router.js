import { Route, Routes, BrowserRouter } from "react-router-dom";
import About from "../about/about";
import App from "../App";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={<App />}
                />
                <Route
                    path="/about"
                    element={<About />}
                />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
