import LeftMenu from "@components/leftmenu/leftmenu"
import RightMenu from "@/components/rightmenu/rightmenu"
import Feed from "@components/feed/feed"
import Image from "next/image"
import { prisma } from "@lib/client"
import { notFound } from "next/navigation"
import { auth } from "@clerk/nextjs/server"

const ProfilePage = async ({ params: { username } }: { params: { username: string } }) => {
  const user = await prisma.user.findUnique({
    where: { username },
    include: {
      _count: {
        select: {
          followers: true,
          follows: true,
          posts: true,
        }
      }
    }
  })
  
  if (!user) return notFound()
  const { userId: currentUserId } = auth()
  
  const isBlocked = !!(currentUserId &&
    await prisma.block.findFirst({
      where: {
        blockerId: user.id,
        blockedId: currentUserId
      }
    })
  )

  if (isBlocked) return notFound()

  return (
    <div className="flex gap-6 pt-6">
    <div className="hidden xl:block w-[20%]">
      <LeftMenu type="profile" />
    </div>
    <div className="w-full lg:w-[70%] xl:w-[50%]">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col items-center justify-center">
          <div className="w-full h-64 relative">
            <Image
              src={user.cover || "/noCover.png"} alt=""
              fill className="rounded-md object-cover"
            />
            <Image
              src={user.avatar || "/noAvatar.png"} alt=""
              width="128" height="128"
              className="w-32 h-32 rounded-full object-cover absolute left-0 right-0 m-auto -bottom-16 ring-4 ring-white"
            />
          </div>
          <h1 className="mt-20 mb-4 text-2xl font-medium">
            {user.name && user.surname
              ? `${user.name} ${user.surname}`
              : user.username
            }
          </h1>
          <div className="flex items-center justify-center gap-12 mb-4">
            <div className="flex flex-col items-center">
              <span className="font-medium">{user._count.posts}</span>
              <span className="text-sm">Posts</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-medium">{user._count.followers}</span>
              <span className="text-sm">Followers</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-medium">{user._count.follows}</span>
              <span className="text-sm">Following</span>
            </div>
          </div>
        </div>
        <Feed username={user.username} />
      </div>
    </div>
    <div className="hidden lg:block w-[30%]">
      <RightMenu user={user} />
    </div>
  </div>
  )
}

export default ProfilePage
