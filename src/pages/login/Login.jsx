import { NavLink } from "react-router-dom";
import InputField from "../../component/ui/form/InputField";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [erreur, setErreur] = useState({});

  const required = (formData, name) => {
    if (!formData.get(name)) {
      return `Le champs ${name} est obligatoire`;
    }
  };
  const validateInput = (formData) => {
    let errors = {};

    errors.email = required(formData, "email");
    errors.password = required(formData, "password");

    return errors;
  };
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.get("category");
    const all_errors = validateInput(formData);

    if (Object.keys(all_errors).length > 0) {
      setErreur(all_errors);
      return;
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
                  <div class="form-group">
                    <InputField
                      name="email"
                      type="email"
                      placeholder="Votre adresse email"
                      errors={erreur}
                    />
                  </div>
                  <div class="form-group">
                    <InputField
                      name="password"
                      type="passord"
                      placeholder="Votre mot de passe"
                      errors={erreur}
                    />
                  </div>
                  <button className="btn btn-primary btn-user btn-block">
                    Se connecter
                  </button>
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
