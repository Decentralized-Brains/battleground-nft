/* eslint-disable @next/next/no-img-element */
import { ethers } from "ethers";
import Web3 from 'web3';
import { BrowserProvider, parseUnits } from "ethers";
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
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import storeABI from './contracts/StoreABI';

export default function NavBar({ className, account, setAccount }) {
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

  // CONNECT WALLET
  const connectWallet = async () => {
    try {
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      const web3 = new Web3(window.ethereum);
      const accounts = await web3.eth.getAccounts();
      setAccount(accounts[0]);

      toast.warn(
        "Wallet " +
        accounts[0].slice(0, 4) +
        "...." +
        accounts[0].slice(accounts[0].length - 4, accounts[0].length) +
        " connected!"
      );
    } catch (error) {
      console.log("Error connecting...");
    }
  };
  // logout meta
  const logoutMeta = async () => {
    toast.success("Wallet Disconnected!");
    setAccount("");
  };

  const smartcontractAddress = "0xAb1F8a6c7d9294BA69bA060765D3a52bcC7A807a";
  let signer = null;
  let provider = null;
  if (typeof window !== "undefined") {
    if (window.ethereum == null) {
      console.log("MetaMask not installed; using read-only defaults");
      provider = ethers.getDefaultProvider();
    } else {
      provider = new ethers.BrowserProvider(window.ethereum);
    }
  }

  // Minting portion
  const mintButtonClick = async () => {
    const price = ethers.parseEther("0.00000000000000001");
    signer = await provider.getSigner();
    let contract = new ethers.Contract(smartcontractAddress, storeABI, signer);
    await contract.safeMint({
      value: price,
      gasLimit:3e4
    });
    toast.success("Minting will be add to Chain.");
  };

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
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
        theme="dark"
      />
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

              <Link href="">
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
          {/* right side connect and mint button */}
          <button onClick={connectWallet} disabled={account ? true : false}>
            <span className="cursor-pointer hover:text-primary transition-all md:text-sm font-life tracking-[0.2em] text-lg italic text-gray-300">
              {account
                ? account.slice(0, 4) +
                "..." +
                account.slice(account.length - 4, account.length)
                : "Connect Wallet "}
            </span>
          </button>
          {account ? (
            <button onClick={logoutMeta}>
              <span className="cursor-pointer hover:text-primary transition-all md:text-sm font-life tracking-[0.2em] text-lg italic text-gray-300">
                Disconnect
              </span>
            </button>
          ) : (
            ""
          )}
          <button onClick={mintButtonClick} disabled={account ? false : true}>
            <span className="pr-6 md:pr-0 cursor-pointer text-primary transition-all md:text-sm font-life tracking-[0.2em] text-lg italic hover:text-gray-300">
              Mint
            </span>
          </button>
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
