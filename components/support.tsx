import type { NextPage } from "next";
import { useCallback } from "react";
import styles from "./support.module.css";

export type SupportType = {
  className?: string;
};

const Support: NextPage<SupportType> = ({ className = "" }) => {
  const onFrameContainerClick = useCallback(() => {
    // Please sync "Customer Support" to the project
  }, []);

  const onFrameContainerClick1 = useCallback(() => {
    // Please sync "Premium support" to the project
  }, []);

  const onFrameContainerClick2 = useCallback(() => {
    // Please sync "Website Migration" to the project
  }, []);

  return (
    <div className={[styles.support, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.frameWrapper}>
          <div className={styles.frameGroup}>
            <div className={styles.customerSupportWrapper}>
              <div className={styles.customerSupport}>Customer Support</div>
            </div>
            <div className={styles.frameContainer}>
              <div className={styles.frameDiv} onClick={onFrameContainerClick}>
                <div className={styles.image28Wrapper}>
                  <img
                    className={styles.image28Icon}
                    alt=""
                    src="/image-28@2x.png"
                  />
                </div>
                <div className={styles.frameParent1}>
                  <div className={styles.customerSupportWrapper}>
                    <div className={styles.premiumSupport}>
                      Customer Support
                    </div>
                  </div>
                  <div className={styles.powerfulWebHostingFastSecWrapper}>
                    <div className={styles.powerfulWebHosting}>
                      Powerful Web Hosting: Fast Secure, Always Supported
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.frameDiv} onClick={onFrameContainerClick1}>
                <div className={styles.image28Wrapper}>
                  <img
                    className={styles.image28Icon}
                    alt=""
                    src="/image-28@2x.png"
                  />
                </div>
                <div className={styles.frameParent1}>
                  <div className={styles.customerSupportWrapper}>
                    <div className={styles.premiumSupport}>Premium Support</div>
                  </div>
                  <div className={styles.powerfulWebHostingFastSecWrapper}>
                    <div className={styles.powerfulWebHosting}>
                      Powerful Web Hosting: Fast Secure, Always Supported
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.frameDiv} onClick={onFrameContainerClick2}>
                <div className={styles.image28Wrapper}>
                  <img
                    className={styles.image28Icon}
                    alt=""
                    src="/image-28@2x.png"
                  />
                </div>
                <div className={styles.frameParent1}>
                  <div className={styles.customerSupportWrapper}>
                    <div className={styles.premiumSupport}>
                      Free Website Migration
                    </div>
                  </div>
                  <div className={styles.powerfulWebHostingFastSecWrapper}>
                    <div className={styles.powerfulWebHosting}>
                      Instantly Access Domain Ownership and Registration
                      Details.
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.frameDiv} onClick={onFrameContainerClick2}>
                <div className={styles.image28Wrapper}>
                  <img
                    className={styles.image28Icon}
                    alt=""
                    src="/image-28@2x.png"
                  />
                </div>
                <div className={styles.frameParent1}>
                  <div className={styles.customerSupportWrapper}>
                    <div className={styles.serverStatus}>Server Status</div>
                  </div>
                  <div className={styles.powerfulWebHostingFastSecWrapper}>
                    <div className={styles.powerfulWebHosting}>
                      Instantly Access Domain Ownership and Registration
                      Details.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameParent1}>
          <div className={styles.frameParent1}>
            <div className={styles.frameWrapper3}>
              <div className={styles.frameWrapper3}>
                <div className={styles.frameGroup}>
                  <div className={styles.frameParent1}>
                    <div className={styles.frameWrapper3}>
                      <div className={styles.image28Wrapper}>
                        <img
                          className={styles.image28Icon}
                          alt=""
                          src="/image-28@2x.png"
                        />
                      </div>
                      <div className={styles.frameParent1}>
                        <div className={styles.customerSupportWrapper}>
                          <div className={styles.premiumSupport}>Featured</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.enjoyFreeConsultationsParent}>
                    <div className={styles.enjoyFreeConsultations}>
                      Enjoy Free Consultations
                    </div>
                    <div className={styles.talkToYour}>
                      Talk to your experts! Our pros can help you with whatever
                      you need, so you can focus on growing your business.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameParent1}>
          <div className={styles.frameParent1}>
            <div className={styles.frameWrapper3}>
              <div className={styles.frameWrapper3}>
                <div className={styles.frameGroup}>
                  <div className={styles.frameParent1}>
                    <div className={styles.frameWrapper3}>
                      <div className={styles.image28Wrapper}>
                        <img
                          className={styles.image28Icon}
                          alt=""
                          src="/image-28@2x.png"
                        />
                      </div>
                      <div className={styles.frameParent1}>
                        <div className={styles.customerSupportWrapper}>
                          <div className={styles.premiumSupport}>
                            AI Logo Maker
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.enjoyFreeConsultationsParent}>
                    <div className={styles.buildALogo}>
                      Build a Logo with AI Instantly
                    </div>
                    <div className={styles.talkToYour}>
                      Your one-stop solution for professional logo design. Try
                      it for free-no sign up needed!
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frameWrapper12}>
            <div className={styles.buildALogoNowParent}>
              <div className={styles.customerSupport}>Build a logo now</div>
              <img
                className={styles.iconDiagonalArrowRightUp}
                alt=""
                src="/-icon-diagonal-arrow-right-up-outline2.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
