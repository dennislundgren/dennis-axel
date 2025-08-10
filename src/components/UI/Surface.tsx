interface Props {
  className?: string;
  children: React.ReactNode;
}

export default function Surface({ className, children }: Props) {
  return (
    <div
      className={`transition shadow-lg rounded-lg border-foreground-dim border dark:border-transparent dark:shadow-none bg-blur ${className}`}
    >
      {children}
    </div>
  );
}
