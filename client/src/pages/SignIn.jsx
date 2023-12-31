import {Link,useNavigate} from 'react-router-dom'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { signInStart,signInSuccess,signInFailure } from '../redux/user/userSlice';
import OAuth from '../components/OAuth';

export default function SignIn() {
  const [formData,setFormData] = useState({});
  const {loading , error} = useSelector((state)=>state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) =>{
    setFormData({
      ...formData,
      [e.target.id] : e.target.value,
    })
  }
  
  const handleSubmit = async (e) =>{
    e.preventDefault();

    try {
    // set the global start loading state with redux
    dispatch(signInStart());

    const res = await fetch('/api/auth/signin',{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
      },
      body:JSON.stringify(formData),
    });
    const data = await res.json();

    if(data.success === false){
      // set the global failure loading state with redux
      dispatch(signInFailure(data.message));
      return;
    }
    // set the global success loading state with redux
    dispatch(signInSuccess(data))
    navigate('/')

    } catch (error) {
      dispatch(signInFailure(data.message));
    }
  };


  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign In</h1>

      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>

        <input type="email" placeholder='email' 
        className='border p-3 rounded-lg' id='email' onChange={handleChange}/>

        <input type="password" placeholder='password' 
        className='border p-3 rounded-lg' id='password' onChange={handleChange}/>

        <button disabled={loading} className='bg-slate-700 text-white p-3 rounded-lg 
        uppercase hover:opacity-95 disabled:opacity-80'>
          {loading ? 'loading...' : 'Sign In'}
        </button>
        <OAuth/>
      </form>

      <div className='flex gap-2 mt-5'>
        <p>Don't have an account?</p>
        <Link to={"/sign-up"}>
          <span className='text-blue-700'>Sign up</span>
        </Link>
      </div>
      {error && <p className='text-red-500 mt-5'>{error}</p>}
    </div>
  )
}
