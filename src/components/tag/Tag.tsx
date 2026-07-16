import type { ReactNode } from "react"

interface TagProps {
    children: ReactNode
}

const Tag = ({ children }: TagProps) => {
  return (
    <>
        <span className="rounded-8px bg-light-gray-5 p-0-5r font-f-Raleway cursor-pointer">
            {children}
        </span>
    </>
  )
}

export default Tag