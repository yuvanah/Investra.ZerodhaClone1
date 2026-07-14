function SignUp() {
  const handleSignup = () => {
    window.location.href = `${import.meta.env.VITE_KITE_URL}/signup`;
  };

  return (
    <div className="container py-5">
      <div
        className="text-center mx-auto"
        style={{ maxWidth: "700px", padding: "100px 0" }}
      >
        <h1 className="fw-bold mb-4">Open your Investra account</h1>

        <p className="text-muted fs-5 mb-4">
          Account registration is securely handled through{" "}
          <strong>Investra Kite</strong>, our dedicated trading platform.
        </p>

        <p className="text-secondary mb-5">
          Continue to Kite to create your account and start investing with
          Investra.
        </p>

        <button
          className="btn btn-primary btn-lg px-5"
          onClick={handleSignup}
        >
          Continue to Kite
        </button>
      </div>
    </div>
  );
}

export default SignUp;