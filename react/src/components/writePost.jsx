export const WritePost = () => {
  return (
    <div className="w-full bg-white rounded-xl">
      <header className="flex p-2 gap-x-4">
        <img
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
          alt="profile"
          className="w-10 rounded-full aspect-square"
        />
        <input className="p-3 text-sm font-medium bg-gray-100 rounded-full" placeholder="Do you have any news to share?"></input>
      </header>
    </div>
  );
};