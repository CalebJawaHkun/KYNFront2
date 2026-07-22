export default function RightHeader({isSignIn}) {
    return (
        <>
            <h2 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white">

              {isSignIn
                ? "Welcome Back 👋"
                : "Join KYN 🌿"}

            </h2>

            <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">

              {isSignIn
                ? "Sign in with Google or your email to continue exploring your community."
                : "Create your account with Google or email and start connecting with your neighborhood."}

            </p>

            <div className="mt-6 flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">

              <div className="h-2 w-2 rounded-full bg-emerald-500" />

              Protected with secure authentication.

            </div>
        </>
    )
}