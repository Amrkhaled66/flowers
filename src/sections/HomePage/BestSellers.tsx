import SectionTitle from "src/components/ui/SectionTitle";
import Button from "src/components/ui/Button";
import Products from "src/components/HomePage/BestSellers/Products";
const BestSellers = () => {
  return (
    <section className="font-main container text-center">
      <div className="space-y-10 py-[40px]">
        <div className="space-y-4">
          <SectionTitle title="Best Sellers" />
          <Button
            text="Choose Gifts Now"
            className="bg-main-100 mx-auto w-fit !py-2.5 !text-base"
          />
        </div>
        <Products />
      </div>
    </section>
  );
};

export default BestSellers;
