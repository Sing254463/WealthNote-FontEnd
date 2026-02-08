type ListItem = {
  name: string;           // ชื่อรายการ
  amount: number;         // จำนวนเงิน
  month: string;          // เดือน
  type: "income" | "expense"; // ประเภทรายรับ / รายจ่าย
};

// ข้อมูลรายรับ-รายจ่ายทั้งหมด
const listitem: ListItem[] = [
  // ===== July =====
  { name: "Salary", amount: 70000, month: "July", type: "income" }, // เงินเดือน
  { name: "Freelance", amount: 25000, month: "July", type: "income" }, // งานเสริม
  { name: "Rent", amount: 20000, month: "July", type: "expense" }, // ค่าเช่าบ้าน
  { name: "Food", amount: 9000, month: "July", type: "expense" }, // ค่าอาหาร

  // ===== August =====
  { name: "Salary", amount: 70000, month: "August", type: "income" },
  { name: "Freelance", amount: 30000, month: "August", type: "income" },
  { name: "Rent", amount: 20000, month: "August", type: "expense" },
  { name: "Utilities", amount: 3500, month: "August", type: "expense" }, // ค่าน้ำไฟ
  { name: "Food", amount: 8500, month: "August", type: "expense" },

  // ===== September =====
  { name: "Salary", amount: 70000, month: "September", type: "income" },
  { name: "Bonus", amount: 15000, month: "September", type: "income" },
  { name: "Rent", amount: 20000, month: "September", type: "expense" },
  { name: "Food", amount: 8000, month: "September", type: "expense" },
  { name: "Transport", amount: 3000, month: "September", type: "expense" }, // ค่าเดินทาง

  // ===== October =====
  { name: "Salary", amount: 70000, month: "October", type: "income" },
  { name: "Freelance", amount: 20000, month: "October", type: "income" },
  { name: "Rent", amount: 20000, month: "October", type: "expense" },
  { name: "Shopping", amount: 12000, month: "October", type: "expense" }, // ช้อปปิ้ง

  // ===== November =====
  { name: "Salary", amount: 70000, month: "November", type: "income" },
  { name: "Bonus", amount: 10000, month: "November", type: "income" },
  { name: "Rent", amount: 20000, month: "November", type: "expense" },
  { name: "Food", amount: 9000, month: "November", type: "expense" },
  { name: "Internet", amount: 1200, month: "November", type: "expense" }, // ค่าเน็ต

  // ===== December =====
  { name: "Salary", amount: 70000, month: "December", type: "income" },
  { name: "Year End Bonus", amount: 30000, month: "December", type: "income" },
  { name: "Rent", amount: 20000, month: "December", type: "expense" },
  { name: "Gift", amount: 15000, month: "December", type: "expense" }, // ของขวัญปีใหม่
];

export default listitem;