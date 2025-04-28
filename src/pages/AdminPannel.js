import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Doughnut } from 'react-chartjs-2';

const Api = 'https://https-github-com-v121212-healthbackend.onrender.com';

function AdminPanel() {
  const [counts, setCounts] = useState({ email: 0, male: 0, female: 0 });
  const [data, setData] = useState([]);
  const [visitors , setVisitors] = useState('0');
  //for fetching the numbers of male and female
  useEffect(() => {
    const fetchGenderCounts = async () => {
      try {
        // const response = await axios.get(`https://https-github-com-v121212-healthbackend.onrender.com/gender-counts`);
        const response = await axios.get(`${Api}/gender-counts`);
        const { email, male, female } = response.data;
        setCounts({ email, male, female });
        setData([
          {
            label: 'Male',
            valueIn: male,
          },
          {
            label: 'Female',
            valueIn: female,
          },
        ]);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching counts:', error);
      }
    };
    fetchGenderCounts();
  }, []);


  // for fetching the total number of visitors till now
  useEffect(() => {
    const fetchVisitorCounts = async () => {
      try {
        // const response = await axios.get(`https://https-github-com-v121212-healthbackend.onrender.com/visitor-count`);
        const response = await axios.get(`${Api}/visitor-count`);
        setVisitors(response.data.totalVisitors);
        console.log(response.data.totalVisitors);
      } catch (error) {
        console.error('Error fetching visitors:', error);
      }
    };
    fetchVisitorCounts();
  }, []);


  return (
    <div className="mt-24 flex flex-col gap-8 px-6 md:px-12 lg:px-24">
  <div className='text-2xl'>
    <p><b>Hii!</b> Sir you can see all the activities here :)</p>
  </div>

  <div className='flex flex-row justify-center items-center gap-12 lg:gap-24 mt-8'>
    <div className='flex flex-col items-center justify-center gap-2 text-xl font-semibold border-2 p-4 h-24 w-full lg:w-1/3 rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out'>
      <p className="text-gray-600">Total Users</p>
      <p className="text-blue-600">{counts.email}</p>
    </div>

    <div className='flex flex-col items-center justify-center gap-2 text-xl font-semibold border-2 p-4 h-24 w-full lg:w-1/3 rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out'>
      <p className="text-gray-600">Total Activities</p>
      <p className="text-blue-600">{Math.floor(visitors/2)}</p>
    </div>
  </div>

  <div className="flex justify-center items-center mt-8">
    <div className="h-80 w-60">
      <Doughnut
        data={{
          labels: data.map((d) => d.label),
          datasets: [
            {
              label: 'Intake',
              data: data.map((d) => d.valueIn),
              backgroundColor: ['#3b82f6', '#fbbf24'], // Tailwind blue and yellow colors
            },
          ],
        }}
      />
    </div>
  </div>
</div>

  
  )
}

export default AdminPanel;
