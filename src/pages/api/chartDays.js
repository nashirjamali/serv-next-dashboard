export default async function handler(req, res) {
  const days = [
    { id: 1, day: 'Sunday', income: 12000, withdraw: 9000 },
    { id: 2, day: 'Monday', income: 8000, withdraw: 7000 },
    { id: 3, day: 'Tuesday', income: 10000, withdraw: 12000 },
    { id: 4, day: 'Wednesday', income: 6000, withdraw: 9000 },
    { id: 5, day: 'Thursday', income: 11000, withdraw: 15000 },
    { id: 6, day: 'Friday', income: 14000, withdraw: 13000 },
    { id: 7, day: 'Saturday', income: 9000, withdraw: 8000 },
  ];

  res.status(200).json(days);
}
