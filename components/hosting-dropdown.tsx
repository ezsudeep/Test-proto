import type { NextPage } from "next";
import styles from "./hosting-dropdown.module.css";

export type HostingDropdownType = {
  className?: string;
};

const HostingDropdown: NextPage<HostingDropdownType> = ({ className = "" }) => {
  return (
    <div className={[styles.hostingDropdown, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.frameContainer}>
            <div className={styles.hostingsWrapper}>
              <div className={styles.hostings}>Hostings</div>
            </div>
            <div className={styles.frameDiv}>
              <div className={styles.frameGroup}>
                <div className={styles.database1Wrapper}>
                  <img
                    className={styles.database1Icon}
                    alt=""
                    src="/database-1@2x.png"
                  />
                </div>
                <div className={styles.frameParent2}>
                  <div className={styles.hostingsWrapper}>
                    <div className={styles.sharedHosting}>Shared Hosting</div>
                  </div>
                  <div className={styles.powerfulWebHostingFastSecWrapper}>
                    <div className={styles.powerfulWebHosting}>
                      Powerful Web Hosting: Fast Secure, Always Supported
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.frameGroup}>
                <div className={styles.database1Wrapper}>
                  <img
                    className={styles.image29Icon}
                    alt=""
                    src="/image-29@2x.png"
                  />
                </div>
                <div className={styles.frameParent2}>
                  <div className={styles.hostingsWrapper}>
                    <div className={styles.sharedHosting}>
                      Combo cPanel Hosting
                    </div>
                  </div>
                  <div className={styles.powerfulWebHostingFastSecWrapper}>
                    <div className={styles.powerfulWebHosting}>
                      Powerful Web Hosting: Fast Secure, Always Supported
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.frameGroup}>
                <div className={styles.database1Wrapper}>
                  <img
                    className={styles.image29Icon}
                    alt=""
                    src="/image-28@2x.png"
                  />
                </div>
                <div className={styles.frameParent2}>
                  <div className={styles.hostingsWrapper}>
                    <div className={styles.sharedHosting}>
                      Cloud cPanel Hosting
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
              <div className={styles.frameGroup}>
                <div className={styles.database1Wrapper}>
                  <img
                    className={styles.image29Icon}
                    alt=""
                    src="/image-28@2x.png"
                  />
                </div>
                <div className={styles.frameParent2}>
                  <div className={styles.hostingsWrapper}>
                    <div className={styles.sharedHosting}>
                      Business cPanel Hosting
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
          <div className={styles.frameParent9}>
            <div className={styles.frameChild} />
            <div className={styles.frameParent10}>
              <div className={styles.frameGroup}>
                <div className={styles.database1Wrapper}>
                  <img
                    className={styles.image29Icon}
                    alt=""
                    src="/image-28@2x.png"
                  />
                </div>
                <div className={styles.frameParent2}>
                  <div className={styles.hostingsWrapper}>
                    <div
                      className={styles.sharedHosting}
                    >{`Python & Django Hosting`}</div>
                  </div>
                  <div className={styles.powerfulWebHostingFastSecWrapper}>
                    <div className={styles.powerfulWebHosting}>
                      Powerful Web Hosting: Fast Secure, Always Supported
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.frameGroup}>
                <div className={styles.database1Wrapper}>
                  <img
                    className={styles.image29Icon}
                    alt=""
                    src="/image-28@2x.png"
                  />
                </div>
                <div className={styles.frameParent2}>
                  <div className={styles.hostingsWrapper}>
                    <div className={styles.sharedHosting}>
                      {" "}
                      Node.JS cPanel Hosting
                    </div>
                  </div>
                  <div className={styles.powerfulWebHostingFastSecWrapper}>
                    <div className={styles.powerfulWebHosting}>
                      Powerful Web Hosting: Fast Secure, Always Supported
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.frameGroup}>
                <div className={styles.database1Wrapper}>
                  <img
                    className={styles.image29Icon}
                    alt=""
                    src="/image-28@2x.png"
                  />
                </div>
                <div className={styles.frameParent2}>
                  <div className={styles.hostingsWrapper}>
                    <div className={styles.sharedHosting}>
                      Tomcat cPanel Hosting
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
        <div className={styles.frameContainer}>
          <div className={styles.hostingsWrapper}>
            <div className={styles.hostings}>Windows Hosting</div>
          </div>
          <div className={styles.frameDiv}>
            <div className={styles.frameGroup}>
              <div className={styles.database1Wrapper}>
                <img
                  className={styles.image29Icon}
                  alt=""
                  src="/image-28@2x.png"
                />
              </div>
              <div className={styles.frameParent2}>
                <div className={styles.hostingsWrapper}>
                  <div className={styles.sharedHosting}>
                    Windows Plesk MSSQL 2019
                  </div>
                </div>
                <div className={styles.powerfulWebHostingFastSecWrapper}>
                  <div className={styles.powerfulWebHosting}>
                    Powerful Web Hosting: Fast Secure, Always Supported
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.frameGroup}>
              <div className={styles.database1Wrapper}>
                <img
                  className={styles.image29Icon}
                  alt=""
                  src="/image-28@2x.png"
                />
              </div>
              <div className={styles.frameParent2}>
                <div className={styles.hostingsWrapper}>
                  <div className={styles.sharedHosting}>
                    PowerMax Windows MSSQL 2022
                  </div>
                </div>
                <div className={styles.powerfulWebHostingFastSecWrapper}>
                  <div className={styles.powerfulWebHosting}>
                    Powerful Web Hosting: Fast Secure, Always Supported
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.frameGroup}>
              <div className={styles.database1Wrapper}>
                <img
                  className={styles.image29Icon}
                  alt=""
                  src="/image-28@2x.png"
                />
              </div>
              <div className={styles.frameParent2}>
                <div className={styles.hostingsWrapper}>
                  <div className={styles.sharedHosting}>
                    Nepali Windows Plesk Hosting
                  </div>
                </div>
                <div className={styles.powerfulWebHostingFastSecWrapper}>
                  <div className={styles.powerfulWebHosting}>
                    Instantly Access Domain Ownership and Registration Details.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameContainer}>
          <div className={styles.hostingsWrapper}>
            <div className={styles.hostings}>WordPress Hosting</div>
          </div>
          <div className={styles.frameDiv}>
            <div className={styles.frameGroup}>
              <div className={styles.database1Wrapper}>
                <img
                  className={styles.image29Icon}
                  alt=""
                  src="/image-28@2x.png"
                />
              </div>
              <div className={styles.frameParent2}>
                <div className={styles.hostingsWrapper}>
                  <div className={styles.wordpressHosting1}>
                    WordPress Hosting
                  </div>
                </div>
                <div className={styles.powerfulWebHostingFastSecWrapper}>
                  <div className={styles.powerfulWebHosting}>
                    Powerful Web Hosting: Fast Secure, Always Supported
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.frameGroup}>
              <div className={styles.database1Wrapper}>
                <img
                  className={styles.image29Icon}
                  alt=""
                  src="/image-28@2x.png"
                />
              </div>
              <div className={styles.frameParent2}>
                <div className={styles.hostingsWrapper}>
                  <div className={styles.sharedHosting}>
                    WPSquared Pro Hosting
                  </div>
                </div>
                <div className={styles.powerfulWebHostingFastSecWrapper}>
                  <div className={styles.powerfulWebHosting}>
                    Powerful Web Hosting: Fast Secure, Always Supported
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.frameGroup}>
              <div className={styles.database1Wrapper}>
                <img
                  className={styles.image29Icon}
                  alt=""
                  src="/image-28@2x.png"
                />
              </div>
              <div className={styles.frameParent2}>
                <div className={styles.hostingsWrapper}>
                  <div className={styles.sharedHosting}>
                    Nepali WordPress Hosting
                  </div>
                </div>
                <div className={styles.powerfulWebHostingFastSecWrapper}>
                  <div className={styles.powerfulWebHosting}>
                    Instantly Access Domain Ownership and Registration Details.
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

export default HostingDropdown;
