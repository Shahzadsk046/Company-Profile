import { memo } from "react";
import styles from "./PythonDeveloperCard.module.css";
const PythonDeveloperCard = memo(() => {
  return (
    <div className={styles.rectangleParent}>
      <div className={styles.groupChild} />
      <div className={styles.groupItem} />
      <div className={styles.apply}>Apply</div>
      <div className={styles.seeDetail}>See Detail</div>
      <div className={styles.phytonDeveloper}>Phyton Developer</div>
      <div className={styles.groupInner} />
      <div className={styles.rectangleDiv} />
      <div className={styles.apply1}>Apply</div>
      <div className={styles.seeDetail1}>See Detail</div>
      <div className={styles.uixDesigner}>UIX Designer</div>
    </div>
  );
});

export default PythonDeveloperCard;
