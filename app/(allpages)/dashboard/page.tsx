import CardTotal from "@/components/Dashboard/CardTotal";
import BarChartitems from "@/components/Dashboard/BarChartitems";
import { Card, CardContent } from "@/components/ui/card";
import DataTableitems from "@/components/Dashboard/DataTableitems";
const dashboard = () => {
  const totallist = [
    { name: "Total Revenue", Total: 100000, type: "income" },
    { name: "Total Expenses", Total: 50000, type: "expense" },
    { name: "Total Remaining", Total: 50000, type: "sum" },
  ];

  return (
    <>
      <div className="grid grid-cols-3 gap-4">
        {totallist.map((item) => (
          <CardTotal
            key={item.name}
            name={item.name}
            Total={item.Total}
            type={item.type}
          />
        ))}
      </div>

      <div className="grid grid-cols-2 gap-4 mt-5">
        <Card>
          <CardContent>
            {/* แสดงกราฟรายรับ-รายจ่าย */}
            <BarChartitems />
          </CardContent>
        </Card>

         <Card>
          <CardContent >
            {/* DataTable แสดงรายรับ-รายจ่าย ทั้งหมด */}
            <h2 className="mb-4 text-lg font-semibold" >DataTable แสดงรายรับ-รายจ่าย ทั้งหมด</h2>
            <DataTableitems />
          </CardContent>
        </Card>
      </div>
    </>
  );
};
export default dashboard;


