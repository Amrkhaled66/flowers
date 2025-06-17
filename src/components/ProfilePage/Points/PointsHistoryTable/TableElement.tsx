import { Link } from "react-router-dom";

const TableElement = ({
  data,
  points,
  orderId,
  type,
  expireDate
}: {
  data: string;
  points: string;
  orderId: string;
  type: string,
  expireDate: string
}) => {
  return (
    <tr className="animate  cursor-pointer grid grid-cols-5 px-6 py-4 hover:bg-gray-100">
      <td className=" text-start">{data}</td>
      <td className=" text-center">{points}</td>
      <td className=" text-center">{expireDate
      }</td>
      <td className="text-center">{type}</td>
      <td className=" text-center underline">
        <Link to={`/track-order/${orderId}`} >
          {orderId}
        </Link>
      </td>
    </tr >
  );
};

export default TableElement;