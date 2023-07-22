import { TextField } from "@mui/material";
import "./header.css";

import { Line } from "react-chartjs-2";
import { useState } from "react";

export const data = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "# of Votes",
      data: [125, 409, 30, 5, 502, 3, 222, 333, 444, 555],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const Documentation = () => {
  const [value, setValue] = useState("");
  return (
    <>
    <div>
      Entered value: {value}

    </div>
      <TextField
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        onChange={(event) => {
          setValue(event.target.value);
        }}
      />
    </>
  );
};

export default Documentation;
