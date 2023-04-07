/* eslint-disable @next/next/no-img-element */

import Image1 from "../assets/images/viking-ship.png";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import Footer from "../components/footer";
import Link from "next/link";
import Fade from "react-reveal/Fade";
import { FaTwitter, FaInstagram, FaDiscord, FaFacebook } from "react-icons/fa";
import { BiMenuAltRight } from "react-icons/bi";
import { VscCloseAll } from "react-icons/vsc";
import LogoAnimated from "../assets/logo-animated.gif";
import Logo from "../assets/logo.png";
import RelicHover from "../components/RelicHover";
// import { Parallax, useParallax } from 'react-scroll-parallax';

export default function Home() {
  // const imageParallax = useParallax({
  //   rotate: [0, 360],
  // });
  return (
    <div className="relative h-screen">
      {/* <img
        src={Image1.src}
        className='w-screen h-screen blur-lg brightness-[0.4] fixed -z-50 object-cover'
        alt='Battleground'
      /> */}

      <div className="flex items-center gap-5 absolute top-5 right-5 z-50">
        <FaDiscord className="hover:text-primary h-8 w-8 cursor-pointer transition-all" />
        <FaFacebook className="hover:text-primary h-8 w-8 cursor-pointer transition-all" />
        <FaInstagram className="hover:text-primary h-8 w-8 cursor-pointer transition-all" />
        <FaTwitter className="hover:text-primary h-8 w-8 cursor-pointer transition-all" />
      </div>

      <section className="h-screen mt-0">
        <div className="h-full relative flex flex-col">
          <div className="w-full flex justify-center">
            <img
              src={Logo.src}
              className="h-80 z-20 mt-20 rounded-full overflow-hidden"
              alt=""
            />
          </div>

          {/* <video
            className='aspect-square w-96 md:w-56 object-cover self-center mt-32 rounded-3xl'
            autoPlay
            muted
            loop
            playsInline
          >
            <source src={'/assets/videos/3.mp4'} type='video/mp4' />
          </video> */}

          {/* <Parallax /> */}

          {/* <div ref={imageParallax.ref}>gtfdsgdf</div> */}
          <img
            src={Image1.src}
            className="h-full w-full object-cover top-0 left-0 absolute -z-30"
            alt=""
          />

          <Fade bottom>
            <div className="absolute left-0 bottom-20 w-full p-5">
              <div className="container flex flex-col gap-5">
                <Link href="/">
                  <div className="h-20 w-80 md:w-full bg-primary flex justify-center items-center uppercase font-bold cursor-pointer rounded-xl hover:bg-white transition-all duration-[400ms] text-black font-life text-2xl tracking-widest self-center">
                    Enter
                  </div>
                </Link>

                <div className="flex-[3] flex flex-col justify-between bg-[#0000008c] p-5 rounded-2xl text-center">
                  <h1 className="text-white text-5xl md:text-3xl sm:text-xl font-life">
                    Welcome To The{" "}
                    <span className="primary_color_animation">
                      Battleground
                    </span>
                  </h1>
                </div>
              </div>
            </div>
          </Fade>
        </div>
        {/* <p className='mt-10'>
          Battleground is a Play-to-Earn “fight-verse” ecosystem that bridges
          the gap between the gaming, gambling, and social community.
        </p> */}
      </section>

      {/* <Footer /> */}
    </div>
  );
}
