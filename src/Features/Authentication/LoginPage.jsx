import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "./AuthSlice";


function LoginPage() {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const { loading, error } = useSelector((state) => state.auth);

  const onSubmitt = (data) => {
    dispatch(loginUser(data));
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">Login</h2>
      <form onSubmit={handleSubmit(onSubmitt)} className="space-y-4">
        <input
          {...register("email")}
          type="email"
          placeholder="Email"
          className="w-full p-2 border rounded"
        />
        <input
          {...register("password")}
          type="password"
          placeholder="Password"
          className="w-full p-2 border rounded"
        />
        <button
          disabled={loading}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Login
        </button>
        {error && <p className="text-red-500">{error}</p>}
      </form>
    </div>
  );
}

export default LoginPage;
