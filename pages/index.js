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
    <main className={styles.main}>
      <h2>Valor:</h2>
      <input
        type="number"
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />

      <h2>QR Code:</h2>
      <QRCode value={url} />
      <p>{url}</p>
    </main>
  );
}
