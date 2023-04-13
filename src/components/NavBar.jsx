/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import classnames from "classnames";
import Link from "next/link";
import LogoAnimated from "../assets/logo-animated.gif";
import Logo from "../assets/logo.png";
import { FaTwitter, FaDiscord } from "react-icons/fa";
import { SiLinktree } from "react-icons/si";
import { BiMenuAltRight } from "react-icons/bi";
import { VscCloseAll } from "react-icons/vsc";
import classNames from "classnames";

export default function NavBar({ className }) {
  const [isOpen, setIsOpen] = useState(false);
  const [showNav, setShowNav] = useState(false);
  // const [scrollY, setScrollY] = useState(0);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     // setScrollY(window.scrollY);

  //     if (window.scrollY > 0) {
  //       setShowNav(true);
  //     } else {
  //       setShowNav(false);
  //     }
  //   };
  //   handleScroll();

  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  return (
    <nav
      className={classnames(
        "w-full transition-all flex items-center text-space z-50 bg-[#00000050] backdrop-blur-xl",
        {
          "md:h-screen": isOpen,
          // "-mt-60": !showNav,
        },
        className
      )}
    >
      <div className="flex md:flex-col items-center container justify-between text-light relative lg:static">
        <div
          className={classnames("cursor-pointer", {
            "self-start": !isOpen,
          })}
        >
          <div className={classNames("flex items-center gap-4 md:flex-col")}>
            <Link href={"/"}>
              <div className="flex gap-3 items-center lg:static">
                <img
                  src={Logo.src}
                  className="w-32 h-12 object-cover"
                  alt="logo"
                />
                {/* <h1 className='uppercase font-life tracking-[0.2em]'>
                  Battleground
                </h1> */}
              </div>
            </Link>

            <div
              className={classNames("flex items-center gap-5 md:flex-col", {
                "md:hidden": !isOpen,
              })}
            >
              <Link href="/#welcome">
                <a className="cursor-pointer hover:text-primary transition-all md:text-sm font-life tracking-[0.2em] text-lg italic text-gray-300">
                  Welcome
                </a>
              </Link>

              <Link href="/#about">
                <a className="cursor-pointer hover:text-primary transition-all md:text-sm font-life tracking-[0.2em] text-lg italic text-gray-300">
                  About
                </a>
              </Link>

              <Link href="/#roadmap">
                <a className="cursor-pointer hover:text-primary transition-all md:text-sm font-life tracking-[0.2em] text-lg italic text-gray-300">
                  Roadmap
                </a>
              </Link>

              <Link href="/#relic">
                <a className="cursor-pointer hover:text-primary transition-all md:text-sm font-life tracking-[0.2em] text-lg italic text-gray-300">
                  Relic
                </a>
              </Link>

              <Link href="/#faq">
                <a className="cursor-pointer hover:text-primary transition-all md:text-sm font-life tracking-[0.2em] text-lg italic text-gray-300">
                  FAQ
                </a>
              </Link>

              <Link href="/#relic">
                <a className="cursor-pointer hover:text-primary transition-all md:text-sm font-life tracking-[0.2em] text-lg italic text-gray-300">
                  Docs
                </a>
              </Link>

              {/* <Link href='/#docs'>
                <a className='cursor-pointer hover:text-primary transition-all md:text-sm font-life tracking-[0.2em] text-xs italic text-gray-300'>
                  Docs
                </a>
              </Link>
              <Link href='/#gallery'>
                <a className='cursor-pointer hover:text-primary transition-all md:text-sm font-life tracking-[0.2em] text-xs italic text-gray-300'>
                  Gallery
                </a>
              </Link> */}
            </div>
          </div>
        </div>

        <div
          className={classnames(
            "flex md:flex-col items-center gap-4 md:mt-10 lg:static lg:w-auto",
            {
              "md:hidden": !isOpen,
            }
          )}
        >
          <Link href="/#relic">
            <a className="cursor-pointer hover:text-primary transition-all md:text-sm font-life tracking-[0.2em] text-lg italic text-gray-300">
              Connect
            </a>
          </Link>
          <Link href="/#relic">
            <a className="pr-6 md:pr-0 cursor-pointer text-primary transition-all md:text-sm font-life tracking-[0.2em] text-lg italic hover:text-gray-300">
              Mint
            </a>
          </Link>

          {/* socials */}
          <div className="flex items-center gap-3">
            <Link href="https://discord.gg/RxPKemgg">
              <a target="_blank">
                <FaDiscord className="hover:text-primary h-5 w-5 cursor-pointer transition-all" />
              </a>
            </Link>

            <Link href="https://twitter.com/iobattleground" target="_blank">
              <a target="_blank">
                <FaTwitter className="hover:text-primary h-5 w-5 cursor-pointer transition-all" />
              </a>
            </Link>

            <Link href="https://linktr.ee/thebattleground.io" target="_blank">
              <a target="_blank">
                <SiLinktree className="hover:text-primary h-5 w-5 cursor-pointer transition-all" />
              </a>
            </Link>
          </div>
        </div>

        <div
          className="absolute top-7 right-7 hidden md:flex z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <VscCloseAll className="w-9 h-9" />
          ) : (
            <BiMenuAltRight className="w-9 h-9" />
          )}
        </div>
      </div>
    </nav>
  );
}
