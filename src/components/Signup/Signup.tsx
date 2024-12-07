interface SignupProps {
  toggleForm: () => void;
}

export default function Signup({ toggleForm }: SignupProps) {
  return (
    <div>
      <div>
        <img
          src="/formik.svg"
          alt="Logo"
        />
        <h1>Signup Page</h1>
      </div>
      <button onClick={toggleForm}>Already have an account?</button>
    </div>
  );
}
