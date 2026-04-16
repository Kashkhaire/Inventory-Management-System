import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import ConditionalSidebar from "@/components/ConditionalSidebar"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "TrackPoint",
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

          {/* Sidebar - hidden on login page */}
          <ConditionalSidebar />

          {/* Main content */}
          <main className="flex-1 overflow-y-auto bg-background p-6 lg:p-8">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}