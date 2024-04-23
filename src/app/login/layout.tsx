import React from "react"

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html>
      <body>
        <div>
          <h1>Layout</h1>
          {children}
        </div>
      </body>
    </html>
  )
}
