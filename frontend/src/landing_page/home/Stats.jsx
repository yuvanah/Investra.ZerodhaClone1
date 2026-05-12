import React from "react";

function Stats() {
  return (
    <div className="container p-3">
      <div className="row p-5">
        <div className="col-6 p-5">
          <h1 className="fs-2 mb-5">Trust with confidence</h1>

          <h2 className="fs-4">Customer-first always</h2>
          <p className="text-muted">
            That's why thousands of users trust Investra for managing their
            investments with simplicity and reliability.
          </p>

          <h2 className="fs-4">No spam or gimmicks</h2>
          <p className="text-muted">
            No gimmicks, spam, or annoying notifications. Just clean,
            high-quality apps that you use at your own pace.
          </p>

          <h2 className="fs-4">The Investra ecosystem</h2>
          <p className="text-muted">
            Not just an app, but a growing ecosystem designed to offer tools
            and services tailored to modern investors.
          </p>

          <h2 className="fs-4">Do better with money</h2>
          <p className="text-muted">
            With smart insights and simple tools, we help you make better
            financial decisions every day.
          </p>
        </div>

        <div className="col-6 p-5">
          <img src="media/images/ecosystem.png" style={{ width: "90%" }} />

          <div className="text-center">
            <a href="" className="mx-5" style={{ textDecoration: "none" }}>
              Explore our products{" "}
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>

            <a href="" style={{ textDecoration: "none" }}>
              Try demo{" "}
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;