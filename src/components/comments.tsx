import Image from "next/image"

const Comments = () => {
  return (
    <div className="">
      <div className="flex items-center gap-4">
        <Image src="https://images.pexels.com/photos/27065579/pexels-photo-27065579/free-photo-of-samoyed-dog-in-car-window.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" className="w-8 h-8 rounded-full" width="32" height="32" />
        <div className="flex-1 flex items-center justify-between bg-slate-100 rounded-xl text-sm px-6 py-2 w-full">
          <input type="text" placeholder="Write a comment..." className="bg-transparent outline-none flex-1" />
          <Image src="/emoji.png" alt="" width="16" height="16" className="cursor-pointer" />
        </div>
      </div>
      <div className="">
        <div className="flex gap-4 justify-between mt-6">
          <Image src="https://images.pexels.com/photos/27065579/pexels-photo-27065579/free-photo-of-samoyed-dog-in-car-window.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" className="w-10 h-10 rounded-full" width="40" height="40" />
          <div className="flex flex-col gap-2 flex-1">
            <span className="font-medium">Bernice Spencer</span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas illum optio iure qui quia, perspiciatis aperiam repellat culpa, est quam cum unde ad, nam iusto consectetur possimus quaerat voluptates hic.</p>
            <div className="flex items-center gap-8 text-xs text-gray-500">
              <div className="flex items-center gap-4 mt-2">
                <Image src="/like.png" alt="" width="16" height="16" className="cursor-pointer w-4 h-4" />
                <span className="text-gray-300">|</span>
                <span className="text-gray-500">123 Likes</span>
                <div className="">Reply</div>
              </div>
            </div>
          </div>
          <Image src="/more.png" alt="" width="16" height="16" className="cursor-pointer w-4 h-4" />
        </div>
      </div>
    </div>
  )
}

export default Comments
