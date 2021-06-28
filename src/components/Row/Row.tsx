import React from "react";
import "./styles.scss";

interface CountriesList {
  id: number;
  name: string;
  nativeName: string;
  capital: string;
  flag: string;
  population: number;
  currencies: string;
  region: string;
}

const Row = ({
  id,
  name,
  nativeName,
  capital,
  currencies,
  region,
  population,
  flag,
}: CountriesList) => {
  return (
    <>
      <tr className="row">
        <td>{id}</td>
        <td>{name}</td>
        <td>{nativeName}</td>
        <td>{capital}</td>
        <td>
          <img src={flag} alt="flag" />
        </td>
        <td>{population}</td>
        <td>{region}</td>
        <td>{currencies}</td>
      </tr>
    </>
  );
};

export default Row;
