import { Navbar } from "./navbar"
import { ProfileCard } from "./leftCards"

export const Home = () => {
  return (
    <main className="h-screen bg-[#f1f2f3] relative">
      <Navbar />
      <section className="flex items-center justify-between px-2 mt-4 gap-x-3 gap-y-1 lg:px-6 lg:py-2">
        <aside className="items-center justify-center flex-1 hidden h-full ml-8 lg:flex gap-x-2">
          <ProfileCard />
        </aside>
        <main className="flex items-center justify-center grow-[2] shrink h-full"></main>
        <section className="items-center justify-center flex-1 hidden h-full px-4 md:flex gap-x-3 "></section>
      </section>
    </main>
  )
}