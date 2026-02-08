// กำหนด type สำหรับลิงก์ย่อย ที่ dropdownmenu เรียกใช้
type SubLink = {
  name: string;
  href: string;
};

// กำหนด type สำหรับ props ของคอมโพเนนต์ Dropdowmenu ที่รับมา
type DropdownMenuProps = {
  name: string;
  dropdownmenu: SubLink[];  // ✅ เป็น array ของ SubLink ที่กำหนดชื่อและ type แล้ว ข้างบน
};

const Dropdowmenu = ({ name, dropdownmenu }: DropdownMenuProps) => {
  return (
    <div key={name} className="relative group mx-4">
                    <button className="text-gray-300 hover:text-white font-semibold">
                      {name}
                    </button>
                    <div className="absolute left-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity z-10">
                      {dropdownmenu.map((sublink) => (
                        <a
                          key={sublink.name}
                          href={sublink.href}
                          className="block px-4 py-2 hover:bg-gray-200"
                        >
                          {sublink.name}
                        </a>
                      ))}
                    </div>
                  </div>
  )
}
export default Dropdowmenu