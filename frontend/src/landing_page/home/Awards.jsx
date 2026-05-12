function Awards() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6 p-5">
          <img src="media/images/largestBroker.svg" />
        </div>

        <div className="col-6 p-5 mt-5">
          <h1>Built for the next generation of investors</h1>

          <p className="mb-5">
            Investra is a modern trading platform designed to simplify investing
            for everyone. Thousands of users trust our platform for fast,
            reliable, and intuitive trading experiences across multiple asset
            classes.
          </p>

          <div className="row">
            <div className="col-6">
              <ul>
                <li><p>Futures and Options</p></li>
                <li><p>Commodities</p></li>
                <li><p>Currency markets</p></li>
              </ul>
            </div>

            <div className="col-6">
              <ul>
                <li><p>Stocks & IPOs</p></li>
                <li><p>Mutual funds</p></li>
                <li><p>Bonds & Securities</p></li>
              </ul>
            </div>
          </div>

          <p className="mt-4">
            Our platform focuses on performance, simplicity, and powerful tools
            to help users make smarter financial decisions.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Awards;