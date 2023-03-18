export default async function handler(req, res) {
  const data = [
    {
      date: '2023-02-02',
      client_name: 'Bimosaurus',
      client_photo: 'https://randomuser.me/api/portraits/men/40.jpg',
      amount: 520000,
      status: 'progress',
      service_name: 'I will design amazing UIUX for mobile and web app user',
    },
    {
      date: '2023-02-01',
      client_name: 'Bryan Utami',
      client_photo: 'https://randomuser.me/api/portraits/men/61.jpg',
      amount: 520000,
      status: 'progress',
      service_name: 'I will do modern minimalist logo design in 24hrs',
    },
    {
      date: '2023-02-02',
      client_name: 'Allison Unil',
      client_photo: 'https://randomuser.me/api/portraits/women/27.jpg',
      amount: 520000,
      status: 'complete',
      service_name: 'I will do modern minimalist logo design in 24hrs',
    },
    {
      date: '2023-02-25',
      client_name: 'Kimongz',
      client_photo: 'https://randomuser.me/api/portraits/men/48.jpg',
      amount: 520000,
      status: 'cancel',
      service_name:
        'I will design modern professional icon set for app and website',
    },
  ];

  res.status(200).json(data);
}
