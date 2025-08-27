import LoginForm from "../components/LoginForm.jsx";
import login from "../styles/page/loginPage.module.scss";

function Login() {
  return (
    <div className={`container ${login.login_container}`}>
      <LoginForm />
    </div>
  );
}

export default Login;
