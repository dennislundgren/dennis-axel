import Card from "@/components/UI/Card";
import Body from "@/components/UI/typography/Body";
import { div } from "framer-motion/client";

export default function Loading() {
  return (
    <div className="flex min-h-full-dynamic items-center justify-center">
      <Card>
        <Body>Loading...</Body>
      </Card>
    </div>
  );
}
