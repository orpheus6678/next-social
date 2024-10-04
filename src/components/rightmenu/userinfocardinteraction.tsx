"use client"

import { switchBlock, switchFollow } from "@/lib/actions"
import { useOptimistic, useState } from "react"

const UserInfoCardInteraction = ({
  userId,
  isUserBlocked,
  isFollowing,
  isFollowRequestSent
}: {
  userId: string,
  isUserBlocked: boolean,
  isFollowing: boolean,
  isFollowRequestSent: boolean,
}) => {
  const [userState, setUserState] = useState({
    isFollowRequestSent,
    isFollowing,
    isUserBlocked,
  })

  const [optimisticState, switchOptimisticState] = useOptimistic(
    userState,
    (state, value: "follow" | "block") =>
      value === "follow"
      ? {
          ...state,
          isFollowing: false,
          isFollowRequestSent: !state.isFollowing && !state.isFollowRequestSent
        }
      : { ...state, isUserBlocked: !state.isUserBlocked }
  )

  const follow = async () => {
    switchOptimisticState("follow")
    try {
      await switchFollow(userId)
      setUserState({
        ...userState,
        isFollowing: false,
        isFollowRequestSent: !userState.isFollowing && !userState.isFollowRequestSent
      })
    } catch (err) {}
  }

  const block = async () => {
    switchOptimisticState("block")
    try {
      await switchBlock(userId)
      setUserState({ ...userState, isUserBlocked: !userState.isUserBlocked })
    } catch (err) {}
  }

  return (
    <>
      <form action={follow}>
        <button className="w-full bg-blue-500 text-white text-sm rounded-md p-2">
          {optimisticState.isFollowing
            ? "Following"
            : optimisticState.isFollowRequestSent
            ? "Friend Request Sent"
            : "Follow"
          }
        </button>
      </form>
      <form action={block} className="self-end">
        <button>
          <span className="text-red-400 text-xs cursor-pointer">
            {optimisticState.isUserBlocked ? "Unblock User" : "Block User"}
          </span>
        </button>
      </form>
    </>
  )
}

export default UserInfoCardInteraction
