import priceFormatter from "src/utils/priceFormatter";

export default function InvoiceTable() {
  return (
    <div className="-mx-4 mt-8 flow-root sm:mx-0">
      <table className="min-w-full">
        <colgroup>
          <col className="w-full sm:w-1/2" />
          <col className="sm:w-1/6" />
          <col className="sm:w-1/6" />
          <col className="sm:w-1/6" />
        </colgroup>
        <thead className="border-b border-gray-300 text-gray-900">
          <tr>
            <th className="py-3.5 pr-3 pl-4 text-left text-sm font-semibold text-gray-900 sm:pl-0">
              Items
            </th>
            <th className="hidden px-3 py-3.5 text-right text-sm font-semibold sm:table-cell">
              Quantity
            </th>
            <th className="hidden px-3 py-3.5 text-right text-sm font-semibold sm:table-cell">
              Price
            </th>
            <th className="py-3.5 pr-4 pl-3 text-right text-sm font-semibold sm:pr-0">
              Amount
            </th>
          </tr>
        </thead>
        <tbody>
          {[
            {
              name: "Ballora Flowers",
              qty: "4",
              price: "100",
              amount: "300",
            },
            {
              name: "Ballora Flowers",
              qty: "2",
              price: "100",
              amount: "300",
            },
            {
              name: "Ballora Flowers",
              qty: "3",
              price: "100",
              amount: "300",
            },
          ].map((item, idx) => (
            <tr key={idx} className="border-b border-gray-200">
              <td className="max-w-0 py-5 pr-3 pl-4 text-sm sm:pl-0">
                <div className="font-medium text-gray-900">{item.name}</div>
              </td>
              <td className="hidden px-3 py-5 text-right text-sm text-gray-500 sm:table-cell">
                {item.qty}
              </td>
              <td className="hidden px-3 py-5 text-right text-sm text-gray-500 sm:table-cell">
                {priceFormatter(item.price)}
              </td>
              <td className="py-5 pr-4 pl-3 text-right text-sm text-gray-500 sm:pr-0">
                {priceFormatter(item.amount)}
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th
              colSpan={3}
              className="hidden pt-6 pr-3 pl-4 text-right text-sm font-normal text-gray-500 sm:table-cell sm:pl-0"
            >
              Subtotal
            </th>
            <th className="pt-6 pr-3 pl-6 text-left text-sm font-normal text-gray-500 sm:hidden">
              Subtotal
            </th>
            <td className="pt-6 pr-6 pl-3 text-right text-sm text-gray-500 sm:pr-0">
              {priceFormatter(300)}
            </td>
          </tr>
          
            <tr>
            <th
              colSpan={3}
              className="hidden pt-6 pr-3 pl-4 text-right text-sm font-normal text-gray-500 sm:table-cell sm:pl-0"
            >
              Shipping Fees
            </th>
            <th className="pt-6 pr-3 pl-6 text-left text-sm font-normal text-gray-500 sm:hidden">
              Shipping Fees
            </th>
            <td className="pt-6 pr-6 pl-3 text-right text-sm text-gray-500 sm:pr-0">
              {priceFormatter(300)}
            </td>
          </tr>
          <tr>
            <th
              colSpan={3}
              className="hidden pt-4 pr-3 pl-4 text-right text-sm font-semibold text-gray-900 sm:table-cell sm:pl-0"
            >
              Total
            </th>
            <th className="pt-4 pr-3 pl-6 text-left text-sm font-semibold text-gray-900 sm:hidden">
              Total
            </th>
            <td className="pt-4 pr-4 pl-3 text-right text-sm font-semibold text-gray-900 sm:pr-0">
              {priceFormatter(5000)}
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
