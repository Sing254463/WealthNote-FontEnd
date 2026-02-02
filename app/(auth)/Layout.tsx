import Navber from "@/components/Navber/Navber";

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <Navber />
      {children}
    </>
  );
};
export default RootLayout;
