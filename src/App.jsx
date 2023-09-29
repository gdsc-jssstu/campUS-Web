import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth"
import { db } from "./firebase/firebase"

export default function App() {
  return (
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
  )
}