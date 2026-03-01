import { signOut } from 'firebase/auth';
import React from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Header() {
  const navigate = useNavigate();
  const user = useSelector((state)=>state.user);
  // console.log("at header page user",user);
  

function handleSignout(){
  console.log("clicked");
  signOut(auth).then(() => {
    console.log("signed out");
    navigate("/") 
  })
}

  return (
    <div className='absolute w-full bg-gradient-to-b from-black px-8 py-2 z-20 flex items-center justify-between'>
        <img className='w-44  '
         src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2026-02-12/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="" 
         />
         {user && <div className='flex gap-2'>
           <img src={user?.photoURL} alt="User Profile"  className='w-12 h-12  rounded-full'/>
            <button className='px-4 py-2 bg-red-700 rounded-lg text-amber-50 relative z-20' onClick={handleSignout}>Sign out</button>
         </div>}

    </div>
  )
}
