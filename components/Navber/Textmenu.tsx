import Link from "next/link";

type TextMenuLink = {
  name: string;
  href: string;
};

const Textmenu = ({ link }: { link: TextMenuLink }) => {
  return (
    <Link
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-white mx-4 font-semibold"
              >
                {link.name}
              </Link>
  )
}
export default Textmenu