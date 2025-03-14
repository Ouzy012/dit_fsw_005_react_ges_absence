import Table from "../../component/ui/table/Table";

const Home = () => {
  const classes = [
    {
      id: 1,
      name: "FSW_005",
      annee: "2024-2025",
      option: "FullStack"
    },
    {
      id: 2,
      name: "FSW_004",
      annee: "2023-2024",
      option: "FullStack"
    },
    {
      id: 3,
      name: "FSW_002",
      annee: "2022-2023",
      option: "FullStack"
    },
  ];  

  const action = []

  return (
    <>
    <h1 class="h3 mb-2 text-gray-800">Liste des classes</h1>
    <Table name="" action="/liste-etudiant" data={classes}/>
    </>
  )
};

export default Home;
