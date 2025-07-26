import './style.css'
// inline styling 


function Header() {
    //style is written as object => property as key and value (only string)
    //remove hyphen from css property,and change it to camelcase 
    let btnStyle = {
        color:'white',
        backgroundColor:'green',
        border:'none',
        borderRadius:'4px',
        padding:'4px 8px',
        fontSize:'18px'
    }
  return <div className="abc">
    <p style={{backgroundColor:'tan',color:'blue'}} >inline style example</p>
    this is header component
    <br /> <button style={btnStyle}>click here</button>
  </div>
}

export default Header 
//only single component can be exported 
//you can import it by any name 

