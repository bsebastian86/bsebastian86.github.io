import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./Col1.module.css";

type Col1Type = {
  parisImage?: string;
  paris?: string;
  prop?: string;

  /** Style props */
  detailsWidth?: Property.Width;
  propDisplay?: Property.Display;
  propWidth?: Property.Width;
  fromLeft?: Property.Left;
};

const Col1: FunctionComponent<Col1Type> = ({
  parisImage,
  paris,
  detailsWidth,
  prop,
  propDisplay,
  propWidth,
  fromLeft,
}) => {
  const detailsStyle: CSS.Properties = useMemo(() => {
    return {
      width: detailsWidth,
    };
  }, [detailsWidth]);

  const divStyle: CSS.Properties = useMemo(() => {
    return {
      display: propDisplay,
      width: propWidth,
    };
  }, [propDisplay, propWidth]);

  const fromStyle: CSS.Properties = useMemo(() => {
    return {
      left: fromLeft,
    };
  }, [fromLeft]);

  return (
    <button className={styles.col1}>
      <div className={styles.pariscard}>
        <img className={styles.parisimageIcon} alt="" src={parisImage} />
        <div className={styles.destinationDetails}>
          <b className={styles.paris}>{paris}</b>
          <div className={styles.details} style={detailsStyle}>
            <div className={styles.div} style={divStyle}>
              {prop}
            </div>
            <div className={styles.from} style={fromStyle}>
              from
            </div>
          </div>
        </div>
      </div>
    </button>
  );
};

export default Col1;
