import Signup from './signup/page'
import { ToastContainer } from 'react-toastify';


export default function Home() {
  return (
    <main className="">
      <Signup/>
      <ToastContainer />

    </main>
  )
}
