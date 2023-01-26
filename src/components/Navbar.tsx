import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar-light" style={{color:"#b8c1ec",backgroundColor:"#232946"}}>

        
        <Link to="/"> 
        <span className="mx-3" style={{color:"#b8c1ec"}}>Home </span>
        </Link>
    
        
       
        <Link to="/projects"><span className="mx-3" style={{color:"#b8c1ec"}}>Projects </span></Link>
        
        
        
        <Link to="/experience"> <span className="mx-3" style={{color:"#b8c1ec"}}>Experience </span></Link>
        
    </div>
  );
}

export default Navbar;
