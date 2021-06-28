import React from 'react';
import './styles.scss'
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../redux/actions";
import { Button } from "@material-ui/core";
import Row from '../Row/Row'


const MainTable = () => {
    const dispatch = useDispatch()
    const btnHandler = () =>{
        dispatch(fetchData("/all"))
    }
    const state = useSelector(state => state.apiReducer)

    return (
        <>
            <div className="table-container">

                <table>
                    <caption>Main Table</caption>
                    <thead>
                    <tr>
                        <th>N </th>
                        <th>COUNTRY NAME</th>
                        <th>Native name</th>
                        <th>Capital</th>
                        <th>Flag</th>
                        <th>Population</th>
                        <th>Region</th>
                        <th>Currencies</th>
                    </tr>
                    </thead>
                    <tbody>
                    { state.loading ? <tr><td>Loading...</td></tr> : state.error
                        ? <tr><td>Error, try again</td></tr> :
                        state.list.map((country,id) => (
                            <Row key={id}
                                 id = { id + 1 }
                                 name = {country.name}
                                 nativeName = {country.nativeName}
                                 capital = {country.capital}
                                 flag = {country.flag}
                                 population = {country.population}
                                 region = {country.region}
                                 currencies = {country.currencies[0].name}

                            />
                        ))
                    }
                    </tbody>
                </table>
                <Button onClick={ btnHandler }>FETCH DATA</Button>
            </div>
        </>
    );
};

export default MainTable;