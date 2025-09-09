"use client"
import React from 'react'
import { SignedIn, SignedOut } from '@clerk/clerk-react'
import { SignOutButton, SignInButton } from '@clerk/nextjs'

const HomePage = () => {
  return (
    <div> Home
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <SignOutButton />
      </SignedIn>
    </div>
  )
}

export default HomePage