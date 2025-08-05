// import { Outlet } from 'react-router'
import './RootLayout.css'; // Import the CSS file
import Header from '../components/layout/Header'

export default function RootLayout(
  // { children }: { children: React.ReactNode[] }
  props: any
) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {props.children}
        {/* <Outlet /> */}
      </main>
    </div>
  )
}