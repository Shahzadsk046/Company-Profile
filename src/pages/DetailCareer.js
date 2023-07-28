import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./DetailCareer.module.css";
const DetailCareer = () => {
  const navigate = useNavigate();

  const onLogoTwiscode6Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.detailCareer}>
      <div className={styles.detailCareerChild} />
      <div className={styles.frontEndDeveloper}>Front End Developer</div>
      <div className={styles.requirementsContainer}>
        <p className={styles.requirements}>Requirements :</p>
        <p className={styles.blankLine}>&nbsp;</p>
        <p className={styles.blankLine}>
          - Frontend Dev Candidate must possess at least Diploma,
        </p>
        <p className={styles.blankLine}>
          {" "}
          Bachelor's Degree in Engineering (Computer/Telecommunication)
        </p>
        <p className={styles.blankLine}> or equivalent.</p>
        <p className={styles.blankLine}>
          - At least 1 Year(s) of working experience in the related field is
        </p>
        <p className={styles.blankLine}> required for this position.</p>
        <p
          className={styles.blankLine}
        >{`- Preferably Staff (non-management & non-supervisor) specialized`}</p>
        <p className={styles.blankLine}>
          {" "}
          in IT/Computer - Software or equivalent.
        </p>
        <p className={styles.blankLine}>&nbsp;</p>
        <p className={styles.blankLine}>&nbsp;</p>
        <p className={styles.requirements}>Frontend Expertise:</p>
        <p className={styles.blankLine}>&nbsp;</p>
        <p className={styles.blankLine}>- API implementation</p>
        <p className={styles.blankLine}>
          - Experience in html, CSS, ReactJS and Angular Framework
        </p>
        <p className={styles.blankLine}>- Experience in using Git</p>
        <p className={styles.blankLine}>
          - Strong logical and analytical thinking
        </p>
        <p className={styles.blankLine}>- Willing to learn new technology</p>
        <p className={styles.blankLine}>- Fresh Graduated are welcome</p>
      </div>
      <div className={styles.detailCareerItem} />
      <div className={styles.detailCareerInner} />
      <div className={styles.submitYourApplication}>
        Submit Your Application
      </div>
      <div className={styles.fullName}>Full Name</div>
      <div className={styles.rectangleDiv} />
      <div className={styles.email}>Email</div>
      <div className={styles.detailCareerChild1} />
      <div className={styles.detailCareerChild2} />
      <div className={styles.detailCareerChild3} />
      <div className={styles.detailCareerChild4} />
      <div className={styles.phone}>Phone</div>
      <div className={styles.submit}>Submit</div>
      <div className={styles.attachYourResumecv}>
        Attach your resume/CV .Pdf
      </div>
      <div className={styles.browse}>Browse</div>
      <div className={styles.detailCareerChild5} />
      <img className={styles.vectorIcon} alt="" src="/vector-12.svg" />
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
      <div className={styles.career}>Career</div>
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
      <div className={styles.career}>Career</div>
      <div className={styles.contact}>Contact</div>
      <img className={styles.searchIcon} alt="" src="/search.svg" />
    </div>
  );
};

export default DetailCareer;
