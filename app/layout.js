import "./globals.css"

export const metadata = {
  title: "EventFlow Studio Website",
  description: "EventFlow Studio builds custom event websites with RSVP and guest check-in. No printing, no spreadsheets — just a smooth, stress-free event experience."
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        {children}
      </body>
    </html>
  )
}
