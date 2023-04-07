/* eslint-disable @next/next/no-img-element */
// import Image1 from "../assets/images/pengzhen-zhang-1.jpg";
import Roadmap from "../components/roadmap";
import Fade from "react-reveal/Fade";
import NavBar from "../components/NavBar";
import Collapsible from "../components/Collapsible";
import { FaTwitter, FaDiscord } from "react-icons/fa";
import { SiLinktree } from "react-icons/si";
import Link from "next/link";
import Footer from "../components/footer";
// import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import RelicHover from "../components/RelicHover";
import { PieChart } from "react-minimal-pie-chart";
import Image3 from "../assets/images/viking-ship.png";
import Logo from "../assets/logo.png";
import { useEffect, useState } from "react";
import { NextSeo } from "next-seo";
// import ReactPageScroller from "react-page-scroller";

function Header({ title, className }) {
  return (
    <div className="flex flex-col mb-10">
      <h2 className="font-life font-[900] text-6xl md:text-3xl italic uppercase text-primary">
        {title}
      </h2>
      <div className="w-20 h-1 bg-orange-400 mt-2" />
    </div>
  );
}

const pieData = [
  {
    id: 1,
    title: "in game plus staking/farming rewards",
    value: 45,
    color: "#fbc02d",
  },
  { id: 2, title: "Public Sale", value: 15, color: "#9ccc65" },
  { id: 3, title: "Foundation", value: 10, color: "#26a69a" },
  { id: 4, title: "Seed round", value: 10, color: "#29b6f6" },
  { id: 5, title: "Advisors", value: 10, color: "#5c6bc0" },
  { id: 6, title: "Private sale", value: 5, color: "#ab47bc" },
  { id: 7, title: "Copper Round", value: 5, color: "#ef5350" },
];

