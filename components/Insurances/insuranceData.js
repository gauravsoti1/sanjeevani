const insuranceData = [
  {
    src: '/insurances/aviva.jpg',
    width: '512px',
    height: '512px',
  },
  {
    src: '/insurances/bajajAlliance.png',
    width: '1200px',
    height: '900px',
  },
  {
    src: '/insurances/birlaSunLife.jpg',
    width: '1024px',
    height: '682px',
  },
  {
    src: '/insurances/starHealth.jpg',
    width: '820px',
    height: '480px',
  },
  {
    src: '/insurances/familyHealthPlan.jpg',
    width: '470px',
    height: '312px',
  },
  {
    src: '/insurances/hdfc.jpg',
    width: '800px',
    height: '800px',
  },
  {
    src: '/insurances/hsbc.jpg',
    width: '500px',
    height: '280px',
  },
  {
    src: '/insurances/icici.jpeg',
    width: '3000px',
    height: '711px',
  },
  {
    src: '/insurances/maxLife.png',
    width: '2560px',
    height: '1485px',
  },
  {
    src: '/insurances/relianceLife.png',
    width: '1280px',
    height: '365px',
  },
];

export default insuranceData.sort((a, b) => a.src.localeCompare(b.src));
