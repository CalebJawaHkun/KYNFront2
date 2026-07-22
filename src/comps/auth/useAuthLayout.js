// hooks/useAuthLayout.js

import { useMemo, useState } from "react";
import { useNavigate } from "react-router";

import useAuth from "../../lib/useAuth";
import useAuthContext from "../contexts/AuthContext";

export default function useAuthLayout(mode) {
  const isSignIn = useMemo(() => mode === "signin", [mode]);

  const { toOAuth, onSignup, onSignin } = useAuth();
  const { loading } = useAuthContext();
  const navigate = useNavigate();

  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const [errors, setErrors] = useState({ username: "", email: "", password: "" });
  const [touched, setTouched] = useState({ username: false, email: false, password: false });

  const validateField = (name, value) => {
    let message = "";

    if (name === "email") {
      if (!value.trim()) message = "Email is required.";
      else if (!/\S+@\S+\.\S+/.test(value)) message = "Please enter a valid email.";
    }

    if (name === "username") {
      if (!isSignIn && !value.trim()) message = "Username is required.";
    }

    if (name === "password") {
      if (!value.trim()) message = "Password is required.";
      else if (value.length < 6) message = "Password must be at least 6 characters.";
    }

    setErrors((prev) => ({ ...prev, [name]: message }));
    return message === "";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    validateField(name, value);
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    validateField(name, form[name]);
  };

  const validateAll = () => {
    const emailValid = validateField("email", form.email);
    const usernameValid = isSignIn ? true : validateField("username", form.username);
    const passwordValid = validateField("password", form.password);

    setTouched({ username: true, email: true, password: true });

    return emailValid && usernameValid && passwordValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateAll()) return;

    const payload = isSignIn
      ? { email: form.email, password: form.password }
      : { username: form.username, email: form.email, password: form.password };

    try {
      await (isSignIn ? onSignin(payload) : onSignup(payload));
      // navigate("/");
    } catch (err) {
      // onSignin/onSignup handle their own errors (or surface them here if needed)
      // keep this catch to avoid unhandled promise rejections
    }
  };

  return {
    isSignIn,
    loading,
    form,
    handleChange,
    handleBlur,
    handleSubmit,
    toOAuth,
    errors,
    touched,
  };
}