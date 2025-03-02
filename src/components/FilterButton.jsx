import React from 'react'

export default function FilterButton({children}) {
  return (
    <p className="border-2 border-black rounded-md px-3 text-xl py-2 cursor-pointer">
        { children }
    </p>
  )
}
