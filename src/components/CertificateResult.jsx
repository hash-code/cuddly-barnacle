export default function CertificateResult({ certificate, onVerifyAnother }) {
  if (!certificate) return null;
  const {
    regNumber,
    name,
    gender,
    dod,
    motherName,
    fatherName,
    placeOfDeath,
    placeOfDeathHindi,
    regDate,
    regUnitName,
    regUnitCode,
  } = certificate;

  return (
    <section className="certificate-result">
      <div className="card result-card">
        <div className="result-header">
          <h3>Registration Details</h3>
        </div>
        <div className="result-body">
          <table className="details-table">
            <tbody>
              <tr>
                <th>Registration Number</th>
                <td>{regNumber}</td>
              </tr>
              <tr>
                <th>NAME</th>
                <td>{name}</td>
              </tr>
              <tr>
                <th>GENDER</th>
                <td>{gender}</td>
              </tr>
              <tr>
                <th>DOD (Date of Death)</th>
                <td>{dod}</td>
              </tr>
              <tr>
                <th>Name Of Mother</th>
                <td>{motherName}</td>
              </tr>
              <tr>
                <th>Name Of Father</th>
                <td>{fatherName}</td>
              </tr>
              <tr>
                <th>Place of Death</th>
                <td>
                  {placeOfDeath} / <span className="hindi">{placeOfDeathHindi}</span>
                </td>
              </tr>
              <tr>
                <th>Registration Date</th>
                <td>{regDate}</td>
              </tr>
              <tr>
                <th>Registration Unit Name</th>
                <td>{regUnitName}</td>
              </tr>
              <tr>
                <th>Registration Unit Code</th>
                <td>{regUnitCode}</td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* <div className="result-footer">
          <button type="button" className="btn btn-secondary" onClick={onVerifyAnother}>
            Verify Another Certificate
          </button>
        </div> */}
      </div>
    </section>
  );
}
