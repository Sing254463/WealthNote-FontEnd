"use client";
import { TableCell, TableRow } from "../ui/table"
import Dataitems from "./Dataitems";

const TableBody = () => {
  return (
    <>
      {Dataitems.map((item, index) => (
    <TableRow key={index} >
           <TableCell> {item.name}</TableCell>
           <TableCell className={`text-center ${item.type === "income" ? "text-green-500" :  "text-red-500"}`}>{item.amount}</TableCell>
           <TableCell>{item.day}</TableCell>
            <TableCell>{item.type}</TableCell>
    </TableRow>
      ))}
           </>
  )
}
export default TableBody