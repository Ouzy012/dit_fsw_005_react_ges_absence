import { NavLink, useNavigate } from "react-router-dom";
import InputField from "../../component/ui/form/InputField";
import { useState } from "react";
import { login } from "../../services/AuthService";
import axios from "axios";
import { apiUrl } from "../../utils/constant";
import { setSession } from "../../utils/session";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [erreur, setErreur] = useState({});

  const required = (formData, name) => {
    const value = formData.get(name);
    return value ? null : `Le champ ${name} est obligatoire`;
  };
  const validateInput = (formData) => {
    let errors = {};

    ["email", "password"].forEach((field) => {
      const error = required(formData, field);
      if (error) errors[field] = error;
    });

    return errors;
  };
  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const all_errors = validateInput(formData);

    if (Object.keys(all_errors).length > 0) {
      setErreur(all_errors);
      return;
    } else {
      setLoading(true);

      await axios
        .post(`${apiUrl}/login`, formData)
        .then((response) => {
          const user = response.data.user;
          const token = response.data.access_token;
          setSession(user, token);
          navigate("/home");
        })
        .catch((err) => {
          setError(err.response.data.message);
          setTimeout(() => {
            setError('')
          }, 3000);
          setLoading(false);
        });
    }
  }

  return (
    <div className="container">
      <div className="card o-hidden border-0 shadow-lg my-5">
        <div className="card-body p-0">
          <div className="row">
            <div className="col-lg-5 d-none d-lg-block bg-register-image"></div>
            <div className="col-lg-7">
              <div className="p-5">
                <div className="text-center">
                  <h1 className="h4 text-gray-900 mb-4">Connexion!</h1>
                </div>
                <form className="user" onSubmit={handleSubmit}>
                  <span className="text-danger"> {error} </span>
                  <div className="form-group">
                    <InputField
                      name="email"
                      type="email"
                      placeholder="Votre adresse email"
                      errors={erreur}
                    />
                  </div>
                  <div className="form-group">
                    <InputField
                      name="password"
                      type="password"
                      placeholder="Votre mot de passe"
                      errors={erreur}
                    />
                  </div>
                  {loading ? (
                    <button
                      className="btn btn-primary btn-user btn-block"
                      disabled
                    >
                      En cours de chargement
                    </button>
                  ) : (
                    <button className="btn btn-primary btn-user btn-block">
                      Se connecter
                    </button>
                  )}
                </form>
                <hr />
                <div className="text-center">
                  <NavLink className="small" to="/register">
                    Vous n'avez pas encore un compte? Inscrivez-vous!
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
