import React, { useRef } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import styles from "../../styles/sign.module.scss";
import { notifyMessage } from "../../helper/toast";
import axios from "axios";

const signUp: React.FC = () => {
  const name = useRef<HTMLInputElement>();
  const password = useRef<HTMLInputElement>();
  const confirmPassword = useRef<HTMLInputElement>();

  const api = `${process.env.NEXT_PUBLIC_API}/register`;

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      name.current &&
      password.current &&
      confirmPassword.current
    ) {
      const names = name.current.value;
      const passwords = password.current.value;
      const passwordCon = confirmPassword.current.value;
      if (
        names.length < 1 ||
        passwords.length < 1 ||
        passwordCon.length < 1
      ) {
        notifyMessage("Please enter all input");
      } else {
        const dt = {
          username: names,
          password: passwords,
          passwordConfirm: passwordCon,
        };
        try {
          const res = await axios.post(api, dt);
          if (res.status > 201) {
            console.log(res.status)
            throw new Error("Error creating user");
          }
          notifyMessage(res.data?.message);
          name.current.value = "";
          password.current.value = "";
          confirmPassword.current.value = "";
        } catch (e) {
          notifyMessage(e);
        }
      }
    }
  };

  return (
    <>
      <div className={styles.bdy}>
        <h1>Sign Up</h1>
        <form onSubmit={onSubmit}>
          <div className={styles.txt}>
            <TextField
              id="outlined-basic"
              label="Name"
              variant="outlined"
              inputRef={name}
            />
          </div>
          <div className={styles.txt}>
            <TextField
              id="outlined-basic3"
              label="password"
              variant="outlined"
              type="password"
              inputRef={password}
            />
          </div>
          <div className={styles.txt}>
            <TextField
              id="outlined-basic4"
              label="confirm password"
              variant="outlined"
              type="password"
              inputRef={confirmPassword}
            />
          </div>
          <div className={styles.txts}>
            <Button type="submit" variant="contained">
              Sign Up
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default signUp;