export default function Home() {
  // const [scrollY, setScrollY] = useState(1);
  const [opacity, setOpacity] = useState(100);

  useEffect(() => {
    const handleScroll = () => {
      // setScrollY(window.scrollY);
      const screenHeight = screen.height || 1;
      const p = 1 / screenHeight;
      const percentage = p * window.scrollY;
      const op = 1 - percentage;
      // console.log({ op });
      let finalOp;
      if (op >= 0) {
        finalOp = op;
      } else {
        finalOp = 0;
      }
      setOpacity(finalOp);
    };
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const description =
    "The Battleground is a Play-to-Earn &quot;fight-verse&quot; ecosystem that bridges the gap between the gaming, gambling, and social community. 3,333 unique warrior NFTs will be minted during the development of the ecosystem that will represent the playable characters in the battleground metaverse";
  const title =
    "The Battleground | Play-to-Earn &quot;fight-verse&quot; ecosystem";
  const canoniaclURL = "https://thebattleground.io";
  const keywords =
    "Battle Royale, NFT GAME, DUELS, Factions, Betting, MINT NFTS, STAKING";

  // console.log({ opacity });
  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={canoniaclURL}
        keywords={keywords}
        openGraph={{
          url: canoniaclURL,
          title: title,
          description: description,
          images: [
            {
              url: canoniaclURL + Logo.src,
              width: 800,
              height: 800,
              alt: title,
              type: "image/png",
            },
          ],
          site_name: title,
        }}
        twitter={{
          handle: "@iobattleground",
          site: "@iobattleground",
          cardType: "summary_large_image",
        }}
      />
      <img
        src={Image3.src}
        className="w-screen h-screen blur-sm brightness-[0.4] fixed -z-50 object-cover"
        alt="Battleground"
      />

      <NavBar className="fixed top-0 left-0" />
      {/* <section className='container mb-12 px-5 md:px-2'>
        <Fade>
          <img className='h-[715px] object-cover mt-20' src={Image1.src} />
        </Fade>
      </section> */}

      {/* <div className='border-t-[1px] border-blue-200 container' /> */}

      <section
        className="h-screen fixed top-0 left-0 w-full -z-10"
        style={{
          opacity: opacity,
        }}
      >
        <div className="h-full w-full absolute bg-[#0000004c]" />
        <img
          src={Image3.src}
          className="h-screen w-full object-cover absolute -z-10"
          alt=""
        />

        <div className="absolute flex flex-col items-center h-full w-full">
          <img
            src={Logo.src}
            className="z-20 mt-20 w-[500px] sm:w-[200px] rounded-full overflow-hidden"
            alt=""
          />
          {/* <h1 className='text-9xl font-bold font-life'>Battleground</h1>
          <div className='w-48 h-1 bg-primary mt-2' /> */}
        </div>
      </section>

      <div className="h-screen md:h-96"></div>

      <div className="h-80"></div>

      <section
        className="container flex md:flex-col gap-10 px-10 md:px-2 font-folk pt-40 md:-mt-60"
        id="welcome"
      >
        <Fade>
          <div className="flex-[2]">
            <Header title="Welcome to The Battleground" />
            <p className="mt-5">
              The Battleground is a Play-to-Earn &quot;fight-verse&quot;
              ecosystem that bridges the gap between the gaming, gambling, and
              social community. 3,333 unique warrior NFTs will be minted during
              the development of the ecosystem that will represent the playable
              characters in the battleground metaverse. The warrior NFTs are
              composed of 3 factions: Vikings, Samurai and Gladiator. Each has
              their own unique fighting styles, traits, and abilities.
            </p>
          </div>

          {/* <div className='flex-[1] grid gap-5 '>
            <img
              src={Image1.src}
              className='h-full w-full object-cover rounded-md'
            />
          </div> */}
        </Fade>
      </section>

      <Fade>
        <section className="container gap-5 mb-32 mt-32">
          <div className="flex md:flex-col gap-5 items-center justify-between relative">
            <div>
              <RelicHover
                videoUrl="/assets/videos/1.mp4"
                title="Common Relic"
              />
              <p className="mt-5 text-center h-20 sm:h-fit">
                Eligible for 1/2000 Common Warrior
                <br />
                Staking Rewards
                <br />
                Access to Battleground Beta
                <br />
              </p>
            </div>

            <div>
              <RelicHover videoUrl="/assets/videos/2.mp4" title="Epic Relic" />
              <p className="mt-5 text-center h-20 sm:h-fit">
                Eligible for 1/1000 Rare Warrior <br />
                Higher Staking rewards <br />
                Eligible for 1/33 Creatures
              </p>
            </div>

            <div>
              <RelicHover
                videoUrl="/assets/videos/3.mp4"
                title="Legendary Relic"
              />
              <p className="mt-5 text-center h-20 sm:h-fit">
                Eligible for 1/333 Legendary Warrior
                <br />
                Above Maximum Staking Rewards <br /> Eligible for 1/33 Creatures
              </p>
            </div>
          </div>
        </section>
      </Fade>

      {/* <div className='border-t-[1px] border-blue-200' /> */}

      <section className="container px-10 md:px-2 py-32">
        <Fade bottom>
          <Header title="Lore" />

          <p className="mt-5">
            History is riddled with accounts of visitors from beyond our cosmos,
            imbuing humanity with knowledge far beyond our comprehension. From
            the angels of Babol to the Olympians of the Pantheon, every culture
            has reported interacting with these other worldly beings. However,
            each society tried to erase one critical detail from their dealings
            with the God&apos;s: the Relics. These God&apos;s dispersed the
            Relics throughout time, copying the DNA of the most skilled Warriors
            from each era to battle for their amusement on a planet solely
            dedicated to combat. The legendary Samurai, Myomoto Musashi, the
            fearless Alexander the Great, and the Viking hero Ragnar Lothbrok,
            were the first specimens selected to serve as the DNA templates. The
            God&apos;s exercised the true power of the Relics, creating 3,333
            copies of each champion and spreading them across the world. Now,
            the three factions must battle for dominance, glory, and honor in
            Battleground. Alea iacta est. ~
          </p>
        </Fade>
      </section>

      {/* <div className='border-t-[1px] border-blue-200' /> */}

      <section className="container px-10 md:px-2 py-32" id="about">
        <Fade bottom>
          <Header title="About" />

          <p className="mt-5">
            The Battleground is a game for the community formed by a group of
            avid gamers and crypto enthusiasts with the goal to create a
            decentralized NFT gaming ecosystem with gameplay options chosen by
            the community, and products that continuously deliver long term
            value to the community. Upon the official release of the game, the
            community DAO will take full control over the direction of the game,
            treasury and community wallet.
          </p>
        </Fade>
      </section>

      {/* <div className='border-t-[1px] border-blue-200' /> */}

      <section
        className="px-10 md:px-2 py-32 h-screen md:h-fit flex flex-col justify-center"
        id="gamemodes"
      >
        <Fade bottom>
          <div className="container">
            <Header title="Game Modes" />

            <div className="mt-20">
              <h3 className="text-2xl uppercase text-primary font-life italic font-semibold">
                Game Mode I{" "}
                <span className="text-orange-400 font-normal">(Arena)</span>
              </h3>
              <div>
                <ul className="ml-14 sm:ml-8">
                  <li>
                    - Arena, Warrior&apos;s can be deployed into Cage Matches,
                    1v1&apos;s, 2v2s, 3v3s
                  </li>
                  <li>- Brawl (4-12 Warriors)</li>
                  <li>- Round of 16 Tournament </li>
                </ul>
              </div>
            </div>

            <div className="mt-20">
              <h3 className="text-2xl uppercase text-primary font-life italic font-semibold">
                Game Mode II{" "}
                <span className="text-orange-400 font-normal">
                  (Battleground Smash)
                </span>
              </h3>
              <div>
                <p className="ml-14 sm:ml-8">
                  Battleground Smash, a &quot;Super Smash Bros&quot; style of
                  Gameplay. Fighter&apos;s will be placed in a moving frame with
                  two lives, those who exit this field of view will lose a life.
                  The last player standing will be declared the winner.
                </p>
              </div>
            </div>

            <div className="mt-20">
              <h3 className="text-2xl uppercase text-primary font-life italic font-semibold">
                Game Mode III{" "}
                <span className="text-orange-400 font-normal">
                  (Battleground Royale)
                </span>
              </h3>
              <div>
                <p className="ml-14 sm:ml-8">
                  Battleground Royale, an interactive play to earn Battle Royale
                  game mode playable on Xbox, PS4, PC, and Oculus VR (TBA).
                  <br />- Additional Game Modes determined by Community
                </p>
              </div>
            </div>
          </div>
        </Fade>
      </section>

      {/* <div className='border-t-[1px] border-blue-200' /> */}

      <section className="container px-10 md:px-2 py-32" id="roadmap">
        <Fade bottom>
          <Header title="Roadmap" />

          <Roadmap />
        </Fade>
      </section>

      {/* <div className='border-t-[1px] border-blue-200' /> */}

      <section className="container px-10 md:px-2 py-32" id="relic">
        <Fade bottom>
          <Header title="Relic Token" />

          <div className="flex sm:flex-col sm:items-center gap-5">
            <p className="mt-5">
              $Relic is the utility token of the Battleground Ecosystem.
              <br />
              All in game purchases, wagers and the mint of the last faction
              will be in the $Relic.
              <br />
              Following the mint of the Viking Faction, staking options for
              battleground NFTs will become available.
              <br />
              NFT stakers will receive daily $Relic token yield usable for in
              game assets and future warrior collections
              <br />
              Upon the release of the Battleground Beta, Warriors will be able
              to use $Relic tokens accrued to upgrade their warriors in game
              attributes to improve in-game $Relic rewards.
            </p>

            <video
              className="aspect-square w-80 object-cover"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="/assets/videos/3.mp4" type="video/mp4" />
            </video>
          </div>
        </Fade>
      </section>

      {/* <div className='border-t-[1px] border-blue-200 container' /> */}

      <div className="bg-gray-100 pt-20">
        <section className="container mx-auto">
          {/* <Header title='Tokenomics' className='text-center' />*/}

          <div className="flex flex-col mb-10">
            <h2 className="font-life font-[900] text-6xl md:text-3xl  italic uppercase text-primary text-center">
              Tokenomics
            </h2>
            <div className="w-20 h-1 bg-orange-400 mt-2 self-center" />
          </div>
          <div className="py-32 flex justify-center items-center ">
            <div className="flex md:flex-col md:items-center p-5">
              <PieChart
                className="w-[500px] md:w-[300px] sm:w-[150px]"
                data={pieData}
                style={{
                  // height: 500,
                  // width: 500,
                  fontFamily: "Arial, sans-serif",
                  fontSize: "4px",
                }}
                radius={PieChart.defaultProps.radius - 6}
                lineWidth={60}
                segmentsStyle={{ transition: "stroke .3s", cursor: "pointer" }}
                animate
                label={({ dataEntry }) =>
                  Math.round(dataEntry.percentage) + "%"
                }
                labelPosition={70}
                labelStyle={{
                  fill: "#fff",
                  opacity: 0.75,
                  pointerEvents: "none",
                }}
              />

              <div className="flex flex-col py-5 gap-6">
                {pieData.map((item) => {
                  return (
                    <div
                      className="font-life text-4xl md:text-2xl sm:text-xl tracking-wider"
                      key={item.id}
                      style={{
                        color: item.color,
                      }}
                    >
                      {item.title}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* <div className='border-t-[1px] border-blue-200 container' /> */}

      <section className="container px-10 md:px-2 py-32" id="faq">
        <Fade bottom>
          <Header title="FAQ" />

          <Collapsible
            className="mt-10"
            title="What is The Battleground?"
            content={
              <ul className="list-inside flex flex-col gap-3">
                <li>
                  The Battleground is a Play-to-Earn Blockchain Game. Three
                  factions of warriors will fight and battle to the death for
                  $RELIC Token
                </li>
                <li>
                  Players and spectators alike can wager bets on warriors using
                  the battleground ecosystem utility $RELIC Token
                </li>
              </ul>
            }
          />

          <Collapsible
            title="When will Battleground Relic mint?"
            content={
              <ul className="list-inside flex flex-col gap-3">
                <li>
                  Battleground Relics are stealth drop without any warning. Join
                  the Discord and follow the twitter for updates
                </li>
              </ul>
            }
          />
          <Collapsible
            title="What is The Battleground Relic mint price?"
            content={
              <ul className="list-inside flex flex-col gap-3">
                <li>Mint is free besides gas.</li>
                <li>
                  The Battlegrounds team is committed to rewarding first
                  adopters and believe a free mint for our first NFT collection
                  is the best foundation for building an inclusive social gaming
                  community
                </li>
              </ul>
            }
          />
          <Collapsible
            title="What is the utility of a Battleground Relic?"
            content={
              <ul className="list-inside flex flex-col gap-3">
                <li>
                  Unburned Relics will be available for staking after Mint. The
                  Relics will have the highest staking yields so players will
                  choose their own fate…
                </li>

                <li>
                  Staked Relics will have a chance to receive a 1/33 creatures…
                </li>
              </ul>
            }
          />

          <Collapsible
            title="What is the $Relic Utility Token?"
            content={
              <ul className="list-inside flex flex-col gap-3">
                <li>
                  The $RELIC utility Token is what circulates and powers the
                  battlegrounds ecosystem
                </li>

                <li>
                  In-game purchases, wagers, and the last faction mint will only
                  be purchasable in $RELIC Token
                </li>

                <li>Much more to come…</li>
              </ul>
            }
          />

          <Collapsible
            title="When will the Viking Faction Mint?"
            content={
              <ul className="list-inside flex flex-col gap-3">
                <li>4-6 weeks after the stealth drop of the Relics</li>
              </ul>
            }
          />

          <Collapsible
            title="Why should I HODL?"
            content={
              <ul className="list-inside flex flex-col gap-3">
                <li>
                  The goal of the battleground community is to build a gaming
                  fight-verse governed by the players and for the players.
                </li>
                <li>
                  Genesis Season will provide players with staking yields,
                  airdrops, and first access to the game.
                </li>
                <li>
                  Staked Warriors will be eligible to vote on DAO decisions,
                  Community Wallet Funds, and receive passive Relic tokens.
                </li>

                <li>The future is in your hands…</li>
              </ul>
            }
          />
        </Fade>
      </section>

      <section className="container bg-primary text-black px-32 md:px-5 py-7 justify-between flex md:flex-col md:text-center gap-3 md:gap-5 rounded-sm mt-20">
        <p className="font-life text-2xl tracking-[0.2em] font-bold uppercase">
          Join Us On These Platforms
        </p>

        <div className="flex items-center md:justify-center gap-10">
          <Link href="https://discord.gg/655jv8agAE" target="_blank">
            <a target="_blank">
              <FaDiscord className="hover:text-white h-7 w-7 cursor-pointer transition-all" />
            </a>
          </Link>

          <Link href="https://twitter.com/battlegroundxyz" target="_blank">
            <a target="_blank">
              <FaTwitter className="hover:text-white h-7 w-7 cursor-pointer transition-all" />
            </a>
          </Link>

          <Link href="https://linktr.ee/battlegroundxyz" target="_blank">
            <a target="_blank">
              <SiLinktree className="hover:text-white h-7 w-7 cursor-pointer transition-all" />
            </a>
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
