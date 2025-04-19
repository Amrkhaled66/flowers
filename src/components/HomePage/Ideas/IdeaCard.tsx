const IdeaCard = ({ img, title }: { img: string; title: string }) => {
  return (
    <div
      style={{
        background: `linear-gradient(0deg, rgba(0, 0, 0, 0.15) 0%, rgba(0, 0, 0, 0.15) 100%), url(${img}) lightgray 50% / cover no-repeat`,
      }}
      className="font-main flex items-end rounded-sm p-3 text-white h-[400px] lg:h-[500px]"
    >
      <div className="space-y-3 rounded-sm bg-[#FFFFFF1A] p-4 text-left backdrop-blur-[6px]">
        <p className="font-bold lg:text-[32px]">{title}</p>
        <button className="rounded-sm border border-white bg-transparent px-3 py-2">
          Gift Now
        </button>
      </div>
    </div>
  );
};

export default IdeaCard;
