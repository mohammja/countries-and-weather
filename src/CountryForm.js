const CountryForm = ({func, value}) => {
    return (
        <div className="country">
            <b>Find countries</b> <input value={value} onChange={func} placeholder="Search for a country"/>
        </div>
     );
}
 
export default CountryForm;