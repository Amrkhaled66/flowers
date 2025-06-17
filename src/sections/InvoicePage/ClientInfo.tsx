export default function ClientInfo({ name, address, orderId, createdAt }: { name: string, address: string, orderId: number | undefined, createdAt: string }) {

  return (
    <div className="mt-8 grid grid-cols-2 items-center">
      <div>
        <p className="font-bold text-gray-800">Bill to :</p>
        <p className="text-gray-500">
          {name}
          <br />
          {address}
        </p>
      </div>
      <div className="text-right">
        <p>
          Invoice number: <span className="text-gray-500">{orderId}</span>
        </p>
        <p>
          Invoice date: <span className="text-gray-500">{createdAt}</span>
        </p>
      </div>
    </div>
  );
}
