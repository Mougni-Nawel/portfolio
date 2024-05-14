import './globals.css'
import Header from '../components/Header'
import { ToastContainer } from 'react-toastify'; // Import ToastContainer from react-toastify
import 'react-toastify/dist/ReactToastify.css'; // Import toast styles


export const metadata = {
  title: 'Portfolio',
  description: 'My Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <ToastContainer />
        <header>
          <Header />
          <main>{children}</main>
        </header>
      </body>
    </html>
  )
}
