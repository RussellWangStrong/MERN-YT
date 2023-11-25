import {useSelector} from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

export default function PrivateRouter() {
// todo ： how to comprehend it？ 
    const {currentUser} = useSelector((state) => state.user)

  return currentUser ? <Outlet/> : <Navigate to='/sign-in'/>
}
