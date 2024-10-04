"use client"

import { acceptFollowRequest, declineFollowRequest } from "@/lib/actions"
import { FollowRequest, User } from "@prisma/client"
import Image from "next/image"
import { useOptimistic, useState } from "react"

type RequestWithUser = FollowRequest & { follower: User }

const FriendRequestsList = ({ requests }: { requests: RequestWithUser[] }) => {
  const [requestState, setRequestState] = useState(requests)

  const [optimisticRequests, updateOptimisticRequests] = useOptimistic(
    requestState,
    (state, value: string) => state.filter(req => req.id !== value)
  )

  const accept = async (requestId: string, userId: string) => {
    updateOptimisticRequests(requestId)

    try {
      await acceptFollowRequest(userId)
      setRequestState(requestState.filter(req => req.id !== requestId))
    } catch (err) {}
  }

  const decline = async (requestId: string, userId: string) => {
    updateOptimisticRequests(requestId)

    try {
      await declineFollowRequest(userId)
      setRequestState(requestState.filter(req => req.id !== requestId))
    } catch (err) {}
  }

  return (
    <div className="">
      {optimisticRequests.map((request) => (
        <div key={request.id} className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Image
              src={request.follower.avatar || "/noAvatar.png"}
              width="40" height="40"
              className="w-10 h-10 rounded-full object-cover" alt=""
            />
            <span className="font-semibold">
              {request.follower.name && request.follower.surname
                ? `${request.follower.name} ${request.follower.surname}`
                : request.follower.username
              }
            </span>
          </div>
          <div className="flex gap-3 justify-end">
            <form action={() => accept(request.id, request.follower.id)}>
              <button>
                <Image src="/accept.png" width="20" height="20" className="cursor-pointer" alt="" />
              </button>
            </form>
            <form action={() => decline(request.id, request.follower.id)}>
              <button>
                <Image src="/reject.png" width="20" height="20" className="cursor-pointer" alt="" />
              </button>
            </form>
          </div>
        </div>
      ))}
    </div>
  )
}

export default FriendRequestsList
