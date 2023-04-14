/* eslint-disable @next/next/no-img-element */
import LogoAnimated from "../assets/logo-animated.gif";
import Logo from "../assets/logo.png";
import Link from "next/link";
import { FaTwitter, FaDiscord } from "react-icons/fa";
import { SiLinktree } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="border-t-[1px] border-white mt-20 mx-28 lg:mx-0 py-5">
      {/* <div className='flex items-center justify-center absolute left-0 top-0 w-full'>
        <img src={LogoAnimated.src} className='h-32 rounded-full ' />
      </div> */}

      <div className="grid grid-cols-3 sm:grid-cols-1 relative">
        <div className=""></div>
        <div className="grid place-content-center">
          <img src={Logo.src} className="h-40 rounded-full " alt="logo" />
        </div>
        <div className="flex justify-end sm:justify-center sm:mt-9">
          <div className="flex items-center gap-5">
            <Link href="https://discord.gg/RxPKemgg">
              <a target="_blank">
                <FaDiscord className="hover:text-primary h-8 w-8 cursor-pointer transition-all" />
              </a>
            </Link>

            <Link href="https://twitter.com/iobattleground" target="_blank">
              <a target="_blank">
                <FaTwitter className="hover:text-primary h-8 w-8 cursor-pointer transition-all" />
              </a>
            </Link>

            <Link href="https://linktr.ee/thebattleground.io" target="_blank">
              <a target="_blank">
                <SiLinktree className="hover:text-primary h-8 w-8 cursor-pointer transition-all" />
              </a>
            </Link>
          </div>
        </div>
      </div>

      <div className="flex md:flex-col md:pt-2 items-center justify-center">
        <div className="font-life md:text-center">
          ©{new Date().getFullYear()} Battleground. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
