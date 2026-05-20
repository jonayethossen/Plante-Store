import PlantParentTips from "../components/PlantParentTips";
import PlantSpecs from "../components/PlantSpecs";
import ProductDetails from "../components/ProductDetails";
import ShareYourTips from "../components/ShareYourTips";

export default function Product() {
  return (
    <>
      <ProductDetails />
      <PlantSpecs />
      <PlantParentTips />
      <ShareYourTips />
    </>
  );
}
