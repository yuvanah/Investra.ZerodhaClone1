import React from "react";

function Footer() {
  return (
    <footer style={{ backgroundColor: "rgb(250, 250, 250)" }}>
      <div className="container border-top mt-5">
        <div className="row mt-5">
          <div className="col">
            <img src="media/images/logo.svg" style={{ width: "50%" }} />
            <p>
              &copy; 2010 - 2024, Investra Broking Ltd. All rights reserved.
            </p>
          </div>

          <div className="col">
            <p>Company</p>
            <a href="">About</a><br />
            <a href="">Products</a><br />
            <a href="">Pricing</a><br />
            <a href="">Referral programme</a><br />
            <a href="">Careers</a><br />
            <a href="">Investra.tech</a><br />
            <a href="">Press & media</a><br />
            <a href="">Investra cares (CSR)</a><br />
          </div>

          <div className="col">
            <p>Support</p>
            <a href="">Contact</a><br />
            <a href="">Support portal</a><br />
            <a href="">Z-Connect blog</a><br />
            <a href="">List of charges</a><br />
            <a href="">Downloads & resources</a><br />
          </div>

          <div className="col">
            <p>Account</p>
            <a href="">Open an account</a><br />
            <a href="">Fund transfer</a><br />
            <a href="">60 day challenge</a><br />
          </div>
        </div>

       <div className="mt-5 text-muted" style={{ fontSize: "14px", lineHeight: "1.6" }}>
  <p>
    Investra Broking Ltd. is a SEBI registered stock broker (INZ000031633) and member of NSE & BSE. 
    Depository services are provided through Investra Securities Pvt. Ltd. (IN-DP-100-2015). 
    Commodity trading services are offered via Investra Commodities Pvt. Ltd. (MCX: 46025).
    Registered office: Bengaluru, Karnataka, India.
  </p>

  <p>
    For complaints related to broking or depository services, contact: 
    complaints@investra.com or dp@investra.com. 
    Investors may also register complaints through the SEBI SCORES platform for faster resolution.
  </p>

  <p>
    Investments in the securities market are subject to market risks. 
    Please read all related documents carefully before investing.
  </p>

  <p>
    Prevent unauthorized transactions by keeping your contact details updated with your broker. 
    Receive transaction alerts directly from exchanges. KYC is a one-time process across SEBI registered intermediaries.
  </p>

  <p>
    Investra does not provide stock tips or authorize anyone to trade on behalf of clients. 
    Beware of fraudulent activities done in the company’s name.
  </p>
</div>
      </div>
    </footer>
  );
}

export default Footer;