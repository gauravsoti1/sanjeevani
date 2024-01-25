const insuranceData = [
  {
    src: "/insurances/aviva.webp",
    width: "512",
    height: "512",
  },
  {
    src: "/insurances/bajajAlliance.webp",
    width: "1200",
    height: "900",
  },
  {
    src: "/insurances/birlaSunLife.webp",
    width: "1024",
    height: "682",
  },
  {
    src: "/insurances/starHealth.webp",
    width: "820",
    height: "480",
  },
  {
    src: "/insurances/familyHealthPlan.webp",
    width: "470",
    height: "312",
  },
  {
    src: "/insurances/hdfc.webp",
    width: "800",
    height: "800",
  },
  {
    src: "/insurances/hsbc.webp",
    width: "500",
    height: "280",
  },
  {
    src: "/insurances/icici.webp",
    width: "3000",
    height: "711",
  },
  {
    src: "/insurances/maxLife.webp",
    width: "2560",
    height: "1485",
  },
  {
    src: "/insurances/relianceLife.webp",
    width: "1280",
    height: "365",
  },
];

export default insuranceData.sort((a, b) => a.src.localeCompare(b.src));
