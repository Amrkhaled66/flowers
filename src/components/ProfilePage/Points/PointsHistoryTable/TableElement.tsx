const TableElement = ({
  data,
  points,
  orderId,
}: {
  data: string;
  points: string;
  orderId: string;
}) => {
  return (
    <tr className="animate flex cursor-pointer justify-between px-6 py-4 hover:bg-gray-100">
      <td className="w-1/3 text-start">{data}</td>
      <td className="w-1/3 text-center">{points}</td>
      <td className="w-1/3 text-center underline">{orderId}</td>
    </tr>
  );
};

export default TableElement;