import styles from "../../styles/Home.module.css";
import Music from "../../components/Music"
import { Footer } from "../../components/Footer";

export default function Main() {
  return (
    <div>
      <Music></Music>
      <Footer styles={styles}></Footer>
    </div>
  );
}
