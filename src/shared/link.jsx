import React from "react";
import servicesicon from "../assets/servicesicon.svg";
import { Link } from "react-router-dom";

const LinkNavigate = ({ link, content }) => {
  return (
    <Link to={link} className="text-[18px] flex gap-x-2 items-center uppercase  transform hover:translate-x-4 rounded transition duration-300">
      {" "}
      <img src={servicesicon} className="xl:w-[30px] lg:w-[25px] md:w-[22px] sm:w-[20px] w-[17px] " alt="" />
      {content}
    </Link>
  );
};

export default LinkNavigate;
