import { useState } from "react";
import { CgComment } from "react-icons/cg";
import { WritePost } from "./writePost";
import { FaGlobeAmericas, FaHeart, FaRegThumbsUp, FaThumbsUp } from "react-icons/fa";
import { PiShareFatLight } from "react-icons/pi";
import { LuSend } from "react-icons/lu";
import { BsThreeDots } from "react-icons/bs";

const Posts = () => {
  const [posts, setPosts] = useState([
    {
      avatar: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
      name: "Aline Green",
      time: "2 days ago",
      role: "CEO at BearUI",
      location: "New York",
      content: "Hello there!",
      image: "https://dummyimage.com/16:9x1080",
    },
  ]);

  const handleNewPost = (newPost) => {
    setPosts((prevPosts) => [newPost, ...prevPosts]);
  };

  return (
    <div className="w-full">
      <WritePost onPost={handleNewPost} />
      {posts.map((post, index) => (
        <article key={index} className="my-4 bg-white dark:bg-[#191a1b] rounded-xl">
          <header className="flex w-full p-3 gap-x-2">
            <img src={post.avatar} className="w-10 rounded-full aspect-square" alt="Avatar" />
            <section className="flex justify-between w-full">
              <div className="flex flex-col">
                <h2 className="font-bold">{post.name} <span className="text-sm font-light text-muted-foreground">🞄 {post.time}</span></h2>
                <span className="inline-block text-sm font-medium text-muted-foreground">{post.role}</span>
              </div>
              <div className="flex items-center !font-light text-gray-400 gap-x-1">
                <span className="inline-block text-sm">{post.location} 🞄 <FaGlobeAmericas className="inline-block w-4 h-4 mb-[.175rem] aspect-square" /></span>
                <BsThreeDots className="ml-2" />
              </div>
            </section>
          </header>
          <main>
            <p className="p-3">{post.content}</p>
            {post.image && <img src={post.image} alt="Post" className="" />}
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
      ))}
    </div>
  );
};

export default Posts;
