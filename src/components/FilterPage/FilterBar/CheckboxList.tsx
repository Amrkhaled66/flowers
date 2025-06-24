import { getLocalizedName } from "src/utils/getLocalizedName";
import { useTranslation } from "react-i18next";
type CheckboxListProps = {
  items: any[];
  onOptionChange: (key: string, value: number) => void;
  field: string;
  selectedValues?: number[];
};

const CheckboxList = ({
  onOptionChange,
  items,
  field,
  selectedValues = [],
}: CheckboxListProps) => {
  const {
    i18n: { language },
  } = useTranslation();
  return (
    <div className="flex flex-wrap gap-x-2 gap-y-4">
      {items.map((item, index) => {
        const isActive = selectedValues.includes(item.id);
        return (
          <button
            key={index}
            onClick={() => onOptionChange(field, item.id)}
            className={`border-main text-main animate inline-flex items-center justify-between rounded-xl border px-2 py-1 ${isActive && "bg-main text-white"}`}
          >
            {getLocalizedName(item, language)}
          </button>
        );
      })}
    </div>
  );
};
// const CheckboxList = ({
//   onOptionChange,
//   items,
//   field,
//   selectedValues = [],
// }: CheckboxListProps) => {
//   const {
//     i18n: { language },
//   } = useTranslation();
//   return (
//     <div className="flex flex-col gap-y-4">
//       {items.map((item, index) => {
//         return (
//           <div key={index} className="inline-flex items-center justify-between">
//             <span className="font-semibold">
//               {getLocalizedName(item, language)}
//             </span>
//             <label className="relative flex cursor-pointer items-center">
//               <input
//                 checked={selectedValues.includes(item.id)}
//                 onChange={() => onOptionChange(field, item.id)}
//                 type="checkbox"
//                 className="peer checked:border-main checked:bg-main border-main h-5 w-5 cursor-pointer appearance-none rounded-sm border shadow transition-all hover:shadow-md"
//               />
//               <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform text-white opacity-0 peer-checked:opacity-100">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-3.5 w-3.5"
//                   viewBox="0 0 20 20"
//                   fill="currentColor"
//                   stroke="currentColor"
//                   strokeWidth="1"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
//                     clipRule="evenodd"
//                   ></path>
//                 </svg>
//               </span>
//             </label>
//           </div>
//         );
//       })}
//     </div>
//   );
// };
export default CheckboxList;
