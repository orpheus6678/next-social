import Link from "next/link"
import ProfileCard from "./profile-card"
import Image from "next/image"
import Advertisement from "./advertisement"

const LeftMenu = ({ type }: { type: "home" | "profile" }) => {
  return (
    <div className="flex flex-col gap-4">
      {type === "home" && <ProfileCard />}
      <div className="p-4 bg-white rounded-lg shadow-md text-sm text-gray-500 flex flex-col gap-2">
        <Link href="/" className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100">
          <Image width="20" height="20" alt="" src="/posts.png" />
          <span>My Posts</span>
        </Link>
        <hr className="border-t-1 border-gray-50 w-36 self-center" />
        <Link href="/" className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100">
          <Image width="20" height="20" alt="" src="/activity.png" />
          <span>Activity</span>
        </Link>
        <hr className="border-t-1 border-gray-50 w-36 self-center" />
        <Link href="/" className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100">
          <Image width="20" height="20" alt="" src="/market.png" />
          <span>Marketplace</span>
        </Link>
        <hr className="border-t-1 border-gray-50 w-36 self-center" />
        <Link href="/" className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100">
          <Image width="20" height="20" alt="" src="/events.png" />
          <span>Events</span>
        </Link>
        <hr className="border-t-1 border-gray-50 w-36 self-center" />
        <Link href="/" className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100">
          <Image width="20" height="20" alt="" src="/albums.png" />
          <span>Albums</span>
        </Link>
        <hr className="border-t-1 border-gray-50 w-36 self-center" />
        <Link href="/" className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100">
          <Image width="20" height="20" alt="" src="/videos.png" />
          <span>Videos</span>
        </Link>
        <hr className="border-t-1 border-gray-50 w-36 self-center" />
        <Link href="/" className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100">
          <Image width="20" height="20" alt="" src="/news.png" />
          <span>News</span>
        </Link>
        <hr className="border-t-1 border-gray-50 w-36 self-center" />
        <Link href="/" className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100">
          <Image width="20" height="20" alt="" src="/courses.png" />
          <span>Courses</span>
        </Link>
        <hr className="border-t-1 border-gray-50 w-36 self-center" />
        <Link href="/" className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100">
          <Image width="20" height="20" alt="" src="/lists.png" />
          <span>Lists</span>
        </Link>
        <hr className="border-t-1 border-gray-50 w-36 self-center" />
        <Link href="/" className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100">
          <Image width="20" height="20" alt="" src="/settings.png" />
          <span>Settings</span>
        </Link>
      </div>
      <Advertisement size="sm" />
    </div>
  )
}

export default LeftMenu
