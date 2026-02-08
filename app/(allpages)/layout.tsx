
import Navber from "@/components/Navber/Navber";

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <Navber />
      <main className="container mx-auto p-4">
      {children}
      </main>
    </>
  );
};
export default RootLayout;
