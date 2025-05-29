export default function ClientInfo() {
  const customer = {
    recipientName: "Amr",
    address: "102, San-Fransico, CA, USA",
    invoiceNumber: "INV-2023786123",
    invoiceDate: "03/07/2023",
  };
  return (
    <div className="mt-8 grid grid-cols-2 items-center">
      <div>
        <p className="font-bold text-gray-800">Bill to :</p>
        <p className="text-gray-500">
          {customer.recipientName}
          <br />
          {customer.address}
        </p>
      </div>
      <div className="text-right">
        <p>
          Invoice number: <span className="text-gray-500">{customer.invoiceNumber}</span>
        </p>
        <p>
          Invoice date: <span className="text-gray-500">{customer.invoiceDate}</span>
        </p>
      </div>
    </div>
  );
}
