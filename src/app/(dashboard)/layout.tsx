import "../globals.css"
import "../../styles/index.css"
import HeaderAdmin from "@/components/Admin/headerAdmin/headerAdmin"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <HeaderAdmin />
        {children}
      </body>
    </html>
  )
}
