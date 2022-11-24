import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import CountryForm from './CountryForm';
import Country from './Country';
import CountryInfo from './CountryInfo';

function App() {

const [countries,setCountries] = useState([]);
const [filtered, setFiltered] = useState(""); 


useEffect(()=>{
  console.log('effect');
  axios.get("https://restcountries.com/v3.1/all")
  .then(response => {
  console.log('promise fulfilled');
  setCountries(response.data);
})
},[])


const handleSearchChange = (event) =>{
  setFiltered(event.target.value)
}


const result = filtered === "" ? [] : countries.filter(country => country.name.common.toLowerCase().includes(filtered.toLowerCase()));
return(
  <div>
    <CountryForm func={handleSearchChange} value={filtered}/>
    <div>
      {result.length > 10 ? ("Too many matches, specify another filter") :
       result.length === 1 ? (<Country country={result[0]}/>) :
        (result.map(country =>(
           <CountryInfo country={country} key={country.name.common}/>               
        )))
      }
    
    </div>
    
  </div>
) 
}
export default App;