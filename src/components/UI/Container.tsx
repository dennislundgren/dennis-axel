interface Props {
  children: React.ReactNode;
}

export default function Container({ children }: Props) {
  return (
    <div className="border border-foreground p-2 rounded-lg">{children}</div>
  );
}
