import SignInButton from '@/components/signin-button'
import SignOutButton from '@/components/signout-button'
import UserInfo from '@/components/user-info'
import React from 'react'
import SignInButtonClient from '@/components/client/signin-button'
import SignOutButtonClient from '@/components/client/signout-button'

export default function page() {
  return (
    <div>
      <UserInfo />
      <SignInButton />
      <SignOutButton />
      <hr />
      <SignInButtonClient /> 
      <SignOutButtonClient />
    </div>
  )
}
