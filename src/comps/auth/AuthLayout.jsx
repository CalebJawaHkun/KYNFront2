import LeftCard from "./LEFT/Left";
import RightCard from "./RIGHT/Right";
import useAuthLayout from "./useAuthLayout";

export default function AuthLayout({ mode = "signin" }) {

  const authlayoutHook = useAuthLayout(mode)

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50 via-white to-white dark:from-slate-950 dark:via-slate-950 dark:to-slate-900"> 
      {/* Background Effects */}

      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-emerald-300/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-sky-300/20 blur-3xl" />

      <div className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-16 px-6 py-10 lg:grid-cols-2">  
        {/* LEFT */}
        <LeftCard/>
        {/* RIGHT */}
        <RightCard authlayoutHook={authlayoutHook}/>
      </div>  
    </section>
  )
}