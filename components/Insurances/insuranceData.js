const insuranceData = [
  {
    src: '/insurances/aviva.webp',
    width: '512px',
    height: '512px',
  },
  {
    src: '/insurances/bajajAlliance.webp',
    width: '1200px',
    height: '900px',
  },
  {
    src: '/insurances/birlaSunLife.webp',
    width: '1024px',
    height: '682px',
  },
  {
    src: '/insurances/starHealth.webp',
    width: '820px',
    height: '480px',
  },
  {
    src: '/insurances/familyHealthPlan.webp',
    width: '470px',
    height: '312px',
  },
  {
    src: '/insurances/hdfc.webp',
    width: '800px',
    height: '800px',
  },
  {
    src: '/insurances/hsbc.webp',
    width: '500px',
    height: '280px',
  },
  {
    src: '/insurances/icici.webp',
    width: '3000px',
    height: '711px',
  },
  {
    src: '/insurances/maxLife.webp',
    width: '2560px',
    height: '1485px',
  },
  {
    src: '/insurances/relianceLife.webp',
    width: '1280px',
    height: '365px',
  },
];

export default insuranceData.sort((a, b) => a.src.localeCompare(b.src));
