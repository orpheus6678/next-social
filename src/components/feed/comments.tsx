import { prisma } from "@/lib/client"
import CommentList from "./commentlist"

const Comments = async ({ postId }: { postId: string }) => {
  const comments = await prisma.comment.findMany({
    where: { postId },
    include: { user: true }
  })

  return (
    <div className="">
      <CommentList postId={postId} comments={comments} />
    </div>
  )
}

export default Comments
