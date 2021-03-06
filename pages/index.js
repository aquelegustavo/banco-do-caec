import { useState, useEffect } from "react";
import QRCode from "react-qr-code";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [url, setUrl] = useState(0);
  const [value, setValue] = useState(0);

  useEffect(() => {
    let currentUrl = `${window.location.href}api/mercado?price=${value}`;
    setUrl(currentUrl);
  });

  return (
    <>
      <header className={styles.tag}>
        Uso interno da Diretoria do CAEC. Não compartilhe o sistema com
        terceiros.
      </header>
      <main className={styles.main}>
        <div className={styles.container}>
          <h2>Valor:</h2>
          <input
            type="number"
            min="0.00"
            max="1000.00"
            step="0.01"
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
        </div>
        <div className={styles.container}>
          <h2>Escaneie o QR Code:</h2>
          <QRCode value={url} />
          <p>{url}</p>
        </div>
      </main>
    </>
  );
}
