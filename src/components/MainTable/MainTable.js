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
    console.log( state )


    return (
        <>
            <div className="table-container">

                <table>
                    <caption>Main Table</caption>
                    <thead>
                    <tr>
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
                            <Row key={id} country = {country} />
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