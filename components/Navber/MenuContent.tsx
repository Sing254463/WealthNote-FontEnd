import Link from "next/link"
import { DropdownMenuGroup, DropdownMenuItem } from "../ui/dropdown-menu"

const MenuContent = ( {link}: {link: {name: string, href: string}[]} ) => {
  return (
    <DropdownMenuGroup>
                  {link.map((item) => (
                    <DropdownMenuItem key={item.name}>
                      <Link href={item.href}>{item.name}</Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuGroup>
  )
}
export default MenuContent