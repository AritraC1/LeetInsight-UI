import { Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import PrivacyPage from "../pages/PrivacyPage";
import HomePage from "../pages/HomePage";

function AllRoutes() {
    return (
        <>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<HomePage/>} />
                <Route path="privacy" element={<PrivacyPage/>} />
            </Route>
        </Routes>
        </>
    )
}

export default AllRoutes