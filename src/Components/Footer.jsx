import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SignalWifi0BarIcon from "@mui/icons-material/SignalWifi0Bar";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";

const Footer = () => {
  return (
    <div
      style={{
        backgroundColor: "#8162cc",
        padding: "20px",
        textAlign: "center",
        color: "white",
      }}
    >
      {" "}
      <div style={{ textAlign: "center" }}>
        <FacebookIcon sx={{ padding: "10px" }} />
        <TwitterIcon sx={{ padding: "10px" }} />
        <LinkedInIcon sx={{ padding: "10px" }} />
        <SignalWifi0BarIcon sx={{ padding: "10px" }} />
        <SportsSoccerIcon sx={{ padding: "10px" }} />
      </div>{" "}
      <hr style={{ width: "50%" }} />
      <div>
        <h6 style={{ fontFamily: "arial" }}>
          CopyRight c 2020 SOFTY PINKO COMPANY - DESIGN TEMPLATEMO{" "}
        </h6>
      </div>
    </div>
  );
};

export default Footer;
