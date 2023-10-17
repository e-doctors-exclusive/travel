import Image from "next/image";
import "../styles/Footer.css";
import React from "react";
import Logo from "./Logo";
import AppStoreBanner from "../Assets/appstore.png"
import PlayStoreBanner from "../Assets/playstore.png"
import twitterIcon from "../Assets/icons/twitter.svg"
import instagramIcon from "../Assets/icons/instagram.svg"
import facebookIcon from "../Assets/icons/facebook.svg"

function Footer(): JSX.Element {
  return (
    <div className="footer-container">
      <div className="footer-header">
        <div id="footer-logo">
            <Logo />
        </div>
        <ul className="footer-links">
            <p>About</p>
            <li>About Tripma</li>
            <li>How it works</li>
            <li>Careers</li>
            <li>Press</li>
            <li>Blog</li>
            <li>Forum</li>
        </ul>
        <ul className="footer-links">
            <p>Partner with us</p>
            <li>Partnership programs</li>
            <li>Affiliate program</li>
            <li>Connectivity partners</li>
            <li>Promotions and events</li>
            <li>Integrations</li>
            <li>Community</li>
            <li>Loyalty program</li>
        </ul>
        <ul className="footer-links">
            <p>Support</p>
            <li>Help Center</li>
            <li>Contact us</li>
            <li>Privacy policy</li>
            <li>Terms of service</li>
            <li>Trust and safety</li>
            <li>Accessibility</li>
        </ul>
        <ul className="footer-links">
            <p>Get the app</p>
            <li>Tripma for Android</li>
            <li>Tripma for iOS</li>
            <li>Mobile site</li>
            <div className="Mobile_app_Links">
                <Image src={AppStoreBanner} alt="" />
                <Image src={PlayStoreBanner} alt="" />
            </div>
        </ul>
      </div>
      <div className="footer-bottom">
        <div id="socialIcons">
            <img src={twitterIcon} alt="" />
            <img src={instagramIcon} alt="" />
            <img src={facebookIcon} alt="" />
        </div>
        <p>© 2020 Tripma incorporated</p>
      </div>
    </div>
  );
}

export default Footer;
