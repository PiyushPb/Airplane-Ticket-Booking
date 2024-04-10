import React from "react";
import QRScan from "./qr-reader/qr-reader.component";
import QRScanner from "./qr-reader/QRScanner";

const VerifyTicket = () => {
  return (
    <div>
      <QRScanner />
    </div>
  );
};

export default VerifyTicket;
