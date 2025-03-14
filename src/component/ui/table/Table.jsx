import { NavLink } from "react-router-dom";

const Table = ({ name, data, action }) => {
  return (
    <div className="card shadow mb-4">
      <div className="card-header py-3">
        <h6 className="m-0 font-weight-bold text-primary"> {name} </h6>
      </div>
      <div className="card-body">
        <div className="table-responsive">
          <table
            className="table table-bordered"
            id="dataTable"
            width="100%"
            cellspacing="0"
          >
            <thead>
              <tr>
                {Object.keys(data[0]).map((key) => (
                  <>
                    <th key={key}>{key}</th>
                  </>
                ))}
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr key={index}>
                  {Object.values(row).map((value, i) => (
                    <>
                      <td key={i}>{value}</td>
                    </>
                  ))}
                  <td>
                    <NavLink
                      to={`${action}/${index}`}
                      className="btn btn-primary"
                    >
                      Voir la classe {index}{" "}
                    </NavLink>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Table;
