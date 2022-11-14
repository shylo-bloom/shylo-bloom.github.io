import styles from "../../styles/Home.module.css";
import Tickets from "../../components/Tickets"
import { Footer } from "../../components/Footer";

export default function Main() {
  return (
    <div>
      <Tickets></Tickets>
      <Footer styles={styles}></Footer>
    </div>
  );
}
