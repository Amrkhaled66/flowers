import ideasArr from "src/data/ideas";
import IdeaCard from "./IdeaCard";
import Idea from "src/types/Idea";
const IdeasCards = () => {
  return (
    <div className="grid grid-cols-3 lg:gap-x-6">
      {ideasArr.map((idea: Idea) => (
        <IdeaCard img={idea.img} title={idea.title} />
      ))}
    </div>
  );
};

export default IdeasCards;
