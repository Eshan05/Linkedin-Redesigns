import { useState } from "react";
import PropTypes from 'prop-types';

import { CgCalendarDates } from "react-icons/cg";
import { GoVideo } from "react-icons/go";
import { IoImageOutline } from "react-icons/io5";
import { PiPencil } from "react-icons/pi";

export const WritePost = ({ onPost }) => {
  const [content, setContent] = useState("");

  const handlePostSubmit = (e) => {
    if (e.key === 'Enter' && content.trim()) {
      const newPost = {
        avatar: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
        name: "Your Name",
        time: "Just now",
        role: "Your Role",
        location: "Your Location",
        content: content,
        image: "",
      };
      onPost(newPost);
      setContent("");
    }
  };
  return (
    <div className="w-full p-2 bg-white dark:bg-[#191a1b] rounded-xl">
      <header className="flex p-2 gap-x-4">
        <img
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
          alt="profile"
          className="rounded-full w-14 aspect-square"
        />
        <input
          className="w-full p-4 text-sm font-medium bg-gray-100 rounded-full"
          placeholder="Do you have any news to share?"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          onKeyDown={handlePostSubmit} />
      </header>
      <section className="flex px-6 mx-auto my-2 text-gray-400 text-md xl:text-lg lg:ml-auto lg:mr-1 w-fit gap-x-10">
        <div className="flex items-center cursor-pointer">
          <IoImageOutline className="w-10 text-2xl aspect-square" />
          Image
        </div>
        <div className="flex items-center cursor-pointer">
          <GoVideo className="w-10 text-2xl aspect-square" />
          Video
        </div>
        <div className="flex items-center cursor-pointer">
          <CgCalendarDates className="w-10 text-2xl aspect-square" />
          Activity
        </div>
        <div className="flex items-center cursor-pointer">
          <PiPencil className="w-10 text-2xl aspect-square" />
          Article
        </div>
      </section>
    </div>
  );
};

WritePost.propTypes = {
  onPost: PropTypes.func.isRequired,
};