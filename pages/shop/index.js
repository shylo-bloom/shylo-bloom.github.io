import styles from "../../styles/Home.module.css";
import Shop from "../../components/Shop"
import { Footer } from "../../components/Footer";

export default function Main() {
  return (
    <div>
      <Shop></Shop>
      <Footer styles={styles}></Footer>
    </div>
  );
}
