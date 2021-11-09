import React, { useState } from "react";
import "./CustomarRegister.css";
import { useForm } from "react-hook-form";

import useFirebase from "./../../Hook/useFirebase";

const CustomarRegister = () => {
  const { googleSignIn } = useFirebase();
  const { register, handleSubmit, watch, errors } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="input-field"
          name="name"
          placeholder="Name"
          {...register("name", { required: true })}
        />
        <br />
        <input
          className="input-field"
          name="email"
          placeholder="Email"
          type="email"
          {...register("email", { required: true })}
        />
        <br />
        <input
          className="input-field"
          name="phone"
          type="number"
          {...register("phone", { required: true })}
        />
        <br />
        <input
          className="input-field"
          name="password"
          type="password"
          placeholder="Password"
          {...register("password", { required: true })}
        />
        <br />

        <input className="submit-btn" type="submit" value="Register" />
      </form>
      <button onClick={googleSignIn} className="btn btn-warning mt-3">
        Sign in with Google
      </button>
    </div>
  );
};

export default CustomarRegister;
