import React from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';
import 'chart.js/auto';

const Dashboard = () => {
  const cityDrugData = [
    {
      city: 'New York',
      drugs: [
        { name: 'Aspirin', qualityScore: 92, inventory: 150, expiryDays: 180 },
        { name: 'Ibuprofen', qualityScore: 85, inventory: 100, expiryDays: 120 },
      ],
    },
    {
      city: 'Los Angeles',
      drugs: [
        { name: 'Paracetamol', qualityScore: 90, inventory: 130, expiryDays: 90 },
        { name: 'Amoxicillin', qualityScore: 88, inventory: 75, expiryDays: 45 },
      ],
    },
  ];

  const shipmentStatusData = [
    { city: 'New York', progress: 80 },
    { city: 'Los Angeles', progress: 60 },
    { city: 'Chicago', progress: 90 },
    { city: 'Houston', progress: 50 },
  ];

  const blockchainTransactions = [
    {
      transactionHash: '0xABC123',
      timestamp: '2024-09-01',
      sender: '0xSender1',
      receiver: '0xReceiver1',
      status: 'Verified',
    },
    {
      transactionHash: '0xDEF456',
      timestamp: '2024-09-02',
      sender: '0xSender2',
      receiver: '0xReceiver2',
      status: 'Pending',
    },
    {
      transactionHash: '0xGHI789',
      timestamp: '2024-09-03',
      sender: '0xSender3',
      receiver: '0xReceiver3',
      status: 'Verified',
    },
  ];

  const drugQualityData = {
    labels: cityDrugData.map((city) => city.city),
    datasets: cityDrugData.flatMap((city) =>
      city.drugs.map((drug) => ({
        label: `${drug.name} Quality in ${city.city}`,
        data: [drug.qualityScore],
        backgroundColor: [
          'rgba(75, 192, 192, 0.6)',
          'rgba(255, 99, 132, 0.6)',
          'rgba(153, 102, 255, 0.6)',
        ],
      }))
    ),
  };

  const shipmentProgressData = {
    labels: shipmentStatusData.map((status) => status.city),
    datasets: [
      {
        label: 'Shipment Progress (%)',
        data: shipmentStatusData.map((status) => status.progress),
        fill: false,
        borderColor: 'rgba(54, 162, 235, 0.6)',
        tension: 0.1,
      },
    ],
  };

  const inventoryData = {
    labels: cityDrugData.flatMap((city) =>
      city.drugs.map((drug) => `${drug.name} (${city.city})`)
    ),
    datasets: [
      {
        label: 'Inventory Levels',
        data: cityDrugData.flatMap((city) =>
          city.drugs.map((drug) => drug.inventory)
        ),
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
        ],
      },
    ],
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <Bar data={drugQualityData} />
      <Line data={shipmentProgressData} />
      <Pie data={inventoryData} />
    </div>
  );
};

export default Dashboard;
