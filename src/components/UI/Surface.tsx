/** _server component_ */
export default function Surface({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`transition-colors shadow-lg rounded-lg border-foreground-dim border dark:border-transparent dark:shadow-none bg-blur ${className}`}
    >
      {children}
    </div>
  );
}
