import { faker } from "@faker-js/faker";
export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Financial Performance Over Time",
        fontSize: 30,
      },
    },
  };
  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];
  export const data = {
    labels,
    datasets: [
      {
        label: "Revenue",
        data: labels.map(() => faker.number.int({ min: -1000, max: 1000 })),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Expenses",
        data: labels.map(() => faker.number.int({ min: -1000, max: 1000 })),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
      {
        label: "Profit",
        data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
        borderColor: "rgb(75, 192, 192)",
        backgroundColor: "rgba(75, 192, 192, 0.5)",
      },
    ],
  };