export default function VerifySection({ onSubmit }) {
  function handleSubmit(e) {
    e.preventDefault();
    const certId = e.target.certId?.value?.trim();
    if (certId) onSubmit(certId);
  }

  return (
    <section className="verify-section">
      <div className="card verify-card">
        <h3>Enter Certificate Details</h3>
        <form className="verify-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="certId">Certificate ID / Document Number</label>
            <input
              type="text"
              id="certId"
              name="certId"
              placeholder="Enter certificate ID"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Verify Certificate
          </button>
        </form>
      </div>
    </section>
  );
}
