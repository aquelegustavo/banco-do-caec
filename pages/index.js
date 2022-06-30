import { useState } from "react";
import QRCode from "react-qr-code";

export default function Home() {
  const [value, setValue] = useState("");

  return (
    <main>
      <h2>Valor:</h2>
      <input type="text" />

      <h2>QR Code:</h2>
      <QRCode value="hey" />
    </main>
  );
}
