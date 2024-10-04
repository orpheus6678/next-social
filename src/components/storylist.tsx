"use client"

import { addStory } from "@/lib/actions"
import { useUser } from "@clerk/nextjs"
import { Story, User } from "@prisma/client"
import { CldUploadWidget, CloudinaryUploadWidgetInfo } from "next-cloudinary"
import Image from "next/image"
import { useOptimistic, useState } from "react"

type StoryWithUser = Story & { user: User }

const StoryList = ({ stories }: { stories: StoryWithUser[] }) => {
  const [storyList, setStoryList] = useState(stories)
  const [img, setImg] = useState<any>()
  const [optimisticStories, addOptimisticStory] = useOptimistic(
    storyList,
    (state, value: StoryWithUser) => [value, ...state]
  )

  const { user, isLoaded } = useUser()
  if (!user && !isLoaded) return "Loading..."
  if (!user && isLoaded) return null

  const add = async () => {
    if (!img?.secure_url) return

    addOptimisticStory({
      id: Math.random().toString(),
      img: img.secure_url,
      createdAt: new Date(Date.now()),
      expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000),
      userId: user.id,
      user: {
        id: user.id,
        username: "Sending...",
        avatar: user.imageUrl || "/noAvatar.png",
        cover: "",
        desc: "",
        name: "",
        surname: "",
        city: "",
        work: "",
        school: "",
        website: "",
        createdAt: new Date(Date.now()),
      }
    })

    try {
      const createdStory = await addStory(img.secure_url)
      setStoryList([createdStory!, ...storyList])
      setImg(null)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
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
          <div className="relative flex flex-col items-center gap-2 cursor-pointer">
            <Image
              src={img?.secure_url || user?.imageUrl || "/noAvatar.png"} alt=""
              width="80" height="80"
              onClick={() => open()} 
              className="w-20 h-20 rounded-full ring-2 object-cover"
            />
            {img ? (
              <form action={add}>
                <button className="text-xs bg-blue-500 p-1 rounded-md text-white">
                  Send
                </button>
              </form>
            ) :
              <span className="font-medium">
                Add a Story
              </span>
            }
            <div className="absolute text-6xl text-gray-200 top-1">+</div>
          </div>
        )}
      </CldUploadWidget>
      {optimisticStories.map((story) => (
        <div key={story.id} className="flex flex-col items-center gap-2 cursor-pointer">
          <Image
            src={story.user.avatar || "/noAvatar.png"} alt=""
            width="80" height="80"
            className="w-20 h-20 rounded-full ring-2"
          />
          <span className="font-medium">
            {story.user.name || story.user.username}
          </span>
        </div>
      ))}
    </>
  )
}

export default StoryList
