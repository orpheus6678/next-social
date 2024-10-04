import { User } from "@prisma/client"
import Advertisement from "../advertisement"
import Birthdays from "./birthdays"
import FriendRequests from "./friendrequests"
import UserInfoCard from "./userinfocard"
import UserMediaCard from "./usermediacard"
import { Suspense } from "react"

const RightMenu = ({ user }: { user?: User }) => {
  return (
    <div className="flex flex-col gap-6">
      {user ? (
        <>
          <Suspense fallback="loading...">
            <UserInfoCard user={user} />
          </Suspense>
          <Suspense fallback="loading...">
            <UserMediaCard user={user} />
          </Suspense>
        </>
      ) : null}
      <FriendRequests />
      <Birthdays />
      <Advertisement size="md" />
    </div>
  )
}

export default RightMenu
