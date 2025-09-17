import React from "react";
import numeral from "numeral";

function CurrencyFormat({ value }) {
  // Format number like Amazon ($1,299.99)
  return <>{numeral(value).format("$0,0.00")}</>;
}

export default CurrencyFormat;

