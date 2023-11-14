import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../resourses/navbar.css";

function Navbar2({ activeRoute, user, userMenu, navigate }) {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <>
      <header>
        <div className="con-logo">
        <a href="/ ">
          <h3 className="logo-text">HoHo</h3>
        </a>
        </div>

      
        <nav ref={navRef}>

          {/* <a href="/bus">Bus</a>
          <a href="/tour">Tour</a>
          <a href="/bookings">Book Bus</a>
          <a href="/bookingsTour">Book Tour</a>
          <a href="/client/src/pages/Profile">Profile</a>
          <a href="/client/src/pages/ContactForm">Contact</a>
          <a href="/logout">Logout</a> */}
          {userMenu.map((item, index) => (
          <div
            className="user-menu-item"
            key={index}
            onClick={() => {
              if (item.path === "/logout") {
                localStorage.removeItem("token");
                navigate("/login");
              } else {
                navigate(item.path);
              }
            }}
          >
            <i className={item.icon}></i>
            <span>{item.name}</span>
          </div>
        ))}


          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>

        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </header>
    </>
  );
}

export default Navbar2;
