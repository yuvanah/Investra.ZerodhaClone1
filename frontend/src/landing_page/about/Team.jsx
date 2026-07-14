function Team() {
  return (
    <div className="container">
      <div className="row p-3 mt-5 border-top">
        <h1 className="text-center">People</h1>
      </div>

      <div
        className="row p-3 text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-3 text-center">
          <img
          src="media/images/image.png"
         className="rounded-circle"
            style={{
             width: "250px",
             height: "250px",
            objectFit: "cover",
  }}
/>
          <h4 className="mt-5">Arjun Mehta</h4>
          <h6>Founder, CEO</h6>
        </div>

        <div className="col-6 p-3">
          <p>
            Arjun founded Investra with the vision of making investing simple,
            accessible, and affordable for everyone. With a strong background
            in technology and finance, he set out to build a platform that
            removes barriers for modern investors.
          </p>

          <p>
            Under his leadership, Investra focuses on innovation, user
            experience, and building reliable financial tools for the next
            generation.
          </p>

          <p>Outside of work, he enjoys fitness and reading about markets.</p>

          <p>
            Connect on <a href="">LinkedIn</a> / <a href="">Twitter</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;