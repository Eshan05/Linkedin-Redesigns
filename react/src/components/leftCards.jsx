import { CgCrown, CgEye, CgFolder, CgInsights } from "react-icons/cg";
import { HiUserGroup } from "react-icons/hi";

export const ProfileCard = () => {
  return (
    <aside className="flex flex-col min-w-full">
      <section className="relative w-full p-2 my-2 ml-2 bg-white shadow-sm rounded-xl">
        <header className="flex flex-col items-center gap-2 m-2 border-gray-400 md:flex-row space-around">
          <img
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
            alt="profile"
            className="w-20 rounded-full aspect-square"
          />
          <div className="flex flex-col items-start p-2">
            <span className="block font-bold">Name</span>
            <span className="block font-light text-muted-foreground">Profession</span>
          </div>
        </header>
        <hr className="w-[95%] mx-2 my-4" />
        <section className="p-2 mx-1">
          <div className="flex justify-between px-4 py-3 mt-2 mb-3 bg-gray-100 rounded-lg gap-x-3">
            <CgEye />
            <span className="block mr-auto text-sm text-muted-foreground">Profile viewers</span>
            <span className="inline-block font-bold text-sm text-[#006699]">345</span>
          </div>
          <article className="flex flex-col my-3 bg-gray-100 rounded-lg">
            <div className="flex justify-between px-4 pt-3 pb-2 bg-gray-100 gap-x-3">
              <HiUserGroup />
              <span className="block mr-auto text-sm text-muted-foreground">Connections</span>
              <span className="inline-block font-bold text-sm text-[#006699]">2,345</span>
            </div>
            <button className="p-2 text-sky-500 bg-[#e0e8ec] m-2 flex items-center justify-center gap-x-3 rounded-lg ">
              <span className="inline-block text-sm">Manage your network</span>
            </button>
          </article>
          <article className="flex flex-col my-3 bg-gray-100 rounded-lg">
            <div className="flex justify-between px-4 pt-3 pb-2 gap-x-3">
              <CgInsights />
              <span className="block mr-auto text-sm text-muted-foreground">Exclusive Insights</span>
              <span className="inline-block font-bold text-sm text-[#006699]"></span>
            </div>
            <button className="p-2 text-sky-500 bg-[#e0e8ec] m-2 flex items-center justify-center gap-x-3 rounded-lg ">
              <CgCrown className="text-2xl" /> <span className="inline-block text-sm">Try Premium for free</span>
            </button>
          </article>
          <div className="flex justify-between px-4 py-3 my-3 bg-gray-100 rounded-lg gap-x-3">
            <CgFolder />
            <span className="block mr-auto text-sm text-muted-foreground">My Items</span>
            <span className="inline-block font-bold text-sm text-[#006699]">(3)</span>
          </div>
        </section>
      </section>
      <section className="relative w-full p-2 my-2 ml-2 bg-white shadow-sm rounded-xl">
        <header className="flex items-center justify-between p-2">
          <h2 className="font-bold text-md">My Pages</h2>
          <span className="inline-block w-6 font-bold text-center bg-gray-300 rounded-full aspect-square">2</span>
        </header>
        <div className="flex items-center justify-between p-3 mx-2 my-3 bg-gray-100 rounded-lg gap-x-3">
          <img src="https://cdn-icons-png.flaticon.com/512/4138/4138137.png" className="inline-block w-8 aspect-square" />
          <span className="inline-block mr-auto font-semibold text-muted-foreground">CropBox</span>
          <button className="block py-3 px-5 rounded-lg bg-[#e9e9e9] text-sm font-bold text-gray-600">View</button>
        </div>
        <div className="flex items-center justify-between p-3 mx-2 my-3 bg-gray-100 rounded-lg gap-x-3">
          <img src="https://png.pngtree.com/png-vector/20191201/ourmid/pngtree-round-objective-icon-circle-png-image_2060814.jpg" className="inline-block w-8 aspect-square" />
          <span className="inline-block mr-auto font-semibold text-muted-foreground">CropBox</span>
          <button className="block py-3 px-5 rounded-lg bg-[#e9e9e9] text-sm font-bold text-gray-600">View</button>
        </div>
      </section>
    </aside>
  );
};