// routes/publicRoutes.tsx
import { Route } from 'react-router'
import DoctorAppLayout from '../layouts/DoctorAppLayout'
import DoctorAppHome from '../features/doctor/pages/DoctorAppHome'


const DoctorRoutes = (
  <Route path="/doctor" element={<DoctorAppLayout />}>
    <Route index element={<DoctorAppHome />} />
    {/* <Route path="clinics" element={<ClinicsManagement />} /> */}
  </Route>
)

export default DoctorRoutes