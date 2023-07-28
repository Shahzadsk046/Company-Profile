import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrontEndDeveloperContainer from "../components/FrontEndDeveloperContainer";
import PythonDeveloperCard from "../components/PythonDeveloperCard";
import styles from "./Career.module.css";
const Career = () => {
  const navigate = useNavigate();

  const onSeeDetailTextClick = useCallback(() => {
    navigate("/detail-career");
  }, [navigate]);

  const onLogoTwiscode6Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.career}>
      <div className={styles.careerChild} />
      <div className={styles.career1}>Career</div>
      <FrontEndDeveloperContainer
        jobTitle="Front End Developer"
        roleTitle="Back End Developer"
        positionTitle="Mobile Apps Developer"
        onSeeDetailTextClick={onSeeDetailTextClick}
      />
      <FrontEndDeveloperContainer
        jobTitle="DevOps Engineer"
        roleTitle="Project Manager"
        positionTitle="Quality Control"
        applyTop="724px"
        rectangleDivCursor="unset"
        propLeft="calc(50% + 283.5px)"
        propWidth="196px"
      />
      <PythonDeveloperCard />
      <img className={styles.frontEnd1Icon} alt="" src="/frontend-1@2x.png" />
      <img className={styles.seoAndWeb1Icon} alt="" src="/seoandweb-1@2x.png" />
      <img
        className={styles.mobileDevelopment1Icon}
        alt=""
        src="/mobiledevelopment-1@2x.png"
      />
      <img className={styles.project1Icon} alt="" src="/project-1@2x.png" />
      <img className={styles.qc1Icon} alt="" src="/qc-1@2x.png" />
      <img className={styles.python1Icon} alt="" src="/python-1@2x.png" />
      <img className={styles.devops1Icon} alt="" src="/devops-1@2x.png" />
      <img className={styles.ui1Icon} alt="" src="/ui-1@2x.png" />
      <div className={styles.careerItem} />
      <img className={styles.careerInner} alt="" src="/vector-12.svg" />
      <img
        className={styles.logoTwiscode5}
        alt=""
        src="/logo-twiscode-5@2x.png"
      />
      <div className={styles.home}>Home</div>
      <div className={styles.work}>Work</div>
      <div className={styles.service}>Service</div>
      <div className={styles.ourCustomer}>Our Customer</div>
      <div className={styles.team}>Team</div>
      <div className={styles.career2}>Career</div>
      <div className={styles.contact}>Contact</div>
      <img className={styles.searchIcon} alt="" src="/search.svg" />
      <img
        className={styles.logoTwiscode6}
        alt=""
        src="/logo-twiscode-5@2x.png"
        onClick={onLogoTwiscode6Click}
      />
      <div className={styles.home}>Home</div>
      <div className={styles.work}>Work</div>
      <div className={styles.service}>Service</div>
      <div className={styles.ourCustomer}>Our Customer</div>
      <div className={styles.team}>Team</div>
      <div className={styles.career2}>Career</div>
      <div className={styles.contact}>Contact</div>
      <img className={styles.searchIcon} alt="" src="/search.svg" />
    </div>
  );
};

export default Career;
