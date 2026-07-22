export default function Stat({ title, value }) {
  return (
    <div className="rounded-2xl bg-white p-5 shadow-lg dark:bg-slate-900">
      <p className="text-sm text-slate-500">
        {title}
      </p>

      <h3 className="mt-1 font-bold text-slate-900 dark:text-white">
        {value}
      </h3>
    </div>
  );
}