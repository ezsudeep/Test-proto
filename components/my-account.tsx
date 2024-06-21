import type { NextPage } from "next";
import styles from "./my-account.module.css";

export type MyAccountType = {
  className?: string;
};

const MyAccount: NextPage<MyAccountType> = ({ className = "" }) => {
  return (
    <div className={[styles.myAccount, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.frameContainer}>
            <div className={styles.registeredUsersWrapper}>
              <div className={styles.registeredUsers}>Registered Users</div>
            </div>
            <div className={styles.haveAnAccountSignInNowWrapper}>
              <div className={styles.haveAnAccount}>
                Have an Account? Sign In Now.
              </div>
            </div>
          </div>
          <div className={styles.loginToDashboardWrapper}>
            <div className={styles.registeredUsers}>Login To Dashboard</div>
          </div>
          <div className={styles.frameChild} />
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.frameContainer}>
            <div className={styles.registeredUsersWrapper}>
              <div className={styles.registeredUsers}>New to ProtozoaHost?</div>
            </div>
            <div className={styles.haveAnAccountSignInNowWrapper}>
              <div className={styles.haveAnAccount}>
                Create an account to get started today.
              </div>
            </div>
          </div>
          <div className={styles.loginToDashboardWrapper}>
            <div className={styles.registeredUsers}>Register Account</div>
          </div>
          <div className={styles.frameChild} />
        </div>
        <div className={styles.frameParent2}>
          <div className={styles.registeredUsersWrapper}>
            <div className={styles.registeredUsers}>Useful Links</div>
          </div>
          <div className={styles.blogTutorialsParent}>
            <div className={styles.haveAnAccount}>Blog Tutorials</div>
            <div className={styles.haveAnAccount}>Check Invoices</div>
            <div className={styles.haveAnAccount}>Manage Domain</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
