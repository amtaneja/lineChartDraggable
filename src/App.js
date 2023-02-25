import "./App.css";
import { useState, useEffect } from "react";
import { rawData } from "./data";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import DataChart from "./DataChart";

function App() {
  const [chartChangeData, setChartChangeData] = useState([]);

  useEffect(() => {
    setChartChangeData(rawData);
  }, []);

  const handleChange = (data) => {
    setChartChangeData(data);
  };

  return (
    <Box sx={{ flexGrow: 1, marginTop: 12 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={1}></Grid>
        <Grid item xs={6} md={6}>
          <DataChart
            chartData={chartChangeData}
            handleChange={handleChange}
            className="chart"
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
