"use client"

import { useFormStatus } from "react-dom"

const AddPostButton = () => {
  const { pending } = useFormStatus()

  return (
    <button disabled={pending} className="p-2 mt-2 rounded-md text-white bg-blue-500 disabled:bg-blue-300 disabled:cursor-not-allowed">
      {pending
        ? (
          <div className="flex items-center gap-2">
            <div className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white" role="status">
              <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
            </div>
            Sending
          </div>
        ) : "Send"}
    </button>
  )
}

export default AddPostButton