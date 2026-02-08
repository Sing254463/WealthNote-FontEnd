import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table"
import TableBodyList from "./TableBodyList"

const DataTableitems = () => {
  return (
    <div className="overflow-y-auto max-h-100 border rounded-md">
    <Table>
              <TableHeader className="sticky top-0 bg-white dark:bg-gray-900 z-10">
                <TableRow>
                    <TableHead >Name</TableHead>
                    <TableHead className="text-center">Amount</TableHead>
                    <TableHead >Day</TableHead>
                    <TableHead >Type</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {/* ตัวอย่างข้อมูลในตาราง */}
                  <TableBodyList />
              </TableBody>
        
            </Table>
    </div>
  )
}
export default DataTableitems