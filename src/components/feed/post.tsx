import Image from "next/image"
import Comments from "./comments"
import { type Post, User } from "@prisma/client"
import PostInteraction from "./postinteraction"
import { Suspense } from "react"
import PostInfo from "./postinfo"
import { auth } from "@clerk/nextjs/server"

type PostType =
    Post
  & { user: User }
  & { likes: { userId: string }[] }
  & { _count: { comments: number } }

const Post = ({ post }: { post: PostType }) => {
  const { userId } = auth()

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src={post.user.avatar || "/noAvatar.png"} alt=""
            width="40" height="40"
            className="w-10 h-10 rounded-full"
          />
          <span className="font-medium">
            {post.user.name && post.user.surname
              ? `${post.user.name} ${post.user.surname}`
              : post.user.username
            }
          </span>
        </div>
        {userId === post.user.id && <PostInfo postId={post.id} />}
      </div>
      <div className="flex flex-col gap-4">
        {post.img && <div className="w-full min-h-96 relative">
          <Image src={post.img} alt="" fill className="object-cover rounded-md" />
        </div>}
        <p>{post.desc}</p>
      </div>
      <Suspense fallback="Loading...">
        <PostInteraction
          postId={post.id}
          likes={post.likes.map(like => like.userId)}
          commentNumber={post._count.comments}
        />
        <Comments postId={post.id} />
      </Suspense>
    </div>
  )
}

export default Post