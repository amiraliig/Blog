'use client'
import { CiCirclePlus } from "react-icons/ci";
import { RiImageCircleLine } from "react-icons/ri";
import { MdOutlineSlowMotionVideo } from "react-icons/md";

import React, { useState } from 'react'
import Image from 'next/image'
const Uploader = () => {
  const [open, setOpen] = useState<boolean>(false)
  return (
    <div className="flex  items-center">
      <button onClick={() => {
        setOpen(!open)
      }}>
        <CiCirclePlus className="text-4xl" />
      </button>

      {open && <div className="flex items-center">
        <button>

        </button>
        <button>
          <RiImageCircleLine className="text-4xl" />
        </button>
        <button>
          <MdOutlineSlowMotionVideo className="text-4xl" />
        </button>
      </div>}

    </div>
  )
}

export default Uploader