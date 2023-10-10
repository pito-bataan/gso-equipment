import NavMenu from "@/components/auth/nav-menu"

export default function AuthedLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      <NavMenu/>
      {children}
    </section>
  )
}