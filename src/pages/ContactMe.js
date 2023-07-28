import styles from "./ContactMe.module.css";
const ContactMe = () => {
  return (
    <div className={styles.contactMe}>
      <div className={styles.pleaseContactMe}>
        Please contact me if you need a UI/UX Design freelancer:
      </div>
      <div className={styles.aprirandiigmailcomWrapper}>
        <b className={styles.aprirandiigmailcom}>aprirandii@gmail.com</b>
      </div>
    </div>
  );
};

export default ContactMe;
