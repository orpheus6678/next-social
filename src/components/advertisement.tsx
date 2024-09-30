import clsx from "clsx"
import Image from "next/image"

const Advertisement = ({ size }: { size: 'sm' | 'md' | 'lg' }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm">
      <div className="flex items-center justify-between text-gray-500 font-medium">
        <span>Sponsored Ads</span>
        <Image src="/more.png" alt="" width="16" height="16" />
      </div>
      <div className={`flex flex-col mt-4 ${size === 'sm' ? "gap-2" : "gap-4"}`}>
        <div className={`relative w-full ${clsx({
          "h-24" : size === 'sm',
          "h-36" : size === 'md',
          "h-48" : size === 'lg',
        })}`}>
          <Image alt="" fill className="rounded-lg object-cover" src="https://images.pexels.com/photos/28056731/pexels-photo-28056731/free-photo-of-a-plate-with-a-bagel-and-coffee-on-it.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" />
        </div>
        <div className="flex items-center gap-4">
          <Image className="rounded-full object-cover w-6 h-6" width="24" height="24" alt="" src="https://images.pexels.com/photos/28056731/pexels-photo-28056731/free-photo-of-a-plate-with-a-bagel-and-coffee-on-it.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" />
          <span className="text-blue-500 font-medium">BigChef Lounge</span>
        </div>
        <p className={size === 'sm' ? "text-xs" : "text-sm"}>{
            size === 'sm' ? "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, maxime."
          : size === 'md' ? "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae repellendus repellat corrupti dolorem tempore ea voluptate alias quibusdam nostrum vel?"
          : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora nam iste, cum rem impedit, ea ex iure distinctio assumenda labore beatae? Alias corporis at adipisci natus? Molestiae quaerat ipsa dolorem?"
        }</p>
        <button className="bg-gray-200 text-gray-500 p-2 text-xs rounded-lg">Learn More</button>
      </div>
    </div>
  )
}

export default Advertisement
