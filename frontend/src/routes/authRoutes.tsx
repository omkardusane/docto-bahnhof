// routes/authRoutes.tsx
import { Route } from 'react-router'
import AuthLayout from '../layouts/AuthLayout'
import Login from '../features/auth/pages/Login'
import Register from '../features/auth/pages/Register'
// import DoctorRegister from '../pages/auth/DoctorRegister'
// import ForgotPassword from '../pages/auth/ForgotPassword'

const AuthRoutes = (
  <Route path="/auth" element={<AuthLayout />}>
    <Route index element={<Login />} />
    <Route path="register" element={<Register />} />
    {/* <Route path="register/doctor" element={<DoctorRegister />} /> */}
    {/* <Route path="forgot-password" element={<ForgotPassword />} /> */}
  </Route>
)

export default AuthRoutes