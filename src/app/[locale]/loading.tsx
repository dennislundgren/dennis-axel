import Card from "@/components/ui/Card";
import { Body } from "@/components/ui/Texts";

export default function Loading() {
  return (
    <div className="flex min-h-full-dynamic items-center justify-center">
      <Card>
        <Body>Loading...</Body>
      </Card>
    </div>
  );
}
