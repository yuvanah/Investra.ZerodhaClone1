import Menu from "./Menu";

const TopBar = ({Logout,Username}) => {
  return (
    <div className="topbar-container">
      <div className="indices-container">
        <div className="nifty">
          <p className="index">NIFTY 50</p>
          <p className="index-points">100.2</p>
          <p className="percent"></p>
        </div>

        <div className="sensex">
          <p className="index">SENSEX</p>
          <p className="index-points">100.2</p>
          <p className="percent"></p>
        </div>
      </div>

      <Menu Logout = {Logout}  Username = {Username}  />
    </div>
  );
};

export default TopBar;