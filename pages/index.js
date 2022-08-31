import Head from "next/head";
import AlbumCover from "../components/AlbumCover";
import EmblaCarousel from "../components/EmblaCarousel";
import { Title } from "../components/Title";
import styles from "../styles/Home.module.css";
import { useWindowSize } from "../components/useWindowSize";
import { useEffect, useState } from "react";

const SLIDE_COUNT = 5;
const slides = Array.from(Array(SLIDE_COUNT).keys());

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
    console.log(e);
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
        <p>Home</p>
        <p>About</p>
        <p>Contact Us</p>
        <p>Music</p>
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

        {/* <AlbumCover></AlbumCover> */}

        <EmblaCarousel slides={slides} />

        <div className="center">
          <button
            className="cd-btn cd-modal-trigger"
            onClick={(e) => handleOpenClick(e)}
            variant="contained"
            color="secondary"
          >
            Click
          </button>
        </div>

        <div className={`cd-modal ${modalWindowClass}`}>
          <div className="modal-content">
            <h1>Join Our Mailing List</h1>
            <p>
              Stay informed on upcoming shows, albums, promos tours and
              merchandise !
            </p>
            <p></p>
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

        {/* <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.js</code>
        </p> */}

        {/* <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div> */}
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
