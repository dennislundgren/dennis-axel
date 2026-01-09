import Logo from "@/components/organisms/Logo";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 p-4 lg:p-8 flex items-center w-screen">
      <Logo />
    </header>
  );
}
