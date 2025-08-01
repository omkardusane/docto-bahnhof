// routes/adminRoutes.tsx
import { Route } from 'react-router'
import AdminRoute from '../components/guards/AdminRoute'
import AdminLayout from '../layouts/AdminLayout'

import AdminLogin from '../features/admin/pages/AdminLogin'
import AdminDashboard from '../features/admin/pages/AdminDashboard'
import AdminDoctors from '../features/admin/pages/AdminDoctors'

const AdminRoutes = (
  <>
    <Route path="/admin/auth/login" element={<AdminLogin />} />
    <Route path="/admin" element={
      <AdminRoute>
        <AdminLayout />
      </AdminRoute>
    }>
      <Route index element={<AdminDashboard />} />
      <Route path="doctors" element={<AdminDoctors />} />
    </Route>
  </>
)

export default AdminRoutes