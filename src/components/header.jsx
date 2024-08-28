import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from './ui/button'
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

const Header = () => {
  return (
    <>
    <nav className=' py-4 flex justify-between items-center'>
      <Link to="/">
       <img src="/logo.png" className='h-20'/>
      </Link>
     <div className='flex gap-8'>
     <SignedOut>
        <Button variant="outline">Login</Button>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
     </div>
       
    </nav>
    </>
  )
}

export default Header