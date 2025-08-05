import { Outlet } from 'react-router'
export default function UserAppLayout() {
  return (
    <div>
      Header of user app: find doctors, manage appointments
      <Outlet />
    </div>
  )
}