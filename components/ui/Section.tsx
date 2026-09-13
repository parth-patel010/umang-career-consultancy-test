export function Section({
  children,
  className = "",
  mist = false,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  mist?: boolean;
  id?: string;
}) {
  return (
    <section id={id} className={`section ${mist ? "bg-mist" : ""} ${className}`}>
      <div className="container-page">{children}</div>
    </section>
  );
}
