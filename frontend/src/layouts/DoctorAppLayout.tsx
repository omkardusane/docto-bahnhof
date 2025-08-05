import { Outlet } from 'react-router'
export default function UserAppLayout() {
    return (
        <div>
            Header of doctor app: manage self profile, manage clinics, manage appointments
            <Outlet />
        </div>
    )
}