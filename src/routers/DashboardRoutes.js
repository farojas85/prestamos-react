import { Routes, Route } from 'react-router-dom';

import  { Home } from '../components/views/Home'
export const DashboardRoutes = () => {
    return (
        <>
            DashboardRoutes
            <div className="container">
                <Routes>
                    <Route path ="/" element={<Home />}></Route>
                </Routes>
            </div>
        </>
    )
}