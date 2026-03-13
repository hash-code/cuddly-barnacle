import { useState, useCallback, useEffect } from 'react';
import Header from './components/Header';
import NavBar from './components/NavBar';
import VerifySection from './components/VerifySection';
import CertificateResult from './components/CertificateResult';
import Footer from './components/Footer';

const SAMPLE_CERTIFICATE = {
  regNumber: 'D202610986590001435',
  name: 'KUMKUM DEVI',
  gender: 'Female',
  dod: '04-01-2026 10:54 AM',
  motherName: 'LATE KAMLA DEVI',
  fatherName: 'LATE VIJAY PRASAD',
  placeOfDeath:
    'P Sector, VIDYAPURI, KANKARBAGH, PATNA, PATNA SADAR, PATNA, BIHAR, 800020',
  placeOfDeathHindi:
    'पी सेक्टर ,विदयापुरी , कंकरबाग़ ,पटना , पटना सदर, पटना, बिहार, 800020',
  regDate: '03-02-2026',
  regUnitName: 'KANKARBAGH CIRCLE, PATNA MUNICIPAL CORPORATION',
  regUnitCode: '98659',
};

function App() {
  const [showResult, setShowResult] = useState(true);
  const [certificate, setCertificate] = useState(SAMPLE_CERTIFICATE);
  const [fontSize, setFontSize] = useState('medium');

  const handleVerify = useCallback(() => {
    setCertificate(SAMPLE_CERTIFICATE);
    setShowResult(true);
  }, []);

  const handleVerifyAnother = useCallback(() => {
    setShowResult(false);
  }, []);

  useEffect(() => {
    document.body.classList.remove('font-small', 'font-large');
    if (fontSize === 'small') document.body.classList.add('font-small');
    if (fontSize === 'large') document.body.classList.add('font-large');
  }, [fontSize]);

  return (
    <>
      <Header fontSize={fontSize} onFontSizeChange={setFontSize} />
      <NavBar />
      <main className="main-content">
        <div className="content-bg" aria-hidden="true" />
        <div className="container">
          {!showResult && (
            <VerifySection onSubmit={handleVerify} />
          )}
          {showResult && (
            <CertificateResult
              certificate={certificate}
              onVerifyAnother={handleVerifyAnother}
            />
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
