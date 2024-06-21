import type { NextPage } from "next";
import styles from "./reseller.module.css";

export type ResellerType = {
  className?: string;
};

const Reseller: NextPage<ResellerType> = ({ className = "" }) => {
  return (
    <div className={[styles.reseller, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.frameWrapper}>
          <div className={styles.frameGroup}>
            <div className={styles.resellerHostingWrapper}>
              <div className={styles.resellerHosting}>Reseller Hosting</div>
            </div>
            <div className={styles.frameContainer}>
              <div className={styles.frameWrapper}>
                <div className={styles.image28Wrapper}>
                  <img
                    className={styles.image28Icon}
                    alt=""
                    src="/image-28@2x.png"
                  />
                </div>
                <div className={styles.frameParent1}>
                  <div className={styles.resellerHostingWrapper}>
                    <div className={styles.cpanelResellerHosting}>
                      cPanel Reseller Hosting
                    </div>
                  </div>
                  <div className={styles.powerfulWebHostingFastSecWrapper}>
                    <div className={styles.powerfulWebHosting}>
                      Powerful Web Hosting: Fast Secure, Always Supported
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.frameWrapper}>
                <div className={styles.image28Wrapper}>
                  <img
                    className={styles.image28Icon}
                    alt=""
                    src="/image-28@2x.png"
                  />
                </div>
                <div className={styles.frameParent1}>
                  <div className={styles.resellerHostingWrapper}>
                    <div className={styles.cpanelResellerHosting}>
                      WordPress Reseller Hosting
                    </div>
                  </div>
                  <div className={styles.powerfulWebHostingFastSecWrapper}>
                    <div className={styles.powerfulWebHosting}>
                      Powerful Web Hosting: Fast Secure, Always Supported
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.frameWrapper}>
                <div className={styles.image28Wrapper}>
                  <img
                    className={styles.image28Icon}
                    alt=""
                    src="/image-28@2x.png"
                  />
                </div>
                <div className={styles.frameParent1}>
                  <div className={styles.resellerHostingWrapper}>
                    <div className={styles.cpanelResellerHosting}>
                      Plesk Reseller Hosting
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
            </div>
          </div>
        </div>
        <div className={styles.frameWrapper}>
          <div className={styles.frameGroup}>
            <div className={styles.resellerHostingWrapper}>
              <div className={styles.resellerHosting}>
                Cloud Reseller Hosting
              </div>
            </div>
            <div className={styles.frameContainer}>
              <div className={styles.frameWrapper}>
                <div className={styles.image28Wrapper}>
                  <img
                    className={styles.image28Icon}
                    alt=""
                    src="/image-28@2x.png"
                  />
                </div>
                <div className={styles.frameParent1}>
                  <div className={styles.resellerHostingWrapper}>
                    <div
                      className={styles.cpanelCloudReseller}
                    >{`cPanel Cloud Reseller- Root Access  `}</div>
                  </div>
                  <div className={styles.powerfulWebHostingFastSecWrapper}>
                    <div className={styles.powerfulWebHosting}>
                      Powerful Web Hosting: Fast Secure, Always Supported
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.frameWrapper}>
                <div className={styles.image28Wrapper}>
                  <img
                    className={styles.image28Icon}
                    alt=""
                    src="/image-28@2x.png"
                  />
                </div>
                <div className={styles.frameParent1}>
                  <div className={styles.resellerHostingWrapper}>
                    <div
                      className={styles.cpanelResellerHosting}
                    >{`WPSquared Reseller Hosting- Root Access `}</div>
                  </div>
                  <div className={styles.powerfulWebHostingFastSecWrapper}>
                    <div className={styles.powerfulWebHosting}>
                      Powerful Web Hosting: Fast Secure, Always Supported
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.frameWrapper}>
                <div className={styles.image28Wrapper}>
                  <img
                    className={styles.image28Icon}
                    alt=""
                    src="/image-28@2x.png"
                  />
                </div>
                <div className={styles.frameParent1}>
                  <div className={styles.resellerHostingWrapper}>
                    <div
                      className={styles.cpanelResellerHosting}
                    >{`Plesk Cloud Reseller- Root Access `}</div>
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
        <div className={styles.frameChild} />
        <div className={styles.frameWrapper2}>
          <div className={styles.frameParent1}>
            <div className={styles.frameWrapper}>
              <div className={styles.frameWrapper}>
                <div className={styles.frameGroup}>
                  <div className={styles.frameParent1}>
                    <div className={styles.frameWrapper}>
                      <div className={styles.image28Wrapper}>
                        <img
                          className={styles.image28Icon}
                          alt=""
                          src="/image-28@2x.png"
                        />
                      </div>
                      <div className={styles.frameParent1}>
                        <div className={styles.resellerHostingWrapper}>
                          <div className={styles.cpanelResellerHosting}>
                            Featured
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.chooseABestNameForYourBuParent}>
                    <div className={styles.chooseABest}>
                      Choose a Best Name for your Business.
                    </div>
                    <div
                      className={styles.registerYourDomain}
                    >{`Register your Domain at Nepal’s No.1 Domain Registrar & Get your Business online Today with our Web Hosting Plans.`}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reseller;
