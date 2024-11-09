"use client"
import { UserButton, UserProfile } from '@clerk/nextjs'
import {  DotIcon, HomeIcon, ShoppingBag } from 'lucide-react'
import React from 'react'

const User = () => {
  return (
    <div className='flex justify-center items-center mt-5'>
      
     <UserProfile>
     <UserButton.UserProfilePage 
        label="My Orders" 
        labelIcon={<ShoppingBag className='h-4 w-4'/>} 
        url="my-orders">
          <div>
            <h1>Custom order Page</h1>
            <p>This is the custom terms page</p>
          </div>
        </UserButton.UserProfilePage>
   
           {/* <UserButton> */}
        <UserButton.UserProfileLink label="Homepage" url="/" labelIcon={<HomeIcon className='h-4 w-4 '/>} />
      {/* </UserButton> */}
      
 
       
        
        </UserProfile> 
    </div>
  )
}

export default User
