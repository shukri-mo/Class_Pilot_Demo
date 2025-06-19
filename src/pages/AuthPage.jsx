import LoginPage from "../Features/Authentication/LoginPage"
import SignUp from "../Features/Authentication/SignUp"

function AuthPage() {
    //here we will display both create and login form conditionally depending on the user whether its authenticated or not

  return (
    <div>
      <LoginPage/>
      <SignUp/>
    </div>
  )
}

export default AuthPage
