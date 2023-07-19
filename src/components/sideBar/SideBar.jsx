"use client";
import { useState } from "react";
import Image from "next/image";
import Logo from "@/../public/assests/Logo.png";
import "./sidebar.css";

const SideBar = () => {
  const [selectedItem, setSelectedItem] = useState("");

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className="siddbarContainer">
      <div className="logo">
        <Image src={Logo} alt="" />
      </div>
      <div className="navs">
        <ul>
          <li
            onClick={() => handleItemClick("Dashboard")}
            className={selectedItem === "Dashboard" ? "selected" : ""}
          >
            Dashboard
          </li>
          <li
            onClick={() => handleItemClick("Trainings")}
            className={selectedItem === "Trainings" ? "selected" : ""}
          >
            Trainings
          </li>
          <li
            onClick={() => handleItemClick("Users")}
            className={selectedItem === "Users" ? "selected" : ""}
          >
            Users
          </li>
          <li
            onClick={() => handleItemClick("Analytics")}
            className={selectedItem === "Analytics" ? "selected" : ""}
          >
            Analytics
          </li>
          <li
            onClick={() => handleItemClick("My Account")}
            className={selectedItem === "My Account" ? "selected" : ""}
          >
            My Account
          </li>
          <li
            onClick={() => handleItemClick("Support")}
            className={selectedItem === "Support" ? "selected" : ""}
          >
            Support
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
