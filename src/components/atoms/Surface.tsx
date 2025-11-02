interface Props extends React.ComponentPropsWithoutRef<"div"> {}

export function Surface({ className, children, ...rest }: Props) {
  return (
    <div
      className={`transition shadow-md rounded-lg border-foreground-dim border dark:border-transparent dark:shadow-none bg-blur ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
}
