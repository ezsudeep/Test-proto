import type { NextPage } from "next";
import styles from "./get-a-quote-popup.module.css";

export type GetAQuotePopupType = {
  className?: string;
};

const GetAQuotePopup: NextPage<GetAQuotePopupType> = ({ className = "" }) => {
  return (
    <div className={[styles.getAQuotePopup, className].join(" ")}>
      <div className={styles.getAQuotePopupChild} />
      <img className={styles.frameIcon} alt="" src="/frame@2x.png" />
      <div className={styles.frameParent}>
        <div className={styles.theStoryBehindNameProtozoaWrapper}>
          <div className={styles.theStoryBehind}>
            The Story Behind Name Protozoa Host
          </div>
        </div>
        <div className={styles.protozoaHostEmbodiesTheSpiWrapper}>
          <div className={styles.protozoaHostEmbodies}>
            Protozoa Host embodies the spirit of the protozoan thriving in harsh
            environments. Our name signifies our dedication to resilience and
            longevity in the competitive world of hosting.
          </div>
        </div>
      </div>
      <div className={styles.goal1Parent}>
        <img className={styles.goal1Icon} alt="" src="/goal-1.svg" />
        <div className={styles.frameGroup}>
          <div className={styles.theStoryBehindNameProtozoaWrapper}>
            <div className={styles.theStoryBehind}>Milestones Achieved</div>
          </div>
          <div className={styles.established2018ClientsTruWrapper}>
            <div className={styles.protozoaHostEmbodies}>
              <p className={styles.clientsTrustOver}>Established: 2018</p>
              <p className={styles.clientsTrustOver}>
                Client's Trust: Over 2000+
              </p>
              <p className={styles.clientsTrustOver}>Sites Hosted: 5000+</p>
              <p className={styles.clientsTrustOver}>
                Private Corporate Partnerships: 100+
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.excellence1Parent}>
        <img className={styles.goal1Icon} alt="" src="/excellence-1.svg" />
        <div className={styles.frameGroup}>
          <div className={styles.theStoryBehindNameProtozoaWrapper}>
            <div className={styles.theStoryBehind}>
              Commitment to Excellence
            </div>
          </div>
          <div className={styles.established2018ClientsTruWrapper}>
            <div className={styles.protozoaHostEmbodies}>
              Our commitment is to navigate challenges and continue our journey
              with unwavering determination, ensuring that while others may fade
              away, we are here to stay.
            </div>
          </div>
        </div>
      </div>
      <div className={styles.hours1Parent}>
        <img className={styles.goal1Icon} alt="" src="/24hours-1.svg" />
        <div className={styles.frameGroup}>
          <div className={styles.theStoryBehindNameProtozoaWrapper}>
            <div className={styles.theStoryBehind}>
              Service and 24x7 Support
            </div>
          </div>
          <div className={styles.established2018ClientsTruWrapper}>
            <div className={styles.protozoaHostEmbodies}>
              Protozoa Host offers round-the-clock customer support and
              dedicated service to ensure your hosting needs are met with
              reliability and professionalism any time of day.
            </div>
          </div>
        </div>
      </div>
      <img
        className={styles.getAQuotePopupItem}
        alt=""
        src="/rectangle-80@2x.png"
      />
      <div className={styles.getAQuotationWrapper}>
        <b className={styles.getAQuotation}>Get a Quotation !</b>
      </div>
      <img className={styles.jamcloseIcon} alt="" src="/jamclose1.svg" />
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.frameParent1}>
          <div className={styles.frameParent2}>
            <div className={styles.firstNameWrapper}>
              <div className={styles.getAQuotation}>First Name</div>
            </div>
            <div className={styles.firstNameWrapper}>
              <div className={styles.getAQuotation}>Last Name</div>
            </div>
            <div className={styles.enterYourPhoneNumberWrapper}>
              <div className={styles.getAQuotation}>
                Enter your Phone Number
              </div>
            </div>
            <div className={styles.enterYourPhoneNumberWrapper}>
              <div className={styles.getAQuotation}>
                Enter your Email Address
              </div>
            </div>
            <div className={styles.serviceTypeParent}>
              <div className={styles.getAQuotation}>Service Type</div>
              <img className={styles.frameChild} alt="" src="/polygon-1.svg" />
            </div>
            <div className={styles.enterYourRequirementsWrapper}>
              <div className={styles.getAQuotation}>
                Enter your requirements
              </div>
            </div>
          </div>
          <div className={styles.requestAQuoteWrapper}>
            <div className={styles.requestAQuote}>Request a Quote</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetAQuotePopup;
