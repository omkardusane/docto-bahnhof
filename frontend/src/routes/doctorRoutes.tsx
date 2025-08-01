// routes/publicRoutes.tsx
import { Route } from 'react-router'
import UserAppLayout from '../layouts/UserAppLayout'
import DoctorAppHome from '../features/doctor/pages/DoctorAppHome'


const DoctorRoutes = (
  <Route path="/doctor" element={<UserAppLayout />}>
    <Route index element={<DoctorAppHome />} />
    {/* <Route path="clinics" element={<ClinicsManagement />} /> */}
  </Route>
)

export default DoctorRoutes