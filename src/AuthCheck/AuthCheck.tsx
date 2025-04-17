import { ReactNode } from "react";
import { Navigate, useLocation } from "react-router";

type AuthCheckProps = { children: ReactNode }
export const AuthCheck = (props: AuthCheckProps) => {
  const isAuthenticate = true
  const location = useLocation()
  if (!isAuthenticate) {
    return <Navigate to='/auth/login' state={
      {
        from: location
      }
    } />
  }
  return props.children
}
