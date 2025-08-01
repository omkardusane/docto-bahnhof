// routes/publicRoutes.tsx
import { Route } from 'react-router'
import PublicLayout from '../layouts/PublicLayout'
import HomePage from '../features/public/HomePage'


const PublicRoutes = (
  <Route path="/" element={<PublicLayout />}>
    <Route index element={<HomePage />} />
  </Route>
)

export default PublicRoutes