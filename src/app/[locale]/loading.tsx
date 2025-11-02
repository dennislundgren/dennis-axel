import { Card, Loader } from "@/components/molecules";

export default function Loading() {
  return (
    <div className="flex min-h-full-dynamic items-center justify-center">
      <Card>
        <Loader />
      </Card>
    </div>
  );
}
