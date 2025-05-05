import React from 'react'
interface Props {
    state: string
}
import { FaInstagram, FaTwitter, FaYoutube, FaTiktok } from "react-icons/fa";
function Social({ state }: Props) {
    return (
        <div className={`flex text-2xl gap-4 ${state}`}>
            <FaInstagram />
            <FaTwitter />
            <FaYoutube />
        </div>
    )
}

export default Social