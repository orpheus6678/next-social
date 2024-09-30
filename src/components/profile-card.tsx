import Image from "next/image"

const ProfileCard = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-6">
      <div className="h-20 relative">
        <Image className="rounded-md object-cover" alt="" fill src="https://images.pexels.com/photos/16112572/pexels-photo-16112572/free-photo-of-view-of-sun-shining-between-the-trees-in-a-park.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" />
        <Image width="48" height="48" className="rounded-full object-cover w-12 h-12 absolute left-0 right-0 m-auto -bottom-6 ring-white z-10" alt="" src="https://images.pexels.com/photos/27702825/pexels-photo-27702825/free-photo-of-a-woman-laying-on-a-bench-in-black-and-white.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" />
      </div>
      <div className="h-20 flex flex-col gap-2 items-center">
        <span className="font-semibold">Edward Gabriel May</span>
        <div className="flex items-center gap-4">
          <div className="flex">
            <Image alt="" width="12" height="12" className="rounded-full object-cover w-3 h-3" src="https://images.pexels.com/photos/16112572/pexels-photo-16112572/free-photo-of-view-of-sun-shining-between-the-trees-in-a-park.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" />
            <Image alt="" width="12" height="12" className="rounded-full object-cover w-3 h-3" src="https://images.pexels.com/photos/16112572/pexels-photo-16112572/free-photo-of-view-of-sun-shining-between-the-trees-in-a-park.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" />
            <Image alt="" width="12" height="12" className="rounded-full object-cover w-3 h-3" src="https://images.pexels.com/photos/16112572/pexels-photo-16112572/free-photo-of-view-of-sun-shining-between-the-trees-in-a-park.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" />
          </div>
          <span className="text-xs text-gray-500">500 Followers</span>
        </div>
        <button className="bg-blue-500 text-white text-xs rounded-md">My Profile</button>
      </div>
    </div>
  )
}

export default ProfileCard
