interface SigninProps {
  toggleForm: () => void;
}

export default function Signin({ toggleForm }: SigninProps) {
  return (
    <div className="flex">
      <img
        src="/formik.svg"
        alt="Logo"
      />
      <div>
        <h1>Signin Page</h1>
        <button onClick={toggleForm}>Create an account</button>
      </div>
    </div>
  );
}
