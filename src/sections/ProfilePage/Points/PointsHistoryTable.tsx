import Pagination from "src/components/ui/Pagination";
import TableElement from "src/components/ProfilePage/Points/PointsHistoryTable/TableElement";
import Skeleton from "react-loading-skeleton";
import ProfilePageCompetent from "src/components/ProfilePage/ProfilePageCompetent";

import { useTranslation } from "react-i18next";

const PointsHistoryTable = () => {
  const { t } = useTranslation("profile");

  const items = Array.from({ length: 6 }, (_, i) => ({
    date: `2023-10-${i + 1}`,
    points: `${(i + 1) * 10} ${t("points.point")}`,
    orderId: `Order-${i + 1}`,
  }));

  const pageCount = Math.ceil(items.length / 10);

  const handlePaginate = ({ selected }: { selected: number }) => {
    // fetch data from the backend with the selected page number
  };

  const isLoading = false;
  const isEmpty = 0;
  return (
    <ProfilePageCompetent>
      <div className="space-y-6 rounded-2xl">
        <h2 className="text-main text-2xl font-bold">{t("points.history")}</h2>

        <div className="overflow-hidden rounded-2xl bg-white text-sm shadow-sm lg:text-base">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-main-100">
                <tr className="flex justify-between px-6 py-4">
                  <th
                    scope="col"
                    className="w-1/3 text-start font-semibold text-gray-700"
                  >
                    {t("points.date")}
                  </th>
                  <th
                    scope="col"
                    className="w-1/3 text-center font-semibold text-gray-700"
                  >
                    {t("points.points")}
                  </th>
                  <th
                    scope="col"
                    className="w-1/3 text-center font-semibold text-gray-700"
                  >
                    {t("points.orderId")}
                  </th>
                </tr>
              </thead>

              <tbody>
                {1 ? (
                  Array.from({ length: 2 }).map((_, index) => (
                    <tr
                      key={`skeleton-${index}`}
                      className=""
                    >
                      <td className="px-4 py-2">
                        <Skeleton  className="h-12 opacity-80 rounded-xl w-full" />
                      </td>
                    </tr>
                  ))
                ) : isEmpty ? (
                  <tr className="animate-pulse bg-white">
                    <td
                      colSpan={3}
                      className="px-6 py-8 text-center text-gray-500"
                    >
                      {t("points.empty")}
                    </td>
                  </tr>
                ) : (
                  items.map((item, index) => (
                    <TableElement
                      key={`${item.orderId}-${index}`}
                      data={item.date}
                      points={item.points}
                      orderId={item.orderId}
                    />
                  ))
                )}
              </tbody>
            </table>
          </div>

          {!isEmpty && !isLoading && (
            <div className="flex justify-end border-t border-gray-200 px-4 py-3">
              <Pagination
                pageCount={pageCount}
                handlePageClick={handlePaginate}
              />
            </div>
          )}
        </div>
      </div>
    </ProfilePageCompetent>
  );
};

export default PointsHistoryTable;
