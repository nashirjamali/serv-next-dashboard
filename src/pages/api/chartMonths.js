export default async function handler(req, res) {
  const months = [
    {
      "id": 1,
      "month": "January",
      "income": 43700,
      "withdraw": 54300
    },
    {
      "id": 2,
      "month": "February",
      "income": 59300,
      "withdraw": 34700
    },
    {
      "id": 3,
      "month": "March",
      "income": 28100,
      "withdraw": 79800
    },
    {
      "id": 4,
      "month": "April",
      "income": 77900,
      "withdraw": 67000
    },
    {
      "id": 5,
      "month": "May",
      "income": 99000,
      "withdraw": 19600
    },
    {
      "id": 6,
      "month": "June",
      "income": 36200,
      "withdraw": 47200
    },
    {
      "id": 7,
      "month": "July",
      "income": 73200,
      "withdraw": 89400
    },
    {
      "id": 8,
      "month": "August",
      "income": 84500,
      "withdraw": 71200
    },
    {
      "id": 9,
      "month": "September",
      "income": 25600,
      "withdraw": 48200
    },
    {
      "id": 10,
      "month": "October",
      "income": 58000,
      "withdraw": 67000
    },
    {
      "id": 11,
      "month": "November",
      "income": 98400,
      "withdraw": 82400
    },
    {
      "id": 12,
      "month": "December",
      "income": 72900,
      "withdraw": 81300
    }
  ]
  
  res.status(200).json(months);
}
