// components/AuthForm.jsx

import { ArrowRight } from "lucide-react";
import Input from "./Input";
import { useEffect } from "react";

export default function AuthForm({
  isSignIn,
  form,
  loading,
  handleChange,
  handleSubmit,
  errors,
  touched,
  handleBlur,
}) {


  
/*     useEffect(() => {
        console.log('Is Loading: ', loading)
    }, [loading])  */
  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {!isSignIn && (
        <Input
          label="Username"
          name="username"
          value={form.username}
          onChange={handleChange}
          onBlur={handleBlur}
          disabled={loading}
          error={errors?.username}
          touched={touched?.username}
        />
      )}

      <Input
        label="Email Address"
        name="email"
        type="email"
        value={form.email}
        onChange={handleChange}
        onBlur={handleBlur}
        disabled={loading}
        error={errors?.email}
        touched={touched?.email}
      />

      <Input
        label="Password"
        name="password"
        type="password"
        value={form.password}
        onChange={handleChange}
        onBlur={handleBlur}
        disabled={loading}
        error={errors?.password}
        touched={touched?.password}
      />

      {isSignIn && (
        <div className="flex justify-end">
          <button
            type="button"
            className="
              text-sm
              font-medium
              text-emerald-500
              transition
              hover:text-emerald-600
            "
          >
            Forgot password?
          </button>
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="
          group
          flex
          w-full
          items-center
          justify-center
          gap-2
          rounded-2xl
          bg-emerald-500
          px-6
          py-3.5
          font-semibold
          text-white
          transition-all
          duration-200
          hover:-translate-y-0.5
          hover:bg-emerald-600
          hover:shadow-xl
          disabled:cursor-not-allowed
          disabled:opacity-60
        "
      >
        {loading
          ? "Please wait..."
          : isSignIn
          ? "Sign In"
          : "Create Account"}

        {!loading && (
          <ArrowRight
            size={18}
            className="transition-transform group-hover:translate-x-1"
          />
        )}
      </button>
    </form>
  );
}