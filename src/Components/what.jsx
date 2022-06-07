import * as React from "react";
import Box from "@mui/material/Box";
import CommentIcon from "@mui/icons-material/Comment";

export default function SimplePaper() {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 2,
            ml: "11.5%",
            width: 300,
            height: 250,
          },
        }}
      >
        <div
          style={{
            boxShadow: "1px 5px 10px black",
            borderRadius: "10px",
            textAlign: "left",
            paddingLeft: "25px",
          }}
        >
          <div
            style={{
              borderRadius: "100px",
              display: "inline-block",
              marginTop: "5px",
            }}
          >
            <CommentIcon
              sx={{ fontSize: "30px", padding: "5px", color: "#8162EE" }}
            />
          </div>
          <div style={{ marginTop: "20px" }}>
            <b>Modern Strategy</b>
          </div>
          <div style={{ marginTop: "30px" }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus
            similique tenetur nihil aspernatur praesentium, hic non ipsa nobis!
          </div>
        </div>
        <div
          style={{
            // backgroundColor: "white",
            boxShadow: "1px 5px 10px black",
            borderRadius: "10px",
            textAlign: "left",
            paddingLeft: "25px",
          }}
        >
          <div
            style={{
              borderRadius: "100px",
              display: "inline-block",
              marginTop: "5px",
            }}
          >
            <CommentIcon
              sx={{ fontSize: "30px", padding: "10px", color: "#8162EE" }}
            />
          </div>
          <div style={{ marginTop: "20px" }}>
            <b>Modern Strategy</b>
          </div>
          <div style={{ marginTop: "30px" }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus
            similique tenetur nihil aspernatur praesentium, hic non ipsa nobis!
          </div>
        </div>
        <div
          style={{
            backgroundColor: "white",
            boxShadow: "1px 5px 10px black",
            borderRadius: "10px",
            textAlign: "left",
            paddingLeft: "25px",
          }}
        >
          <div
            style={{
              borderRadius: "100px",
              display: "inline-block",
              marginTop: "5px",
            }}
          >
            <CommentIcon
              sx={{ fontSize: "30px", padding: "5px", color: "#8162EE" }}
            />
          </div>
          <div style={{ marginTop: "20px" }}>
            <b>Modern Strategy</b>
          </div>
          <div style={{ marginTop: "30px" }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus
            similique tenetur nihil aspernatur praesentium, hic non ipsa nobis!
          </div>
        </div>
      </Box>
    </div>
  );
}
