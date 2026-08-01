import { toast } from "sonner";
import useAuthContext from "../comps/contexts/AuthContext";
const API_URL = import.meta.env.VITE_API_URL;
import { useState } from "react";
import { useNavigate } from "react-router";

export default function useAuth() {
    const { setLoading, setStatus, setAuth  } = useAuthContext()
    const nav = useNavigate()

    const authRequest = async (
      endpoint,
      userdata,
      {
        loading,
        success,
        error,
      }
    ) => {
      setLoading(true);
      console.log(new Date().toISOString())
    
      try {
        const promise = fetch(`${API_URL}/${endpoint}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify(userdata),
        }).then(async (res) => {
          const data = await res.json();
    
          if (!res.ok || !data.success) {
            throw new Error(data.message || error);
          }

          const { success, payload } = data
          setAuth({loggedIn: success, clientData: payload})
    
          // setMsg(data);
          return data;
        });
   
        const result = await toast.promise(promise, {
          loading,
          success: (data) => data.message || success,
          error: (err) => err.message,
        });

        
        return result
       
      } catch(e) {
        
        console.error(e)
      } finally {
        nav('/', {  replace: true })
        setLoading(false)
      }
    };

    const onLogout = async () => {
        const promise = fetch(`${API_URL}/logout`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include",
        }).then(async (res) => {
            const data = await res.json();
    
            if (!res.ok || !data.success) {
                throw new Error(data.message || "Failed to log out.");
            }

            setAuth({ loggedIn: false, clientData: null })
    
            return data;
        });
    
        return toast.promise(promise, {
            loading: "Logging out...",
            success: (data) => data.message || "Logged out successfully.",
            error: (err) => err.message,
        });
    };

    const onSignup = (userdata) =>
      authRequest("signup", userdata, {
        loading: "Creating your account...",
        success: "Account created successfully!",
        error: "Sign up failed.",
      });
    
    const onSignin = (userdata) =>
      authRequest("signin", userdata, {
        loading: "Signing you in...",
        success: "Welcome back!",
        error: "Sign in failed.",
      });

    const toOAuth = async () => {
      window.location.href = `${API_URL}/auth/google`
    }  

    return { onLogout, onSignup, onSignin, toOAuth }
}