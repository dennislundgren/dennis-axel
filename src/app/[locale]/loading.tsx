import { Body } from "@/components/atoms/Texts";
import { Card } from "@/components/molecules/Card";

export default function Loading() {
  return (
    <div className="flex min-h-full-dynamic items-center justify-center">
      <Card>
        <Body>Loading...</Body>
      </Card>
    </div>
  );
}
