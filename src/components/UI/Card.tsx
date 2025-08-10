import Surface from "@/components/ui/Surface";

interface Props {
  children: React.ReactNode;
}

export default function Card({ children }: Props) {
  return (
    <Surface>
      <div className="max-w-md p-4 flex flex-col gap-4">{children}</div>
    </Surface>
  );
}
