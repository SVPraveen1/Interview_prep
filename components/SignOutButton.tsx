'use client';

import { signOut } from '@/lib/actions/auth.action';
import { signOut as firebaseSignOut } from 'firebase/auth';
import { auth } from '@/firebase/client';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const SignOutButton = () => {
  const router = useRouter();

  const handleSignOut = async () => {
    try {
      // Sign out from Firebase client
      await firebaseSignOut(auth);
      
      // Clear the session cookie on the server
      const result = await signOut();
      
      if (result.success) {
        toast.success(result.message);
        router.push('/sign-in');
        router.refresh();
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      console.error('Sign out error:', error);
      toast.error('Failed to sign out');
    }
  };

  return (
    <Button 
      onClick={handleSignOut}
      variant="outline"
      className="ml-auto"
    >
      Sign Out
    </Button>
  );
};

export default SignOutButton;
