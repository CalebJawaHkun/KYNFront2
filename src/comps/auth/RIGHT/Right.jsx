import RightHeader from "./Header";
import GoogleButton from "./GoogleButton";
import OAuthBtn from "./OAuthBtn";
import AuthForm from "./ManualForm";
import TermsAndBottom from "./Terms&Bottom";
import useAuthLayout from "../useAuthLayout";
import { useEffect } from "react";

export default function RightCard({authlayoutHook}) {
    const {    
      isSignIn,
      loading,
      form,
      handleChange,
      handleSubmit,
      toOAuth,
      errors,
      touched,
      handleBlur,
    } = authlayoutHook

    const oauths = ['google', 'discord', 'github']

/*     useEffect(() => {
        console.log('Is Loading: ', loading)
    }, [loading])  */

    return (
        <div className="mx-auto w-full max-w-md">
            <div
            className="
              rounded-3xl
              border
              border-white/40
              bg-white/90
              p-10
              shadow-[0_20px_60px_rgba(0,0,0,0.12)]
              backdrop-blur-xl
              dark:border-slate-700/60
              dark:bg-slate-900/80
            "
          >
            <RightHeader isSignIn={isSignIn}/>
            {oauths.map(v => <OAuthBtn loading={loading} toOAuth={() => toOAuth(v)} provider={v}/>)}
          
            {/* Divider */}

            <div className="my-8 flex items-center">

              <div className="h-px flex-1 bg-slate-200 dark:bg-slate-700" />

              <span
                className="
                  px-4
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.35em]
                  text-slate-400
                "
              >
                OR
              </span>

              <div className="h-px flex-1 bg-slate-200 dark:bg-slate-700" />

            </div>

            <AuthForm
            isSignIn={isSignIn}
            form={form}
            loading={loading}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            errors={errors}
            touched={touched}
            handleBlur={handleBlur}
            />


            <TermsAndBottom isSignIn={isSignIn}/>
          </div>
        </div>
    )
}