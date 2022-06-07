import * as React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import rasm1 from "../images/blog-item-01.png";
import rasm2 from "../images/blog-item-02.png";
import rasm3 from "../images/blog-item-03.png";

export default function SimplePapernext() {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 2,
            ml: "8.8%",
            width: 300,
            height: 250,
            mt: "350px",
          },
        }}
      >
        {/* 1start */}

        <div
          style={{
            backgroundColor: "white",
            boxShadow: "1px 5px 10px black",
            borderRadius: "10px",
            textAlign: "center",
            width: "400px",
            height: "500px",
          }}
        >
          <div
            style={{
              borderRadius: "100px",
              backgroundColor: "#8162EE",
              display: "inline-block",
              marginTop: "5px",
            }}
          ></div>
          <div
            style={{
              marginTop: "30px",
              //   backgroundColor: "#8162ee",
              margin: "20px",
              borderRadius: "6px",
              //   padding: "18px",
            }}
          >
            <img style={{ width: "100%", height: "100%" }} src={rasm1} alt="" />
          </div>
          <h3>Lorem, ipsum dolor.</h3>

          <div
            style={{ width: "300px", marginLeft: "13%", marginBottom: "40px" }}
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia
            in ea voluptate consequatur veritatis. Quibusdam, totam. Nobis quas
            eos velit.
          </div>
          <div>
            <Stack spacing={2} direction="row" sx={{ ml: "24.9%" }}>
              <Button
                variant="contained"
                sx={{
                  width: "200px",
                  borderRadius: "200px",
                  backgroundColor: "#8162ee",
                }}
              >
                Purchase Now
              </Button>
            </Stack>
          </div>
        </div>
        {/* 1end */}

        {/* 2start */}

        <div
          style={{
            backgroundColor: "white",
            boxShadow: "1px 5px 10px black",
            borderRadius: "10px",
            textAlign: "center",
            width: "400px",
            height: "500px",
          }}
        >
          <div
            style={{
              borderRadius: "100px",
              backgroundColor: "#8162EE",
              display: "inline-block",
              marginTop: "5px",
            }}
          ></div>
          <div
            style={{
              marginTop: "30px",
              //   backgroundColor: "#fe599e",
              margin: "20px",
              borderRadius: "6px",
              //   padding: "18px",
            }}
          >
            <img style={{ width: "100%", height: "100%" }} src={rasm2} alt="" />
          </div>
          <h3>Lorem, ipsum dolor.</h3>
          <div
            style={{ width: "300px", marginLeft: "13%", marginBottom: "40px" }}
          >
            Lorem ipsum dolor sit, amet consectetur br adipisicing elit.
            Mollitia in ea voluptate consequatur veritatis. Quibusdam, totam.
            Nobis quas eos velit.
          </div>
          <div>
            <Stack spacing={2} direction="row" sx={{ ml: "24.9%" }}>
              <Button
                variant="contained"
                sx={{
                  width: "200px",
                  borderRadius: "200px",
                  backgroundColor: "#8162ee",
                }}
              >
                Purchase Now
              </Button>
            </Stack>
          </div>
        </div>
        {/* 2end */}

        {/* 3start */}

        <div
          style={{
            backgroundColor: "white",
            boxShadow: "1px 5px 10px black",
            borderRadius: "10px",
            textAlign: "center",
            width: "400px",
            height: "500px",
          }}
        >
          <div
            style={{
              borderRadius: "100px",
              backgroundColor: "#8162EE",
              display: "inline-block",
              marginTop: "20px",
            }}
          ></div>
          <div
            style={{
              marginTop: "30px",
              //   backgroundColor: "#8162ee",
              margin: "20px",
              borderRadius: "6px",
              //   padding: "18px",
            }}
          >
            <img style={{ width: "100%", height: "100%" }} src={rasm3} alt="" />
          </div>
          <h3>Lorem, ipsum dolor.</h3>
          <div
            style={{ width: "300px", marginLeft: "13%", marginBottom: "40px" }}
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia
            in ea voluptate consequatur veritatis. Quibusdam, totam. Nobis quas
            eos velit.
          </div>
          <div>
            <Stack spacing={2} direction="row" sx={{ ml: "24.9%" }}>
              <Button
                variant="contained"
                sx={{
                  width: "200px",
                  borderRadius: "200px",
                  backgroundColor: "#8162ee",
                }}
              >
                Purchase Now
              </Button>
            </Stack>
          </div>
        </div>
        {/* 3end */}
      </Box>
    </div>
  );
}
