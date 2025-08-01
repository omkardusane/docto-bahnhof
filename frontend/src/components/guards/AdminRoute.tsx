// components/guards/AdminRoute.tsx
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router'
import type { RootState } from '../../store'

export default function AdminRoute({ children }: { children: React.ReactNode }) {
    // const { user, isAuthenticated } = useSelector((state: RootState) => state.auth)
    const isAuthenticated = true;  // temp
    const user = { role: 'admin' }; // temp
    if (!isAuthenticated || user?.role !== 'admin') {
        return <Navigate to="/admin" replace />
    }

    return <>{children}</>
}