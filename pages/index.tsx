import type { NextPage } from "next";
import { useState, useCallback } from "react";
import GetAQuotePopup from "../components/get-a-quote-popup";
import PortalPopup from "../components/portal-popup";
import DomainDropdown from "../components/domain-dropdown";
import HostingDropdown from "../components/hosting-dropdown";
import Reseller from "../components/reseller";
import ServersAndVPS from "../components/servers-and-v-p-s";
import CloudSolutions from "../components/cloud-solutions";
import Support from "../components/support";
import MyAccount from "../components/my-account";
import PaymentTermPopup from "../components/payment-term-popup";
import styles from "./index.module.css";

const HomePage: NextPage = () => {
  const [isGetAQuotePopupOpen, setGetAQuotePopupOpen] = useState(false);
  const [isDomainDropdownOpen, setDomainDropdownOpen] = useState(false);
  const [isHostingDropdownOpen, setHostingDropdownOpen] = useState(false);
  const [isResellerOpen, setResellerOpen] = useState(false);
  const [isServersAndVPSOpen, setServersAndVPSOpen] = useState(false);
  const [isCloudSolutionsOpen, setCloudSolutionsOpen] = useState(false);
  const [isSupportOpen, setSupportOpen] = useState(false);
  const [isMyAccountOpen, setMyAccountOpen] = useState(false);
  const [isPaymentTermPopupOpen, setPaymentTermPopupOpen] = useState(false);

  const openGetAQuotePopup = useCallback(() => {
    setGetAQuotePopupOpen(true);
  }, []);

  const closeGetAQuotePopup = useCallback(() => {
    setGetAQuotePopupOpen(false);
  }, []);

  const openDomainDropdown = useCallback(() => {
    setDomainDropdownOpen(true);
  }, []);

  const closeDomainDropdown = useCallback(() => {
    setDomainDropdownOpen(false);
  }, []);

  const openHostingDropdown = useCallback(() => {
    setHostingDropdownOpen(true);
  }, []);

  const closeHostingDropdown = useCallback(() => {
    setHostingDropdownOpen(false);
  }, []);

  const openReseller = useCallback(() => {
    setResellerOpen(true);
  }, []);

  const closeReseller = useCallback(() => {
    setResellerOpen(false);
  }, []);

  const openServersAndVPS = useCallback(() => {
    setServersAndVPSOpen(true);
  }, []);

  const closeServersAndVPS = useCallback(() => {
    setServersAndVPSOpen(false);
  }, []);

  const openCloudSolutions = useCallback(() => {
    setCloudSolutionsOpen(true);
  }, []);

  const closeCloudSolutions = useCallback(() => {
    setCloudSolutionsOpen(false);
  }, []);

  const openSupport = useCallback(() => {
    setSupportOpen(true);
  }, []);

  const closeSupport = useCallback(() => {
    setSupportOpen(false);
  }, []);

  const openMyAccount = useCallback(() => {
    setMyAccountOpen(true);
  }, []);

  const closeMyAccount = useCallback(() => {
    setMyAccountOpen(false);
  }, []);

  const openPaymentTermPopup = useCallback(() => {
    setPaymentTermPopupOpen(true);
  }, []);

  const closePaymentTermPopup = useCallback(() => {
    setPaymentTermPopupOpen(false);
  }, []);

  const onFrameContainerClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='frameContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onFrameContainerClick1 = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='titleText']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onFrameContainerClick2 = useCallback(() => {
    // Please sync "Affiliate" to the project
  }, []);

  const onFrameContainerClick3 = useCallback(() => {
    // Please sync "Contact Us" to the project
  }, []);

  const onFrameContainerClick4 = useCallback(() => {
    // Please sync "About Us" to the project
  }, []);

  const onFrameContainerClick5 = useCallback(() => {
    // Please sync "Domain Registration" to the project
  }, []);

  const onFrameContainerClick6 = useCallback(() => {
    // Please sync "SSL" to the project
  }, []);

  const onFrameContainerClick7 = useCallback(() => {
    // Please sync "Transfer Your Domain" to the project
  }, []);

  const onFrameContainerClick8 = useCallback(() => {
    // Please sync "Website Migration" to the project
  }, []);

  return (
    <>
      <div className={styles.homePage}>
        <img className={styles.divIcon} alt="" src="/div@2x.png" />
        <div className={styles.homePageChild} />
        <b className={styles.sampleImages}>Sample Images</b>
        <div className={styles.rectangleParent}>
          <div className={styles.groupChild} />
          <div className={styles.frameParent}>
            <div className={styles.frameGroup}>
              <div className={styles.frameContainer}>
                <div className={styles.frameDiv}>
                  <div className={styles.frameContainer}>
                    <div className={styles.frameDiv}>
                      <div className={styles.frameDiv}>
                        <div className={styles.frameParent3}>
                          <div
                            className={styles.discoverYourBestChoiceForWrapper}
                          >
                            <b className={styles.discoverYourBestContainer}>
                              <p className={styles.discoverYourBestChoiceFor}>
                                <span
                                  className={styles.discover}
                                >{`Discover `}</span>
                                <span className={styles.yourBestChoice}>
                                  your best choice
                                </span>
                                <span> for web</span>
                              </p>
                              <p className={styles.discoverYourBestChoiceFor}>
                                hosting in Nepal
                              </p>
                            </b>
                          </div>
                          <div
                            className={styles.since2018ProtozoaHostHasWrapper}
                          >
                            <div
                              className={styles.since2018Protozoa}
                            >{`Since 2018, Protozoa Host has led the way in providing the fastest cloud hosting in Nepal. Every day, we put our passion, dedication, and expertise into maintaining and optimising our customers' websites. `}</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.frameParent4}>
                        <div className={styles.mditickCircleOutlineParent}>
                          <img
                            className={styles.mditickCircleOutlineIcon}
                            alt=""
                            src="/mditickcircleoutline.svg"
                          />
                          <div className={styles.freeDomainWrapper}>
                            <div className={styles.freeDomain}>Free Domain</div>
                          </div>
                        </div>
                        <div className={styles.mditickCircleOutlineGroup}>
                          <img
                            className={styles.mditickCircleOutlineIcon}
                            alt=""
                            src="/mditickcircleoutline.svg"
                          />
                          <div className={styles.freeDomainWrapper}>
                            <div
                              className={styles.freeDomain}
                            >{`Free Backups, Migrations & SSL`}</div>
                          </div>
                        </div>
                        <div className={styles.mditickCircleOutlineGroup}>
                          <img
                            className={styles.mditickCircleOutlineIcon}
                            alt=""
                            src="/mditickcircleoutline.svg"
                          />
                          <div className={styles.freeDomainWrapper}>
                            <div className={styles.freeDomain}>
                              24/7 Customer Support
                            </div>
                          </div>
                        </div>
                        <div className={styles.mditickCircleOutlineGroup}>
                          <img
                            className={styles.mditickCircleOutlineIcon}
                            alt=""
                            src="/mditickcircleoutline.svg"
                          />
                          <div className={styles.freeDomainWrapper}>
                            <div className={styles.freeDomain}>
                              DDoS Protection
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.frameParent5}>
                      <div className={styles.yourdomainnamecomWrapper}>
                        <div className={styles.yourdomainnamecom}>
                          Yourdomainname.com
                        </div>
                      </div>
                      <div className={styles.searchWrapper}>
                        <div className={styles.freeDomain}>Search</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.startHostingAtJustRs9900Parent}>
                    <div className={styles.startHostingAtContainer}>
                      <span>
                        <span>{`Start Hosting at just `}</span>
                        <span className={styles.rs}>{`Rs `}</span>
                      </span>
                      <span className={styles.span}>99.00</span>
                      <span className={styles.mo}>/mo</span>
                    </div>
                    <div className={styles.monthsFree}>+2 Months Free</div>
                  </div>
                </div>
                <div
                  className={styles.frameParent6}
                  onClick={onFrameContainerClick}
                >
                  <div
                    className={styles.purchaseHostingWrapper}
                    onClick={onFrameContainerClick1}
                  >
                    <div className={styles.purchaseHosting}>
                      Purchase Hosting
                    </div>
                  </div>
                  <div className={styles.cloudSolutionsWrapper}>
                    <div className={styles.freeDomain}>Cloud Solutions</div>
                  </div>
                </div>
              </div>
              <div
                className={styles.lookingForACustomizedSolutWrapper}
                onClick={openGetAQuotePopup}
              >
                <div className={styles.startHostingAtContainer}>
                  <span>
                    <span>Looking For a Customized Solution?</span>
                    <span className={styles.requestAQuote}>{` `}</span>
                  </span>
                  <span className={styles.requestAQuote}>
                    <span>Request a Quote</span>
                  </span>
                </div>
              </div>
            </div>
            <div className={styles.lineParent}>
              <div className={styles.groupItem} />
              <div className={styles.groupInner} />
              <img className={styles.lineIcon} alt="" />
              <div className={styles.rectangleDiv} />
              <div className={styles.groupChild1} />
              <div className={styles.lineDiv} />
              <div
                className={styles.cpanelDashboard}
              >{`cPanel Dashboard `}</div>
              <div className={styles.rectangleGroup}>
                <div className={styles.groupChild2} />
                <div className={styles.sslCertificate}>SSL Certificate</div>
                <div className={styles.groupChild3} />
                <div className={styles.active}>Active</div>
              </div>
              <div className={styles.rectangleContainer}>
                <div className={styles.groupChild4} />
                <div className={styles.fileManager}>File Manager</div>
                <img
                  className={styles.folder1Icon}
                  alt=""
                  src="/folder-1.svg"
                />
              </div>
              <div className={styles.groupChild5} />
              <div className={styles.groupDiv}>
                <div className={styles.groupChild4} />
                <div className={styles.databases}>Databases</div>
                <img
                  className={styles.database21}
                  alt=""
                  src="/database-2-1.svg"
                />
              </div>
              <div className={styles.rectangleParent1}>
                <div className={styles.groupChild4} />
                <div className={styles.wordpressOverview}>
                  Wordpress Overview
                </div>
                <img
                  className={styles.wordpress31}
                  alt=""
                  src="/wordpress-3-1.svg"
                />
              </div>
              <div className={styles.businessParent}>
                <div className={styles.business}>Business</div>
                <div className={styles.active1}>Active</div>
                <div className={styles.seeDetails}>See Details</div>
                <img
                  className={styles.fi2891526Icon}
                  alt=""
                  src="/fi-2891526.svg"
                />
              </div>
              <div className={styles.domainParent}>
                <div className={styles.business}>Domain</div>
                <div className={styles.active1}>Active</div>
                <div className={styles.seeDetails}>Manage</div>
                <img
                  className={styles.fi2891526Icon}
                  alt=""
                  src="/fi-28915261.svg"
                />
              </div>
              <div className={styles.businessEmailParent}>
                <div className={styles.business}>Business Email</div>
                <div className={styles.active1}>Active</div>
                <div className={styles.seeDetails}>Manage</div>
                <img
                  className={styles.fi2891526Icon}
                  alt=""
                  src="/fi-28915262.svg"
                />
              </div>
              <div className={styles.dailyBackupsParent}>
                <div className={styles.business}>Daily backups</div>
                <div className={styles.active1}>Active</div>
                <div className={styles.seeDetails}>Manage</div>
                <img
                  className={styles.fi2891526Icon}
                  alt=""
                  src="/fi-28915263.svg"
                />
              </div>
              <img className={styles.nepal1Icon} alt="" src="/nepal-1@2x.png" />
              <img
                className={styles.performance1Icon}
                alt=""
                src="/performance-1@2x.png"
              />
              <img
                className={styles.bigBrand1}
                alt=""
                src="/big-brand-1@2x.png"
              />
              <div className={styles.groupChild8} />
              <div className={styles.groupChild9} />
              <div className={styles.groupChild10} />
              <div className={styles.groupChild11} />
              <div className={styles.groupChild12} />
              <img
                className={styles.wepikExport20240401055453mwlIcon}
                alt=""
                src="/wepikexport20240401055453mwlb-1@2x.png"
              />
              <div className={styles.rectangleParent2}>
                <div className={styles.groupChild13} />
                <div className={styles.groupParent}>
                  <div className={styles.safeParent}>
                    <div className={styles.safe}>Safe</div>
                    <div className={styles.noMalwareFound}>
                      No malware found
                    </div>
                    <div className={styles.seeMalwareScanner}>
                      See malware scanner
                    </div>
                  </div>
                  <img
                    className={styles.groupIcon}
                    alt=""
                    src="/group-82.svg"
                  />
                </div>
              </div>
              <img
                className={styles.group210}
                alt=""
                src="/group-2-10@2x.png"
              />
              <div className={styles.rectangleParent3}>
                <div className={styles.groupChild14} />
                <div className={styles.performanceScoreForProtozoaParent}>
                  <div className={styles.performanceScoreForContainer}>
                    <p className={styles.discoverYourBestChoiceFor}>
                      Performance score for
                    </p>
                    <p className={styles.discoverYourBestChoiceFor}>
                      protozoahost.com
                    </p>
                  </div>
                  <div className={styles.parent}>
                    <div className={styles.div}>0-49</div>
                    <div className={styles.ellipseDiv} />
                  </div>
                  <div className={styles.group}>
                    <div className={styles.div1}>50-89</div>
                    <div className={styles.groupChild15} />
                  </div>
                  <div className={styles.container}>
                    <div className={styles.div2}>90-100</div>
                    <div className={styles.groupChild16} />
                  </div>
                  <div className={styles.groupChild17} />
                  <div className={styles.div3}>99</div>
                </div>
              </div>
            </div>
            <div className={styles.lineGroup}>
              <div className={styles.groupChild18} />
              <div className={styles.groupChild19} />
              <img className={styles.groupChild20} alt="" />
              <div className={styles.groupChild21} />
              <div className={styles.groupChild22} />
              <div className={styles.groupChild23} />
              <div
                className={styles.cpanelDashboard1}
              >{`cPanel Dashboard `}</div>
              <div className={styles.rectangleParent4}>
                <div className={styles.groupChild24} />
                <div className={styles.sslCertificate1}>SSL Certificate</div>
                <div className={styles.groupChild25} />
                <div className={styles.active5}>Active</div>
              </div>
              <div className={styles.rectangleParent5}>
                <div className={styles.groupChild26} />
                <div className={styles.fileManager1}>File Manager</div>
                <img
                  className={styles.folder1Icon1}
                  alt=""
                  src="/folder-11.svg"
                />
              </div>
              <div className={styles.groupChild27} />
              <div className={styles.rectangleParent6}>
                <div className={styles.groupChild26} />
                <div className={styles.databases1}>Databases</div>
                <img
                  className={styles.database211}
                  alt=""
                  src="/database-2-11.svg"
                />
              </div>
              <div className={styles.rectangleParent7}>
                <div className={styles.groupChild26} />
                <div className={styles.wordpressOverview1}>
                  Wordpress Overview
                </div>
                <img
                  className={styles.wordpress311}
                  alt=""
                  src="/wordpress-3-11.svg"
                />
              </div>
              <div className={styles.rectangleParent8}>
                <div className={styles.groupChild30} />
                <div className={styles.performanceScoreForProtozoaGroup}>
                  <div className={styles.performanceScoreForContainer1}>
                    <p className={styles.discoverYourBestChoiceFor}>
                      Performance score for
                    </p>
                    <p className={styles.discoverYourBestChoiceFor}>
                      protozoahost.com
                    </p>
                  </div>
                  <div className={styles.parent1}>
                    <div className={styles.div4}>0-49</div>
                    <div className={styles.groupChild31} />
                  </div>
                  <div className={styles.parent2}>
                    <div className={styles.div4}>50-89</div>
                    <div className={styles.groupChild32} />
                  </div>
                  <div className={styles.parent3}>
                    <div className={styles.div4}>90-100</div>
                    <div className={styles.groupChild33} />
                  </div>
                  <div className={styles.groupChild34} />
                  <div className={styles.div7}>99</div>
                </div>
              </div>
              <div className={styles.businessGroup}>
                <div className={styles.business1}>Business</div>
                <div className={styles.active6}>Active</div>
                <div className={styles.seeDetails1}>See Details</div>
                <img
                  className={styles.fi2891526Icon4}
                  alt=""
                  src="/fi-28915264.svg"
                />
              </div>
              <div className={styles.domainGroup}>
                <div className={styles.domain1}>Domain</div>
                <div className={styles.active7}>Active</div>
                <div className={styles.manage3}>Manage</div>
                <img
                  className={styles.fi2891526Icon4}
                  alt=""
                  src="/fi-28915265.svg"
                />
              </div>
              <div className={styles.businessEmailGroup}>
                <div className={styles.domain1}>Business Email</div>
                <div className={styles.active7}>Active</div>
                <div className={styles.manage3}>Manage</div>
                <img
                  className={styles.fi2891526Icon4}
                  alt=""
                  src="/fi-28915266.svg"
                />
              </div>
              <div className={styles.dailyBackupsGroup}>
                <div className={styles.domain1}>Daily backups</div>
                <div className={styles.active7}>Active</div>
                <div className={styles.manage3}>Manage</div>
                <img
                  className={styles.fi2891526Icon4}
                  alt=""
                  src="/fi-28915267.svg"
                />
              </div>
              <img
                className={styles.nepal1Icon1}
                alt=""
                src="/nepal-1@2x.png"
              />
              <img
                className={styles.performance1Icon1}
                alt=""
                src="/performance-1@2x.png"
              />
              <img
                className={styles.bigBrand11}
                alt=""
                src="/big-brand-1@2x.png"
              />
              <div className={styles.groupChild35} />
              <div className={styles.groupChild36} />
              <div className={styles.groupChild37} />
              <div className={styles.groupChild38} />
              <div className={styles.groupChild39} />
              <img
                className={styles.wepikExport20240401055453mwlIcon1}
                alt=""
                src="/wepikexport20240401055453mwlb-1@2x.png"
              />
              <div className={styles.rectangleParent9}>
                <div className={styles.groupChild40} />
                <div className={styles.groupContainer}>
                  <div className={styles.safeGroup}>
                    <div className={styles.safe1}>Safe</div>
                    <div className={styles.noMalwareFound1}>
                      No malware found
                    </div>
                    <div className={styles.seeMalwareScanner1}>
                      See malware scanner
                    </div>
                  </div>
                  <img
                    className={styles.groupChild41}
                    alt=""
                    src="/group-821.svg"
                  />
                </div>
              </div>
              <img
                className={styles.group2101}
                alt=""
                src="/group-2-10@2x.png"
              />
            </div>
          </div>
        </div>
        <div className={styles.frameParent7}>
          <div className={styles.image27Wrapper}>
            <div className={styles.discoverYourBestChoiceForWrapper}>
              <b className={styles.startHostingAtContainer}>
                <span>{`From Performance to `}</span>
                <span className={styles.yourBestChoice}>24/7 Support</span>
                <span>{`, You Get `}</span>
                <span className={styles.yourBestChoice}>Everything</span>
              </b>
            </div>
            <div className={styles.discoverUnmatchedReliabilityWrapper}>
              <div className={styles.discoverUnmatchedReliability}>
                Discover unmatched reliability, speed, and support with our
                premier web hosting solutions tailored for every need in Nepal.
              </div>
            </div>
          </div>
          <div className={styles.frameParent9}>
            <div className={styles.frameWrapper1}>
              <div className={styles.asset0571Parent}>
                <img
                  className={styles.asset0571Icon}
                  alt=""
                  src="/asset057-1@2x.png"
                />
                <div className={styles.frameParent10}>
                  <div className={styles.discoverYourBestChoiceForWrapper}>
                    <div className={styles.freeMigration}>Free Migration</div>
                  </div>
                  <div className={styles.fastSecureAndScalableHosWrapper}>
                    <div className={styles.fastSecureAndContainer}>
                      <p
                        className={styles.discoverYourBestChoiceFor}
                      >{`Fast, secure, and scalable hosting tailored for your `}</p>
                      <p className={styles.discoverYourBestChoiceFor}>
                        website.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.frameWrapper1}>
              <div className={styles.asset0571Parent}>
                <img
                  className={styles.asset0571Icon}
                  alt=""
                  src="/asset057-1@2x.png"
                />
                <div className={styles.frameParent10}>
                  <div className={styles.discoverYourBestChoiceForWrapper}>
                    <div className={styles.freeMigration}>
                      Solid State Drives
                    </div>
                  </div>
                  <div className={styles.fastSecureAndScalableHosWrapper}>
                    <div className={styles.fastSecureAndContainer1}>
                      <p
                        className={styles.discoverYourBestChoiceFor}
                      >{`Fast, secure, and scalable hosting tailored for your `}</p>
                      <p className={styles.discoverYourBestChoiceFor}>
                        website.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.frameWrapper1}>
              <div className={styles.asset0571Parent}>
                <img
                  className={styles.asset0571Icon}
                  alt=""
                  src="/asset057-1@2x.png"
                />
                <div className={styles.frameParent10}>
                  <div className={styles.discoverYourBestChoiceForWrapper}>
                    <div className={styles.freeMigration}>
                      Increase traffic and sales
                    </div>
                  </div>
                  <div className={styles.fastSecureAndScalableHosWrapper}>
                    <div className={styles.fastSecureAndContainer1}>
                      <p
                        className={styles.discoverYourBestChoiceFor}
                      >{`Fast, secure, and scalable hosting tailored for your `}</p>
                      <p className={styles.discoverYourBestChoiceFor}>
                        website.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.frameWrapper1}>
              <div className={styles.asset0571Parent}>
                <img
                  className={styles.asset0571Icon}
                  alt=""
                  src="/asset057-1@2x.png"
                />
                <div className={styles.frameParent10}>
                  <div className={styles.discoverYourBestChoiceForWrapper}>
                    <div className={styles.freeMigration}>
                      Money Back Guarantee
                    </div>
                  </div>
                  <div className={styles.confidenceInHostingProtozWrapper}>
                    <div className={styles.confidenceInHosting}>
                      Confidence in Hosting - Protozoa Host's 15-Day Money Back
                      Promise for Web Hosting Services.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.frameWrapper1}>
              <div className={styles.asset0571Parent}>
                <img
                  className={styles.asset0571Icon}
                  alt=""
                  src="/asset057-1@2x.png"
                />
                <div className={styles.frameParent10}>
                  <div className={styles.discoverYourBestChoiceForWrapper}>
                    <div className={styles.freeMigration}>
                      Guaranteed Dedicated Resources
                    </div>
                  </div>
                  <div className={styles.fastSecureAndScalableHosWrapper}>
                    <div className={styles.fastSecureAndContainer1}>
                      <p
                        className={styles.discoverYourBestChoiceFor}
                      >{`Fast, secure, and scalable hosting tailored for your `}</p>
                      <p className={styles.discoverYourBestChoiceFor}>
                        website.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.frameWrapper1}>
              <div className={styles.asset0571Parent}>
                <img
                  className={styles.asset0571Icon}
                  alt=""
                  src="/asset057-1@2x.png"
                />
                <div className={styles.frameParent10}>
                  <div className={styles.discoverYourBestChoiceForWrapper}>
                    <div className={styles.freeMigration}>Perfect Uptime</div>
                  </div>
                  <div className={styles.fastSecureAndScalableHosWrapper}>
                    <div className={styles.confidenceInHosting}>
                      Reliability Redefined - Experience 99.9% Uptime with
                      Protozoa Host's Web Hosting Services.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.frameWrapper1}>
              <div className={styles.asset0571Parent}>
                <img
                  className={styles.asset0571Icon}
                  alt=""
                  src="/asset057-1@2x.png"
                />
                <div className={styles.frameParent10}>
                  <div className={styles.discoverYourBestChoiceForWrapper}>
                    <div className={styles.freeMigration}>24x7 Support</div>
                  </div>
                  <div className={styles.confidenceInHostingProtozWrapper}>
                    <div className={styles.alwaysActiveAlways}>
                      Always Active, Always Assisting - Protozoa Host's 24x7
                      Support with best web Hosting in Nepal.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.frameWrapper1}>
              <div className={styles.asset0571Parent}>
                <img
                  className={styles.asset0571Icon}
                  alt=""
                  src="/asset057-1@2x.png"
                />
                <div className={styles.frameParent10}>
                  <div className={styles.discoverYourBestChoiceForWrapper}>
                    <div className={styles.freeMigration}>Free SSL</div>
                  </div>
                  <div className={styles.confidenceInHostingProtozWrapper}>
                    <div className={styles.confidenceInHosting}>
                      Secure Hosting, Assured Safety - Free SSL with Every
                      Protozoa Host Service in Nepal.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.frameWrapper1}>
              <div className={styles.asset0571Parent}>
                <img
                  className={styles.asset0571Icon}
                  alt=""
                  src="/asset057-1@2x.png"
                />
                <div className={styles.frameParent10}>
                  <div className={styles.discoverYourBestChoiceForWrapper}>
                    <div className={styles.freeMigration}>
                      Softaculous App Installer
                    </div>
                  </div>
                  <div className={styles.confidenceInHostingProtozWrapper}>
                    <div className={styles.alwaysActiveAlways}>
                      One Click, Countless Possibilities - Effortless WordPress
                      with Protozoa Host's Hosting.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameParent19}>
          <div className={styles.image27Wrapper}>
            <div className={styles.discoverYourBestChoiceForWrapper}>
              <b className={styles.startHostingAtContainer}>
                Your Web Hosting Questions Answered - FAQ
              </b>
            </div>
            <div className={styles.getTheClarityYouNeedWithWrapper}>
              <div className={styles.yourdomainnamecom}>
                Get the Clarity You Need with Our Comprehensive FAQs
              </div>
            </div>
          </div>
          <div className={styles.faqAccordionParent}>
            <div className={styles.faqAccordion}>
              <div className={styles.heading}>
                <div className={styles.startHostingAtContainer}>
                  Why should you choose ProtozoaHost for your web hosting?
                </div>
                <img className={styles.downIcon} alt="" src="/down.svg" />
              </div>
            </div>
            <div className={styles.faqAccordion}>
              <div className={styles.heading}>
                <div className={styles.startHostingAtContainer}>
                  How does ProtozoaHost ensure uptime for web hosting plans in
                  Nepal?
                </div>
                <img className={styles.downIcon} alt="" src="/down.svg" />
              </div>
            </div>
            <div className={styles.faqAccordion}>
              <div className={styles.heading}>
                <div className={styles.startHostingAtContainer}>
                  Can I upgrade my hosting plan as my website grows?
                </div>
                <img className={styles.downIcon} alt="" src="/down.svg" />
              </div>
            </div>
            <div className={styles.faqAccordion}>
              <div className={styles.heading}>
                <div className={styles.startHostingAtContainer}>
                  What makes ProtozoaHost a preferred choice for hosting in
                  Nepal with Nepal based web hosting plans?
                </div>
                <img className={styles.downIcon} alt="" src="/down.svg" />
              </div>
            </div>
            <div className={styles.faqAccordion}>
              <div className={styles.heading}>
                <div className={styles.startHostingAtContainer}>
                  How easy is it to migrate my website to ProtozoaHost?
                </div>
                <img className={styles.downIcon} alt="" src="/down.svg" />
              </div>
            </div>
            <div className={styles.faqAccordion}>
              <div className={styles.heading}>
                <div className={styles.startHostingAtContainer}>
                  How does ProtozoaHost ensure quality email hosting in Nepal?
                </div>
                <img className={styles.downIcon} alt="" src="/down.svg" />
              </div>
            </div>
            <div className={styles.faqAccordion}>
              <div className={styles.heading}>
                <div className={styles.startHostingAtContainer}>
                  How To Register a Domain?
                </div>
                <img className={styles.downIcon} alt="" src="/down.svg" />
              </div>
            </div>
            <div className={styles.faqAccordion}>
              <div className={styles.heading}>
                <div className={styles.startHostingAtContainer}>
                  What is Shared cPanel Hosting?
                </div>
                <img className={styles.downIcon} alt="" src="/down.svg" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.rectangleParent10}>
          <div className={styles.groupChild42} />
          <div className={styles.frameParent21}>
            <div className={styles.image27Wrapper}>
              <div className={styles.discoverYourBestChoiceForWrapper}>
                <b className={styles.startHostingAtContainer}>
                  <p className={styles.discoverYourBestChoiceFor}>
                    Built by ProtozoaHost.
                  </p>
                  <p className={styles.discoverYourBestChoiceFor}>
                    For, well, everyone. Protozoa Host powers effectively.
                  </p>
                </b>
              </div>
              <div className={styles.frameParent23}>
                <div className={styles.frameDiv}>
                  <div className={styles.frameParent25}>
                    <div className={styles.discoverYourBestChoiceForWrapper}>
                      <div className={styles.purchaseHosting}>
                        Our Hosting scales
                      </div>
                    </div>
                    <div className={styles.fromNewBloggersToSeasonedParent}>
                      <div className={styles.fromNewBloggers}>
                        From new bloggers to seasoned developers, many of our
                        customers trust us for reliable, scalable web hosting in
                        Nepal. We know what it takes to keep your site running
                        at its best. With a legacy since 2018 and over 4000+
                        sites hosted, we know what it takes to keep your site
                        performing at its peak.
                      </div>
                      <div className={styles.trustedByWeb}>
                        Trusted by web professionals, we’ve been excelling since
                        2018, hosting more than 4000+ sites with unparalleled
                        expertise.
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameParent26}>
                    <div className={styles.parent4}>
                      <div className={styles.freeMigration}>99%</div>
                      <div className={styles.ofCustomersAre}>
                        of customers are web pros.
                      </div>
                    </div>
                    <div className={styles.frameChild} />
                    <div className={styles.parent4}>
                      <div className={styles.freeMigration}>4000+</div>
                      <div className={styles.ofCustomersAre}>
                        websites currently hosted.
                      </div>
                    </div>
                  </div>
                </div>
                <img className={styles.frameItem} alt="" src="/group-3.svg" />
              </div>
            </div>
            <div className={styles.frameParent27}>
              <div className={styles.discoverYourBestChoiceForWrapper}>
                <div className={styles.freeDomain}>Our Hosting Solutions</div>
              </div>
              <div className={styles.frameParent28}>
                <div className={styles.frameParent29}>
                  <div className={styles.frameDiv}>
                    <div className={styles.discoverYourBestChoiceForWrapper}>
                      <b className={styles.startHostingAtContainer}>cPanel</b>
                    </div>
                    <div className={styles.easyToUseControlPanelForWrapper}>
                      <div className={styles.easyToUseControlPanel}>
                        Easy-to-use control panel for managing domains, emails,
                        and files.
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameDiv}>
                    <div className={styles.discoverYourBestChoiceForWrapper}>
                      <b className={styles.startHostingAtContainer}>
                        WP Squared
                      </b>
                    </div>
                    <div className={styles.easyToUseControlPanelForWrapper}>
                      <div className={styles.easyToUseControlPanel}>
                        Managed WordPress hosting with top security and
                        performance.
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameDiv}>
                    <div className={styles.discoverYourBestChoiceForWrapper}>
                      <b className={styles.startHostingAtContainer}>
                        Plesk Panel
                      </b>
                    </div>
                    <div className={styles.easyToUseControlPanelForWrapper}>
                      <div className={styles.easyToUseControlPanel}>
                        Versatile management for hosting, email, and security.
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.frameParent29}>
                  <div className={styles.frameDiv}>
                    <div className={styles.discoverYourBestChoiceForWrapper}>
                      <b className={styles.startHostingAtContainer}>VPS</b>
                    </div>
                    <div className={styles.easyToUseControlPanelForWrapper}>
                      <div className={styles.easyToUseControlPanel}>
                        <span className={styles.virtualPrivateServerContainer1}>
                          <p className={styles.discoverYourBestChoiceFor}>
                            Virtual Private Server hosting offering dedicated
                          </p>
                          <p className={styles.discoverYourBestChoiceFor}>
                            resources and greater control for your web
                          </p>
                          <p className={styles.discoverYourBestChoiceFor}>
                            environments.
                          </p>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameDiv}>
                    <div className={styles.discoverYourBestChoiceForWrapper}>
                      <b className={styles.startHostingAtContainer}>
                        Google Workspace
                      </b>
                    </div>
                    <div className={styles.easyToUseControlPanelForWrapper}>
                      <div className={styles.suiteOfCloud}>
                        {" "}
                        Suite of cloud based tools for email, documents, and
                        collaboration.
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameDiv}>
                    <div className={styles.discoverYourBestChoiceForWrapper}>
                      <b className={styles.startHostingAtContainer}>
                        Zoho Worksplace
                      </b>
                    </div>
                    <div className={styles.easyToUseControlPanelForWrapper}>
                      <div className={styles.easyToUseControlPanel}>
                        Suite of cloud-based productivity tools including email,
                        document creation, and collaboration.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameParent37}>
          <div className={styles.frameParent38}>
            <div className={styles.discoverOurWideRangeOfProWrapper}>
              <b className={styles.startHostingAtContainer}>
                <span>{`Discover Our Wide Range of `}</span>
                <span className={styles.yourBestChoice}>Product Offerings</span>
              </b>
            </div>
            <div className={styles.exploreOurExtensiveRangeOfWrapper}>
              <div className={styles.exploreOurExtensive}>
                Explore our extensive range of web hosting services in Nepal
                with affordable hosting charges, customized to meet your
                website’s unique needs.
              </div>
            </div>
          </div>
          <div className={styles.groupParent1}>
            <div className={styles.groupParent2}>
              <div className={styles.webParent}>
                <div className={styles.web}>
                  <div className={styles.image102Parent}>
                    <img
                      className={styles.image102Icon}
                      alt=""
                      src="/image-102@2x.png"
                    />
                    <div className={styles.image27Wrapper}>
                      <div className={styles.image27Wrapper}>
                        <div
                          className={styles.discoverYourBestChoiceForWrapper}
                        >
                          <div className={styles.freeMigration}>
                            Web Hosting
                          </div>
                        </div>
                        <div className={styles.startingFromOnly}>
                          Starting From Only
                        </div>
                      </div>
                      <div className={styles.rs119900yearWrapper}>
                        <div className={styles.rs119900year}>
                          Rs 1199.00/year
                        </div>
                      </div>
                    </div>
                    <div className={styles.save30ExtraUsingPromoPrWrapper}>
                      <div className={styles.freeDomain}>
                        Save 30% Extra Using Promo "PROTO30"
                      </div>
                    </div>
                    <div className={styles.findYourIdealSharedHostingWrapper}>
                      <div className={styles.findYourIdeal}>
                        Find Your Ideal Shared Hosting Plan: Customized,
                        Cost-Effective, Starting from Rs 99.00/mo.
                      </div>
                    </div>
                  </div>
                  <div className={styles.webInner}>
                    <div className={styles.getWebHostingParent}>
                      <div className={styles.freeDomain}>Get Web Hosting</div>
                      <img
                        className={styles.iconDiagonalArrowRightUp}
                        alt=""
                        src="/-icon-diagonal-arrow-right-up-outline.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.cloud}>
                  <div className={styles.image102Parent}>
                    <div className={styles.mditickCircleOutlineParent}>
                      <img
                        className={styles.image102Icon}
                        alt=""
                        src="/image-101@2x.png"
                      />
                    </div>
                    <div className={styles.image27Wrapper}>
                      <div className={styles.image27Wrapper}>
                        <div
                          className={styles.discoverYourBestChoiceForWrapper}
                        >
                          <div className={styles.freeMigration}>
                            Cloud Hosting
                          </div>
                        </div>
                        <div className={styles.startingFromOnly}>
                          Starting From Only
                        </div>
                      </div>
                      <div className={styles.rs119900yearWrapper}>
                        <div className={styles.rs119900year}>
                          Rs 1199.00/year
                        </div>
                      </div>
                    </div>
                    <div className={styles.save30ExtraUsingPromoPrWrapper}>
                      <div className={styles.freeDomain}>
                        Save 30% Extra Using Promo "PROTO30"
                      </div>
                    </div>
                    <div className={styles.findYourIdealSharedHostingWrapper}>
                      <div className={styles.findYourIdeal}>
                        Find Your Ideal Shared Hosting Plan: Customized,
                        Cost-Effective, Starting from Rs 99.00/mo.
                      </div>
                    </div>
                  </div>
                  <div className={styles.cloudInner}>
                    <div className={styles.getCloudParent}>
                      <div className={styles.freeDomain}>Get Cloud</div>
                      <img
                        className={styles.iconDiagonalArrowRightUp}
                        alt=""
                        src="/-icon-diagonal-arrow-right-up-outline.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.windows}>
                  <div className={styles.image102Parent}>
                    <div className={styles.mditickCircleOutlineParent}>
                      <img
                        className={styles.image102Icon}
                        alt=""
                        src="/image-96@2x.png"
                      />
                    </div>
                    <div className={styles.image27Wrapper}>
                      <div className={styles.image27Wrapper}>
                        <div
                          className={styles.discoverYourBestChoiceForWrapper}
                        >
                          <div className={styles.freeMigration}>
                            Windows/ASP .NET Hosting
                          </div>
                        </div>
                        <div className={styles.startingFromOnly2}>
                          Starting From Only
                        </div>
                      </div>
                      <div className={styles.rs119900yearFrame}>
                        <div className={styles.rs119900year}>
                          Rs 1199.00/year
                        </div>
                      </div>
                    </div>
                    <div className={styles.save30ExtraUsingPromoPrFrame}>
                      <div className={styles.freeDomain}>
                        Save 30% Extra Using Promo "PROTO30"
                      </div>
                    </div>
                    <div className={styles.findYourIdealSharedHostingFrame}>
                      <div className={styles.findYourIdeal}>
                        Find Your Ideal Shared Hosting Plan: Customized,
                        Cost-Effective, Starting from Rs 99.00/mo.
                      </div>
                    </div>
                  </div>
                  <div className={styles.cloudInner}>
                    <div className={styles.getCloudParent}>
                      <div className={styles.freeDomain}>Get Windows Plesk</div>
                      <img
                        className={styles.iconDiagonalArrowRightUp}
                        alt=""
                        src="/-icon-diagonal-arrow-right-up-outline.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.tomParent}>
                <div className={styles.web}>
                  <div className={styles.image102Parent}>
                    <img
                      className={styles.image102Icon}
                      alt=""
                      src="/image-100@2x.png"
                    />
                    <div className={styles.image27Wrapper}>
                      <div className={styles.image27Wrapper}>
                        <div
                          className={styles.discoverYourBestChoiceForWrapper}
                        >
                          <div className={styles.freeMigration}>
                            Tomcat cPanel Hosting
                          </div>
                        </div>
                        <div className={styles.startingFromOnly}>
                          Starting From Only
                        </div>
                      </div>
                      <div className={styles.rs119900yearWrapper}>
                        <div className={styles.rs119900year}>
                          Rs 1199.00/year
                        </div>
                      </div>
                    </div>
                    <div className={styles.save30ExtraUsingPromoPrWrapper}>
                      <div className={styles.freeDomain}>
                        Save 30% Extra Using Promo "PROTO30"
                      </div>
                    </div>
                    <div className={styles.findYourIdealSharedHostingWrapper}>
                      <div className={styles.findYourIdeal}>
                        Find Your Ideal Shared Hosting Plan: Customized,
                        Cost-Effective, Starting from Rs 99.00/mo.
                      </div>
                    </div>
                  </div>
                  <div className={styles.tomInner}>
                    <div className={styles.getCloudParent}>
                      <div className={styles.freeDomain}>Get Tomcat cPanel</div>
                      <img
                        className={styles.iconDiagonalArrowRightUp}
                        alt=""
                        src="/-icon-diagonal-arrow-right-up-outline.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.cpanel1}>
                  <div className={styles.image102Parent}>
                    <img
                      className={styles.image102Icon}
                      alt=""
                      src="/image-103@2x.png"
                    />
                    <div className={styles.image27Wrapper}>
                      <div className={styles.image27Wrapper}>
                        <div
                          className={styles.discoverYourBestChoiceForWrapper}
                        >
                          <div className={styles.freeMigration}>
                            cPanel Reseller Hosting
                          </div>
                        </div>
                        <div className={styles.startingFromOnly}>
                          Starting From Only
                        </div>
                      </div>
                      <div className={styles.rs119900yearWrapper}>
                        <div className={styles.rs119900year}>
                          Rs 1199.00/year
                        </div>
                      </div>
                    </div>
                    <div className={styles.save30ExtraUsingPromoPrWrapper}>
                      <div className={styles.freeDomain}>
                        Save 30% Extra Using Promo "PROTO30"
                      </div>
                    </div>
                    <div className={styles.findYourIdealSharedHostingWrapper}>
                      <div className={styles.findYourIdeal}>
                        Find Your Ideal Shared Hosting Plan: Customized,
                        Cost-Effective, Starting from Rs 99.00/mo.
                      </div>
                    </div>
                  </div>
                  <div className={styles.tomInner}>
                    <div className={styles.getCloudParent}>
                      <div className={styles.freeDomain}>
                        Get cPanel Reseller
                      </div>
                      <img
                        className={styles.iconDiagonalArrowRightUp}
                        alt=""
                        src="/-icon-diagonal-arrow-right-up-outline.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.cloud}>
                  <div className={styles.image102Parent}>
                    <div className={styles.mditickCircleOutlineParent}>
                      <img
                        className={styles.image102Icon}
                        alt=""
                        src="/image-98@2x.png"
                      />
                    </div>
                    <div className={styles.image27Wrapper}>
                      <div className={styles.image27Wrapper}>
                        <div
                          className={styles.discoverYourBestChoiceForWrapper}
                        >
                          <div className={styles.freeMigration}>
                            Linux Cloud VPS Servers
                          </div>
                        </div>
                        <div className={styles.startingFromOnly}>
                          Starting From Only
                        </div>
                      </div>
                      <div className={styles.rs119900yearWrapper}>
                        <div className={styles.rs119900year}>
                          Rs 1199.00/year
                        </div>
                      </div>
                    </div>
                    <div className={styles.save30ExtraUsingPromoPrWrapper}>
                      <div className={styles.freeDomain}>
                        Save 30% Extra Using Promo "PROTO30"
                      </div>
                    </div>
                    <div className={styles.findYourIdealSharedHostingWrapper}>
                      <div className={styles.findYourIdeal}>
                        Find Your Ideal Shared Hosting Plan: Customized,
                        Cost-Effective, Starting from Rs 99.00/mo.
                      </div>
                    </div>
                  </div>
                  <div className={styles.tomInner}>
                    <div className={styles.getCloudParent}>
                      <div className={styles.freeDomain}>Get Linux Cloud</div>
                      <img
                        className={styles.iconDiagonalArrowRightUp}
                        alt=""
                        src="/-icon-diagonal-arrow-right-up-outline.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.windowsRdpParent}>
              <div className={styles.web}>
                <div className={styles.image102Parent}>
                  <img
                    className={styles.image103Icon1}
                    alt=""
                    src="/image-103@2x.png"
                  />
                  <div className={styles.image27Wrapper}>
                    <div className={styles.image27Wrapper}>
                      <div className={styles.discoverYourBestChoiceForWrapper}>
                        <div className={styles.freeMigration}>
                          Windows RDP Hosting
                        </div>
                      </div>
                      <div className={styles.startingFromOnly}>
                        Starting From Only
                      </div>
                    </div>
                    <div className={styles.rs119900yearWrapper}>
                      <div className={styles.rs119900year}>Rs 1199.00/year</div>
                    </div>
                  </div>
                  <div className={styles.save30ExtraUsingPromoPrWrapper}>
                    <div className={styles.freeDomain}>
                      Save 30% Extra Using Promo "PROTO30"
                    </div>
                  </div>
                  <div className={styles.findYourIdealSharedHostingWrapper}>
                    <div className={styles.findYourIdeal}>
                      Find Your Ideal Shared Hosting Plan: Customized,
                      Cost-Effective, Starting from Rs 99.00/mo.
                    </div>
                  </div>
                </div>
                <div className={styles.tomInner}>
                  <div className={styles.getCloudParent}>
                    <div className={styles.freeDomain}>Get Windows RDP</div>
                    <img
                      className={styles.iconDiagonalArrowRightUp}
                      alt=""
                      src="/-icon-diagonal-arrow-right-up-outline.svg"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.cloud}>
                <div className={styles.image102Parent}>
                  <img
                    className={styles.image106Icon}
                    alt=""
                    src="/image-106@2x.png"
                  />
                  <div className={styles.image27Wrapper}>
                    <div className={styles.image27Wrapper}>
                      <div className={styles.discoverYourBestChoiceForWrapper}>
                        <div className={styles.freeMigration}>
                          WPSquared WordPress Hosting
                        </div>
                      </div>
                      <div className={styles.startingFromOnly}>
                        Starting From Only
                      </div>
                    </div>
                    <div className={styles.rs119900yearWrapper}>
                      <div className={styles.rs119900year}>Rs 1199.00/year</div>
                    </div>
                  </div>
                  <div className={styles.save30ExtraUsingPromoPrWrapper}>
                    <div className={styles.freeDomain}>
                      Save 30% Extra Using Promo "PROTO30"
                    </div>
                  </div>
                  <div className={styles.findYourIdealSharedHostingWrapper}>
                    <div className={styles.findYourIdeal}>
                      Find Your Ideal Shared Hosting Plan: Customized,
                      Cost-Effective, Starting from Rs 99.00/mo.
                    </div>
                  </div>
                </div>
                <div className={styles.tomInner}>
                  <div className={styles.getCloudParent}>
                    <div className={styles.freeDomain}>Get WPSquared</div>
                    <img
                      className={styles.iconDiagonalArrowRightUp}
                      alt=""
                      src="/-icon-diagonal-arrow-right-up-outline.svg"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.aspnetReseller}>
                <div className={styles.image102Parent}>
                  <img
                    className={styles.image102Icon}
                    alt=""
                    src="/image-107@2x.png"
                  />
                  <div className={styles.image27Wrapper}>
                    <div className={styles.image27Wrapper}>
                      <div className={styles.discoverYourBestChoiceForWrapper}>
                        <div className={styles.freeMigration}>
                          Windows/ASP.NET Reseller Hosting
                        </div>
                      </div>
                      <div className={styles.startingFromOnly}>
                        Starting From Only
                      </div>
                    </div>
                    <div className={styles.rs119900yearWrapper}>
                      <div className={styles.rs119900year}>Rs 1199.00/year</div>
                    </div>
                  </div>
                  <div className={styles.save30ExtraUsingPromoPrWrapper}>
                    <div className={styles.freeDomain}>
                      Save 30% Extra Using Promo "PROTO30"
                    </div>
                  </div>
                  <div className={styles.findYourIdealSharedHostingWrapper}>
                    <div className={styles.findYourIdeal}>
                      Find Your Ideal Shared Hosting Plan: Customized,
                      Cost-Effective, Starting from Rs 99.00/mo.
                    </div>
                  </div>
                </div>
                <div className={styles.tomInner}>
                  <div className={styles.getCloudParent}>
                    <div className={styles.freeDomain}>Get Windows/ASP.NET</div>
                    <img
                      className={styles.iconDiagonalArrowRightUp}
                      alt=""
                      src="/-icon-diagonal-arrow-right-up-outline.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.homePageItem} />
        <img className={styles.homePageInner} alt="" src="/vector-2.svg" />
        <div className={styles.frameParent60}>
          <div className={styles.frameParent61}>
            <div className={styles.image27Wrapper}>
              <div className={styles.discoverYourBestChoiceForWrapper}>
                <b className={styles.startHostingAtContainer}>
                  <span>{`Customer Success `}</span>
                  <span className={styles.yourBestChoice}>Stories</span>
                </b>
              </div>
              <div className={styles.readTheRemarkableStoriesOfWrapper}>
                <div className={styles.readTheRemarkable}>
                  Read the remarkable stories of individuals who turned their
                  online dreams into reality and witnessed game-changing success
                  with ProtozoaHost
                </div>
              </div>
            </div>
            <div className={styles.groupParent3}>
              <div className={styles.rectangleParent11}>
                <div className={styles.groupChild43} />
                <img
                  className={styles.rectangleIcon}
                  alt=""
                  src="/rectangle-42@2x.png"
                />
                <div className={styles.frameParent63}>
                  <div className={styles.searchMindsAcheives10xBusiWrapper}>
                    <div className={styles.searchMindsAcheives}>
                      Search Minds Acheives 10x Business Boost: Thanks to
                      ProtozoaHost Premium Hosting
                    </div>
                  </div>
                  <div className={styles.readMoreParent}>
                    <div className={styles.freeDomain}>Read more</div>
                    <img
                      className={styles.basilarrowUpOutlineIcon}
                      alt=""
                      src="/basilarrowupoutline@2x.png"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.rectangleParent11}>
                <div className={styles.groupChild43} />
                <img
                  className={styles.rectangleIcon}
                  alt=""
                  src="/rectangle-42@2x.png"
                />
                <div className={styles.frameParent63}>
                  <div className={styles.searchMindsAcheives10xBusiWrapper}>
                    <div className={styles.searchMindsAcheives}>
                      Search Minds Acheives 10x Business Boost: Thanks to
                      ProtozoaHost Premium Hosting
                    </div>
                  </div>
                  <div className={styles.readMoreParent}>
                    <div className={styles.freeDomain}>Read more</div>
                    <img
                      className={styles.basilarrowUpOutlineIcon}
                      alt=""
                      src="/basilarrowupoutline@2x.png"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.rectangleParent11}>
                <div className={styles.groupChild43} />
                <img
                  className={styles.rectangleIcon}
                  alt=""
                  src="/rectangle-42@2x.png"
                />
                <div className={styles.frameParent63}>
                  <div className={styles.searchMindsAcheives10xBusiWrapper}>
                    <div className={styles.searchMindsAcheives}>
                      Search Minds Acheives 10x Business Boost: Thanks to
                      ProtozoaHost Premium Hosting
                    </div>
                  </div>
                  <div className={styles.readMoreParent}>
                    <div className={styles.freeDomain}>Read more</div>
                    <img
                      className={styles.basilarrowUpOutlineIcon}
                      alt=""
                      src="/basilarrowupoutline@2x.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.readMoreStoriesParent}>
            <div className={styles.freeDomain}>Read More Stories</div>
            <img
              className={styles.iconDiagonalArrowRightUp}
              alt=""
              src="/-icon-diagonal-arrow-right-up-outline1.svg"
            />
          </div>
        </div>
        <div className={styles.rectangleParent14}>
          <div className={styles.groupChild48} />
          <div className={styles.frameParent66}>
            <div className={styles.discoverYourBestChoiceForWrapper}>
              <b className={styles.startHostingAtContainer}>
                <p className={styles.discoverYourBestChoiceFor}>
                  One-Click installs so you can
                </p>
                <p className={styles.discoverYourBestChoiceFor}>build happy.</p>
              </b>
            </div>
            <div className={styles.image8Parent}>
              <img className={styles.image8Icon} alt="" src="/image-8@2x.png" />
              <img className={styles.image9Icon} alt="" src="/image-9@2x.png" />
              <img
                className={styles.image10Icon}
                alt=""
                src="/image-10@2x.png"
              />
              <img
                className={styles.image11Icon}
                alt=""
                src="/image-11@2x.png"
              />
              <img
                className={styles.image12Icon}
                alt=""
                src="/image-12@2x.png"
              />
            </div>
          </div>
        </div>
        <div className={styles.navBar}>
          <div className={styles.navBarInner}>
            <div className={styles.frameParent67}>
              <div className={styles.frameParent68}>
                <div className={styles.calling2Parent}>
                  <img
                    className={styles.calling2Icon}
                    alt=""
                    src="/calling-2.svg"
                  />
                  <div className={styles.yourdomainnamecom}>9851316413</div>
                </div>
                <div className={styles.envelope1Parent}>
                  <img
                    className={styles.calling2Icon}
                    alt=""
                    src="/envelope-1.svg"
                  />
                  <div className={styles.yourdomainnamecom}>
                    support@protozoahost.com
                  </div>
                </div>
                <div
                  className={styles.money11Parent}
                  onClick={onFrameContainerClick2}
                >
                  <img
                    className={styles.calling2Icon}
                    alt=""
                    src="/money-1-1.svg"
                  />
                  <div className={styles.yourdomainnamecom}>Affiliates</div>
                </div>
                <div className={styles.calling2Parent}>
                  <img
                    className={styles.calling2Icon}
                    alt=""
                    src="/blog-1.svg"
                  />
                  <div className={styles.yourdomainnamecom}>Blogs</div>
                </div>
                <div
                  className={styles.money11Parent}
                  onClick={onFrameContainerClick3}
                >
                  <img
                    className={styles.calling2Icon}
                    alt=""
                    src="/headset-1.svg"
                  />
                  <div className={styles.yourdomainnamecom}>Contact</div>
                </div>
                <div
                  className={styles.infoButton1Parent}
                  onClick={onFrameContainerClick4}
                >
                  <img
                    className={styles.calling2Icon}
                    alt=""
                    src="/infobutton-1.svg"
                  />
                  <div className={styles.yourdomainnamecom}>About Us</div>
                </div>
                <div className={styles.envelope1Parent}>
                  <img
                    className={styles.calling2Icon}
                    alt=""
                    src="/infobutton-1.svg"
                  />
                  <div className={styles.yourdomainnamecom}>
                    Become a Partner
                  </div>
                </div>
              </div>
              <div className={styles.frameParent69}>
                <div className={styles.facebook11Parent}>
                  <img
                    className={styles.calling2Icon}
                    alt=""
                    src="/facebook-1-1.svg"
                  />
                  <img
                    className={styles.calling2Icon}
                    alt=""
                    src="/instagramlogo-1.svg"
                  />
                  <img
                    className={styles.calling2Icon}
                    alt=""
                    src="/twitter-1-1.svg"
                  />
                  <img
                    className={styles.calling2Icon}
                    alt=""
                    src="/linkedin-1-1.svg"
                  />
                </div>
                <img className={styles.iconMenu} alt="" src="/-icon-menu.svg" />
              </div>
            </div>
          </div>
          <div className={styles.logoParent}>
            <div className={styles.logo}>
              <img
                className={styles.protozoahostlogo11E169560957Icon}
                alt=""
                src="/protozoahostlogo11e1695609575419-1@2x.png"
              />
            </div>
            <div className={styles.frameParent70}>
              <div
                className={styles.domainsParent}
                onClick={openDomainDropdown}
              >
                <div className={styles.freeDomain}>Domains</div>
                <div className={styles.iconArrowDownWrapper}>
                  <div className={styles.frameDiv}>
                    <img
                      className={styles.vectorIcon}
                      alt=""
                      src="/vector.svg"
                    />
                  </div>
                </div>
              </div>
              <div
                className={styles.domainsParent}
                onClick={openHostingDropdown}
              >
                <div className={styles.freeDomain}>Hostings</div>
                <div className={styles.iconArrowDownWrapper}>
                  <div className={styles.iconArrowDown1}>
                    <img
                      className={styles.vectorIcon}
                      alt=""
                      src="/vector.svg"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.domainsParent} onClick={openReseller}>
                <div className={styles.freeDomain}>Reseller</div>
                <div className={styles.iconArrowDownWrapper}>
                  <div className={styles.frameDiv}>
                    <img
                      className={styles.vectorIcon}
                      alt=""
                      src="/vector.svg"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.domainsParent} onClick={openServersAndVPS}>
                <div className={styles.freeDomain}>{`Cloud Server & VPS `}</div>
                <div className={styles.iconArrowDownWrapper}>
                  <div className={styles.frameDiv}>
                    <img
                      className={styles.vectorIcon}
                      alt=""
                      src="/vector.svg"
                    />
                  </div>
                </div>
              </div>
              <div
                className={styles.domainsParent}
                onClick={openCloudSolutions}
              >
                <div className={styles.freeDomain}>Cloud Solutions</div>
                <div className={styles.iconArrowDownWrapper}>
                  <div className={styles.frameDiv}>
                    <img
                      className={styles.vectorIcon}
                      alt=""
                      src="/vector.svg"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.domainsParent} onClick={openSupport}>
                <div className={styles.freeDomain}>Support</div>
                <div className={styles.iconArrowDownWrapper}>
                  <div className={styles.frameDiv}>
                    <img
                      className={styles.vectorIcon}
                      alt=""
                      src="/vector.svg"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.domainsParent} onClick={openMyAccount}>
                <div className={styles.freeDomain}>My Account</div>
                <div className={styles.iconArrowDownWrapper}>
                  <div className={styles.frameDiv}>
                    <img
                      className={styles.vectorIcon}
                      alt=""
                      src="/vector.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.useFrispes}>
          <div className={styles.head}>
            <b className={styles.startHostingAtContainer}>
              <span>Trusted By</span>
              <span className={styles.yourBestChoice}> Leading Brands</span>
            </b>
            <div className={styles.subtitle}>
              Trusted by Big brands, small bussiness, new startup and inividuals
            </div>
          </div>
          <div className={styles.logoGroup}>
            <img className={styles.logoIcon} alt="" src="/logo.svg" />
            <img className={styles.logoIcon1} alt="" src="/logo1.svg" />
            <img className={styles.logoIcon2} alt="" src="/logo2.svg" />
            <img className={styles.logoIcon3} alt="" src="/logo3.svg" />
            <img className={styles.logoIcon4} alt="" src="/logo4.svg" />
            <img className={styles.logoIcon5} alt="" src="/logo5.svg" />
          </div>
        </div>
        <div className={styles.frameParent71}>
          <div className={styles.frameParent72}>
            <div className={styles.frameContainer}>
              <div className={styles.frameParent74}>
                <div className={styles.discoverYourBestChoiceForWrapper}>
                  <b className={styles.nonStopSupportContainer}>
                    <span className={styles.virtualPrivateServerContainer1}>
                      <p className={styles.discoverYourBestChoiceFor}>
                        <span className={styles.discover}>
                          Non-Stop Support | Assistance in
                        </span>
                        <span>{` `}</span>
                      </p>
                      <p className={styles.discoverYourBestChoiceFor}>
                        Nepali, English, Maithili, Hindi
                      </p>
                    </span>
                  </b>
                </div>
                <div className={styles.since2018ProtozoaHostHasWrapper}>
                  <div className={styles.atProtozoahostWe}>
                    At ProtozoaHost, we understand that problems with Reseller
                    hosting don't always occur during office hours. That's why
                    our stellar Reseller web hosting support team doesn't stick
                    to the 9-to-5 schedule either. We value all questions and
                    are committed to dedicating the time necessary to resolve
                    your issues.
                  </div>
                </div>
              </div>
              <div className={styles.frameWrapper10}>
                <div className={styles.frameWrapper11}>
                  <div className={styles.youCanReachUs247ForHelpWrapper}>
                    <div className={styles.freeDomain}>
                      You can reach us 24/7 for help with any issues
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.frameParent75}>
                <div className={styles.mditickCircleOutlineParent}>
                  <img
                    className={styles.mditickCircleOutlineIcon}
                    alt=""
                    src="/mditickcircleoutline.svg"
                  />
                  <div className={styles.freeDomainWrapper}>
                    <div className={styles.freeDomain}>
                      24/7/365 Available Reseller Hosting Support
                    </div>
                  </div>
                </div>
                <div className={styles.mditickCircleOutlineGroup}>
                  <img
                    className={styles.mditickCircleOutlineIcon}
                    alt=""
                    src="/mditickcircleoutline.svg"
                  />
                  <div className={styles.freeDomainWrapper}>
                    <div className={styles.freeDomain}>
                      99.95% Support Case Resolution
                    </div>
                  </div>
                </div>
                <div className={styles.mditickCircleOutlineGroup}>
                  <img
                    className={styles.mditickCircleOutlineIcon}
                    alt=""
                    src="/mditickcircleoutline.svg"
                  />
                  <div className={styles.freeDomainWrapper}>
                    <div className={styles.freeDomain}>
                      Expert Technical Support
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.frameWrapper12}>
              <div className={styles.frameParent76}>
                <div className={styles.liveChat1Parent}>
                  <img
                    className={styles.liveChat1Icon}
                    alt=""
                    src="/livechat-1.svg"
                  />
                  <div className={styles.freeDomain}>Start Live Chat</div>
                </div>
                <div className={styles.emailUsWrapper}>
                  <div className={styles.freeDomain}>Email Us</div>
                </div>
              </div>
            </div>
          </div>
          <img className={styles.frameInner} alt="" src="/group-122@2x.png" />
        </div>
        <div className={styles.groupParent4}>
          <div className={styles.rectangleParent15}>
            <div className={styles.groupChild49} />
            <div className={styles.groupChild50} />
            <div className={styles.groupChild51} />
            <div className={styles.groupChild52} />
            <img className={styles.vectorIcon7} alt="" src="/vector1.svg" />
            <div className={styles.groupChild53} />
            <div className={styles.https}>https://</div>
            <div className={styles.com}>.com</div>
            <div className={styles.groupChild54} />
            <img
              className={styles.freepikExport20240606161727sIcon}
              alt=""
              src="/freepikexport20240606161727swsp-1@2x.png"
            />
            <img className={styles.groupChild55} alt="" src="/vector-3.svg" />
            <img className={styles.vectorIcon8} alt="" src="/vector2.svg" />
            <div className={styles.groupChild56} />
            <img
              className={styles.security1Icon}
              alt=""
              src="/security-1.svg"
            />
          </div>
          <div className={styles.frameWrapper13}>
            <div className={styles.frameDiv}>
              <div className={styles.frameParent74}>
                <div className={styles.discoverYourBestChoiceForWrapper}>
                  <b className={styles.unlimitedFreeMigrationsContainer}>
                    <span className={styles.virtualPrivateServerContainer1}>
                      <span>Unlimited</span>
                      <span
                        className={styles.yourBestChoice}
                      >{` Free Migrations `}</span>
                      <span>{`&`}</span>
                      <span className={styles.yourBestChoice}>
                        {" "}
                        Free SSL Certificates
                      </span>
                    </span>
                  </b>
                </div>
                <div className={styles.since2018ProtozoaHostHasWrapper}>
                  <div className={styles.atProtozoahostWe}>
                    <span className={styles.virtualPrivateServerContainer1}>
                      <p className={styles.discoverYourBestChoiceFor}>
                        Transitioning to ProtozoaHost from your existing service
                        provider? Allow us to manage the entire migration
                        process on your behalf.
                      </p>
                      <p className={styles.discoverYourBestChoiceFor}>&nbsp;</p>
                      <p className={styles.discoverYourBestChoiceFor}>
                        When you transfer any number of your websites to your
                        ProtozoaHost subscription, you won't incur any expenses.
                        Whether you possess 1, 10, or even 100 websites, there
                        will be no charges applicable.
                      </p>
                      <p className={styles.discoverYourBestChoiceFor}>&nbsp;</p>
                      <p className={styles.discoverYourBestChoiceFor}>
                        Every website hosted through ProtozoaHost is equipped
                        with a complimentary default AutoSSL. As soon as your
                        website is up and running, our automated SSL checker
                        will seamlessly deploy a free SSL certificate for you.
                        This process occurs hourly to ensure a secure browsing
                        experience.
                      </p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.rectangleParent14}>
          <div className={styles.groupChild48} />
          <div className={styles.frameParent66}>
            <div className={styles.discoverYourBestChoiceForWrapper}>
              <b className={styles.startHostingAtContainer}>
                <p className={styles.discoverYourBestChoiceFor}>
                  One-Click installs so you can
                </p>
                <p className={styles.discoverYourBestChoiceFor}>build happy.</p>
              </b>
            </div>
            <div className={styles.image8Parent}>
              <img className={styles.image8Icon} alt="" src="/image-8@2x.png" />
              <img className={styles.image9Icon} alt="" src="/image-9@2x.png" />
              <img
                className={styles.image10Icon}
                alt=""
                src="/image-10@2x.png"
              />
              <img
                className={styles.image11Icon}
                alt=""
                src="/image-11@2x.png"
              />
              <img
                className={styles.image12Icon}
                alt=""
                src="/image-12@2x.png"
              />
            </div>
          </div>
        </div>
        <div className={styles.groupParent4}>
          <div className={styles.rectangleParent15}>
            <div className={styles.groupChild49} />
            <div className={styles.groupChild50} />
            <div className={styles.groupChild51} />
            <div className={styles.groupChild52} />
            <img className={styles.vectorIcon7} alt="" src="/vector1.svg" />
            <div className={styles.groupChild53} />
            <div className={styles.https}>https://</div>
            <div className={styles.com}>.com</div>
            <div className={styles.groupChild54} />
            <img
              className={styles.freepikExport20240606161727sIcon}
              alt=""
              src="/freepikexport20240606161727swsp-1@2x.png"
            />
            <img className={styles.groupChild55} alt="" src="/vector-3.svg" />
            <img className={styles.vectorIcon8} alt="" src="/vector2.svg" />
            <div className={styles.groupChild56} />
            <img
              className={styles.security1Icon}
              alt=""
              src="/security-1.svg"
            />
          </div>
          <div className={styles.frameWrapper13}>
            <div className={styles.frameDiv}>
              <div className={styles.frameParent74}>
                <div className={styles.discoverYourBestChoiceForWrapper}>
                  <b className={styles.unlimitedFreeMigrationsContainer}>
                    <span className={styles.virtualPrivateServerContainer1}>
                      <span>Unlimited</span>
                      <span
                        className={styles.yourBestChoice}
                      >{` Free Migrations `}</span>
                      <span>{`&`}</span>
                      <span className={styles.yourBestChoice}>
                        {" "}
                        Free SSL Certificates
                      </span>
                    </span>
                  </b>
                </div>
                <div className={styles.since2018ProtozoaHostHasWrapper}>
                  <div className={styles.atProtozoahostWe}>
                    <span className={styles.virtualPrivateServerContainer1}>
                      <p className={styles.discoverYourBestChoiceFor}>
                        Transitioning to ProtozoaHost from your existing service
                        provider? Allow us to manage the entire migration
                        process on your behalf.
                      </p>
                      <p className={styles.discoverYourBestChoiceFor}>&nbsp;</p>
                      <p className={styles.discoverYourBestChoiceFor}>
                        When you transfer any number of your websites to your
                        ProtozoaHost subscription, you won't incur any expenses.
                        Whether you possess 1, 10, or even 100 websites, there
                        will be no charges applicable.
                      </p>
                      <p className={styles.discoverYourBestChoiceFor}>&nbsp;</p>
                      <p className={styles.discoverYourBestChoiceFor}>
                        Every website hosted through ProtozoaHost is equipped
                        with a complimentary default AutoSSL. As soon as your
                        website is up and running, our automated SSL checker
                        will seamlessly deploy a free SSL certificate for you.
                        This process occurs hourly to ensure a secure browsing
                        experience.
                      </p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.homePageChild1} />
        <div className={styles.homePageChild2} />
        <div className={styles.homePageInner1}>
          <div className={styles.groupParent6}>
            <div className={styles.rectangleParent18}>
              <div className={styles.groupChild66} />
              <div className={styles.groupChild67} />
              <div className={styles.groupChild68} />
              <div className={styles.groupChild69} />
              <img className={styles.vectorIcon11} alt="" src="/vector3.svg" />
              <div className={styles.groupChild70} />
              <div className={styles.groupChild71} />
              <div className={styles.protozoahostServerParent}>
                <div className={styles.protozoahostServer}>
                  <p className={styles.discoverYourBestChoiceFor}>
                    ProtozoaHost
                  </p>
                  <p className={styles.discoverYourBestChoiceFor}>Server</p>
                </div>
                <div className={styles.div11}>4329</div>
                <div className={styles.groupChild72} />
              </div>
              <div className={styles.apacheW3tcParent}>
                <div className={styles.protozoahostServer}>
                  <p className={styles.discoverYourBestChoiceFor}>Apache+</p>
                  <p className={styles.discoverYourBestChoiceFor}>W3TC</p>
                </div>
                <div className={styles.div12}>1241</div>
                <div className={styles.groupChild73} />
              </div>
              <div className={styles.nginxFcgiParent}>
                <div className={styles.protozoahostServer}>
                  <p className={styles.discoverYourBestChoiceFor}>Nginx+</p>
                  <p className={styles.discoverYourBestChoiceFor}>FCGI</p>
                </div>
                <div className={styles.div13}>858</div>
                <div className={styles.groupChild74} />
              </div>
              <div className={styles.div14}>0</div>
              <div className={styles.div15}>1000</div>
              <div className={styles.div16}>2000</div>
              <div className={styles.div17}>3000</div>
              <div className={styles.div18}>4000</div>
              <div className={styles.apacheWprocketParent}>
                <div className={styles.protozoahostServer}>
                  <p className={styles.discoverYourBestChoiceFor}>Apache+</p>
                  <p className={styles.discoverYourBestChoiceFor}>WPRocket</p>
                </div>
                <div className={styles.div19}>683</div>
                <div className={styles.groupChild75} />
              </div>
              <img
                className={styles.image118Icon}
                alt=""
                src="/image-118@2x.png"
              />
              <div className={styles.transactionssec}>Transactions/sec</div>
            </div>
            <div className={styles.frameParent80}>
              <div className={styles.discoverYourBestChoiceForWrapper}>
                <div className={styles.maximizeWebsiteSpeed}>
                  Maximize Website Speed
                </div>
              </div>
              <div className={styles.frameParent81}>
                <div className={styles.mdicheckBoldParent}>
                  <img
                    className={styles.mdicheckBoldIcon}
                    alt=""
                    src="/mdicheckbold.svg"
                  />
                  <div className={styles.maximizeWebsiteLoading}>
                    Maximize website loading speed with LiteSpeed Web Server
                    technology.
                  </div>
                </div>
                <div className={styles.facebook11Parent}>
                  <img
                    className={styles.mdicheckBoldIcon}
                    alt=""
                    src="/mdicheckbold.svg"
                  />
                  <div className={styles.enjoyOptimizedPerformance}>
                    Enjoy optimized performance with advanced cache solutions.
                  </div>
                </div>
                <div className={styles.mdicheckBoldParent}>
                  <img
                    className={styles.mdicheckBoldIcon}
                    alt=""
                    src="/mdicheckbold.svg"
                  />
                  <div className={styles.maximizeWebsiteLoading}>
                    Reduce website response times up to 3 times with Object
                    Cache for WordPress.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameParent82}>
          <div className={styles.headParent}>
            <div className={styles.head1}>
              <div className={styles.subtitle1}>
                <p className={styles.discoverYourBestChoiceFor}>
                  Protozoa Host offers a variety of hosting plans to suit your
                  needs. Whether you're starting a blog
                </p>
                <p className={styles.discoverYourBestChoiceFor}>
                  or running a large business, we have the perfect plan.
                </p>
              </div>
              <b className={styles.title1} data-scroll-to="titleText">
                <p className={styles.discoverYourBestChoiceFor}>
                  <span>{`Find the Perfect `}</span>
                  <span className={styles.yourBestChoice}>Hosting Plan</span>
                  <span className={styles.discover}> for You</span>
                </p>
              </b>
            </div>
            <div className={styles.frameParent83}>
              <div className={styles.frameParent84}>
                <div className={styles.monthlyWrapper}>
                  <div className={styles.freeDomain}>Monthly</div>
                </div>
                <div className={styles.annuallyWrapper}>
                  <div className={styles.freeDomain}>Annually</div>
                </div>
                <div className={styles.monthlyWrapper}>
                  <div className={styles.freeDomain}>Tri-Annually</div>
                </div>
              </div>
              <div className={styles.detailOffering}>
                <div className={styles.service}>
                  <div className={styles.plese}>
                    <div className={styles.content1}>
                      <div className={styles.frameParent85}>
                        <div className={styles.frameParent86}>
                          <div className={styles.webHostingParent}>
                            <div className={styles.freeDomain}>Web Hosting</div>
                            <div
                              className={styles.perfectForBeginnersContainer}
                            >
                              <p
                                className={styles.discoverYourBestChoiceFor}
                              >{`Perfect for beginners and `}</p>
                              <p className={styles.discoverYourBestChoiceFor}>
                                small blogs.
                              </p>
                            </div>
                          </div>
                          <div className={styles.pricing}>
                            <b className={styles.startHostingAtContainer}>
                              <span>Rs</span>
                              <span className={styles.span2}> 1999</span>
                            </b>
                            <div className={styles.parent6}>
                              <div className={styles.div20}>.00</div>
                              <div className={styles.year}>/year</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.withA1YrTerm30SavingsWrapper}>
                          <div className={styles.startHostingAtContainer}>
                            with a 1-yr term (30% Savings)
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.content2}>
                      <div className={styles.button}>
                        <div className={styles.freeDomain}>Add to Cart</div>
                      </div>
                      <div className={styles.youPayRsContainer}>
                        <p className={styles.discoverYourBestChoiceFor}>
                          <span className={styles.youPay}>{`You pay `}</span>
                          <span className={styles.yourBestChoice}>
                            Rs. 1999 today
                          </span>
                          <span>. Renews at</span>
                        </p>
                        <p className={styles.discoverYourBestChoiceFor}>
                          {" "}
                          same price on 9 Jul, 2025.
                        </p>
                      </div>
                      <div className={styles.listKontent}>
                        <div className={styles.frameParent87}>
                          <div className={styles.mdicheckBoldParent1}>
                            <img
                              className={styles.mdicheckBoldIcon3}
                              alt=""
                              src="/mdicheckbold1.svg"
                            />
                            <div className={styles.startHostingAtContainer}>
                              <span className={styles.mo}>Free .com</span>
                              <span className={styles.span3}> </span>
                              <span className={styles.subDomain}>Domain</span>
                            </div>
                          </div>
                          <div className={styles.mdicheckBoldParent1}>
                            <img
                              className={styles.mdicheckBoldIcon3}
                              alt=""
                              src="/mdicheckbold1.svg"
                            />
                            <div className={styles.startHostingAtContainer}>
                              <span className={styles.mo}>Single</span>
                              <span className={styles.span3}> </span>
                              <span className={styles.subDomain}>Domain</span>
                            </div>
                          </div>
                          <div className={styles.mdicheckBoldParent1}>
                            <img
                              className={styles.mdicheckBoldIcon3}
                              alt=""
                              src="/mdicheckbold1.svg"
                            />
                            <div className={styles.startHostingAtContainer}>
                              <span className={styles.mo}>Five</span>
                              <span className={styles.span3}> </span>
                              <span className={styles.subDomain}>
                                Sub Domain
                              </span>
                            </div>
                          </div>
                          <div className={styles.mdicheckBoldParent1}>
                            <img
                              className={styles.mdicheckBoldIcon3}
                              alt=""
                              src="/mdicheckbold1.svg"
                            />
                            <div className={styles.startHostingAtContainer}>
                              <span className={styles.mo}>2 GB</span>
                              <span className={styles.span3}> </span>
                              <span className={styles.subDomain}>Storage</span>
                            </div>
                          </div>
                          <div className={styles.mdicheckBoldParent1}>
                            <img
                              className={styles.mdicheckBoldIcon3}
                              alt=""
                              src="/mdicheckbold1.svg"
                            />
                            <div className={styles.startHostingAtContainer}>
                              <span className={styles.mo}>2 GB</span>
                              <span className={styles.span3}> </span>
                              <span className={styles.subDomain}>RAM</span>
                            </div>
                          </div>
                          <div className={styles.mdicheckBoldParent1}>
                            <img
                              className={styles.mdicheckBoldIcon3}
                              alt=""
                              src="/mdicheckbold1.svg"
                            />
                            <div className={styles.startHostingAtContainer}>
                              <span className={styles.mo}>3 MySQL</span>
                              <span className={styles.span3}> </span>
                              <span className={styles.subDomain}>Database</span>
                            </div>
                          </div>
                          <div className={styles.mdicheckBoldParent1}>
                            <img
                              className={styles.mdicheckBoldIcon3}
                              alt=""
                              src="/mdicheckbold1.svg"
                            />
                            <div className={styles.startHostingAtContainer}>
                              <span className={styles.mo}>Unmetered</span>
                              <span className={styles.span3}> </span>
                              <span className={styles.subDomain}>
                                Bandwidth
                              </span>
                            </div>
                          </div>
                          <div className={styles.mdicheckBoldParent1}>
                            <img
                              className={styles.mdicheckBoldIcon3}
                              alt=""
                              src="/mdicheckbold1.svg"
                            />
                            <div className={styles.startHostingAtContainer}>
                              <span className={styles.mo}>Control Panel</span>
                              <span className={styles.span3}> </span>
                              <span className={styles.subDomain}>cPanel</span>
                            </div>
                          </div>
                          <div className={styles.mdicheckBoldParent1}>
                            <img
                              className={styles.mdicheckBoldIcon3}
                              alt=""
                              src="/mdicheckbold2.svg"
                            />
                            <div
                              className={styles.freeDomain}
                            >{`WordPress & Softaculous`}</div>
                          </div>
                          <div className={styles.mdicheckBoldParent1}>
                            <img
                              className={styles.mdicheckBoldIcon3}
                              alt=""
                              src="/mdicheckbold1.svg"
                            />
                            <div className={styles.startHostingAtContainer}>
                              <span className={styles.mo}>5 Email</span>
                              <span className={styles.span3}> </span>
                              <span className={styles.subDomain}>Accounts</span>
                            </div>
                          </div>
                          <div className={styles.mdicheckBoldParent1}>
                            <img
                              className={styles.mdicheckBoldIcon3}
                              alt=""
                              src="/mdicheckbold1.svg"
                            />
                            <div className={styles.startHostingAtContainer}>
                              <span className={styles.mo}>Basic</span>
                              <span className={styles.span3}> </span>
                              <span className={styles.subDomain}>
                                Performance
                              </span>
                            </div>
                          </div>
                          <div className={styles.mdicheckBoldParent1}>
                            <img
                              className={styles.mdicheckBoldIcon3}
                              alt=""
                              src="/mdicheckbold1.svg"
                            />
                            <div className={styles.startHostingAtContainer}>
                              <span className={styles.mo}>24 x 7</span>
                              <span className={styles.span3}> </span>
                              <span className={styles.subDomain}>Support</span>
                            </div>
                          </div>
                          <div className={styles.mdicheckBoldParent1}>
                            <img
                              className={styles.mdicheckBoldIcon3}
                              alt=""
                              src="/mdicheckbold1.svg"
                            />
                            <div className={styles.startHostingAtContainer}>
                              <span className={styles.mo}>Free SSL</span>
                              <span className={styles.span3}> </span>
                              <span className={styles.subDomain}>
                                Certificate
                              </span>
                            </div>
                          </div>
                          <div className={styles.mdicheckBoldParent1}>
                            <img
                              className={styles.mdicheckBoldIcon3}
                              alt=""
                              src="/mdicheckbold1.svg"
                            />
                            <div className={styles.startHostingAtContainer}>
                              <span className={styles.mo}>No Backup</span>
                              <span className={styles.span3}> </span>
                              <span className={styles.subDomain}>Included</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.discoverOurWideRangeOfProWrapper}>
                        <div
                          className={styles.discoverYourBestChoiceForWrapper}
                        >
                          <div className={styles.freeDomain}>
                            See all features
                          </div>
                        </div>
                        <img
                          className={styles.mdiarrowDownDropIcon}
                          alt=""
                          src="/mdiarrowdowndrop.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.plese}>
                    <div className={styles.content1}>
                      <div className={styles.frameParent85}>
                        <div className={styles.frameParent86}>
                          <div className={styles.webHostingParent}>
                            <div className={styles.freeDomain}>
                              Windows Hosting
                            </div>
                            <div
                              className={styles.perfectForBeginnersContainer}
                            >
                              Ideal for student projects and small ASP.NET
                              sites.
                            </div>
                          </div>
                          <div className={styles.pricing}>
                            <b className={styles.startHostingAtContainer}>
                              <span>Rs</span>
                              <span className={styles.span2}> 1999</span>
                            </b>
                            <div className={styles.parent6}>
                              <div className={styles.div20}>.00</div>
                              <div className={styles.year}>/year</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.withA1YrTerm30SavingsWrapper}>
                          <div className={styles.startHostingAtContainer}>
                            with a 1-yr term (30% Savings)
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.content2}>
                      <div className={styles.button}>
                        <div className={styles.freeDomain}>Add to Cart</div>
                      </div>
                      <div className={styles.youPayRsContainer}>
                        <p className={styles.discoverYourBestChoiceFor}>
                          <span className={styles.youPay}>{`You pay `}</span>
                          <span className={styles.yourBestChoice}>
                            Rs. 1999 today
                          </span>
                          <span>. Renews at</span>
                        </p>
                        <p className={styles.discoverYourBestChoiceFor}>
                          {" "}
                          same price on 9 Jul, 2025.
                        </p>
                      </div>
                      <div className={styles.listKontent}>
                        <div className={styles.frameParent87}>
                          <div className={styles.mdicheckBoldParent1}>
                            <img
                              className={styles.mdicheckBoldIcon3}
                              alt=""
                              src="/mdicheckbold1.svg"
                            />
                            <div className={styles.startHostingAtContainer}>
                              <span className={styles.mo}>Free .com</span>
                              <span className={styles.span3}> </span>
                              <span className={styles.subDomain}>Domain</span>
                            </div>
                          </div>
                          <div className={styles.mdicheckBoldParent1}>
                            <img
                              className={styles.mdicheckBoldIcon3}
                              alt=""
                              src="/mdicheckbold1.svg"
                            />
                            <div className={styles.startHostingAtContainer}>
                              <span className={styles.mo}>Single</span>
                              <span className={styles.span3}> </span>
                              <span className={styles.subDomain}>Domain</span>
                            </div>
                          </div>
                          <div className={styles.mdicheckBoldParent1}>
                            <img
                              className={styles.mdicheckBoldIcon3}
                              alt=""
                              src="/mdicheckbold1.svg"
                            />
                            <div className={styles.startHostingAtContainer}>
                              <span className={styles.mo}>Five</span>
                              <span className={styles.span3}> </span>
                              <span className={styles.subDomain}>
                                Sub Domain
                              </span>
                            </div>
                          </div>
                          <div className={styles.mdicheckBoldParent1}>
                            <img
                              className={styles.mdicheckBoldIcon3}
                              alt=""
                              src="/mdicheckbold1.svg"
                            />
                            <div className={styles.startHostingAtContainer}>
                              <span className={styles.mo}>2 GB</span>
                              <span className={styles.span3}> </span>
                              <span className={styles.subDomain}>Storage</span>
                            </div>
                          </div>
                          <div className={styles.mdicheckBoldParent1}>
                            <img
                              className={styles.mdicheckBoldIcon3}
                              alt=""
                              src="/mdicheckbold1.svg"
                            />
                            <div className={styles.startHostingAtContainer}>
                              <span className={styles.mo}>2 GB</span>
                              <span className={styles.span3}> </span>
                              <span className={styles.subDomain}>RAM</span>
                            </div>
                          </div>
                          <div className={styles.mdicheckBoldParent1}>
                            <img
                              className={styles.mdicheckBoldIcon3}
                              alt=""
                              src="/mdicheckbold1.svg"
                            />
                            <div className={styles.startHostingAtContainer}>
                              <span className={styles.mo}>3 MySQL</span>
                              <span className={styles.span3}> </span>
                              <span className={styles.subDomain}>Database</span>
                            </div>
                          </div>
                          <div className={styles.mdicheckBoldParent1}>
                            <img
                              className={styles.mdicheckBoldIcon3}
                              alt=""
                              src="/mdicheckbold1.svg"
                            />
                            <div className={styles.startHostingAtContainer}>
                              <span className={styles.mo}>Unmetered</span>
                              <span className={styles.span3}> </span>
                              <span className={styles.subDomain}>
                                Bandwidth
                              </span>
                            </div>
                          </div>
                          <div className={styles.mdicheckBoldParent1}>
                            <img
                              className={styles.mdicheckBoldIcon3}
                              alt=""
                              src="/mdicheckbold1.svg"
                            />
                            <div className={styles.startHostingAtContainer}>
                              <span className={styles.mo}>Control Panel</span>
                              <span className={styles.span3}> </span>
                              <span className={styles.subDomain}>cPanel</span>
                            </div>
                          </div>
                          <div className={styles.mdicheckBoldParent1}>
                            <img
                              className={styles.mdicheckBoldIcon3}
                              alt=""
                              src="/mdicheckbold2.svg"
                            />
                            <div
                              className={styles.freeDomain}
                            >{`WordPress & Softaculous`}</div>
                          </div>
                          <div className={styles.mdicheckBoldParent1}>
                            <img
                              className={styles.mdicheckBoldIcon3}
                              alt=""
                              src="/mdicheckbold1.svg"
                            />
                            <div className={styles.startHostingAtContainer}>
                              <span className={styles.mo}>5 Email</span>
                              <span className={styles.span3}> </span>
                              <span className={styles.subDomain}>Accounts</span>
                            </div>
                          </div>
                          <div className={styles.mdicheckBoldParent1}>
                            <img
                              className={styles.mdicheckBoldIcon3}
                              alt=""
                              src="/mdicheckbold1.svg"
                            />
                            <div className={styles.startHostingAtContainer}>
                              <span className={styles.mo}>Basic</span>
                              <span className={styles.span3}> </span>
                              <span className={styles.subDomain}>
                                Performance
                              </span>
                            </div>
                          </div>
                          <div className={styles.mdicheckBoldParent1}>
                            <img
                              className={styles.mdicheckBoldIcon3}
                              alt=""
                              src="/mdicheckbold1.svg"
                            />
                            <div className={styles.startHostingAtContainer}>
                              <span className={styles.mo}>24 x 7</span>
                              <span className={styles.span3}> </span>
                              <span className={styles.subDomain}>Support</span>
                            </div>
                          </div>
                          <div className={styles.mdicheckBoldParent1}>
                            <img
                              className={styles.mdicheckBoldIcon3}
                              alt=""
                              src="/mdicheckbold1.svg"
                            />
                            <div className={styles.startHostingAtContainer}>
                              <span className={styles.mo}>Free SSL</span>
                              <span className={styles.span3}> </span>
                              <span className={styles.subDomain}>
                                Certificate
                              </span>
                            </div>
                          </div>
                          <div className={styles.mdicheckBoldParent1}>
                            <img
                              className={styles.mdicheckBoldIcon3}
                              alt=""
                              src="/mdicheckbold1.svg"
                            />
                            <div className={styles.startHostingAtContainer}>
                              <span className={styles.mo}>No Backup</span>
                              <span className={styles.span3}> </span>
                              <span className={styles.subDomain}>Included</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.discoverOurWideRangeOfProWrapper}>
                        <div
                          className={styles.discoverYourBestChoiceForWrapper}
                        >
                          <div className={styles.freeDomain}>
                            See all features
                          </div>
                        </div>
                        <img
                          className={styles.mdiarrowDownDropIcon}
                          alt=""
                          src="/mdiarrowdowndrop.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.tomcat}>
                    <div className={styles.brow}>
                      <div className={styles.freeDomain}>Most Popular</div>
                    </div>
                    <div className={styles.content12}>
                      <div className={styles.head}>
                        <div className={styles.frameParent86}>
                          <div className={styles.webHostingParent}>
                            <div className={styles.freeDomain}>
                              Tomcat cPanel Hosting
                            </div>
                            <div
                              className={styles.perfectForBeginnersContainer}
                            >
                              Great for Java developers starting out.
                            </div>
                          </div>
                          <div className={styles.pricing}>
                            <b className={styles.startHostingAtContainer}>
                              <span>Rs</span>
                              <span className={styles.span2}> 1999</span>
                            </b>
                            <div className={styles.parent6}>
                              <div className={styles.div20}>.00</div>
                              <div className={styles.year}>/year</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.withA1YrTerm30SavingsWrapper}>
                          <div className={styles.startHostingAtContainer}>
                            with a 1-yr term (30% Savings)
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.content22}>
                      <div className={styles.button2}>
                        <div className={styles.freeDomain}>Add to Cart</div>
                      </div>
                      <div className={styles.youPayRsContainer}>
                        <p className={styles.discoverYourBestChoiceFor}>
                          <span className={styles.youPay}>{`You pay `}</span>
                          <span className={styles.yourBestChoice}>
                            Rs. 1999 today
                          </span>
                          <span>. Renews at</span>
                        </p>
                        <p className={styles.discoverYourBestChoiceFor}>
                          {" "}
                          same price on 9 Jul, 2025.
                        </p>
                      </div>
                      <div className={styles.listKontent}>
                        <div className={styles.frameParent87}>
                          <div className={styles.mdicheckBoldParent1}>
                            <img
                              className={styles.mdicheckBoldIcon3}
                              alt=""
                              src="/mdicheckbold1.svg"
                            />
                            <div className={styles.startHostingAtContainer}>
                              <span className={styles.mo}>Free .com</span>
                              <span className={styles.span3}> </span>
                              <span className={styles.subDomain}>Domain</span>
                            </div>
                          </div>
                          <div className={styles.mdicheckBoldParent1}>
                            <img
                              className={styles.mdicheckBoldIcon3}
                              alt=""
                              src="/mdicheckbold1.svg"
                            />
                            <div className={styles.startHostingAtContainer}>
                              <span className={styles.mo}>Single</span>
                              <span className={styles.span3}> </span>
                              <span className={styles.subDomain}>Domain</span>
                            </div>
                          </div>
                          <div className={styles.mdicheckBoldParent1}>
                            <img
                              className={styles.mdicheckBoldIcon3}
                              alt=""
                              src="/mdicheckbold1.svg"
                            />
                            <div className={styles.startHostingAtContainer}>
                              <span className={styles.mo}>Five</span>
                              <span className={styles.span3}> </span>
                              <span className={styles.subDomain}>
                                Sub Domain
                              </span>
                            </div>
                          </div>
                          <div className={styles.mdicheckBoldParent1}>
                            <img
                              className={styles.mdicheckBoldIcon3}
                              alt=""
                              src="/mdicheckbold1.svg"
                            />
                            <div className={styles.startHostingAtContainer}>
                              <span className={styles.mo}>2 GB</span>
                              <span className={styles.span3}> </span>
                              <span className={styles.subDomain}>Storage</span>
                            </div>
                          </div>
                          <div className={styles.mdicheckBoldParent1}>
                            <img
                              className={styles.mdicheckBoldIcon3}
                              alt=""
                              src="/mdicheckbold1.svg"
                            />
                            <div className={styles.startHostingAtContainer}>
                              <span className={styles.mo}>2 GB</span>
                              <span className={styles.span3}> </span>
                              <span className={styles.subDomain}>RAM</span>
                            </div>
                          </div>
                          <div className={styles.mdicheckBoldParent1}>
                            <img
                              className={styles.mdicheckBoldIcon3}
                              alt=""
                              src="/mdicheckbold1.svg"
                            />
                            <div className={styles.startHostingAtContainer}>
                              <span className={styles.mo}>3 MySQL</span>
                              <span className={styles.span3}> </span>
                              <span className={styles.subDomain}>Database</span>
                            </div>
                          </div>
                          <div className={styles.mdicheckBoldParent1}>
                            <img
                              className={styles.mdicheckBoldIcon3}
                              alt=""
                              src="/mdicheckbold1.svg"
                            />
                            <div className={styles.startHostingAtContainer}>
                              <span className={styles.mo}>Unmetered</span>
                              <span className={styles.span3}> </span>
                              <span className={styles.subDomain}>
                                Bandwidth
                              </span>
                            </div>
                          </div>
                          <div className={styles.mdicheckBoldParent1}>
                            <img
                              className={styles.mdicheckBoldIcon3}
                              alt=""
                              src="/mdicheckbold1.svg"
                            />
                            <div className={styles.startHostingAtContainer}>
                              <span className={styles.mo}>Control Panel</span>
                              <span className={styles.span3}> </span>
                              <span className={styles.subDomain}>cPanel</span>
                            </div>
                          </div>
                          <div className={styles.mdicheckBoldParent1}>
                            <img
                              className={styles.mdicheckBoldIcon3}
                              alt=""
                              src="/mdicheckbold2.svg"
                            />
                            <div
                              className={styles.freeDomain}
                            >{`WordPress & Softaculous`}</div>
                          </div>
                          <div className={styles.mdicheckBoldParent1}>
                            <img
                              className={styles.mdicheckBoldIcon3}
                              alt=""
                              src="/mdicheckbold1.svg"
                            />
                            <div className={styles.startHostingAtContainer}>
                              <span className={styles.mo}>5 Email</span>
                              <span className={styles.span3}> </span>
                              <span className={styles.subDomain}>Accounts</span>
                            </div>
                          </div>
                          <div className={styles.mdicheckBoldParent1}>
                            <img
                              className={styles.mdicheckBoldIcon3}
                              alt=""
                              src="/mdicheckbold1.svg"
                            />
                            <div className={styles.startHostingAtContainer}>
                              <span className={styles.mo}>Basic</span>
                              <span className={styles.span3}> </span>
                              <span className={styles.subDomain}>
                                Performance
                              </span>
                            </div>
                          </div>
                          <div className={styles.mdicheckBoldParent1}>
                            <img
                              className={styles.mdicheckBoldIcon3}
                              alt=""
                              src="/mdicheckbold1.svg"
                            />
                            <div className={styles.startHostingAtContainer}>
                              <span className={styles.mo}>24 x 7</span>
                              <span className={styles.span3}> </span>
                              <span className={styles.subDomain}>Support</span>
                            </div>
                          </div>
                          <div className={styles.mdicheckBoldParent1}>
                            <img
                              className={styles.mdicheckBoldIcon3}
                              alt=""
                              src="/mdicheckbold1.svg"
                            />
                            <div className={styles.startHostingAtContainer}>
                              <span className={styles.mo}>Free SSL</span>
                              <span className={styles.span3}> </span>
                              <span className={styles.subDomain}>
                                Certificate
                              </span>
                            </div>
                          </div>
                          <div className={styles.mdicheckBoldParent1}>
                            <img
                              className={styles.mdicheckBoldIcon3}
                              alt=""
                              src="/mdicheckbold1.svg"
                            />
                            <div className={styles.startHostingAtContainer}>
                              <span className={styles.mo}>No Backup</span>
                              <span className={styles.span3}> </span>
                              <span className={styles.subDomain}>Included</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.discoverOurWideRangeOfProWrapper}>
                        <div
                          className={styles.discoverYourBestChoiceForWrapper}
                        >
                          <div className={styles.freeDomain}>
                            See all features
                          </div>
                        </div>
                        <img
                          className={styles.mdiarrowDownDropIcon}
                          alt=""
                          src="/mdiarrowdowndrop.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.plese}>
                    <div className={styles.content1}>
                      <div className={styles.frameParent85}>
                        <div className={styles.frameParent86}>
                          <div className={styles.webHostingParent}>
                            <div className={styles.freeDomain}>
                              Startup cPanel Reseller
                            </div>
                            <div
                              className={styles.perfectForBeginnersContainer}
                            >
                              Best for freelancers and startup resellers.
                            </div>
                          </div>
                          <div className={styles.pricing}>
                            <b className={styles.startHostingAtContainer}>
                              <span>Rs</span>
                              <span className={styles.span2}> 1999</span>
                            </b>
                            <div className={styles.parent6}>
                              <div className={styles.div20}>.00</div>
                              <div className={styles.year}>/year</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.withA1YrTerm30SavingsWrapper}>
                          <div className={styles.startHostingAtContainer}>
                            with a 1-yr term (30% Savings)
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.content2}>
                      <div className={styles.button}>
                        <div className={styles.freeDomain}>Add to Cart</div>
                      </div>
                      <div className={styles.youPayRsContainer}>
                        <p className={styles.discoverYourBestChoiceFor}>
                          <span className={styles.youPay}>{`You pay `}</span>
                          <span className={styles.yourBestChoice}>
                            Rs. 1999 today
                          </span>
                          <span>. Renews at</span>
                        </p>
                        <p className={styles.discoverYourBestChoiceFor}>
                          {" "}
                          same price on 9 Jul, 2025.
                        </p>
                      </div>
                      <div className={styles.listKontent}>
                        <div className={styles.frameParent87}>
                          <div className={styles.mdicheckBoldParent1}>
                            <img
                              className={styles.mdicheckBoldIcon3}
                              alt=""
                              src="/mdicheckbold1.svg"
                            />
                            <div className={styles.startHostingAtContainer}>
                              <span className={styles.mo}>Free .com</span>
                              <span className={styles.span3}> </span>
                              <span className={styles.subDomain}>Domain</span>
                            </div>
                          </div>
                          <div className={styles.mdicheckBoldParent1}>
                            <img
                              className={styles.mdicheckBoldIcon3}
                              alt=""
                              src="/mdicheckbold1.svg"
                            />
                            <div className={styles.startHostingAtContainer}>
                              <span className={styles.mo}>Single</span>
                              <span className={styles.span3}> </span>
                              <span className={styles.subDomain}>Domain</span>
                            </div>
                          </div>
                          <div className={styles.mdicheckBoldParent1}>
                            <img
                              className={styles.mdicheckBoldIcon3}
                              alt=""
                              src="/mdicheckbold1.svg"
                            />
                            <div className={styles.startHostingAtContainer}>
                              <span className={styles.mo}>Five</span>
                              <span className={styles.span3}> </span>
                              <span className={styles.subDomain}>
                                Sub Domain
                              </span>
                            </div>
                          </div>
                          <div className={styles.mdicheckBoldParent1}>
                            <img
                              className={styles.mdicheckBoldIcon3}
                              alt=""
                              src="/mdicheckbold1.svg"
                            />
                            <div className={styles.startHostingAtContainer}>
                              <span className={styles.mo}>2 GB</span>
                              <span className={styles.span3}> </span>
                              <span className={styles.subDomain}>Storage</span>
                            </div>
                          </div>
                          <div className={styles.mdicheckBoldParent1}>
                            <img
                              className={styles.mdicheckBoldIcon3}
                              alt=""
                              src="/mdicheckbold1.svg"
                            />
                            <div className={styles.startHostingAtContainer}>
                              <span className={styles.mo}>2 GB</span>
                              <span className={styles.span3}> </span>
                              <span className={styles.subDomain}>RAM</span>
                            </div>
                          </div>
                          <div className={styles.mdicheckBoldParent1}>
                            <img
                              className={styles.mdicheckBoldIcon3}
                              alt=""
                              src="/mdicheckbold1.svg"
                            />
                            <div className={styles.startHostingAtContainer}>
                              <span className={styles.mo}>3 MySQL</span>
                              <span className={styles.span3}> </span>
                              <span className={styles.subDomain}>Database</span>
                            </div>
                          </div>
                          <div className={styles.mdicheckBoldParent1}>
                            <img
                              className={styles.mdicheckBoldIcon3}
                              alt=""
                              src="/mdicheckbold1.svg"
                            />
                            <div className={styles.startHostingAtContainer}>
                              <span className={styles.mo}>Unmetered</span>
                              <span className={styles.span3}> </span>
                              <span className={styles.subDomain}>
                                Bandwidth
                              </span>
                            </div>
                          </div>
                          <div className={styles.mdicheckBoldParent1}>
                            <img
                              className={styles.mdicheckBoldIcon3}
                              alt=""
                              src="/mdicheckbold1.svg"
                            />
                            <div className={styles.startHostingAtContainer}>
                              <span className={styles.mo}>Control Panel</span>
                              <span className={styles.span3}> </span>
                              <span className={styles.subDomain}>cPanel</span>
                            </div>
                          </div>
                          <div className={styles.mdicheckBoldParent1}>
                            <img
                              className={styles.mdicheckBoldIcon3}
                              alt=""
                              src="/mdicheckbold2.svg"
                            />
                            <div
                              className={styles.freeDomain}
                            >{`WordPress & Softaculous`}</div>
                          </div>
                          <div className={styles.mdicheckBoldParent1}>
                            <img
                              className={styles.mdicheckBoldIcon3}
                              alt=""
                              src="/mdicheckbold1.svg"
                            />
                            <div className={styles.startHostingAtContainer}>
                              <span className={styles.mo}>5 Email</span>
                              <span className={styles.span3}> </span>
                              <span className={styles.subDomain}>Accounts</span>
                            </div>
                          </div>
                          <div className={styles.mdicheckBoldParent1}>
                            <img
                              className={styles.mdicheckBoldIcon3}
                              alt=""
                              src="/mdicheckbold1.svg"
                            />
                            <div className={styles.startHostingAtContainer}>
                              <span className={styles.mo}>Basic</span>
                              <span className={styles.span3}> </span>
                              <span className={styles.subDomain}>
                                Performance
                              </span>
                            </div>
                          </div>
                          <div className={styles.mdicheckBoldParent1}>
                            <img
                              className={styles.mdicheckBoldIcon3}
                              alt=""
                              src="/mdicheckbold1.svg"
                            />
                            <div className={styles.startHostingAtContainer}>
                              <span className={styles.mo}>24 x 7</span>
                              <span className={styles.span3}> </span>
                              <span className={styles.subDomain}>Support</span>
                            </div>
                          </div>
                          <div className={styles.mdicheckBoldParent1}>
                            <img
                              className={styles.mdicheckBoldIcon3}
                              alt=""
                              src="/mdicheckbold1.svg"
                            />
                            <div className={styles.startHostingAtContainer}>
                              <span className={styles.mo}>Free SSL</span>
                              <span className={styles.span3}> </span>
                              <span className={styles.subDomain}>
                                Certificate
                              </span>
                            </div>
                          </div>
                          <div className={styles.mdicheckBoldParent1}>
                            <img
                              className={styles.mdicheckBoldIcon3}
                              alt=""
                              src="/mdicheckbold1.svg"
                            />
                            <div className={styles.startHostingAtContainer}>
                              <span className={styles.mo}>No Backup</span>
                              <span className={styles.span3}> </span>
                              <span className={styles.subDomain}>Included</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.discoverOurWideRangeOfProWrapper}>
                        <div
                          className={styles.discoverYourBestChoiceForWrapper}
                        >
                          <div className={styles.freeDomain}>
                            See all features
                          </div>
                        </div>
                        <img
                          className={styles.mdiarrowDownDropIcon}
                          alt=""
                          src="/mdiarrowdowndrop.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={styles.paymentTermsWrapper}
            onClick={openPaymentTermPopup}
          >
            <div className={styles.freeMigration}>Payment terms</div>
          </div>
        </div>
        <div className={styles.footer}>
          <div className={styles.footerChild} />
          <div className={styles.frameParent101}>
            <div className={styles.frameParent102}>
              <div className={styles.frameDiv}>
                <div className={styles.vectorWrapper}>
                  <div className={styles.vectorWrapper}>
                    <div className={styles.frameDiv}>
                      <div className={styles.hostingsWrapper}>
                        <div className={styles.freeMigration}>Hostings</div>
                      </div>
                      <div className={styles.domainRegistrationInNepalParent}>
                        <div className={styles.yourdomainnamecom}>
                          Domain Registration In Nepal
                        </div>
                        <div className={styles.yourdomainnamecom}>
                          Shared Hosting
                        </div>
                        <div className={styles.yourdomainnamecom}>
                          WordPress Hosting
                        </div>
                        <div className={styles.yourdomainnamecom}>
                          VPS Hosting
                        </div>
                        <div className={styles.yourdomainnamecom}>
                          Windows Hosting
                        </div>
                        <div className={styles.yourdomainnamecom}>
                          Reseller Hosting
                        </div>
                        <div className={styles.yourdomainnamecom}>
                          Nepal Based-Local Data Center Hosting
                        </div>
                      </div>
                    </div>
                    <div className={styles.frameWrapper18}>
                      <div className={styles.frameDiv}>
                        <div className={styles.hostingsWrapper}>
                          <div className={styles.information}>Information</div>
                        </div>
                        <div className={styles.domainRegistrationInNepalParent}>
                          <div className={styles.yourdomainnamecom}>
                            Affiliate Program
                          </div>
                          <div
                            className={styles.yourdomainnamecom}
                          >{`Data Center & Servers`}</div>
                          <div className={styles.yourdomainnamecom}>
                            Payment Methods
                          </div>
                          <div className={styles.yourdomainnamecom}>
                            Server Status
                          </div>
                          <div className={styles.yourdomainnamecom}>
                            Free Website Migration
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.frameWrapper19}>
                      <div className={styles.frameDiv}>
                        <div className={styles.hostingsWrapper}>
                          <div className={styles.information}>Company</div>
                        </div>
                        <div className={styles.domainRegistrationInNepalParent}>
                          <div className={styles.yourdomainnamecom}>About</div>
                          <div className={styles.yourdomainnamecom}>
                            Affiliates
                          </div>
                          <div className={styles.yourdomainnamecom}>
                            Careers
                          </div>
                          <div className={styles.yourdomainnamecom}>
                            Partners
                          </div>
                          <div className={styles.yourdomainnamecom}>
                            Reviews
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.frameWrapper20}>
                      <div className={styles.frameDiv}>
                        <div className={styles.hostingsWrapper}>
                          <div className={styles.information}>Help</div>
                        </div>
                        <div className={styles.domainRegistrationInNepalParent}>
                          <div className={styles.yourdomainnamecom}>
                            Tutorials
                          </div>
                          <div className={styles.yourdomainnamecom}>
                            Knowledge Base
                          </div>
                          <div className={styles.yourdomainnamecom}>
                            Repost Abuse
                          </div>
                          <div className={styles.yourdomainnamecom}>
                            Contact Us
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.lineContainer}>
                    <div className={styles.frameChild1} />
                    <div className={styles.frameParent109}>
                      <div className={styles.frameDiv}>
                        <div className={styles.questionsWereHere}>
                          Questions? We’re here to help
                        </div>
                        <div className={styles.yourdomainnamecom}>
                          Available 9am–8pm CT, 7 days a week.
                        </div>
                      </div>
                      <div className={styles.frameParent110}>
                        <div className={styles.frameParent111}>
                          <div className={styles.mditickCircleOutlineParent}>
                            <img
                              className={styles.chat2234021Icon}
                              alt=""
                              src="/chat-223402-1.svg"
                            />
                            <div className={styles.frameDiv}>
                              <div
                                className={
                                  styles.discoverYourBestChoiceForWrapper
                                }
                              >
                                <div className={styles.startHostingAtContainer}>
                                  Customer Support Chat
                                </div>
                              </div>
                              <div
                                className={styles.messengerAndInstagramWrapper}
                              >
                                <div className={styles.yourdomainnamecom}>
                                  Messenger and Instagram
                                </div>
                              </div>
                            </div>
                          </div>
                          <img
                            className={styles.iconArrowIosForward}
                            alt=""
                            src="/-icon-arrow-ios-forward.svg"
                          />
                        </div>
                        <div className={styles.frameParent113}>
                          <div className={styles.mditickCircleOutlineParent}>
                            <img
                              className={styles.chat2234021Icon}
                              alt=""
                              src="/email-3-1.svg"
                            />
                            <div className={styles.frameDiv}>
                              <div
                                className={
                                  styles.discoverYourBestChoiceForWrapper
                                }
                              >
                                <div className={styles.startHostingAtContainer}>
                                  Customer Support Call
                                </div>
                              </div>
                              <div
                                className={styles.messengerAndInstagramWrapper}
                              >
                                <div
                                  className={styles.yourdomainnamecom}
                                >{`+9779851316413 `}</div>
                              </div>
                            </div>
                          </div>
                          <img
                            className={styles.iconArrowIosForward1}
                            alt=""
                            src="/-icon-arrow-ios-forward1.svg"
                          />
                        </div>
                        <div className={styles.frameParent115}>
                          <div className={styles.mditickCircleOutlineParent}>
                            <img
                              className={styles.chat2234021Icon}
                              alt=""
                              src="/email-4-1.svg"
                            />
                            <div className={styles.frameDiv}>
                              <div
                                className={
                                  styles.discoverYourBestChoiceForWrapper
                                }
                              >
                                <div className={styles.startHostingAtContainer}>
                                  Customer Support Email
                                </div>
                              </div>
                              <div
                                className={styles.messengerAndInstagramWrapper}
                              >
                                <div className={styles.yourdomainnamecom}>
                                  support@protozoahost.com
                                </div>
                              </div>
                            </div>
                          </div>
                          <img
                            className={styles.iconArrowIosForward2}
                            alt=""
                            src="/-icon-arrow-ios-forward2.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.frameParent117}>
                <div className={styles.vectorWrapper}>
                  <img
                    className={styles.vectorIcon12}
                    alt=""
                    src="/vector4.svg"
                  />
                </div>
                <div className={styles.discoverYourBestChoiceForWrapper}>
                  <div className={styles.yourdomainnamecom}>
                    Your IP is Being Monitored for Security Purposes.
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.frameParent118}>
              <div className={styles.frameParent119}>
                <div className={styles.frameParent120}>
                  <div className={styles.discoverYourBestChoiceForWrapper}>
                    <div className={styles.yourdomainnamecom}>About Us</div>
                  </div>
                  <div className={styles.lineWrapper}>
                    <div className={styles.frameChild2} />
                  </div>
                  <div className={styles.discoverYourBestChoiceForWrapper}>
                    <div
                      className={styles.yourdomainnamecom}
                    >{`Cancellation & Refunds Policy`}</div>
                  </div>
                  <div className={styles.lineWrapper}>
                    <div className={styles.frameChild2} />
                  </div>
                  <div className={styles.discoverYourBestChoiceForWrapper}>
                    <div className={styles.yourdomainnamecom}>
                      Terms and Conditions
                    </div>
                  </div>
                  <div className={styles.lineWrapper}>
                    <div className={styles.frameChild2} />
                  </div>
                  <div className={styles.discoverYourBestChoiceForWrapper}>
                    <div className={styles.yourdomainnamecom}>
                      Privacy Policy
                    </div>
                  </div>
                  <div className={styles.lineWrapper}>
                    <div className={styles.frameChild2} />
                  </div>
                  <div className={styles.discoverYourBestChoiceForWrapper}>
                    <div className={styles.yourdomainnamecom}>Legal</div>
                  </div>
                  <div className={styles.lineWrapper}>
                    <div className={styles.frameChild2} />
                  </div>
                  <div className={styles.discoverYourBestChoiceForWrapper}>
                    <div className={styles.yourdomainnamecom}>Sitemap</div>
                  </div>
                </div>
                <div className={styles.frameParent121}>
                  <div className={styles.facebook11Wrapper}>
                    <img
                      className={styles.calling2Icon}
                      alt=""
                      src="/facebook-1-11.svg"
                    />
                  </div>
                  <div className={styles.facebook11Wrapper}>
                    <img
                      className={styles.calling2Icon}
                      alt=""
                      src="/instagramlogo-11.svg"
                    />
                  </div>
                  <div className={styles.facebook11Wrapper}>
                    <img
                      className={styles.calling2Icon}
                      alt=""
                      src="/twitter-1-11.svg"
                    />
                  </div>
                  <div className={styles.facebook11Wrapper}>
                    <img
                      className={styles.calling2Icon}
                      alt=""
                      src="/linkedin-1-11.svg"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.frameChild7} />
              <div className={styles.frameParent122}>
                <div className={styles.discoverYourBestChoiceForWrapper}>
                  <div className={styles.yourdomainnamecom}>
                    Copyright © 2018 - 2023 Protozoa Host Pvt. Ltd. | All Rights
                    Reserved.
                  </div>
                </div>
                <div className={styles.frameWrapper21}>
                  <div className={styles.frameParent76}>
                    <div className={styles.image5Wrapper}>
                      <img
                        className={styles.image5Icon}
                        alt=""
                        src="/image-5@2x.png"
                      />
                    </div>
                    <div className={styles.image5Wrapper}>
                      <img
                        className={styles.image5Icon}
                        alt=""
                        src="/image-5@2x.png"
                      />
                    </div>
                    <div className={styles.image5Wrapper}>
                      <img
                        className={styles.image5Icon}
                        alt=""
                        src="/image-5@2x.png"
                      />
                    </div>
                    <div className={styles.image5Wrapper}>
                      <img
                        className={styles.image5Icon}
                        alt=""
                        src="/image-5@2x.png"
                      />
                    </div>
                    <div className={styles.image5Wrapper2}>
                      <img
                        className={styles.image5Icon}
                        alt=""
                        src="/image-5@2x.png"
                      />
                    </div>
                    <div className={styles.image5Wrapper2}>
                      <img
                        className={styles.image5Icon}
                        alt=""
                        src="/image-5@2x.png"
                      />
                    </div>
                    <div className={styles.image5Wrapper2}>
                      <img
                        className={styles.image5Icon}
                        alt=""
                        src="/image-5@2x.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameParent124}>
          <div className={styles.image27Wrapper}>
            <div className={styles.discoverYourBestChoiceForWrapper}>
              <b className={styles.startHostingAtContainer}>
                <p
                  className={styles.discoverYourBestChoiceFor}
                >{`Choose from the Most Popular `}</p>
                <p className={styles.discoverYourBestChoiceFor}>
                  <span className={styles.yourBestChoice}>Domain</span>
                  <span> Extensions</span>
                </p>
              </b>
            </div>
          </div>
          <div className={styles.groupParent7}>
            <div className={styles.groupParent8}>
              <div className={styles.rectangleParent19}>
                <div className={styles.groupChild76} />
                <div className={styles.frameParent125}>
                  <div className={styles.frameParent126}>
                    <div className={styles.discoverYourBestChoiceForWrapper}>
                      <div className={styles.freeDomain}>Domains</div>
                    </div>
                    <div className={styles.getStartedWithThePerfectDWrapper}>
                      <div className={styles.getStartedWith}>
                        Get Started with the perfect domain, which comes with
                        free domain privacy protection forever.
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameWrapper10}>
                    <div
                      className={styles.searchDomainsParent}
                      onClick={onFrameContainerClick5}
                    >
                      <div className={styles.freeDomain}>Search Domains</div>
                      <img
                        className={styles.iconDiagonalArrowRightUp}
                        alt=""
                        src="/-icon-diagonal-arrow-right-up-outline.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <img className={styles.layer11} alt="" src="/layer-1-1@2x.png" />
            </div>
            <div className={styles.groupParent9}>
              <div className={styles.groupParent10}>
                <div className={styles.rectangleParent20}>
                  <div className={styles.groupChild77} />
                  <div className={styles.frameParent127}>
                    <div className={styles.frameParent126}>
                      <div className={styles.discoverYourBestChoiceForWrapper}>
                        <div className={styles.freeDomain}>
                          SSL Certificates
                        </div>
                      </div>
                      <div className={styles.getStartedWithThePerfectDWrapper}>
                        <div
                          className={styles.enhanceYourWebsites}
                        >{`Enhance your website's security and boost visitor confidence with our SSL Certificates. `}</div>
                      </div>
                    </div>
                    <div className={styles.frameWrapper10}>
                      <div
                        className={styles.searchDomainsParent}
                        onClick={onFrameContainerClick6}
                      >
                        <div className={styles.freeDomain}>
                          Get Premium SSL Certificates
                        </div>
                        <img
                          className={styles.iconDiagonalArrowRightUp}
                          alt=""
                          src="/-icon-diagonal-arrow-right-up-outline.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <img
                  className={styles.image120Icon}
                  alt=""
                  src="/image-120@2x.png"
                />
              </div>
              <div className={styles.groupParent10}>
                <div className={styles.rectangleParent20}>
                  <div className={styles.groupChild77} />
                  <div className={styles.frameParent129}>
                    <div className={styles.frameParent126}>
                      <div className={styles.discoverYourBestChoiceForWrapper}>
                        <div className={styles.freeDomain}>Domain Transfer</div>
                      </div>
                      <div className={styles.getStartedWithThePerfectDWrapper}>
                        <div className={styles.enhanceYourWebsites}>
                          Looking to switch your domain provider? Transfer your
                          domain to us for a seamless experience.
                        </div>
                      </div>
                    </div>
                    <div className={styles.frameWrapper10}>
                      <div
                        className={styles.searchDomainsParent}
                        onClick={onFrameContainerClick7}
                      >
                        <div className={styles.freeDomain}>Transfer Domain</div>
                        <img
                          className={styles.iconDiagonalArrowRightUp}
                          alt=""
                          src="/-icon-diagonal-arrow-right-up-outline.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <img
                  className={styles.image121Icon}
                  alt=""
                  src="/image-121@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.layer0Copy2} />
        <div className={styles.layer111} />
        <div className={styles.groupParent12}>
          <div className={styles.rectangleWrapper}>
            <div className={styles.groupChild79} />
          </div>
          <div className={styles.frameParent131}>
            <div className={styles.frameParent132}>
              <div className={styles.lineWrapper}>
                <div className={styles.freeMigration}>Sign Up Today!</div>
              </div>
              <div className={styles.getStartedWithThePerfectDWrapper}>
                <div className={styles.discoverUnmatchedSpeed}>
                  Discover unmatched speed, uptime, and support. Join the family
                  of satisfied web hosting customers.
                </div>
              </div>
              <div className={styles.frameWrapper26}>
                <div className={styles.registerHereParent}>
                  <div className={styles.freeDomain}>Register Here</div>
                  <img
                    className={styles.iconDiagonalArrowRightUp}
                    alt=""
                    src="/-icon-diagonal-arrow-right-up-outline2.svg"
                  />
                </div>
              </div>
            </div>
            <img className={styles.image82Icon} alt="" src="/image-82@2x.png" />
            <img className={styles.image83Icon} alt="" src="/image-83@2x.png" />
          </div>
        </div>
        <div className={styles.frameParent133}>
          <div className={styles.frameParent134}>
            <div className={styles.frameParent61}>
              <div className={styles.image27Wrapper}>
                <div className={styles.discoverYourBestChoiceForWrapper}>
                  <b className={styles.startHostingAtContainer}>
                    <span>Migrate</span>
                    <span className={styles.discover}>
                      {" "}
                      Your Website in Just a Few Steps
                    </span>
                  </b>
                </div>
                <div className={styles.discoverUnmatchedReliabilityWrapper}>
                  <div className={styles.switchingHostingProviders}>
                    Switching hosting providers can be a lot of hassle. Let our
                    expert Tech Support team do what they do best to provide a
                    smooth professional website transfer. Moving your site over
                    won't incur any downtime or data loss, and we'll assist you
                    to review your migrated site prior to going live.
                  </div>
                </div>
              </div>
              <div className={styles.frameWrapper27}>
                <div className={styles.frameParent137}>
                  <div className={styles.image27Wrapper}>
                    <div className={styles.frameParent138}>
                      <div className={styles.image27Wrapper}>
                        <div className={styles.frame}>
                          <b className={styles.startHostingAtContainer}>01</b>
                        </div>
                        <div className={styles.signUpForProtozoaHostAndWrapper}>
                          <div className={styles.signUpFor}>
                            Sign up for Protozoa Host and Contact Support
                          </div>
                        </div>
                      </div>
                      <div className={styles.since2018ProtozoaHostHasWrapper}>
                        <div className={styles.freeMigrationsAre}>
                          Free migrations are available for all of Protozoa
                          Host’s plans. Provide all of the needed website
                          details and coordinate with our team.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.image27Wrapper}>
                    <div className={styles.frameParent138}>
                      <div className={styles.image27Wrapper}>
                        <div className={styles.wrapper1}>
                          <b className={styles.startHostingAtContainer}>02</b>
                        </div>
                        <div className={styles.signUpForProtozoaHostAndWrapper}>
                          <div className={styles.chooseHostingPlanContainer}>
                            <span
                              className={styles.virtualPrivateServerContainer1}
                            >
                              <p className={styles.discoverYourBestChoiceFor}>
                                Choose Hosting Plan
                              </p>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className={styles.since2018ProtozoaHostHasWrapper}>
                        <div className={styles.freeMigrationsAre}>
                          Simply choose your plan to get started. Our committed
                          migrations team will manage the process of
                          transferring your site.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.image27Wrapper}>
                    <div className={styles.frameParent138}>
                      <div className={styles.image27Wrapper}>
                        <div className={styles.wrapper1}>
                          <b className={styles.startHostingAtContainer}>03</b>
                        </div>
                        <div className={styles.signUpForProtozoaHostAndWrapper}>
                          <div className={styles.postMigrationAssistanceAnd}>
                            Post-Migration Assistance and Monitoring
                          </div>
                        </div>
                      </div>
                      <div className={styles.since2018ProtozoaHostHasWrapper}>
                        <div className={styles.sitBackAndContainer}>
                          <span
                            className={styles.virtualPrivateServerContainer1}
                          >
                            <p className={styles.discoverYourBestChoiceFor}>
                              Sit back and relax while our experts do the heavy
                              lifting for you. Verify your website prior to
                              going live.
                            </p>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.frameParent144}>
              <div
                className={styles.searchDomainsParent}
                onClick={onFrameContainerClick8}
              >
                <div className={styles.purchaseHosting}>Start Migration</div>
                <img
                  className={styles.iconDiagonalArrowRightUp}
                  alt=""
                  src="/-icon-diagonal-arrow-right-up-outline.svg"
                />
              </div>
              <div
                className={styles.contactSalesParent}
                onClick={onFrameContainerClick3}
              >
                <div className={styles.freeDomain}>Contact Sales</div>
                <img
                  className={styles.iconDiagonalArrowRightUp}
                  alt=""
                  src="/-icon-diagonal-arrow-right-up-outline1.svg"
                />
              </div>
            </div>
          </div>
          <img className={styles.arrowIcon} alt="" src="/arrow-1.svg" />
          <img className={styles.groupChild80} alt="" src="/arrow-1.svg" />
        </div>
        <div className={styles.frameParent145}>
          <div className={styles.image26Parent}>
            <img className={styles.image26Icon} alt="" src="/image-26@2x.png" />
            <div className={styles.discoverYourBestChoiceForWrapper}>
              <div className={styles.startHostingAtContainer}>
                <span>4.5</span>
                <span className={styles.span58}>/5</span>
              </div>
            </div>
            <div className={styles.iconStarParent}>
              <div className={styles.iconStar}>
                <img
                  className={styles.vectorIcon13}
                  alt=""
                  src="/vector5.svg"
                />
                <img
                  className={styles.vectorIcon13}
                  alt=""
                  src="/vector6.svg"
                />
                <img
                  className={styles.vectorIcon13}
                  alt=""
                  src="/vector7.svg"
                />
                <img
                  className={styles.vectorIcon13}
                  alt=""
                  src="/vector8.svg"
                />
                <img
                  className={styles.vectorIcon13}
                  alt=""
                  src="/vector9.svg"
                />
              </div>
              <div className={styles.basedOn448Container}>
                <span>{`Based on `}</span>
                <span className={styles.reviews1}>448 Reviews</span>
              </div>
            </div>
            <img className={styles.frameChild8} alt="" />
          </div>
          <div className={styles.image26Parent}>
            <img className={styles.image26Icon} alt="" src="/image-26@2x.png" />
            <div className={styles.discoverYourBestChoiceForWrapper}>
              <div className={styles.startHostingAtContainer}>
                <span>4.5</span>
                <span className={styles.span58}>/5</span>
              </div>
            </div>
            <div className={styles.iconStarParent}>
              <img className={styles.vectorIcon18} alt="" src="/vector10.svg" />
              <div className={styles.basedOn448Container}>
                <span>{`Based on `}</span>
                <span className={styles.reviews2}>448 Reviews</span>
              </div>
            </div>
            <img className={styles.frameChild8} alt="" />
          </div>
          <div className={styles.frameParent146}>
            <div className={styles.image27Wrapper}>
              <img
                className={styles.image27Icon}
                alt=""
                src="/image-27@2x.png"
              />
            </div>
            <div className={styles.discoverYourBestChoiceForWrapper}>
              <div className={styles.startHostingAtContainer}>
                <span>4.5</span>
                <span className={styles.span58}>/5</span>
              </div>
            </div>
            <div className={styles.iconStarParent}>
              <div className={styles.iconStar}>
                <img
                  className={styles.vectorIcon13}
                  alt=""
                  src="/vector11.svg"
                />
                <img
                  className={styles.vectorIcon13}
                  alt=""
                  src="/vector12.svg"
                />
                <img
                  className={styles.vectorIcon13}
                  alt=""
                  src="/vector13.svg"
                />
                <img
                  className={styles.vectorIcon13}
                  alt=""
                  src="/vector14.svg"
                />
                <img
                  className={styles.vectorIcon13}
                  alt=""
                  src="/vector15.svg"
                />
              </div>
              <div className={styles.basedOn448Container}>
                <span>{`Based on `}</span>
                <span className={styles.reviews3}>448 Reviews</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameParent147}>
          <div className={styles.image27Wrapper}>
            <div className={styles.image27Wrapper}>
              <div className={styles.discoverYourBestChoiceForWrapper}>
                <b className={styles.startHostingAtContainer}>
                  <span>Explore Our Global Network of </span>
                  <span className={styles.yourBestChoice}>Data Centers.</span>
                </b>
              </div>
              <div className={styles.discoverUnmatchedReliabilityWrapper}>
                <div className={styles.buildLocallyLaunch}>
                  {" "}
                  Build Locally, Launch Worldwide. Protozoa Host offers the
                  largest worldwide network, enabling you to spin up and easily
                  scale a low latency infrastructure solution no matter where
                  you or your customers may be
                </div>
              </div>
            </div>
          </div>
          <img className={styles.mapPng1} alt="" src="/map-png-1@2x.png" />
        </div>
        <div className={styles.rectangleParent22}>
          <div className={styles.groupChild81} />
          <div className={styles.frameParent149}>
            <div className={styles.mditickCircleOutlineParent}>
              <div className={styles.mWrapper}>
                <b className={styles.startHostingAtContainer}>1.4M+</b>
              </div>
              <div className={styles.easyToUseControlPanelForWrapper}>
                <div className={styles.yourdomainnamecom}>
                  <p className={styles.discoverYourBestChoiceFor}>
                    Request Per
                  </p>
                  <p className={styles.discoverYourBestChoiceFor}>Second</p>
                </div>
              </div>
            </div>
            <div className={styles.mditickCircleOutlineParent}>
              <div className={styles.mWrapper}>
                <b className={styles.startHostingAtContainer}>5+</b>
              </div>
              <div className={styles.easyToUseControlPanelForWrapper}>
                <div className={styles.yourdomainnamecom}>
                  <p className={styles.discoverYourBestChoiceFor}>
                    Data Centers
                  </p>
                  <p className={styles.discoverYourBestChoiceFor}>
                    around the world
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.mditickCircleOutlineParent}>
              <div className={styles.mWrapper}>
                <b className={styles.startHostingAtContainer}>1</b>
              </div>
              <div className={styles.easyToUseControlPanelForWrapper}>
                <div className={styles.yourdomainnamecom}>
                  <p className={styles.discoverYourBestChoiceFor}>Local Data</p>
                  <p className={styles.discoverYourBestChoiceFor}>
                    Center in Nepal
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameParent153}>
          <div className={styles.image27Wrapper}>
            <div className={styles.discoverYourBestChoiceForWrapper}>
              <b className={styles.startHostingAtContainer}>
                <span>Our</span>
                <span className={styles.yourBestChoice}> Partners</span>
              </b>
            </div>
            <div className={styles.weWorkWithTheBestInTheIWrapper}>
              <div className={styles.weWorkWithContainer}>
                <p
                  className={styles.discoverYourBestChoiceFor}
                >{`We work with the best in the industry to bring you top-notch `}</p>
                <p className={styles.webHostingIn}>
                  web hosting in Nepal. Together, we push the boundaries of
                  success. Meet our trusted technology partners.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.rectangleParent23}>
            <img
              className={styles.frameChild10}
              alt=""
              src="/rectangle-98@2x.png"
            />
            <img
              className={styles.frameChild10}
              alt=""
              src="/rectangle-92@2x.png"
            />
            <img
              className={styles.frameChild10}
              alt=""
              src="/rectangle-93@2x.png"
            />
            <img
              className={styles.frameChild10}
              alt=""
              src="/rectangle-94@2x.png"
            />
            <img
              className={styles.frameChild10}
              alt=""
              src="/rectangle-96@2x.png"
            />
            <img
              className={styles.frameChild10}
              alt=""
              src="/rectangle-91@2x.png"
            />
            <img
              className={styles.frameChild10}
              alt=""
              src="/rectangle-90@2x.png"
            />
            <img
              className={styles.frameChild10}
              alt=""
              src="/rectangle-99@2x.png"
            />
            <img
              className={styles.frameChild10}
              alt=""
              src="/rectangle-100@2x.png"
            />
            <img
              className={styles.frameChild10}
              alt=""
              src="/rectangle-90@2x.png"
            />
            <img
              className={styles.frameChild10}
              alt=""
              src="/rectangle-101@2x.png"
            />
            <img
              className={styles.frameChild10}
              alt=""
              src="/rectangle-102@2x.png"
            />
          </div>
        </div>
        <div className={styles.rectangleParent24}>
          <div className={styles.groupChild82} />
          <div className={styles.frameParent155}>
            <div className={styles.image69Transformed1Parent}>
              <img
                className={styles.image69Transformed1Icon}
                alt=""
                src="/image-69transformed-1@2x.png"
              />
              <div className={styles.frameParent156}>
                <div className={styles.discoverYourBestChoiceForWrapper}>
                  <div className={styles.advancedSecurityFeatures}>
                    Advanced Security Features
                  </div>
                </div>
                <div className={styles.frameParent157}>
                  <div className={styles.facebook11Parent}>
                    <img
                      className={styles.mdicheckBoldIcon}
                      alt=""
                      src="/mdicheckbold3.svg"
                    />
                    <div className={styles.maximizeWebsiteLoading}>
                      Get unlimited SSL security certificates to encrypt your
                      websites’ traffic.
                    </div>
                  </div>
                  <div className={styles.facebook11Parent}>
                    <img
                      className={styles.mdicheckBoldIcon}
                      alt=""
                      src="/mdicheckbold3.svg"
                    />
                    <div className={styles.maximizeWebsiteLoading}>
                      Protect your website from DDoS attacks with Cloudflare
                      protected nameservers.
                    </div>
                  </div>
                  <div className={styles.facebook11Parent}>
                    <img
                      className={styles.mdicheckBoldIcon}
                      alt=""
                      src="/mdicheckbold3.svg"
                    />
                    <div className={styles.maximizeWebsiteLoading}>
                      Secure your files with automatic backups.
                    </div>
                  </div>
                  <div className={styles.facebook11Parent}>
                    <img
                      className={styles.mdicheckBoldIcon}
                      alt=""
                      src="/mdicheckbold3.svg"
                    />
                    <div className={styles.maximizeWebsiteLoading}>
                      Ensure your website is up and running with our 99.9%
                      uptime guarantee.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.frameParent158}>
              <div className={styles.frameParent159}>
                <div className={styles.image62Wrapper}>
                  <img
                    className={styles.image62Icon}
                    alt=""
                    src="/image-62@2x.png"
                  />
                </div>
                <div className={styles.discoverYourBestChoiceForWrapper}>
                  <div className={styles.hostingerProvedItself}>
                    Hostinger proved itself a reliable web hosting service. In
                    fact, our test site didn't go down once during the 14-day
                    observation period.
                  </div>
                </div>
              </div>
              <div className={styles.frameParent159}>
                <div className={styles.image62Wrapper}>
                  <img
                    className={styles.image62Icon}
                    alt=""
                    src="/image-63@2x.png"
                  />
                </div>
                <div className={styles.discoverYourBestChoiceForWrapper}>
                  <div className={styles.hostingerProvedItself}>
                    <p className={styles.discoverYourBestChoiceFor}>
                      Plans include SSL certificates and all servers have an
                      advanced security module to protect your data.
                    </p>
                  </div>
                </div>
              </div>
              <div className={styles.frameParent159}>
                <div className={styles.image62Wrapper}>
                  <img
                    className={styles.image62Icon}
                    alt=""
                    src="/image-64@2x.png"
                  />
                </div>
                <div className={styles.discoverYourBestChoiceForWrapper}>
                  <div className={styles.hostingerProvedItself}>
                    With DDoS protection, auto-updates, automatic website
                    backups, and other security measures, you can rest assured
                    that your website is secured.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameParent162} data-scroll-to="frameContainer">
          <div className={styles.image27Wrapper}>
            <div className={styles.discoverYourBestChoiceForWrapper}>
              <b className={styles.startHostingAtContainer}>
                <p className={styles.discoverYourBestChoiceFor}>
                  Boost your team's productivity with
                </p>
                <p className={styles.discoverYourBestChoiceFor}>
                  <span
                    className={styles.yourBestChoice}
                  >{`Protozoa Host `}</span>
                  <span>Email and Workspace Platforms</span>
                </p>
              </b>
            </div>
          </div>
          <div className={styles.groupParent7}>
            <div className={styles.groupParent9}>
              <div className={styles.rectangleParent25}>
                <div className={styles.groupChild83} />
                <div className={styles.frameParent164}>
                  <div className={styles.frameParent165}>
                    <div className={styles.discoverYourBestChoiceForWrapper}>
                      <div className={styles.freeDomain}>Google Workspace</div>
                    </div>
                    <div className={styles.getStartedWithThePerfectDWrapper}>
                      <div className={styles.enhanceYourWebsites}>
                        Boost your team's productivity with Google Workspace.
                        Integrated tools like Gmail, Docs, and Drive ensure
                        seamless collaboration.
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameWrapper10}>
                    <div className={styles.getWebHostingParent}>
                      <div className={styles.freeDomain}>See all Plans</div>
                      <img
                        className={styles.iconDiagonalArrowRightUp}
                        alt=""
                        src="/-icon-diagonal-arrow-right-up-outline.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.frameParent166}>
                  <div className={styles.image116Wrapper}>
                    <img
                      className={styles.image116Icon}
                      alt=""
                      src="/image-116@2x.png"
                    />
                  </div>
                  <img
                    className={styles.image115Icon}
                    alt=""
                    src="/image-115@2x.png"
                  />
                </div>
              </div>
              <div className={styles.groupParent10}>
                <div className={styles.rectangleParent20}>
                  <div className={styles.groupChild83} />
                  <div className={styles.frameParent167}>
                    <div className={styles.frameParent168}>
                      <div className={styles.discoverYourBestChoiceForWrapper}>
                        <div className={styles.freeDomain}>Zoho Workplace</div>
                      </div>
                      <div className={styles.getStartedWithThePerfectDWrapper}>
                        <div className={styles.enhanceYourWebsites}>
                          Enhance your business with Zoho Workplace with suite
                          of web apps like Mail, Writer, Sheet, and more all
                          integrated into your domain.
                        </div>
                      </div>
                    </div>
                    <div className={styles.frameWrapper10}>
                      <div className={styles.becomeZohoParent}>
                        <div className={styles.freeDomain}>Become Zoho</div>
                        <img
                          className={styles.iconDiagonalArrowRightUp}
                          alt=""
                          src="/-icon-diagonal-arrow-right-up-outline.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <img
                  className={styles.image114Icon}
                  alt=""
                  src="/image-114@2x.png"
                />
              </div>
            </div>
            <div className={styles.groupParent8}>
              <div className={styles.rectangleParent19}>
                <div className={styles.groupChild85} />
                <div className={styles.frameParent125}>
                  <div className={styles.frameParent126}>
                    <div className={styles.discoverYourBestChoiceForWrapper}>
                      <div className={styles.freeDomain}>
                        Microsoft Office 365
                      </div>
                    </div>
                    <div className={styles.getStartedWithThePerfectDWrapper}>
                      <div className={styles.getStartedWith}>
                        Instantly access domain ownership and registration
                        details with Microsoft Office 365 integration.
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameWrapper10}>
                    <div className={styles.getWebHostingParent}>
                      <div className={styles.freeDomain}>Buy Office 365</div>
                      <img
                        className={styles.iconDiagonalArrowRightUp}
                        alt=""
                        src="/-icon-diagonal-arrow-right-up-outline.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.layer112} />
              <img
                className={styles.image117Icon}
                alt=""
                src="/image-117@2x.png"
              />
            </div>
          </div>
        </div>
        <div className={styles.frameParent171}>
          <div className={styles.image27Wrapper}>
            <div className={styles.discoverYourBestChoiceForWrapper}>
              <b className={styles.startHostingAtContainer}>
                <p className={styles.discoverYourBestChoiceFor}>
                  <span className={styles.discover}>{`Enhance `}</span>
                  <span className={styles.yourBestChoice}>
                    Server Performance
                  </span>
                  <span>{` with cPanel Cloud Reseller, `}</span>
                </p>
                <p className={styles.discoverYourBestChoiceFor}>
                  Windows VPS and Linux Storage Solutions
                </p>
              </b>
            </div>
          </div>
          <div className={styles.groupParent16}>
            <div className={styles.rectangleParent28}>
              <div className={styles.groupChild86} />
              <div className={styles.image126Parent}>
                <img
                  className={styles.image126Icon}
                  alt=""
                  src="/image-126@2x.png"
                />
                <div className={styles.image27Wrapper}>
                  <div className={styles.frameParent173}>
                    <div className={styles.discoverYourBestChoiceForWrapper}>
                      <div className={styles.freeDomain}>
                        cPanel Cloud Reseller-Root Access
                      </div>
                    </div>
                    <div
                      className={styles.instantlyAccessDomainOwnersContainer}
                    >
                      <div className={styles.instantlyAccessDomain1}>
                        Instantly access domain ownership and registration
                        details with Microsoft Office 365 integration.
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameWrapper37}>
                    <div className={styles.getStartedParent}>
                      <div className={styles.freeDomain}>Get Started</div>
                      <img
                        className={styles.iconDiagonalArrowRightUp}
                        alt=""
                        src="/-icon-diagonal-arrow-right-up-outline.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.rectangleParent29}>
              <div className={styles.groupChild87} />
              <div className={styles.frameParent174}>
                <div className={styles.frameParent175}>
                  <div className={styles.image27Wrapper}>
                    <div className={styles.discoverYourBestChoiceForWrapper}>
                      <div className={styles.freeDomain}>
                        Linux Cloud Storage Server
                      </div>
                    </div>
                    <div className={styles.boostYourTeamsProductivityFrame}>
                      <div className={styles.yourdomainnamecom}>
                        <p className={styles.discoverYourBestChoiceFor}>
                          Boost your team's productivity with
                        </p>
                        <p className={styles.discoverYourBestChoiceFor}>
                          Google Workspace. Integrated tools like
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameWrapper37}>
                    <div className={styles.getStartedParent}>
                      <div className={styles.freeDomain}>Get Started</div>
                      <img
                        className={styles.iconDiagonalArrowRightUp}
                        alt=""
                        src="/-icon-diagonal-arrow-right-up-outline.svg"
                      />
                    </div>
                  </div>
                </div>
                <img
                  className={styles.image127Icon}
                  alt=""
                  src="/image-127@2x.png"
                />
              </div>
            </div>
            <div className={styles.groupParent17}>
              <div className={styles.rectangleParent30}>
                <div className={styles.groupChild88} />
                <div className={styles.frameParent177}>
                  <div className={styles.frameDiv}>
                    <div className={styles.frameDiv}>
                      <div className={styles.discoverYourBestChoiceForWrapper}>
                        <div className={styles.freeDomain}>
                          WPSquared Pro Hosting
                        </div>
                      </div>
                      <div
                        className={styles.boostYourTeamsProductivityWrapper1}
                      >
                        <div className={styles.yourdomainnamecom}>
                          <p className={styles.discoverYourBestChoiceFor}>
                            Boost your team's productivity with
                          </p>
                          <p className={styles.discoverYourBestChoiceFor}>
                            Google Workspace. Integrated tools like
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className={styles.frameWrapper37}>
                      <div className={styles.getStartedParent}>
                        <div className={styles.freeDomain}>Get Started</div>
                        <img
                          className={styles.iconDiagonalArrowRightUp}
                          alt=""
                          src="/-icon-diagonal-arrow-right-up-outline.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <img
                    className={styles.image106Icon1}
                    alt=""
                    src="/image-106@2x.png"
                  />
                </div>
              </div>
              <div className={styles.rectangleParent30}>
                <div className={styles.groupChild88} />
                <div className={styles.frameParent180}>
                  <div className={styles.frameParent181}>
                    <div className={styles.frameDiv}>
                      <div className={styles.discoverYourBestChoiceForWrapper}>
                        <div className={styles.freeDomain}>
                          Windows Cloud VPS Server
                        </div>
                      </div>
                      <div
                        className={styles.boostYourTeamsProductivityWrapper1}
                      >
                        <div className={styles.yourdomainnamecom}>
                          <p className={styles.discoverYourBestChoiceFor}>
                            Boost your team's productivity with
                          </p>
                          <p className={styles.discoverYourBestChoiceFor}>
                            Google Workspace. Integrated tools like
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className={styles.frameWrapper37}>
                      <div className={styles.getStartedParent}>
                        <div className={styles.freeDomain}>Get Started</div>
                        <img
                          className={styles.iconDiagonalArrowRightUp}
                          alt=""
                          src="/-icon-diagonal-arrow-right-up-outline.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <img
                    className={styles.image128Icon}
                    alt=""
                    src="/image-128@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isGetAQuotePopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeGetAQuotePopup}
        >
          <GetAQuotePopup onClose={closeGetAQuotePopup} />
        </PortalPopup>
      )}
      {isDomainDropdownOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeDomainDropdown}
        >
          <DomainDropdown onClose={closeDomainDropdown} />
        </PortalPopup>
      )}
      {isHostingDropdownOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeHostingDropdown}
        >
          <HostingDropdown onClose={closeHostingDropdown} />
        </PortalPopup>
      )}
      {isResellerOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeReseller}
        >
          <Reseller onClose={closeReseller} />
        </PortalPopup>
      )}
      {isServersAndVPSOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeServersAndVPS}
        >
          <ServersAndVPS onClose={closeServersAndVPS} />
        </PortalPopup>
      )}
      {isCloudSolutionsOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeCloudSolutions}
        >
          <CloudSolutions onClose={closeCloudSolutions} />
        </PortalPopup>
      )}
      {isSupportOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeSupport}
        >
          <Support onClose={closeSupport} />
        </PortalPopup>
      )}
      {isMyAccountOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeMyAccount}
        >
          <MyAccount onClose={closeMyAccount} />
        </PortalPopup>
      )}
      {isPaymentTermPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closePaymentTermPopup}
        >
          <PaymentTermPopup onClose={closePaymentTermPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default HomePage;
