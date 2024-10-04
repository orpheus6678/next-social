"use client"

import { updateProfile } from "@/lib/actions"
import { User } from "@prisma/client"
import Image from "next/image"
import { useActionState, useState } from "react"
import { CldUploadWidget, CloudinaryUploadWidgetInfo } from 'next-cloudinary';
import { useRouter } from "next/navigation"
import UpdateButton from "./updatebutton"

const UpdateUser = ({ user }: { user: User }) => {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const [cover, setCover] = useState<CloudinaryUploadWidgetInfo>()
  const [state, formAction] = useActionState(updateProfile, { success: false, error: false })
  
  const handleClose = () => {
    setOpen(false)
    state.success && router.refresh()
  }
  
  return (
    <div className="">
      <span onClick={() => setOpen(true)} className="text-blue-500 text-xs cursor-pointer">
        Update
      </span>
      {open && (
        <div className="absolute w-screen h-screen top-0 left-0 bg-black bg-opacity-65 flex items-center justify-center z-50">
          <form
            action={(formData) => formAction({ formData, cover: cover?.secure_url || "" })}
            className="relative p-12 bg-white rounded-lg shadow-md flex flex-col gap-2 w-full md:w-1/2 xl:w-1/3"
          >
            <h1>Update Profile</h1>
            <div className="mt-4 text-xs text-gray-500">
              Use the navbar profile to change the avatar or username.
            </div>
            <CldUploadWidget
              uploadPreset="social"
              onSuccess={(result) => setCover(result.info as CloudinaryUploadWidgetInfo)}
            >
              {({ open }) => (
                <div onClick={() => open()} className="flex flex-col gap-4 my-4">
                  <label htmlFor="">Cover Picture</label>
                  <div className="flex items-center gap-2 cursor-pointer">
                    <Image
                      src={cover?.secure_url! || "/noCover.png"} alt=""
                      width="48" height="32"
                      className="w-12 h-8 rounded-md object-cover"
                    />
                    <span className="text-xs underline text-gray-600">Change</span>
                  </div>
                </div>
              )}
            </CldUploadWidget>
            <div className="flex flex-wrap justify-between gap-2 xl:gap-4">
              <div className="flex flex-col gap-4">
                <label htmlFor="" className="text-xs text-gray-500">First Name</label>
                <input
                  type="text" placeholder={user.name || "John"} name="name"
                  className="ring-1 ring-gray-300 p-[13px] rounded-md text-sm"
                />
              </div>
              <div className="flex flex-col gap-4">
                <label htmlFor="" className="text-xs text-gray-500">Surname</label>
                <input
                  type="text" placeholder={user.surname || "Doe"} name="surname"
                  className="ring-1 ring-gray-300 p-[13px] rounded-md text-sm"
                />
              </div>
              <div className="flex flex-col gap-4">
                <label htmlFor="" className="text-xs text-gray-500">Description</label>
                <input
                  type="text" placeholder={user.desc || "Life is beautiful..."} name="desc"
                  className="ring-1 ring-gray-300 p-[13px] rounded-md text-sm"
                />
              </div>
              <div className="flex flex-col gap-4">
                <label htmlFor="" className="text-xs text-gray-500">City</label>
                <input
                  type="text" placeholder={user.city || "New York"} name="city"
                  className="ring-1 ring-gray-300 p-[13px] rounded-md text-sm"
                />
              </div>
              <div className="flex flex-col gap-4">
                <label htmlFor="" className="text-xs text-gray-500">School</label>
                <input
                  type="text" placeholder={user.school || "MIT"} name="school"
                  className="ring-1 ring-gray-300 p-[13px] rounded-md text-sm"
                />
              </div>
              <div className="flex flex-col gap-4">
                <label htmlFor="" className="text-xs text-gray-500">Work</label>
                <input
                  type="text" placeholder={user.work || "Apple Inc."} name="work"
                  className="ring-1 ring-gray-300 p-[13px] rounded-md text-sm"
                />
              </div>
              <div className="flex flex-col gap-4">
                <label htmlFor="" className="text-xs text-gray-500">Website</label>
                <input
                  type="text" placeholder={user.website || "lama.dev"} name="website"
                  className="ring-1 ring-gray-300 p-[13px] rounded-md text-sm"
                />
              </div>
            </div>
            <UpdateButton />
            {state.success && <span className="text-green-500">Profile has been updated!</span>}
            {state.error && <span className="text-red-500">Something went wrong!</span>}
            <div className="absolute text-xl right-3 top-3 cursor-pointer" onClick={handleClose}>X</div>
          </form>
          
        </div>
      )}
    </div>
  )
}

export default UpdateUser