import React, { useEffect, useRef, useState } from 'react'
import { AiOutlineTwitter, AiFillYoutube, AiFillFacebook, AiFillInstagram, AiFillGithub, AiFillLinkedin, AiOutlineMenu } from 'react-icons/ai'
function Navbar() {
    const [showMenu, setShowMenu] = useState(false)
    const modalRef = useRef()
    useEffect(() => {
        let handler = (e) => {
            if (!modalRef.current.contains(e.target)) {
                setShowMenu(false)
            }
        }
        document.addEventListener('mousedown', handler)

        return () => {
            document.removeEventListener('mousedown', handler)
        }
    })
    return (
        <div className='w-full box-border bg-[#022c43]'>
            <div className="w-full p-[1.2rem] box-border flex items-center justify-between relative">
                <div className="">
                    <span className='text-white font-medium text-2xl'>Akash Chettri</span>
                </div>
                <div className=" MLg:flex hidden items-center justify-center gap-2">
                    <a href="https://twitter.com/username" target='blank'><AiOutlineTwitter className='text-white text-2xl' /></a>
                    <a href="https://youtube.com/username" target='blank'><AiFillYoutube className='text-white text-2xl ' /></a>
                    <a href="https://facebook.com/username" target='blank'><AiFillFacebook className='text-white text-2xl' /></a>
                    <a href="https://instagram.com/username" target='blank'><AiFillInstagram className='text-white text-2xl' /></a>
                    <a href="https://github.com/username" target='blank'><AiFillGithub className='text-white text-2xl' /></a>
                    <a href="https://linkedin.com/username" target='blank'><AiFillLinkedin className='text-white text-2xl' /></a>
                </div>
                <AiOutlineMenu onClick={() => setShowMenu(!showMenu)} className="text-white text-3xl MLg:hidden" />
                {
                    showMenu && <div ref={modalRef} className="MLg:hidden flex items-center justify-center gap-2 card absolute flex-col p-3 top-16 right-4 z-[500] rounded-md">
                        <a href="https://twitter.com/username" target='blank'><AiOutlineTwitter className='text-white text-2xl' /></a>
                        <a href="https://youtube.com/username" target='blank'><AiFillYoutube className='text-white text-2xl ' /></a>
                        <a href="https://facebook.com/username" target='blank'><AiFillFacebook className='text-white text-2xl' /></a>
                        <a href="https://instagram.com/username" target='blank'><AiFillInstagram className='text-white text-2xl' /></a>
                        <a href="https://github.com/username" target='blank'><AiFillGithub className='text-white text-2xl' /></a>
                        <a href="https://linkedin.com/username" target='blank'><AiFillLinkedin className='text-white text-2xl' /></a>
                    </div>
                }
            </div>
        </div>
    )
}

export default Navbar
