import { auth } from "@clerk/nextjs/server"
import { prisma } from "@lib/client"
import Image from "next/image"

const AddPost = () => {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg flex gap-4 justify-between text-sm">
      <Image src="https://images.pexels.com/photos/21031394/pexels-photo-21031394/free-photo-of-church-of-saint-ildefonso-in-portugal.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" width="48" height="48" className="w-12 h-12 object-cover rounded-full" />
      <div className="flex-1">
        <form action="" className="flex gap-4">
          <textarea name="desc" id="" placeholder="What's on your mind?" className="flex-1 bg-slate-100 rounded-lg p-2" />
          <Image src="/emoji.png" alt="" width="20" height="20" className="w-5 h-5 cursor-pointer self-end" />
          <button>Send</button>
        </form>
        <div className="flex items-center gap-4 mt-4 text-gray-400 flex-wrap">
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/addimage.png" alt="" width="20" height="20" />
            Photo
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/addVideo.png" alt="" width="20" height="20" />
            Video
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/addevent.png" alt="" width="20" height="20" />
            Event
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/poll.png" alt="" width="20" height="20" />
            Poll
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddPost
