import { ProtectedAuth } from "./components/ProtectedAuth";
import { useDispatch, useSelector } from "./core/hooks";
import { loginAction, logoutAction } from "./core/actions";

const App = (): JSX.Element => {
  const { isLoggedIn, user } = useSelector();
  const dispatch = useDispatch();
  const handleLogin = () =>
    dispatch(loginAction({ displayName: "arpit", email: "arpit@gmail.com" }));
  const handleLogout = () => dispatch(logoutAction());
  return (
    <>
      {!isLoggedIn ? (
        <button onClick={handleLogin}>Log In</button>
      ) : (
        <button onClick={handleLogout}>Log Out</button>
      )}
      <ProtectedAuth>
        {user?.displayName}
        <br />
        {user?.email}
      </ProtectedAuth>
    </>
  );
};

export default App;
