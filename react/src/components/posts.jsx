import { CgComment } from "react-icons/cg";
import { WritePost } from "./writePost";
import { FaHeart, FaRegThumbsUp, FaThumbsUp } from "react-icons/fa";
import { PiShareFatLight } from "react-icons/pi";
import { LuSend } from "react-icons/lu";
const Posts = () => {
  return (
    <div className="w-full">
      <WritePost />
      <article className="my-4 bg-white rounded-xl">
        <header className="flex p-3 gap-x-2">
          <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" className="w-10 rounded-full aspect-square" />
          <div className="flex flex-col">
            <h2 className="font-bold">Aline Green <span className="text-sm font-light text-muted-foreground">🞄 2 days ago</span></h2>
            <span className="inline-block text-sm font-medium text-muted-foreground">CEO at BearUI</span>
          </div>
        </header>
        <main>
          <p className="p-3">Hello there!</p>
          <img src="https://dummyimage.com/16:9x1080" className=""></img>
        </main>
        <footer className="p-3">
          <section className="flex items-center text-sm font-medium text-gray-400 gap-x-3">
            <div className="flex items-center">
              <i className="inline-flex items-center justify-center w-6 h-6 pb-[.1rem] bg-blue-500 rounded-full"><FaThumbsUp className="text-gray-100 " /></i>
            </div>
            <div className="flex items-center -ml-5 z-[2] ">
              <i className="inline-grid !aspect-square h-6 bg-red-500 rounded-full place-items-center"><FaHeart className="text-gray-100 " /></i>
            </div>
            4,874 🞄 11 Comments 🞄 9 Shares
          </section>
          <hr className="my-4" />
          <section className="flex px-6 mx-auto my-2 text-lg text-gray-400 w-fit gap-x-10">
            <div className="flex items-center cursor-pointer gap-x-1">
              <FaRegThumbsUp className="w-10 text-2xl aspect-square" />
              Like
            </div>
            <div className="flex items-center cursor-pointer gap-x-1">
              <CgComment className="w-10 text-2xl aspect-square" />
              Comment
            </div>
            <div className="flex items-center cursor-pointer gap-x-1">
              <PiShareFatLight className="w-10 text-2xl aspect-square" />
              Share
            </div>
            <div className="flex items-center cursor-pointer gap-x-1">
              <LuSend className="w-10 text-2xl aspect-square" />
              Send
            </div>
          </section>
        </footer>
      </article>
    </div>
  );
};

export default Posts;
