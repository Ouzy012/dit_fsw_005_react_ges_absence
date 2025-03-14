import { NavLink } from "react-router-dom";
import InputField from "../../component/ui/form/InputField";

const Register = () => {

  return (
    <div className="container">
      <div className="card o-hidden border-0 shadow-lg my-5">
        <div className="card-body p-0">
          <div className="row">
            <div className="col-lg-5 d-none d-lg-block bg-register-image"></div>
            <div className="col-lg-7">
              <div className="p-5">
                <div className="text-center">
                  <h1 className="h4 text-gray-900 mb-4">Créer un compte</h1>
                </div>
                <form className="user" onSubmit="">
                  <div class="form-group">
                    <InputField
                      name="matricule"
                      type="text"
                      placeholder="Votre matricule"
                    />
                  </div>
                  <div class="form-group row">
                    <div class="col-sm-6 mb-3 mb-sm-0">
                      <InputField
                        name="firstname"
                        type="text"
                        placeholder="Votre prénom"
                      />
                    </div>
                    <div class="col-sm-6">
                      <InputField
                        name="lastname"
                        type="text"
                        placeholder="Votre nom"
                      />
                    </div>
                  </div>
                  <button className="btn btn-primary btn-user btn-block">
                    Enregistrer
                  </button>
                </form>
                <hr />

                <div className="text-center">
                  <NavLink className="small" to="/login">
                    Vous avez déja un compte ? Connexion!
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

export default Register;
