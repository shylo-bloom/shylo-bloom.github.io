import Head from "next/head";
import styles from "../styles/Home.module.css";
import Main from "../components/Main"
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Main></Main>
      <Footer styles={styles}></Footer>
    </div>
  );
}
