import logo from "../img/logo.svg";
import homeIcon from "../img/home.svg";
import usersIcon from "../img/users.svg";
import setIcon from "../img/setting1.svg";
import plIcon from "../img/p&l.svg";
import vacManIcon from "../img/vacMan.svg";
import notIcon from "../img/notfications.svg";
import avIcon from "../img/Avatar.svg";

export function MainMenu() {
  return (
    <div className="container">
      <div className="menu">
        <div className="logo">
          <img src={logo} alt="icon"></img>
        </div>
        <div className="dashboard">
          <img src={homeIcon} alt="Dashboard"></img>
          <p>Dashboard</p>
        </div>
        <div className="users">
          <img src={usersIcon} alt="user"></img>
          <p>Users</p>
        </div>
        <div className="settings">
          <img src={setIcon} alt="settings"></img>
          <p>Settings</p>
        </div>
        <div className="pandl">
          <img src={plIcon} alt="pANDl"></img>
          <p>P&L</p>
        </div>
        <div className="vacMan">
          <img src={vacManIcon} alt="vacation Manager "></img>
          <p>Vacation Manager</p>
        </div>
        <div className="not">
          <img src={notIcon} alt="vacation Manager "></img>
        </div>
        <div className="ava">
          <img src={avIcon} alt="vacation Manager "></img>
        </div>
      </div>
    </div>
  );
}
