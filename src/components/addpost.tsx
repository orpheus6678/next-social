"use client"

import { useUser } from "@clerk/nextjs"
import { CldUploadWidget, CloudinaryUploadWidgetInfo } from "next-cloudinary"
import Image from "next/image"
import { useState } from "react"
import AddPostButton from "./addpostbutton"
import { addPost } from "@/lib/actions"

const AddPost = () => {
  const { user, isLoaded } = useUser()
  const [desc, setDesc] = useState("")
  const [img, setImg] = useState<any>()

  if (!isLoaded)
    return "Loading..."

  return (
    <div className="p-4 bg-white shadow-md rounded-lg flex gap-4 justify-between text-sm">
      <Image
        src={user?.imageUrl || "/noAvatar.png"} alt=""
        width="48" height="48"
        className="w-12 h-12 object-cover rounded-full"
      />
      <div className="flex-1">
        <form action={(formData) => addPost(formData, img?.secure_url || "")} className="flex gap-4">
          <textarea
            name="desc" id="" placeholder="What's on your mind?"
            onChange={e => setDesc(e.target.value)}
            className="flex-1 bg-slate-100 rounded-lg p-2"
          />
          <div>
            <Image src="/emoji.png" alt="" width="20" height="20" className="w-5 h-5 cursor-pointer self-end" />
            <AddPostButton />
          </div>
        </form>
        <div className="flex items-center gap-4 mt-4 text-gray-400 flex-wrap">
          <CldUploadWidget
            uploadPreset="social"
            onSuccess={
              (result, { widget }) => {
                setImg(result.info as CloudinaryUploadWidgetInfo)
                widget.close()
              }
            }
          >
            {({ open }) => (
              <div onClick={() => open()} className="flex items-center gap-2 cursor-pointer">
                <Image src="/addimage.png" alt="" width="20" height="20" />
                Photo
              </div>
            )}
          </CldUploadWidget>
          
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
