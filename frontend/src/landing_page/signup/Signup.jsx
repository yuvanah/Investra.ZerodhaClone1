function SignUp() {
  return (
    <div className="container py-5">
      <div
        className="text-center mx-auto"
        style={{ maxWidth: "700px", marginTop: "80px" }}
      >
        <h1 className="fw-bold mb-4">Account Registration</h1>

        <p className="fs-5 text-muted">
          Investra's trading services are available through the
          <strong> Investra Kite </strong>
          platform.
        </p>

        <p className="text-muted mt-4">
          To create an account, please visit the Kite trading platform,
          where you can securely register, log in, and begin managing your
          investments.
        </p>

        <hr className="my-5" />

        <p className="text-secondary">
          This website provides information about Investra's products,
          pricing, and services.
        </p>
      </div>
    </div>
  );
}

export default SignUp;