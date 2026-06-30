export default function ClayCard({ children, className = "" }) {
  return (
    <div
      className={`rounded-3xl bg-white p-6 ${className}`}
      style={{
        boxShadow: "var(--shadow)",
      }}
    >
      {children}
    </div>
  );
}