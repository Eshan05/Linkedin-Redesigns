import { Navbar } from "./navbar"
import { ProfileCard } from "./leftCards"
import Posts from "./posts"
import { RightCards } from "./rightCards"

export const Home = () => {
  return (
    <main className="min-h-screen bg-[#f1f2f3] relative">
      <Navbar />
      <section className="flex items-center justify-between px-2 mt-4 gap-y-1 lg:px-6 lg:py-2">
        <aside className="items-center justify-center flex-1 hidden h-full mx-8 lg:flex gap-x-2">
          <ProfileCard />
        </aside>
        <main className="flex items-center justify-center flex-[2] shrink h-full">
          <Posts />
        </main>
        <section className="items-center justify-center flex-1 hidden px-4 ;g:mr-8 mr-4 md:flex">
          <RightCards />
        </section>
      </section>
    </main>
  )
}