import { useParams } from "react-router-dom";
import Table from "../../component/ui/table/Table";

const Etudiant = () => {
  const { idClasse } = useParams();  

  const etudiants = [
    {
      matricule: "DIT-28762",
      firstname: "Mamadou",
      lastname: "Fall",
      dateOfBirth: "12/12/2000",
      email: "mamadou@gmail.com",
      idClasse: 1,
      sexe: "M",
    },
    {
      matricule: "DIT-28763",
      firstname: "Sokhna",
      lastname: "Diop",
      dateOfBirth: "12/12/2000",
      email: "sokhna@gmail.com",
      idClasse: 1,
      sexe: "F",
    },
    {
      matricule: "DIT-28764",
      firstname: "Ibrahima",
      lastname: "Fall",
      dateOfBirth: "12/12/2000",
      email: "ibrahima@gmail.com",
      idClasse: 1,
      sexe: "M",
    },
  ];
  return (
    <>
      <h1 class="h3 mb-2 text-gray-800">Liste des etudiants</h1>
      <Table name="" action="" data={etudiants} />
    </>
  );
};

export default Etudiant;
