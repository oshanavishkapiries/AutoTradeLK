import { useAuth } from '../hooks/useAuth'
import { Navigate } from '@tanstack/react-router'

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const { user } = useAuth()

  if (!user) return <Navigate to="/login" />
  return children
}

export default ProtectedRoute