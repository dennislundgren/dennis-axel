import CurrentlyPlaying from "@/components/CurrentlyPlaying";
import Card from "@/components/UI/Card";
import Body from "@/components/UI/typography/Body";

export default function Home() {
  return (
    <main className="flex min-h-full-dynamic flex-col items-center justify-center p-4 lg:p-24 gap-8">
      <Card>
        <Body>Hej,</Body>
        <Body>
          Mitt namn är Dennis Axel Lundgren. Jag är en kreatör, född och uppväxt
          i Stockholm. Just nu arbetar jag som frontend-utvecklare på{" "}
          <a
            href="https://perific.com"
            className="hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Perific Technologies AB
          </a>
          .
        </Body>
        <Body>
          Jag drivs av avsiktligt skapandet för intuitiv interaktivitet.
        </Body>
      </Card>
      <CurrentlyPlaying />
    </main>
  );
}
