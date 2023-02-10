import { FunctionComponent } from "react";
import styles from "./Col3.module.css";

const Col3: FunctionComponent = () => {
  return (
    <button className={styles.col3}>
      <div className={styles.norwaycard}>
        <img
          className={styles.norwayimageIcon}
          alt=""
          src="../norwayimage@2x.png"
        />
        <div className={styles.destinationDetails}>
          <b className={styles.norway}>Norway</b>
          <div className={styles.details}>
            <div className={styles.div}>$895</div>
            <div className={styles.from}>from</div>
          </div>
        </div>
      </div>
    </button>
  );
};

export default Col3;
