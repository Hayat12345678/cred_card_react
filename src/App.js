import React from "react";
import CreditCard from "./Components/CreditCard";

import "./App.css";

const cardInfo = {
  bank: "Big Bank, Inc.",
  number: "1234567887654321",
  security: "123",
  expirationDate: "08/19",
  cardHolder: "Hayat Alkheer"
};

export default function App() {
  return <CreditCard cardInfo={cardInfo} />;
}
