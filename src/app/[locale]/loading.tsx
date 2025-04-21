import Card from "@/components/UI/Card";
import Body from "@/components/UI/typography/Body";

export default function Loading() {
  console.log("TS: ", Date.now(), " Loading page...");

  return (
    <div className="flex min-h-full-dynamic items-center justify-center">
      <Card>
        <Body>Loading...</Body>
      </Card>
    </div>
  );
}
