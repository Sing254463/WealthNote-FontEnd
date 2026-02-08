type CardTotalProps = {
  name: string;
  Total: number;
  type: string;
};

const CardTotal = ({ name, Total, type }: CardTotalProps) => {
  return (
    <div className={` 
    ${type === "income" ? "bg-blue-500" : type === "expense" ? "bg-red-500" : "bg-green-500"} 
    shadow-lg rounded-lg p-6 w-full text-white `}>
      <h2 className="text-2xl text-center font-semibold mb-4 text-white ">
        {name}
      </h2>
      <h1 className="text-3xl text-center  font-semibold">{Total}</h1>
    </div>
  );
};
export default CardTotal;
