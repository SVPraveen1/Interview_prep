import { ReactNode } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { redirect } from 'next/navigation'
import { getCurrentUser, isAuthenticated } from '@/lib/actions/auth.action'
import SignOutButton from '@/components/SignOutButton'

const RootLayout = async ({children} : {children: ReactNode}) => {
  const isUserAuthenticated = await isAuthenticated();
  if(!isUserAuthenticated) redirect('/sign-in');
  
  const user = await getCurrentUser();
  
  return (
    <div className='root-layout'>
      
      <nav>
        <Link href="/" className='flex items-center gap-3'>
          <Image src = "/logo.svg" alt = "logo" height = {32} width ={38} />
          <h2 className='text-primary-100'>InterviewX</h2>
        </Link>
        <div className='flex items-center gap-4'>
          {user && <span className='text-light-100'>Welcome,<span className='pl-2 capitalize'> {user.name}</span></span>}
          <SignOutButton />
        </div>       
      </nav>
      
      {children}
    </div>
  )
}

export default RootLayout