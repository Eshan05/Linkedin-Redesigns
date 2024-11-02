import { useState } from "react";
import { IoLogoLinkedin, IoSearch } from "react-icons/io5";
import { PiDotsNineBold, PiSignOut, PiSuitcase } from "react-icons/pi";
import { HiCog, HiHome, HiInbox } from "react-icons/hi";
import { CgCrown, CgProfile } from "react-icons/cg";
import { IoChatbubblesOutline } from "react-icons/io5";
import { GoBell } from "react-icons/go";
import ThemeToggle from "./themeToggle";

export const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (index) => { setActiveIndex(index); };
  const toggleDropdown = () => { setIsOpen(!isOpen); };

  const navItems = [
    { icon: HiHome, label: "Home" },
    { icon: CgProfile, label: "Networks" },
    { icon: PiSuitcase, label: "Jobs" },
    { icon: IoChatbubblesOutline, label: "Messages" },
  ];

  const dropdownItems = [
    { icon: CgProfile, label: "Profile" },
    { icon: HiCog, label: "Settings" },
    { icon: HiInbox, label: "Inbox" },
    { icon: PiSignOut, label: "Sign Out" },
  ];

  return (
    <nav className="flex items-center justify-between h-[5.25rem] gap-x-3 gap-y-1 bg-white dark:bg-[#191a1b] lg:px-6 lg:py-2 px-2 lg:mb-2">
      <aside className="items-center justify-center flex-1 hidden h-full lg:flex gap-x-2 ">
        <IoLogoLinkedin className="text-5xl text-[#006699] dark:text-blue-500 " />
        {/* <IoLogoLinkedin className="text-5xl text-[#006699] dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-white via-68% to-transparent to-[67%]" /> */}
        <div className="flex items-center w-3/5 px-3 mx-3 overflow-hidden border dark:border-0 rounded-full bg-neutral-100 dark:bg-[#242526]">
          <span className="p-2 text-gray-500">
            <IoSearch className="text-xl" />
          </span>
          <input
            type="text"
            placeholder="Search Linkedin"
            className="p-3 outline-none bg-neutral-100 dark:bg-[#242526] dark:placeholder:text-muted-foreground dark:text-white"
          />
        </div>
      </aside>
      <main className="flex items-center justify-center grow-[2] shrink h-full">
        {navItems.map((item, index) => {
          const Icon = item.icon; // Destructure the icon component

          return (
            <a
              key={index}
              className={`px-8 justify-center flex rounded-lg py-3 ${activeIndex === index ? 'bg-[#ebf3f7] dark:bg-[#303132]' : 'bg-transparent'}`}
              onClick={() => handleClick(index)}
            >
              <button className="flex flex-col items-center gap-y-1">
                <Icon className={`text-[1.75rem] ${activeIndex === index ? 'text-[#006699]' : 'text-gray-500'}`} />
                <span className={`text-xs ${activeIndex === index ? 'text-[#3585ae] dark:text-muted-foreground' : 'text-gray-500'} uppercase font-medium tracking-wider`}>
                  {item.label}
                </span>
              </button>
            </a>
          );
        })}
      </main>
      <section className="items-center justify-center flex-1 hidden h-full px-4 md:flex gap-x-3 ">
        <button className="grid w-10 rounded-full aspect-square bg-neutral-100 dark:bg-[#2f3031] place-items-center">
          <PiDotsNineBold className="text-xl text-muted-foreground" />
        </button>
        <button className="grid w-10 rounded-full aspect-square bg-neutral-100 dark:bg-[#2f3031] place-items-center">
          <GoBell className="text-xl text-muted-foreground" />
        </button>
        <aside className="relative flex items-center p-1 bg-gray-200 rounded-full min-w-10" onClick={toggleDropdown}>
          <img
            id="avatarButton"
            type="button"

            className="w-8 h-8 rounded-full cursor-pointer"
            src="https://media.istockphoto.com/id/1223671392/vector/default-profile-picture-avatar-photo-placeholder-vector-illustration.jpg?s=612x612&w=0&k=20&c=s0aTdmT5aU6b8ot7VKm11DeID6NctRCpB755rA1BIP0="
            alt=""
          />

          {/* Dropdown menu */}
          {isOpen &&
            <div
              id="userDropdown"
              className="absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow top-1/2 right-1/2 w-44 dark:bg-[#242526] dark:divide-[#303031]"
            >
              <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                <section className="flex items-center space-between">
                  <div className="mr-auto">Linkedin Profile</div>
                  <div className="text-right">
                    <ThemeToggle />
                  </div>
                </section>
                <div className="font-medium truncate text-muted-foreground">name@gmail.com</div>
              </div>
              <ul className="py-2 text-sm text-gray-700 border-b dark:text-gray-200 " aria-labelledby="avatarButton">
                {dropdownItems.map((item, index) => (
                  <li key={index}>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      <item.icon className="inline-block w-5 h-5 mr-3" />
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>

            </div>
          }
          {/* <span className="hidden text-sm font-semibold pe-2 ps-2 text-neutral-500 2xl:inline">Name</span> */}
        </aside>
        <button className="flex items-center justify-center px-3 py-2 font-bold border-2 rounded-full gap-x-2 aspect-square xl:aspect-auto border-neutral-100 dark:border-neutral-700 dark:bg-[#2f3031]">
          <CgCrown className="text-2xl text-yellow-600" />
          <span className="hidden xl:block dark:text-white">Premium</span>
        </button>
      </section>
    </nav>
  );
};
