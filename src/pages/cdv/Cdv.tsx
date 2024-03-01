import Detail from "./detail/Detail"
import RelevantData from "./relevantData/RelevantData"
import Products from "./products/Products"
import Purpose from "./purpose/Purpose"
import TestimonialsCdv from "./testimonials/TestimonialsCdv"
import Warranty from "./warranty/Warranty"

const Cdv = () => (
  <main>
    <div id="parallax">
      <Purpose />
    </div>
      <Detail />
    <RelevantData />
    <Products />
    <Warranty />
    <TestimonialsCdv />
  </main>
)
export default Cdv