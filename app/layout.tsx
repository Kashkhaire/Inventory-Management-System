import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import Sidebar from "@/components/Sidebar"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "InventoryPro",
  description: "Inventory Management Dashboard",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div className="h-screen flex overflow-hidden">

          {/* Sidebar */}
          <Sidebar />

          {/* Main content */}
          <main className="flex-1 overflow-y-auto bg-background p-6 lg:p-8">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
