import { useAuth } from "./context/AuthContext" 

export default function App() {

  const { currentUser } = useAuth()

  return (
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
  )
}