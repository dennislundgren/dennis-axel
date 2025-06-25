import Content from "@/components/Content";
import CurrentlyPlaying from "@/components/CurrentlyPlaying";

export default function Home() {
  return (
    <main className="flex min-h-full-dynamic flex-col items-center justify-center p-4 lg:p-24 gap-8">
      <Content />
      <CurrentlyPlaying />
    </main>
  );
}
