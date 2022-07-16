import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Nav from '../components/Nav'
import AllGuests from '../views/admin/AllGuests'
import Dashboard from '../views/admin/Dashboard'
import Login from '../views/admin/Login'
import TransportList from '../views/admin/TransportList'
import Home from '../views/home'
import PrivateRoute from './utils'

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
                <Route
                    path='/confirmados'
                    element={
                        <PrivateRoute>
                            <AllGuests />
                        </PrivateRoute>
                    }
                />
                <Route
                    path='/transporte'
                    element={
                        <PrivateRoute>
                            <TransportList />
                        </PrivateRoute>
                    }
                />
            </Routes>
        </Router>
    )
}
