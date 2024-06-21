import type { NextPage } from "next";
import styles from "./payment-term-popup.module.css";

export type PaymentTermPopupType = {
  className?: string;
};

const PaymentTermPopup: NextPage<PaymentTermPopupType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.paymentTermPopup, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.paymentTermsWrapper}>
          <div className={styles.paymentTerms}>PAYMENT TERMS</div>
        </div>
        <div className={styles.thePlansShallBePrePaidNWrapper}>
          <div className={styles.thePlansShall}>
            The plans shall be pre-paid, not divided in installments. The amount
            presented represents the product's total price split by the number
            of months your plan will be live. Prices are listed without VAT
          </div>
        </div>
      </div>
      <img className={styles.jamcloseIcon} alt="" src="/jamclose.svg" />
    </div>
  );
};

export default PaymentTermPopup;
