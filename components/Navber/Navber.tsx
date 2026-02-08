import Image from "next/image";
import { links, ProfileManu } from "./Links";
import Dropdowmenu from "./Dropdowmenu";
import Textmenu from "./Textmenu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import Link from "next/link";
import MenuContent from "./MenuContent";

const Navber = () => {
  return (
    <>
      <nav className="bg-black border-white border-b-2 px-2 py-2">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/dashboard"
              className="text-white font-bold flex items-center gap-2 text-xl" >
              <Image
                src="/logo6.png"
                alt="WealthNote Logo"
                width={100}
                height={100}
                className="h-12 w-auto"
              />
              <p>WealthNote</p>
            </Link>

            {links.map((link) => {
              if ("dropdownmenu" in link && link.dropdownmenu) {
                return (
                  <Dropdowmenu
                    key={link.name}
                    name={link.name}
                    dropdownmenu={link.dropdownmenu}
                  />
                );
              }
              return <Textmenu key={link.name} link={link} />;
            })}
          </div>
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Avatar>
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="shadcn"
                    />
                    <AvatarFallback>LR</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <MenuContent link={ProfileManu} />
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navber;
