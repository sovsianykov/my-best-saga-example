import React from 'react';
import './styles.scss'


const Row = (props ) => {

    return (
        <>
            <tr className='row'>
                <td>{props.country.name}</td>
                <td>{props.country.nativeName}</td>
                <td>{props.country.capital}</td>
                <td><img src={props.country.flag} alt="flag"/></td>
                <td>{props.country.population}</td>
                <td>{props.country.region}</td>
                <td>{props.country.currencies[0].name}</td>

            </tr>

        </>
    );
};

export default Row;