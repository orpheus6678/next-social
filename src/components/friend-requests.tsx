import Image from "next/image"
import Link from "next/link"

const FriendRequests = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
      <div className="flex justify-between items-center font-medium">
        <span className="text-gray-500">Friend Requests</span>
        <Link href="/" className="text-blue-500 text-xs">See all</Link>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image width="40" height="40" className="w-10 h-10 rounded-full object-cover" alt="" src="https://images.pexels.com/photos/28501949/pexels-photo-28501949/free-photo-of-charming-cottage-in-fall-forest-setting.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <span className="font-semibold">Wayne Burton</span>
        </div>
        <div className="flex gap-3 justify-end">
          <Image src="/accept.png" alt="" width="20" height="20" className="cursor-pointer" />
          <Image src="/reject.png" alt="" width="20" height="20" className="cursor-pointer" />
        </div>
      </div>
    </div>
  )
}

export default FriendRequests
