import { createUserWithEmailAndPassword, UserCredential, updateProfile } from "firebase/auth";
import { auth, googleProvider } from "../lib/firebase";
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import { IUser } from "../models";


export default class UserService {
  static async login (email: string, password: string): Promise<UserCredential> {
    const user = signInWithEmailAndPassword(auth, email, password)
    return user
  } 

  static async register (user: IUser, password: string) {
    await createUserWithEmailAndPassword(auth, user.email, password)

    await updateProfile(auth.currentUser!, {
      photoURL: user.photoURL,
      displayName: user.displayName
    })
  }

  static async updateUser (name: string, image: string) {
    await updateProfile(auth.currentUser!, {
      photoURL: name,
      displayName: image
    })
  }

  static async signInWithGoogle () {
    await signInWithPopup(auth, googleProvider)
  }

  static createUser (name: string, email: string): IUser  {
    const user: IUser = {
      displayName: name,
      email,
      photoURL: "https://w7.pngwing.com/pngs/312/283/png-transparent-man-s-face-avatar-computer-icons-user-profile-business-user-avatar-blue-face-heroes.png",
    }

    return user
  }

  static async logout () {
    await auth.signOut()
  }
}