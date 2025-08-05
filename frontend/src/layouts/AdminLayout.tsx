import { Outlet } from 'react-router'
export default function AdminAppLayout() {
  return (
    <div>
      Header: Manage users, manage doctors, manage clinics, view appointments,
      <Outlet />
    </div>
  )
}