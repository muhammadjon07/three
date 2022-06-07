import * as React from "react";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function SimplePaper4() {
  return (
    <div style={{ marginTop: "20vh" }}>
      <div style={{ textAlign: "center", color: "black" }}>
        <CardContent>
          <Typography variant="h4" sx={{ color: "black" }}>
            Pricing Plans
          </Typography>
          <Typography
            sx={{ fontSize: 24, marginBottom: "2%", color: "black" }}
          ></Typography>
          <Typography sx={{ color: "black" }}>
            Aenean nec tempor menus. Maecenas ligula dolor. commodo in imperdied{" "}
            <br /> interdum vehicula ut ex Donec ante diam
          </Typography>
        </CardContent>
      </div>
    </div>
  );
}
