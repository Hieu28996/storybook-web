import React from "react";
import twitter from "../../assets/images/about/ico_twitter.png";
import discord from "../../assets/images/about/ico_discord.png";
import medium from "../../assets/images/about/ico_medium.png";
import linkedin from "../../assets/images/about/ico_linkedin.png";
import youtube from "../../assets/images/about/ico_youtube.png";
import Logo from "../../assets/images/common/logo-iskra.png";


export const PortalLayout = ({ children }) => {

    return (
      <>
        <div className={`wrap`}>
          <head>
            <meta charSet="UTF-8" />
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no, target-densitydpi=medium-dpi"
            />
            <meta name="format-detection" content="telephone=no" />
            <meta
              name="keywords"
              content="Iskra, Pioneer NFT, ISK, blockchain, game, player, Web3, rewards, platform, community, P2E, NFT"
            />
            <meta name="author" content="Iskra" />
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content="Iskra" />
            <title>ISKRA</title>
          </head>
          <header id="header">
            <div className="inner">
              <h1 className="logo">
                <a href="#none">
                    <img src={Logo} alt="iskra"/>
                </a>
              </h1>
              <nav id="gnb">
                <button type="button" className="btn1 gnb-close">
                  <i className="ic ic-gnb-close" />
                </button>
                <ul className="gnb-depth1">
                  <li>
                    <a href="#none">
                        <span>ABOUT</span>
                    </a>
                  </li>
                  <li>
                    <a href="#none">
                        <span>PIONEER NFT</span>
                    </a>
                  </li>
                  <li>
                    <a href="#none">
                        <span>ISK TOKEN</span>
                    </a>
                  </li>
                  <li>
                    <a href="#none">
                        <span>GAMES</span>
                    </a>
                  </li>
                  <li>
                    <a href="#none">
                        <span>PARTNERS</span>
                    </a>
                  </li>
                  <li className="pc_block">
                    <a href="#none">
                      <span>HELP CENTER</span>
                    </a>
                  </li>
                  <li className="pc_block">
                        <a href="#none">
                          <span>WALLET</span>
                        </a>
                      </li>
                  <li className="mobile_block line-t">
                    <a
                      href="#none"
                      className="msg_sign"
                    >
                      <span>SIGN IN</span>
                    </a>
                  </li>
                  <li className="mobile_block">
                    <a
                      href="#none"
                      className="msg_sign"
                    >
                      <span>SIGN UP</span>
                    </a>
                  </li>
                </ul>
              </nav>
              <div className="member">
                <a
                  href="#none"
                >
                  SIGN IN
                </a>
                <a href="#none" className="signup">
                  SIGN UP
                </a>
              </div>
              <button type="button" className="btn1 gnb-open">
                <i className="ic ic-gnb-open" />
              </button>
            </div>
          </header>
          <div className="mask" />
          <main id="container">{children}</main>
          <footer id="footer">
            <div className="inner">
              <ul className="foot-depth">
                <li>
                    <a href="#none">Resources</a>
                    <a
                        href="https://whitepaper.iskra.world"
                        style={{ display: 'block' }}
                    >
                        Whitepaper
                    </a>
                    <a href="https://scope.klaytn.com/account/0x17d2628d30f8e9e966c9ba831c9b9b01ea8ea75c?tabId=txList">
                        Smart Contract
                    </a>
                </li>
                <li>
                    <a href="#none">Help</a>
                    <a href="https://helpcenter.iskra.world/hc/en-us/categories/4644258696335-FAQ">
                        FAQs
                    </a>
                    <a href="#none">
                        <span className="pc_block">Help Center</span>
                    </a>
                </li>
                <li>
                    <a href="#none">Others</a>
                    <a href="#none">Terms of Use</a>
                    <a href="#none">Privacy Policy</a>
                </li>
              </ul>
              <div className="position">
                <div className="foot-sns">
                  <a href="https://www.twitter.com/iskra_world" target={`_blank`}>
                    <img
                      src={twitter}
                      alt=""
                    />
                  </a>
                  <a href={'https://www.discord.gg/iskraworld'} target={`_blank`}>
                    <img
                      src={discord}
                      alt=""
                    />
                  </a>
                  <a href="https://medium.com/@iskra.world" target={`_blank`}>
                    <img
                      src={medium}
                      alt=""
                    />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/iskra-world"
                    target={`_blank`}
                  >
                    <img
                      src={linkedin}
                      alt=""
                    />
                  </a>
                  <a
                    href="https://www.youtube.com/channel/UC24IRWIltUF2Qrzf31ma1SA"
                    target={`_blank`}
                  >
                    <img
                      src={youtube}
                      alt=""
                    />
                  </a>
                </div>
                <p className="copyright">
                  ⓒ 2022. <em>ISKRA (BVI) Corp</em>. All rights reserved.
                </p>
              </div>
            </div>
          </footer>
        </div>
      </>
    );
  }
  