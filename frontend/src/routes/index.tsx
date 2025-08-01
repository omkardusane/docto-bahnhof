// routes/index.tsx
import { Routes, Route } from 'react-router'
import PublicRoutes from './publicRoutes'
import AuthRoutes from './authRoutes'
import AdminRoutes from './adminRoutes'
import DoctorRoutes from './doctorRoutes'
import UserRoutes from './userRoutes'

export default function AppRoutes() {
  return (
    <Routes>
      {PublicRoutes}
      {AuthRoutes}
      {AdminRoutes}
      {DoctorRoutes}
      {UserRoutes}
    </Routes>
  )
}