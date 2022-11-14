import Head from "next/head";
import Link from 'next/link';
import { Title } from "./Title";
import styles from "../styles/Home.module.css";
import { useWindowSize } from "./useWindowSize";
import { useEffect, useState } from "react";
import { Radio } from "./Radio";
import { NavLinks } from "./NavLinks";

export default function Shop() {
  const size = useWindowSize();

  const [scroll, setScroll] = useState("");

  const handleScroll = () => {
    setScroll("scrolling");
  };

  useEffect(() => {
      window.addEventListener("scroll", handleScroll);
  }, [size, handleScroll]);

  return (
    <div className={styles.container}>
      <nav
        className={`menu ${scroll}`}
      >
        <Title></Title>
        <NavLinks></NavLinks>
        <div className="nav-version nav-version__about hide-on-mobile"><span>Harvest &nbsp;</span><span>Vol.1<span>—</span></span>
      </div>
      </nav>
      <Head>
        <title>Website</title>
        <meta name="description" content="Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>          
      <main className="cd-main-content">

        <Radio></Radio>

      <div className="side-note hide-on-mobile"><span>ø &nbsp;</span><span>•••<span>&nbsp;—</span></span></div>
      </main>
    </div>
  );
}
