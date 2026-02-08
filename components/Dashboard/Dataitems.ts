type ListiIems = {
    id: number;
    name: string;           // ชื่อรายการ
    amount: number;         // จำนวนเงิน
    day: string;          // วัน
    type: "income" | "expense"; // ประเภทรายรับ / รายจ่าย
  };

    // ข้อมูลรายรับ-รายจ่ายทั้งหมด
const dataitems: ListiIems[] = [
    { id: 1, name: "Salary", amount: 70000, day: "20/01/2024", type: "income" },
    { id: 2, name: "Freelance", amount: 25000, day: "22/01/2024", type: "income" },
    { id: 3, name: "Rent", amount: 20000, day: "25/01/2024", type: "expense" },
    { id: 4, name: "Food", amount: 8500, day: "26/01/2024", type: "expense" },
    { id: 5, name: "Transport", amount: 3200, day: "27/01/2024", type: "expense" },
    { id: 6, name: "Salary", amount: 70000, day: "20/02/2024", type: "income" },
    { id: 7, name: "Freelance", amount: 18000, day: "22/02/2024", type: "income" },
    { id: 8, name: "Rent", amount: 20000, day: "25/02/2024", type: "expense" },
    { id: 9, name: "Food", amount: 9000, day: "26/02/2024", type: "expense" },
    { id: 10, name: "Internet", amount: 1200, day: "27/02/2024", type: "expense" },
    { id: 11, name: "Salary", amount: 70000, day: "20/03/2024", type: "income" },
    { id: 12, name: "Freelance", amount: 22000, day: "22/03/2024", type: "income" },
    { id: 13, name: "Bonus", amount: 15000, day: "23/03/2024", type: "income" },
    { id: 14, name: "Food", amount: 8800, day: "26/03/2024", type: "expense" },
    { id: 15, name: "Shopping", amount: 6400, day: "27/03/2024", type: "expense" },
    { id: 16, name: "Salary", amount: 70000, day: "20/04/2024", type: "income" },
    { id: 17, name: "Freelance", amount: 20000, day: "22/04/2024", type: "income" },
    { id: 18, name: "Rent", amount: 20000, day: "25/04/2024", type: "expense" },
    { id: 19, name: "Food", amount: 9100, day: "26/04/2024", type: "expense" },
    { id: 20, name: "Electricity Bill", amount: 2600, day: "27/04/2024", type: "expense" },
    { id: 21, name: "Salary", amount: 70000, day: "20/05/2024", type: "income" },
    { id: 22, name: "Freelance", amount: 24000, day: "22/05/2024", type: "income" },
    { id: 23, name: "Bonus", amount: 10000, day: "23/05/2024", type: "income" },
    { id: 24, name: "Food", amount: 8900, day: "26/05/2024", type: "expense" },
    { id: 25, name: "Transport", amount: 3500, day: "27/05/2024", type: "expense" },
    { id: 26, name: "Salary", amount: 70000, day: "20/06/2024", type: "income" },
    { id: 27, name: "Freelance", amount: 26000, day: "22/06/2024", type: "income" },
    { id: 28, name: "Rent", amount: 20000, day: "25/06/2024", type: "expense" },
    { id: 29, name: "Food", amount: 9200, day: "26/06/2024", type: "expense" },
    { id: 30, name: "Internet", amount: 1300, day: "27/06/2024", type: "expense" },
];

export default dataitems;
