import "./globals.css"

export const metadata = {
  title: "EventWebby Creation Website",
  description: "EventWebby Creation builds custom event websites with RSVP and guest check-in. No printing, no spreadsheets — just a smooth, stress-free event experience."
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
