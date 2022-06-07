import * as React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

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
            height: "470px",
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
          <div style={{ marginTop: "20px" }}>
            <b>premium</b>
          </div>
          <div
            style={{
              marginTop: "30px",
              backgroundColor: "#8162ee",
              margin: "20px",
              borderRadius: "6px",
              padding: "18px",
            }}
          >
            $14.50 <br /> monthly
          </div>

          <div style={{ listStyle: "none" }}>
            <li style={{ paddingBottom: "10px" }}>60 GB</li>
            <li style={{ paddingBottom: "10px" }}>60 GB</li>
            <li style={{ paddingBottom: "10px" }}>Pro Design Panet</li>
            <del>
              <li style={{ paddingBottom: "10px" }}>15-Minute Support</li>
            </del>
            <del>
              <li style={{ paddingBottom: "10px" }}>Unlimited Emails</li>
            </del>
            <del>
              <li style={{ paddingBottom: "50px" }}>24/7 Security</li>
            </del>
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
            height: "470px",
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
          <div style={{ marginTop: "20px" }}>
            <b>premium</b>
          </div>
          <div
            style={{
              marginTop: "30px",
              backgroundColor: "#fe599e",
              margin: "20px",
              borderRadius: "6px",
              padding: "18px",
            }}
          >
            $14.50 <br /> monthly
          </div>
          <div style={{ listStyle: "none" }}>
            <li style={{ paddingBottom: "10px" }}>60 GB</li>
            <li style={{ paddingBottom: "10px" }}>60 GB</li>
            <li style={{ paddingBottom: "10px" }}>Pro Design Panet</li>
            <li style={{ paddingBottom: "10px" }}>15-Minute Support</li>
            <del>
              <li style={{ paddingBottom: "10px" }}>Unlimited Emails</li>
            </del>
            <del>
              <li style={{ paddingBottom: "50px" }}>24/7 Security</li>
            </del>
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
            height: "470px",
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
          <div style={{ marginTop: "20px" }}>
            <b>premium</b>
          </div>
          <div
            style={{
              marginTop: "30px",
              backgroundColor: "#8162ee",
              margin: "20px",
              borderRadius: "6px",
              padding: "18px",
            }}
          >
            $14.50 <br /> monthly
          </div>
          <div style={{ listStyle: "none" }}>
            <li style={{ paddingBottom: "10px" }}>60 GB</li>
            <li style={{ paddingBottom: "10px" }}>60 GB</li>
            <li style={{ paddingBottom: "10px" }}>Pro Design Panet</li>
            <li style={{ paddingBottom: "10px" }}>15-Minute Support</li>
            <li style={{ paddingBottom: "10px" }}>Unlimited Emails</li>
            <li style={{ paddingBottom: "50px" }}>24/7 Security</li>
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
