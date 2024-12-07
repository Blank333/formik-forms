import { useState } from "react";
import Signup from "./components/Signup/Signup";
import Signin from "./components/Signin/Signin";

function App() {
  const [isSignup, setIsSignup] = useState<boolean>(true);

  const toggleForm = () => {
    setIsSignup((prev) => !prev);
  };

  return (
    <div className="bg-gray-200 h-lvh flex justify-center items-center">
      {isSignup ? (
        <Signup toggleForm={toggleForm} />
      ) : (
        <Signin toggleForm={toggleForm} />
      )}
    </div>
  );
}

export default App;
