import styles from "../../styles/Home.module.css";
import Contact from "../../components/Contact"
import { Footer } from "../../components/Footer";

export default function Main() {
  return (
    <div>
      <Contact></Contact>
      <Footer styles={styles}></Footer>
    </div>
  );
}
