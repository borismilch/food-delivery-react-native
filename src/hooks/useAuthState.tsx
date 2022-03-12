import React, { useEffect } from 'react'
import { auth } from '../lib/firebase'
import { useState } from 'react'
import { IUser } from '../models'
import { onAuthStateChanged, User } from 'firebase/auth'

interface returnType {
  user: User | null,
  userLoading: boolean,
  signout: () => Promise<void>
}

const useAuthState = (): returnType => {
  const [loading, setLoading] = useState<boolean>(false)
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const listener = onAuthStateChanged(
      auth,
      async (user) => {
        setUser(user);
      },
    );

    return () => {
      listener();
    };
  }, [auth])

  return { user, userLoading: loading, signout: auth.signOut }
}

export default useAuthState