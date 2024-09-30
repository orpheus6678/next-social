import Image from "next/image"
import Comments from "./comments"

const Post = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image src="https://images.pexels.com/photos/28210181/pexels-photo-28210181/free-photo-of-a-herd-of-goats-on-a-mountain-slope.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" width="40" height="40" className="w-10 h-10 rounded-full" />
          <span className="font-medium">Jack McBride</span>
        </div>
        <Image src="/more.png" alt="" width="16" height="16" />
      </div>
      <div className="flex flex-col gap-4">
        <div className="w-full min-h-96 relative">
          <Image src="https://images.pexels.com/photos/14516753/pexels-photo-14516753.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" fill className="object-cover rounded-md" />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta blanditiis aspernatur consectetur, nisi hic at ea officia, assumenda libero non rerum sit, dignissimos saepe ipsa dolorum ipsum iusto labore numquam.
        </p>
      </div>
      <div className="flex items-center justify-between text-sm my-4">
        <div className="flex gap-8">
          <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
            <Image src="/like.png" width="16" height="16" alt="" className="cursor-pointer" />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              123
              <span className="hidden md:inline"> Likes</span>
            </span>
          </div>
          <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
            <Image src="/comment.png" width="16" height="16" alt="" className="cursor-pointer" />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              123
              <span className="hidden md:inline"> Comments</span>
            </span>
          </div>
        </div>
        <div className="">
          <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
            <Image src="/share.png" width="16" height="16" alt="" className="cursor-pointer" />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              123
              <span className="hidden md:inline"> Shares</span>
            </span>
          </div>
        </div>
      </div>
      <Comments />
    </div>
  )
}

export default Post