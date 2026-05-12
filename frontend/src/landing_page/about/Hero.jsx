function Hero() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5">
        <h1 className="fs-2 text-center">
          We are redefining the future of investing in India
          <br />
          with powerful technology and seamless experiences.
        </h1>
      </div>

      <div
        className="row p-5 mt-5 border-top text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-5">
          <p>
            Investra was founded with a vision to simplify investing for
            everyone. Our goal is to remove complexity, reduce costs, and
            provide a smooth experience for traders and investors across India.
          </p>
          <p>
            With modern technology and a user-first approach, we are building
            a platform that empowers individuals to take control of their
            financial journey.
          </p>
          <p>
            Thousands of users trust Investra every day to manage their
            investments using our fast, reliable, and secure ecosystem.
          </p>
        </div>
        <div className="col-6 p-5">
          <p>
            We also focus on educating our users through open learning
            platforms and community-driven initiatives.
          </p>
          <p>
            Our innovation wing supports fintech ideas and startups that aim
            to transform the financial landscape in India.
          </p>
          <p>
            We continue to evolve every day—building new features, improving
            performance, and creating better tools for the next generation of
            investors.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;