import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Nav from '../components/Nav'
import Home from '../views/home'
import PrivateRoute from './utils'
import Dashboard from '../views/admin/Dashboard'
import Login from '../views/admin/Login'
import AllGuests from '../views/admin/AllGuests'
import AdminNav from '../components/AdminNav'
import TransportList from '../views/admin/TransportList'

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
                            <AdminNav />
                            <Dashboard />
                        </PrivateRoute>
                    }
                />
                <Route
                    path='/confirmados'
                    element={
                        <PrivateRoute>
                            <AdminNav />
                            <AllGuests />
                        </PrivateRoute>
                    }
                />
                <Route
                    path='/transporte'
                    element={
                        <PrivateRoute>
                            <AdminNav />
                            <TransportList />
                        </PrivateRoute>
                    }
                />
            </Routes>
        </Router>
    )
}
