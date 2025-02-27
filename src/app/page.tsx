'use client'
import './globals.scss'
import { SideBar } from '@/widgets/SideBar'
import { HomePage } from './pages/Home'

export default function Home() {
  return (
    <>
      <div className="h-screen flex">
        <SideBar />
        <HomePage />
      </div>
    </>
  )
}
