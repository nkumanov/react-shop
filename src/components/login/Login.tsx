import { SubmitHandler, useForm } from "react-hook-form";
import styles from "./Login.module.scss";
import { useAppDispatch } from "../../store/store";
import { fromAuthSelectors, fromAuthThunks } from "../../store/slices/auth";
import { useSelector } from "react-redux";
import { clearError } from "../../store/slices/auth";
import { useEffect } from "react";
interface ILoginFormInput {
  password: string;
  email: string;
}

function Login({ isActive }: { isActive: boolean }) {
  const dispatch = useAppDispatch();
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm<ILoginFormInput>();
  const userLoginError = useSelector(fromAuthSelectors.userLoginError);

  useEffect(() => {
    if (!isActive) {
      dispatch(clearError());
      reset();
    }
  }, [isActive, reset]);

  const onSubmit: SubmitHandler<ILoginFormInput> = (data) => {
    dispatch(fromAuthThunks.userLogin(data));
  };

  return (
    <section className={styles.formWrapper}>
      {userLoginError && <span className={styles.error}>{userLoginError}</span>}
      <form>
        <div>
          <label htmlFor="">Email:</label>
          <input type="email" {...register("email")} />
          {errors.email?.type === "required" && (
            <span role="alert">Email is required</span>
          )}
        </div>
        <div>
          <label htmlFor="">Password:</label>
          <input
            type="password"
            {...register("password", {
              required: {
                value: true,
                message: "Password is required!",
              },
            })}
          />
          {errors.password && (
            <span role="alert">{errors.password.message}</span>
          )}
        </div>
        <button type="submit" onClick={handleSubmit(onSubmit)}>
          Login
        </button>
      </form>
    </section>
  );
}

export default Login;
