import React, { useEffect, useState } from 'react';
import Chart from 'react-google-charts';

function LineChart({ historicalData }) {
    const [data, setData] = useState([["Date", "Prices"]]);

    useEffect(() => {
        let dataCopy = [["Date", "Prices"]];
        if (historicalData.prices) {
            historicalData.prices.map((item) => {
                dataCopy.push([new Date(item[0]).toLocaleDateString().slice(0, -5), item[1]]);
            });
            setData(dataCopy);
        }
    }, [historicalData]);

    return (
        <Chart
            chartType="LineChart"
            data={data}
            width="610px"    // You can set it to a fixed value like '800px' or percentage like '100%'
            height="250px"  // Adjust this value to set the height of the chart
            legendToggle
        />
    );
}

export default LineChart;
