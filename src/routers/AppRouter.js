import { Routes, Route, BrowserRouter } from 'react-router-dom';

import { LoginView } from '../components/views/LoginView'
import { DashboardRoutes } from './DashboardRoutes';



export const AppRouter = () => {
    return (
        <BrowserRouter>            
            <Routes>                
                <Route path="/login" element={<LoginView />} />
                <Route path="/*" element={ <DashboardRoutes />  } />
            </Routes>
        </BrowserRouter>
    )
}