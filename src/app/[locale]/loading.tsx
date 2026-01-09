import { Card } from "@/components/molecules/Card";
import { Loader } from "@/components/molecules/Loader";

export default function Loading() {
  return (
    <div className="flex min-h-full-dynamic items-center justify-center">
      <Card>
        <Loader />
      </Card>
    </div>
  );
}
