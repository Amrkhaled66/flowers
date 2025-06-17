import { useState } from "react";
import Pagination from "src/components/ui/Pagination";
import TableElement from "src/components/ProfilePage/Points/PointsHistoryTable/TableElement";
import Skeleton from "react-loading-skeleton";
import ProfilePageCompetent from "src/components/ProfilePage/ProfilePageCompetent";
import { useTranslation } from "react-i18next";

const ITEMS_PER_PAGE = 10;

const PointsHistoryTable = ({
  history,
  loading
}: {
  history: {
    expiry_date: string;
    points: string;
    order_id: string;
    created_at: string;
    type: string;
  }[],
  loading?: boolean
}) => {
  const { t } = useTranslation("profile");
  const [currentPage, setCurrentPage] = useState(0);

  const isEmpty = history.length === 0;
  const pageCount = Math.ceil(history.length / ITEMS_PER_PAGE);

  const handlePaginate = ({ selected }: { selected: number }) => {
    setCurrentPage(selected);
  };

  const startIndex = currentPage * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentItems = history.slice(startIndex, endIndex);

  return (
    <ProfilePageCompetent>
      <div className="space-y-6 rounded-2xl">
        <h2 className="text-main textl-xl lg:text-2xl font-bold">{t("points.history")}</h2>

        <div className="overflow-hidden rounded-2xl bg-white text-sm shadow-sm lg:text-base">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-main-100">
                <tr className="grid grid-cols-5 px-6 py-4">
                  <th className="text-start font-semibold text-gray-700">
                    {t("points.date")}
                  </th>
                  <th className="text-center  font-semibold text-gray-700">
                    {t("points.points")}
                  </th>
                  <th className="text-center font-semibold text-gray-700">
                    {t("points.expiryDate")}
                  </th>
                  <th className="text-center font-semibold text-gray-700">
                    {t("points.type")}
                  </th>
                  <th className="text-center font-semibold text-gray-700">
                    {t("points.orderId")}
                  </th>
                </tr>
              </thead>

              <tbody>
                {loading ? (
                  Array.from({ length: 2 }).map((_, index) => (
                    <tr key={`skeleton-${index}`}>
                      <td className="px-4 py-2">
                        <Skeleton className="h-12 opacity-80 rounded-xl w-full" />
                      </td>
                    </tr>
                  ))
                ) : isEmpty ? (
                  <tr className="bg-white">
                    <td colSpan={3} className="px-6 py-8 text-center text-gray-500">
                      {t("points.empty")}
                    </td>
                  </tr>
                ) : (
                  currentItems.map((item) => (
                    <TableElement
                      key={item.order_id}
                      data={item.expiry_date}
                      expireDate={item.expiry_date}
                      points={item.points}
                      orderId={item.order_id}
                      type={item.type}
                    />
                  ))
                )}
              </tbody>
            </table>
          </div>

          {!isEmpty && !loading && (
            <div className="flex justify-end border-t border-gray-200 px-4 py-3">
              <Pagination
                pageCount={pageCount}
                handlePageClick={handlePaginate}
                forcePage={currentPage}
              />
            </div>
          )}
        </div>
      </div>
    </ProfilePageCompetent>
  );
};

export default PointsHistoryTable;
