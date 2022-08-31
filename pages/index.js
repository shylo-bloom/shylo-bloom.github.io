import Head from "next/head";
import EmblaCarousel from "../components/EmblaCarousel";
import { Title } from "../components/Title";
import styles from "../styles/Home.module.css";
import { useWindowSize } from "../components/useWindowSize";
import { useEffect, useState } from "react";
import { EmailForm } from "../components/EmailForm";

const SLIDE_COUNT = 5;
const slides = Array.from(Array(SLIDE_COUNT).keys());

const info = [
  {
    song_title: "song title 1",
    mp3: "./mp3/WhenTheMorningComes.mp3"
  },
  {
    song_title: "song title 2",
    mp3: "./mp3/file/path"
  },
  {
    song_title: "song title 3",
    mp3: "./mp3/file/path"
  },
  {
    song_title: "song title 4",
    mp3: "./mp3/file/path"
  },
  {
    song_title: "song title 5",
    mp3: "./mp3/file/path"
  }
]

export default function Home() { 
  const size = useWindowSize();
  const [modalWindowClass, setModalWindowClass] = useState("");
  const [transitionBackgroundClass, setTransitionBackgroundClass] =
    useState("");

  const [menuZIndex, setMenuZIndex] = useState(2);

  const [scroll, setScroll] = useState("");

  let frameProportion = 1.78,
    frames = 25; //png frame aspect ratio & number of png frames
  let windowWidth = size.width,
    windowHeight = size.height,
    layerHeight = null,
    layerWidth = null;

  const setLayerDimensions = () => {
    if (windowWidth / windowHeight > frameProportion) {
      layerWidth = windowWidth;
      layerHeight = layerWidth / frameProportion;
    } else {
      layerHeight = windowHeight * 1.2;
      layerWidth = layerHeight * frameProportion;
    }
  };

  const handleScroll = () => {
    console.log("scrolling")
    setScroll("scrolling")
  }

  const handleOpenClick = (e) => {
    e.preventDefault();
    console.log(e);
    setTransitionBackgroundClass("visible opening");
    setMenuZIndex(1);
    setTimeout(function () {
      setModalWindowClass("visible");
    }, 300);
  };

  const handleCloseClick = (e) => {
    e.preventDefault();
    setTransitionBackgroundClass("visible closing");
    setModalWindowClass("");
    setTransitionBackgroundClass("");
    setMenuZIndex(2);
  };

  useEffect(() => {
    if (!window.requestAnimationFrame) {
      setTimeout(setLayerDimensions, 300);
    } else {
      window.addEventListener("scroll", handleScroll)
      window.requestAnimationFrame(setLayerDimensions);
    }
  }, [size, handleScroll]);

  return (
    <div className={styles.container}>
      <nav className={`menu ${scroll}`}
                  style={{
                    zIndex: menuZIndex,
                  }}>
        <Title></Title>
        <div className="links">
        <a className="menu__link"><p>Shop</p></a>
        <a className="menu__link"><p>Tickets</p></a>
        <a className="menu__link"><p>Contact</p></a>
        <a className="menu__link"><p>Music</p></a>
        </div>
      </nav>
      {/* {size.width}px / {size.height}px */}
      <Head>
        <title>Website</title>
        <meta name="description" content="Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="cd-main-content">
        {/* <h1 className={styles.title}><a>Shylo Bloom</a></h1> */}

        {/* <h5>Harvest - Released ©2022</h5> */}

        <EmblaCarousel slides={slides} info={info} />

        <div className="center">
          <button
            className="cd-btn cd-modal-trigger"
            onClick={(e) => handleOpenClick(e)}
            variant="contained"
            color="secondary"
          >
            Download
          </button>
        </div>

        <div className={`cd-modal ${modalWindowClass}`}>
          <div className="modal-content">
            <h1>Join Our Mailing List</h1>
            <p>
              Stay informed on upcoming shows, albums, promos tours and
              merchandise !
            </p>
            <EmailForm></EmailForm>
          </div>
          <button
            className="modal-close"
            onClick={(e) => handleCloseClick(e)}
            variant="contained"
            color="secondary"
          ></button>
        </div>

        <div className={`cd-transition-layer ${transitionBackgroundClass}`}>
          <div
            className={`bg-layer `}
            style={{
              Width: `${layerWidth * frames}px`,
              Height: `${layerHeight}px`,
            }}
          ></div>
        </div>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          ©2022<span className={styles.logo}>
          <img
            className="cd-album-cover"
            src="/vercel.svg"
            alt="Vercel Logo"
            width={72}
            height={16}
          />
          </span>
        </a>
      </footer>
    </div>
  );
}
