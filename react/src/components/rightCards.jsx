import { BsInfo, BsPlusLg } from "react-icons/bs";
import { CgChevronRight } from "react-icons/cg";
// import { IoInformation } from "react-icons/io5";

export const RightCards = () => {
  return (
    <aside className="flex flex-col min-w-full">
      <section className="relative w-full p-2 my-2 ml-2 bg-white dark:bg-[#191a1b] shadow-sm rounded-xl">
        <header className="flex items-center justify-between p-2 mb-2">
          <h2 className="font-bold text-md">Add to your feed</h2>
          <span className="inline-grid w-6 font-bold bg-gray-300 rounded-full max-w-6 place-items-center aspect-square"><BsInfo className="text-xl dark:bg-[#242526]" /></span>
        </header>
        <div className="flex flex-col">
          <main className="flex items-center m-2 gap-x-4">
            <img src="https://assets.dryicons.com/uploads/icon/svg/8337/a347cd89-1662-4421-be90-58e5e8004eae.svg" className="block rounded-full w-14 lg:w-16 bg aspect-square"></img>
            <article>
              <h2 className="text-lg font-bold">Linkedin</h2>
              <span className="text-xs font-semibold text-gray-400 xl:text-sm">Company 🞄 Internet</span>
            </article>
          </main>
          <button className="flex gap-x-3 bg-[#e5eff4] rounded-full px-3 py-2 items-center ml-[4.67rem] lg:ml-20 w-fit text-[#3585ae]">
            <BsPlusLg className="text-xl" /> <span className="inline-block font-semibold">Follow</span>
          </button>
        </div>
        <hr className="w-[95%] mx-2 my-4" />
        <div className="flex flex-col">
          <main className="flex items-center m-2 gap-x-4">
            <img src="https://cdn-icons-png.flaticon.com/512/732/732221.png" className="block rounded-full w-14 lg:w-16 bg aspect-square"></img>
            <article>
              <h2 className="text-lg font-bold">Microsoft</h2>
              <span className="text-xs font-semibold text-gray-400 xl:text-sm">Company 🞄 Software</span>
            </article>
          </main>
          <button className="flex gap-x-3 bg-[#e5eff4] rounded-full px-3 py-2 items-center ml-[4.67rem] lg:ml-20 w-fit text-[#3585ae]">
            <BsPlusLg className="text-xl" /> <span className="inline-block font-semibold">Follow</span>
          </button>
        </div>
        <hr className="w-[95%] mx-2 my-4" />
        <div className="flex flex-col">
          <main className="flex items-center m-2 gap-x-4">
            <img src="https://c0.klipartz.com/pngpicture/180/164/gratis-png-logo-de-apple-thumbnail.png" className="block rounded-full w-14 lg:w-16 bg aspect-square"></img>
            <article>
              <h2 className="text-lg font-bold">Apple</h2>
              <span className="text-xs font-semibold text-gray-400 xl:text-sm">Company 🞄 Electronics</span>
            </article>
          </main>
          <button className="flex gap-x-3 bg-[#e5eff4] rounded-full px-3 py-2 items-center ml-[4.67rem] lg:ml-20 w-fit text-[#3585ae]">
            <BsPlusLg className="text-xl" /> <span className="inline-block font-semibold">Follow</span>
          </button>
        </div>
        <button className="flex items-center justify-between w-[95%] py-2 px-4 mx-2 mt-6 mb-4 bg-gray-100 dark:bg-[#242526] rounded-lg text-muted-foreground">
          <span className="text-sm font-semibold">View all recommendations</span>
          <CgChevronRight />
        </button>
      </section>
      <section className="relative w-full p-2 my-2 ml-2 bg-white dark:bg-[#191a1b] shadow-sm rounded-xl">
        <header className="flex items-center justify-between p-2">
          <h2 className="font-bold text-md">Top Courses</h2>
          <span className="inline-grid w-6 font-bold bg-gray-300 dark:bg-[#242526] rounded-full max-w-6 place-items-center aspect-square"><BsInfo className="text-xl" /></span>
        </header>
        <main>
          <div className="flex items-center justify-between p-3 mx-2 my-3 bg-gray-100 dark:bg-[#242526] rounded-lg gap-x-3">
            <img src="https://cdn.prod.website-files.com/5e318ddf83dd66608255c3b6/62b1de2e8e142538f54863b6_What%20is%20course%20design.jpg" className="inline-block w-8 rounded-lg aspect-square" />
            <article className="flex flex-col min-w-0 mr-auto text-sm">
              <span className="inline-block font-semibold truncate line-clamp-1">UI/UX Design</span>
              <span className="text-muted-foreground">John Doe</span>
            </article>
            <button className="block py-3 px-5 rounded-lg bg-[#e9e9e9] text-sm font-bold text-gray-600">View</button>
          </div>
          <div className="flex items-center justify-between p-3 mx-2 my-3 bg-gray-100 dark:bg-[#242526] rounded-lg gap-x-3">
            <img src="https://instructor-academy.onlinecoursehost.com/content/images/2023/05/How-to-Create-an-Online-Course-For-Free--Complete-Guide--6.jpg" className="inline-block w-8 rounded-lg aspect-square" />
            <article className="flex flex-col min-w-0 mr-auto text-sm">
              <span className="inline-block font-semibold truncate line-clamp-1 ">Illustrations</span>
              <span className="truncate text-muted-foreground">Emma Green</span>
            </article>
            <button className="block py-3 px-5 rounded-lg bg-[#e9e9e9] text-sm font-bold text-gray-600">View</button>
          </div>

        </main>
      </section>
    </aside>
  );
}