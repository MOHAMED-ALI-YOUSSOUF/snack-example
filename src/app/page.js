"use client"

import { Button } from "@/components/ui/button";
import { SignInButton, SignUpButton, useAuth, UserButton, useUser } from "@clerk/nextjs";
import { HomeIcon, ShoppingBag, ShoppingCart } from "lucide-react";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link";

export default function Home() {
  const {user, isSignedIn}=useUser()
  const { signOut } = useAuth();
  return (
    <div className="flex justify-between p-16">
      <h1>Snack Attack</h1>
     
     
{
  isSignedIn ? <div className="flex gap-5 items-center">
  <div className="flex gap-2 items-center relative mr-2">
    <ShoppingCart />
    <span className="bg-slate-200 p-1 text-sm rounded-full absolute top-0 -right-2 transform translate-x-1/2 -translate-y-1/2">0</span>
  </div>
  {/* <UserButton  /> */}
  <UserButton afterSignOutUrl="/">
  <UserButton.UserProfilePage 
        label="My Orders" 
        labelIcon={<ShoppingBag className='h-4 w-4'/>} 
        url="my-orders">
          <div>
            <h1>Custom orders Page</h1>
            <p>This is the custom terms page</p>
          </div>
        </UserButton.UserProfilePage>
        <UserButton.UserProfileLink label="Homepage" url="/" labelIcon={<HomeIcon className='h-4 w-4 '/>} />
  </UserButton>
 
  {/* <DropdownMenu>
  <DropdownMenuTrigger> <Image src={user?.imageUrl} alt="User" width={35} height={35} className="rounded-full" /></DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
  <Link href="/user">
 <DropdownMenuItem>Profile</DropdownMenuItem>  </Link> 
    <DropdownMenuItem>My orders</DropdownMenuItem>
    <DropdownMenuItem onClick={() => signOut()}>Logout</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu> */}

</div> 
    
  
  : <div className="flex gap-5">
      <SignInButton mode="modal">
    <Button variant>Login</Button>
  </SignInButton>
  <SignUpButton mode="modal">
    <Button>    Sign-up</Button>
</SignUpButton>
      </div>
}
    
    </div>
  );
}
