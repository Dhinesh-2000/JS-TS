function CompB(props){
    return <div>
        <h2>Component B</h2>
        <pre>{JSON.stringify(props)}</pre>
        <h3>Employee ID:{props.emp_ID}</h3>
        <h3>Employee Name:{props.emp_Name} </h3>
        <h3>Wish Message:{props.Msg}</h3>
        
        
    </div>
}
export default CompB