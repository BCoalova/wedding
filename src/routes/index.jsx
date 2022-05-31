import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Nav from '../components/Nav'
import Home from '../views/home'
import PrivateRoute from './utils'
import Dashboard from '../views/admin/Dashboard'
import Login from '../views/admin/Login'

export default function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route
                    path='/'
                    element={
                        <>
                            <Nav />
                            <Home />
                        </>
                    }
                />
                <Route path='/login' element={<Login />} />
                <Route
                    path='/admin'
                    element={
                        <PrivateRoute>
                            <Dashboard />
                        </PrivateRoute>
                    }
                />
            </Routes>
        </Router>
    )
}
