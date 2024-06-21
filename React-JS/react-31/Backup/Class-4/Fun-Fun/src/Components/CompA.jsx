import CompB from "./CompB";
function CompA(){
    let eid=101;
    let ename="Rahul";

    return <div>
        <h2>Component A</h2>
        <hr/>
        {/*{<CompB prop1={"GM"} prop2={["A","B","C"]}/>*/}
        <CompB emp_ID={eid} emp_Name={ename} Msg="GN"/>
        
    </div>
}
export default CompA