import { useState } from "react";
import Country from "./Country";

const CountryInfo = ({ country, key }) => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
    console.log(show);
  };

  if (show) {
    return (
      <div key={key}>
        <b>{country.name.common}</b>
        <button onClick={handleShow}>{show ? "Hide" : "Show"}</button>
        <Country country={country} />
      </div>
    );
  }else{
  return (
    <div key={key}>
      <b>{country.name.common}</b>
      <button onClick={handleShow}>{show ? "Hide" : "Show"}</button>
    </div>
  );
}
};

export default CountryInfo;
