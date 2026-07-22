export default function Input({ label, error, touched, ...props }) {
  const showError = !!error && !!touched;

  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
        {label}
      </label>

      <div className="relative">
        <input
          {...props}
          aria-invalid={showError}
          aria-errormessage={showError ? `${props.name}-error` : undefined}
          className={`
            w-full
            rounded-xl
            border
            bg-white
            px-4
            py-3
            outline-none
            transition
            focus:ring-4
            ${showError ? "border-red-400 focus:ring-red-200" : "border-slate-300 focus:border-emerald-500 focus:ring-emerald-500/10"}
            dark:border-slate-700
            dark:bg-slate-950
            dark:text-white
          `}
        />

        {/* inline icon */}
        <div className="absolute right-3 top-1/2 -translate-y-1/2">
          {showError ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-red-500">
              <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" stroke="currentColor" strokeWidth="0" fill="currentColor"/>
              <path d="M12 9v4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="12" cy="17" r="1" fill="#fff" />
            </svg>
          ) : props.value ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-emerald-500">
              <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </svg>
          ) : null}
        </div>
      </div>

      {showError && (
        <p id={`${props.name}-error`} className="mt-1 text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}