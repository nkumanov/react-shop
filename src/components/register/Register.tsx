import { SubmitHandler, useForm } from "react-hook-form";
import styles from "./Register.module.scss";
import { useEffect } from "react";
import { clearError, fromAuthSelectors, fromAuthThunks } from "../../store/slices/auth";
import { useAppDispatch } from "../../store/store";
import { useSelector } from "react-redux";
interface IRegisterFormInput {
  username: string;
  password: string;
  email: string;
  confirmPassword: string;
}
export default function Register({ isActive }: { isActive: boolean }) {
  const dispatch = useAppDispatch();
  const userLoginError = useSelector(fromAuthSelectors.userLoginError);
  const {
    register,
    formState: { errors },
    watch,
    reset,
    handleSubmit,
  } = useForm<IRegisterFormInput>();
  useEffect(() => {
    if (!isActive) {
      dispatch(clearError());
      reset();
    }
  }, [isActive, reset]);

  const onSubmit: SubmitHandler<IRegisterFormInput> = (data) => {
    dispatch(fromAuthThunks.userRegister(data));
  };

  return (
    <section className={styles.formWrapper}>
      {userLoginError && <span className={styles.error}>{userLoginError}</span>}
      <form>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            id="username"
            type="text"
            {...register("username", {
              required: {
                value: true,
                message: "Username is required",
              },
              minLength: {
                value: 4,
                message: "Username must be at least 4 characters long!",
              },
            })}
          />
          {errors.username && (
            <span role="alert">{errors.username.message}</span>
          )}
        </div>
        <div>
          <label htmlFor="">Email:</label>
          <input
            type="email"
            {...register("email", {
              required: {
                value: true,
                message: "Email is required",
              },
            })}
          />
          {errors.email && <span role="alert">{errors.email.message}</span>}
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
              pattern: {
                value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{5,}$/,
                message:
                  "Password must be at least one lowercase, one uppercase, one number and should be at least 5 characters long",
              },
            })}
          />
          {errors.password && (
            <span role="alert">{errors.password.message}</span>
          )}
        </div>
        <div>
          <label htmlFor="">Cofirm password:</label>
          <input
            type="password"
            {...register("confirmPassword", {
              required: {
                value: true,
                message: "Required!",
              },
              validate: (confirmPassword: string) => {
                if (watch("password") !== confirmPassword) {
                  return "Passwords must match!";
                }
              },
            })}
          />
          {errors.confirmPassword?.message && (
            <span role="alert">{errors.confirmPassword?.message}</span>
          )}
        </div>
        <button type="submit" onClick={handleSubmit(onSubmit)}>
          Register
        </button>
      </form>
    </section>
  );
}
