import { FunctionComponent } from "react";
import styles from "./RecCard1.module.css";

const RecCard1: FunctionComponent = () => {
  return (
    <button className={styles.recCard1}>
      <img
        className={styles.unsplash5mv818tzxeoIcon}
        alt=""
        src="../unsplash5mv818tzxeo@2x.png"
      />
      <div className={styles.holidayDetails}>
        <div className={styles.frameParent}>
          <div className={styles.baliParent}>
            <div className={styles.bali}>Bali</div>
            <div className={styles.d3n}>4D3N</div>
          </div>
          <div className={styles.div}>$899</div>
        </div>
      </div>
    </button>
  );
};

export default RecCard1;
