import Detail from "./detail/Detail"
import RelevantData from "./relevantData/RelevantData"
import Products from "./products/Products"
import Purpose from "./purpose/Purpose"
import TestimonialsCdv from "./testimonials/TestimonialsCdv"

const Cdv = () => (
  <main>
    <div id="firstBackground">
      <Purpose />
      <Detail />
    </div>
    <RelevantData />
    <Products />
    <TestimonialsCdv />
  </main>
)
export default Cdv