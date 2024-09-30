import Advertisement from "./advertisement"
import Birthdays from "./birthdays"
import FriendRequests from "./friend-requests"
import UserInfoCard from "./userinfo-card"
import UserMediaCard from "./usermedia-card"

const RightMenu = ({ userId }: { userId?: string }) => {
  return (
    <div className="flex flex-col gap-6">
      {userId ? (
        <>
          <UserInfoCard userId={userId} />
          <UserMediaCard userId={userId} />
        </>
      ) : null}
      <FriendRequests />
      <Birthdays />
      <Advertisement size="md" />
    </div>
  )
}

export default RightMenu
