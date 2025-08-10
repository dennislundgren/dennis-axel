import Surface from "@/components/UI/Surface";

interface Props {
  children: React.ReactNode;
}

export default function SmallCard({ children }: Props) {
  return (
    <Surface>
      <div className="max-w-md px-2 py-1 flex flex-col gap-4">{children}</div>
    </Surface>
  );
}
