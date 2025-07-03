import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { signUpUser } from "./AuthSlice";

function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const dispatch = useDispatch();
  const { loading, error } = useSelector(state => state.auth);

  const onSubmit = (data) => {
    dispatch(signUpUser(data));
    console.log("User signed up:", data);
    reset();
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">Sign Up</h2>
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("name", { required: "Name is required" })}
          type="text"
          placeholder="Name"
          className="w-full p-2 border rounded"
        />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}

        <input
          {...register("email", {
            required: "Email is required",
            pattern: { value: /^\S+@\S+$/i, message: "Invalid email" }
          })}
          type="email"
          placeholder="Email"
          className="w-full p-2 border rounded"
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}

        <input
          {...register("password", {
            required: "Password is required",
            minLength: { value: 6, message: "Minimum 6 characters" }
          })}
          type="password"
          placeholder="Password"
          className="w-full p-2 border rounded"
        />
        {errors.password && <p className="text-red-500">{errors.password.message}</p>}

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Sign Up
        </button>

        {error && <p className="text-red-500">{error}</p>}
      </form>
    </div>
  );
}

export default SignUp;
