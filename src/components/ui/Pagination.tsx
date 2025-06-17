import ReactPaginate from "react-paginate";

const Pagination = ({
  pageCount,
  handlePageClick,
  forcePage
}: {
  pageCount: number;
  handlePageClick: ({ selected }: { selected: number }) => void;
  forcePage?: number
}) => {

  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="Next"
      onPageChange={handlePageClick}
      pageRangeDisplayed={5}
      pageCount={Math.ceil(pageCount)}
      forcePage={forcePage}
      previousLabel="Prev"
      renderOnZeroPageCount={null}
      marginPagesDisplayed={2}
      // Tailwind classes
      containerClassName="flex justify-center mt-8 space-x-2"
      pageClassName="flex items-center justify-center w-10 h-10 text-sm cursor-pointer rounded-md animate  border border-gray-300 hover:bg-gray-100"
      pageLinkClassName="w-full h-full flex items-center justify-center"
      activeClassName="text-white hover:!bg-main bg-main "
      previousClassName="flex animate items-center cursor-pointer justify-center px-4 h-10 rounded border border-gray-300 hover:bg-gray-100"
      nextClassName="flex cursor-pointer animate items-center justify-center px-4 rounded border border-gray-300 hover:bg-gray-100"
      disabledClassName="opacity-50 !cursor-not-allowed"
      breakClassName="flex items-end pb-1 px-2"
    />
  );
};

export default Pagination;
