// routes/publicRoutes.tsx
import { Route } from 'react-router'
import UserAppLayout from '../layouts/UserAppLayout'
import UserHome from '../features/user/pages/UserHome'



const UserRoutes = (
  <Route path="/app" element={<UserAppLayout />}>
    <Route index element={<UserHome />} />
    {/* <Route path="about" element={<AboutPage />} /> */}
  </Route>
)

export default UserRoutes