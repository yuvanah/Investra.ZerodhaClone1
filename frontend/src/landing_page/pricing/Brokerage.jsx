import React from "react";

function Brokerage() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 text-center border-top">
        
        <div className="col-8 p-4">
          <a href="" style={{ textDecoration: "none" }}>
            <h3 className="fs-5">Investra Brokerage Calculator</h3>
          </a>

          <ul
            style={{ textAlign: "left", lineHeight: "2.5", fontSize: "17px" }}
            className="text-muted ms-5 "
          >
            <li>
              Call & Trade services may include additional charges per order.
            </li>
            <li>
              Digital contract notes will be sent via email.
            </li>
            <li>
              Physical copies of contract notes, if required, may include printing and courier charges.
            </li>
            <li>
              Charges for special account types may vary based on regulations.
            </li>
            <li>
              Brokerage fees depend on the type of trade and market conditions.
            </li>
            <li>
              Additional charges may apply for certain transactions or services.
            </li>
          </ul>
        </div>

        <div className="col-4 p-4">
          <a href="" style={{ textDecoration: "none" }}>
            <h3 className="fs-5">Investra Charges</h3>
          </a>
        </div>

      </div>
    </div>
  );
}

export default Brokerage;