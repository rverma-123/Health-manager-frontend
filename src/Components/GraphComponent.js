import React, { useState, useEffect } from 'react';
import Chart from 'chart.js/auto';
import { Bar, Doughnut, Line } from 'react-chartjs-2';
import ChartData from "../data/ChartData.json";

function GraphsComponent() {
  const [data, setData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Input Data',
        data: [],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
      }
    ]
  });
  const [input, setInput] = useState('');

  const addData = (newData) => {
    setData(prevData => ({
      ...prevData,
      labels: [...prevData.labels, new Date().toLocaleDateString()],
      datasets: [{
        ...prevData.datasets[0],
        data: [...prevData.datasets[0].data, newData]
      }]
    }));
  };

  const resetData = () => {
    setData({
      labels: [],
      datasets: [
        {
          label: 'Input Data',
          data: [],
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
        }
      ]
    });
  };

  const handleAddButtonClick = () => {
    if (input !== '' && !isNaN(input)) {
      addData(parseInt(input));
      setInput('');
    }
  };

  useEffect(() => {
    // Initialize chart when component mounts
    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
      type: 'line',
      data: data,
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

    return () => {
      myChart.destroy(); // Cleanup when component unmounts
    };
  }, [data]);

  useEffect(() => {
    // Reset data after 7 days
    const resetInterval = setInterval(() => {
      resetData();
    }, 604800000); // 604800000 milliseconds = 7 days

    return () => clearInterval(resetInterval); // Cleanup reset interval
  }, []);

  return (
    <div className='flex flex-col gap-12 min-h-screen bg-slate-200'>
      <div className='flex flex-row gap-20'>
        <div className='w-96 h-80 border-3 shadow-2xl border-slate-100'>
          <Bar
            data={{
              labels: ["A", "B", "C"],
              datasets: [
                {
                  label: "intake",
                  data: [10, 20, 30]
                },
                {
                  label: "burn",
                  data: [8, 15, 25]
                },
              ]
            }}
          />
        </div>

        <div className="w-96 h-80 border-3 shadow-2xl border-slate-100">
          <Bar
            data={{
              labels: ChartData.map((data) => data.label),
              datasets: [
                {
                  label: "intake",
                  data: ChartData.map((data) => data.valueIn),
                  borderRadius: 5,
                  backgroundColor: "gray",
                },
                {
                  label: "burn",
                  data: ChartData.map((data) => data.valueOut),
                  backgroundColor: "green",
                },
              ]
            }}
          />
        </div>
      </div>

      <div className='flex flex-row gap-20'>
        <div>
          <Doughnut
            data={{
              labels: ChartData.map((data) => data.label),
              datasets: [
                {
                  label: "intake",
                  data: ChartData.map((data) => data.valueIn),
                  backgroundColor: [
                    "green", "blue", "yellow"
                  ]
                },
              ]
            }}
          />
        </div>

        <div className='w-1/3'>
          <Line
            data={{
              labels: ChartData.map((data) => data.label),
              datasets: [
                {
                  label: "intake",
                  data: ChartData.map((data) => data.valueIn),
                  backgroundColor: [
                    "green", "blue", "yellow"
                  ]
                },
              ]
            }}
          />
        </div>

        <div>
          <canvas id="myChart" width="400" height="400"></canvas>
          <input
            type="number"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter input for today (integer)"
          />
          <button onClick={handleAddButtonClick}>Add Data</button>
        </div>
      </div>

    </div>
  );
}

export default GraphsComponent;
