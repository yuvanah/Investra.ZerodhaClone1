import React from "react";

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1>The Investra Universe</h1>

        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        {/* Row 1 */}
        <div className="col-4 p-3 mt-5">
          <img
            src="media/images/smallcaseLogo.png"
            style={{ width: "150px", height: "60px", objectFit: "contain" }}
            alt="smallcase"
          />
          <p className="text-muted mt-3">
            Thematic investment platform
          </p>
        </div>

        <div className="col-4 p-3 mt-5">
          <img
            src="media/images/sensibullLogo.svg"
            style={{ width: "150px", height: "60px", objectFit: "contain" }}
            alt="sensibull"
          />
          <p className="text-muted mt-3">
            Options trading platform
          </p>
        </div>

        <div className="col-4 p-3 mt-5">
          <img
            src="media/images/streakLogo.png"
            style={{ width: "150px", height: "60px", objectFit: "contain" }}
            alt="streak"
          />
          <p className="text-muted mt-3">
            Algo & strategy platform
          </p>
        </div>

        {/* Row 2 */}
        <div className="col-4 p-3 mt-5">
          <img
            src="media/images/zerodhaFundhouse.png"
            style={{ width: "150px", height: "60px", objectFit: "contain" }}
            alt="fundhouse"
          />
          <p className="text-muted mt-3">
            Asset management
          </p>
        </div>

        <div className="col-4 p-3 mt-5">
          <img
            src="media/images/goldenpiLogo.png"
            style={{ width: "150px", height: "60px", objectFit: "contain" }}
            alt="goldenpi"
          />
          <p className="text-muted mt-3">
            Bonds trading platform
          </p>
        </div>

        <div className="col-4 p-3 mt-5">
          <img
            src="media/images/dittoLogo.png"
            style={{ width: "150px", height: "60px", objectFit: "contain" }}
            alt="ditto"
          />
          <p className="text-muted mt-3">
            Insurance
          </p>
        </div>

        {/* Button */}
        <button
          className="p-2 btn btn-primary fs-5 mb-5 mt-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Signup Now
        </button>
      </div>
    </div>
  );
}

export default Universe;