import RegistrationForm from "../components/RegistrationForm";
import registrationStyles from "../styles/page/registrationPage.module.scss";

function Register() {
  return (
    <div className={`container ${registrationStyles.registration_container}`}>
      <RegistrationForm />
    </div>
  );
}

export default Register;
