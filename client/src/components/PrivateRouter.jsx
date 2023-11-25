import {useSelector} from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

export default function PrivateRouter() {

    const {currentUser} = useSelector((state) => state.user)
// Outlet:used when render the subRouter
  return currentUser ? <Outlet/> : <Navigate to='/sign-in'/>
}
