import React from "react";

function Footer() {
  return (
    <footer style={{ backgroundColor: "rgb(250, 250, 250)" }}>
      <div className="container border-top mt-5">
        <div className="row mt-5">

          
          <div className="col">
            <img
              src="media/images/logo.svg"
              style={{ width: "50%" }}
              alt="logo"
            />

            <p className="text-muted mt-3">
              &copy; 2010 - 2024, Investra Broking Ltd.
              All rights reserved.
             
              <div className="mt-4 mb-4 d-flex  gap-3 mt-">
                <i className="fa-brands fa-x-twitter fs-4"></i>
                <i className="fa-brands fa-square-facebook fs-4"></i>
                <i className="fa-brands fa-instagram fs-4"></i>
                <i className="fa-brands fa-linkedin-in fs-4"></i>
              </div>
              <hr /> 

                <div className="mt-4 mb-4 d-flex gap-3 mt-">
                <i className="fa-brands fa-youtube fs-4"></i>
                <i className="fa-brands fa-whatsapp fs-4"></i>
                <i className="fa-brands fa-telegram fs-4"></i>

              </div>


            
              <div className=" mb-4 d-flex  gap-5 mt-">
               <img src="/media/images/googlePlayBadge.svg" alt="playstroe" />
               <img src="/media/images/appstoreBadge.svg" alt="" />
              </div>

              
              
            </p>
          </div>

         
          <div className="col">
            <p className="fw-bold mb-3">Company</p>

            <a href="" className="text-decoration-none text-muted fs-6">
              About
            </a>
            <div className="mb-2"></div>

            <a href="" className="text-decoration-none text-muted fs-6">
              Products
            </a>
            <div className="mb-2"></div>

            <a href="" className="text-decoration-none text-muted fs-6">
              Pricing
            </a>
            <div className="mb-2"></div>

            <a href="" className="text-decoration-none text-muted fs-6">
              Referral programme
            </a>
            <div className="mb-2"></div>

            <a href="" className="text-decoration-none text-muted fs-6">
              Careers
            </a>
            <div className="mb-2"></div>

            <a href="" className="text-decoration-none text-muted fs-6">
              Investra.tech
            </a>
            <div className="mb-2"></div>

            <a href="" className="text-decoration-none text-muted fs-6">
              Press & media
            </a>
            <div className="mb-2"></div>

            <a href="" className="text-decoration-none text-muted fs-6">
              Investra cares (CSR)
            </a>
          </div>

       
          <div className="col">
            <p className="fw-bold mb-3">Support</p>

            <a href="" className="text-decoration-none text-muted fs-6">
              Contact
            </a>
            <div className="mb-2"></div>

            <a href="" className="text-decoration-none text-muted fs-6">
              Support portal
            </a>
            <div className="mb-2"></div>

            <a href="" className="text-decoration-none text-muted fs-6">
              Z-Connect blog
            </a>
            <div className="mb-2"></div>

            <a href="" className="text-decoration-none text-muted fs-6">
              List of charges
            </a>
            <div className="mb-2"></div>

            <a href="" className="text-decoration-none text-muted fs-6">
              Downloads & resources
            </a>
          </div>

         
          <div className="col">
            <p className="fw-bold mb-3">Account</p>

            <a href="" className="text-decoration-none text-muted fs-6">
              Open an account
            </a>
            <div className="mb-2"></div>

            <a href="" className="text-decoration-none text-muted fs-6">
              Fund transfer
            </a>
            <div className="mb-2"></div>

            <a href="" className="text-decoration-none text-muted fs-6">
              60 day challenge
            </a>
          </div>
        </div>

        
        <div
          className="mt-5 text-muted"
          style={{ fontSize: "14px", lineHeight: "1.8" }}
        >
          <p>
            Investra Broking Ltd. is a SEBI registered stock broker
            (INZ000031633) and member of NSE & BSE.
            Depository services are provided through
            Investra Securities Pvt. Ltd. (IN-DP-100-2015).
            Commodity trading services are offered via
            Investra Commodities Pvt. Ltd. (MCX: 46025).
            Registered office: Bengaluru, Karnataka, India.
          </p>

          <p>
            For complaints related to broking or depository services,
            contact: complaints@investra.com or dp@investra.com.
            Investors may also register complaints through the
            SEBI SCORES platform for faster resolution.
          </p>

          <p>
            Investments in the securities market are subject to market risks.
            Please read all related documents carefully before investing.
          </p>

          <p>
            Prevent unauthorized transactions by keeping your contact details
            updated with your broker. Receive transaction alerts directly from
            exchanges. KYC is a one-time process across SEBI registered
            intermediaries.
          </p>

          <p>
            Investra does not provide stock tips or authorize anyone
            to trade on behalf of clients. Beware of fraudulent activities
            done in the company’s name.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;