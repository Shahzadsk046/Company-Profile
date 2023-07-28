import { memo, useMemo } from "react";
import styles from "./FrontEndDeveloperContainer.module.css";
const FrontEndDeveloperContainer = memo(
  ({
    jobTitle,
    roleTitle,
    positionTitle,
    applyTop,
    rectangleDivCursor,
    propLeft,
    propWidth,
    onSeeDetailTextClick,
  }) => {
    const groupDivStyle = useMemo(() => {
      return {
        top: applyTop,
      };
    }, [applyTop]);

    const seeDetailStyle = useMemo(() => {
      return {
        cursor: rectangleDivCursor,
      };
    }, [rectangleDivCursor]);

    const mobileAppsDeveloperStyle = useMemo(() => {
      return {
        left: propLeft,
        width: propWidth,
      };
    }, [propLeft, propWidth]);

    return (
      <div className={styles.rectangleParent} style={groupDivStyle}>
        <div className={styles.groupChild} />
        <div className={styles.groupItem} />
        <div className={styles.apply}>Apply</div>
        <div
          className={styles.seeDetail}
          onClick={onSeeDetailTextClick}
          style={seeDetailStyle}
        >
          See Detail
        </div>
        <div className={styles.frontEndDeveloper}>{jobTitle}</div>
        <div className={styles.groupInner} />
        <div className={styles.rectangleDiv} />
        <div className={styles.apply1}>Apply</div>
        <div className={styles.seeDetail1}>See Detail</div>
        <div className={styles.backEndDeveloper}>{roleTitle}</div>
        <div className={styles.groupChild1} />
        <div className={styles.groupChild2} />
        <div className={styles.apply2}>Apply</div>
        <div className={styles.seeDetail2}>See Detail</div>
        <div
          className={styles.mobileAppsDeveloper}
          style={mobileAppsDeveloperStyle}
        >
          {positionTitle}
        </div>
      </div>
    );
  }
);

export default FrontEndDeveloperContainer;
