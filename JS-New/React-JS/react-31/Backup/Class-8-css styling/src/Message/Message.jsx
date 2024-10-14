import "./Message.css"
let Message=()=>{
    let msg="Good Morning"
    let tag_styles={color:'pink',backgroundColor:'black'}
    return <div>
        <h1 style={{color:'blue',backgroundColor:'black'}}>Message Component</h1>
        <h2 style={tag_styles}>Welcome to React World!</h2>
        <h3 style={tag_styles}>UI Developer</h3>
        <h4 className="msgStyles">{msg}</h4>
    </div>
}
export default Message
