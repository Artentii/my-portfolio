export default function SectionLabel({ children }) {
  return (
    <div className="flex justify-center">
      <h3 className="text-purple lg:text-xl bg-white/50 dark:bg-white shadow-section px-10 py-2 border-2 border-purple rounded-full font-normal mb-5">{children}</h3>
    </div>
  );
}
