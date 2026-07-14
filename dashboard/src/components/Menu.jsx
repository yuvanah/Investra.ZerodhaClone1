
import {useState} from "react";
import {Link} from "react-router-dom";


const Menu = ({Logout,Username}) => {

  const[selectedManu,setSelectedMenu] = useState(0);
   const[isProfileDropdownOpen,setIsProfileDropdownOpen] = useState(false);

   const handleMenuClick = (index) => {
    setSelectedMenu(index);
   };
  const handleProfileClick = (index) => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const menuClass = "menu";
  const activeMenuClass = "active-menu";
  
  return (
    <div className="menu-container">
      <img src="/logo.png" alt="logo" style={{ width: "50px" }} />

      <div className="menus ">
        <ul className="border-end">
          <li>
           <Link style={{textDecoration:"none"}} to="/"  onClick={() => handleMenuClick(0)}>
             <p className={selectedManu === 0 ? activeMenuClass : menuClass}>Dashboard</p>
           </Link>
          </li>

          <li>
             <Link style={{textDecoration:"none"}} to="/orders"  onClick={() => handleMenuClick(1)}>
             <p className={selectedManu === 1 ? activeMenuClass : menuClass}>Orders</p>
           </Link>
          </li>

          <li>
           <Link style={{textDecoration:"none"}} to="/holdings"  onClick={() => handleMenuClick(2)}>
             <p className={selectedManu === 2 ? activeMenuClass : menuClass}>Holdings</p>
           </Link>
          </li>

          <li>
             <Link style={{textDecoration:"none"}} to="/positions"  onClick={() => handleMenuClick(3)}>
             <p className={selectedManu === 3 ? activeMenuClass : menuClass}>Positions</p>
           </Link>
          </li>

          <li>
              <Link style={{textDecoration:"none"}} to="/funds"  onClick={() => handleMenuClick(4)}>
             <p className={selectedManu === 4 ? activeMenuClass : menuClass}>Funds</p>
           </Link>
          </li>

          <li>
               <Link style={{textDecoration:"none"}} to="/news"  onClick={() => handleMenuClick(5)}>
             <p className={selectedManu === 5 ? activeMenuClass : menuClass}>News</p>
           </Link>
          </li>
        </ul>

        <hr />

        <div className="profile  " onClick={handleProfileClick}>
          <div className="avatar">{Username.slice(0,2).toUpperCase()}</div>
          <p className="username">{Username}</p>
          {isProfileDropdownOpen  && (
            <p className="username ms-3"><i class="fa-solid fa-right-from-bracket" onClick={Logout} ></i></p>
          )}
        </div>
        
      </div>
    </div>
  );
};

export default Menu;