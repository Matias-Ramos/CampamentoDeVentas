// Interface
import { Card_T } from "./cardList"
// Styles
import { IconContext } from "react-icons";
const iconStyle = "ms-auto me-auto";
const cardStyle = `
  h-100
  w-100
  d-flex
  flex-row
  justify-content-center
  align-items-center
  text-center
  p-3
  gap-3
  bg-light
  lightBlueBorder`;

const Card = ({ icon, hightlight, description, color }: Card_T) => (
    <div className={cardStyle}>

      <div className={iconStyle}>
        <IconContext.Provider value={{ size: "2.5rem", color: color  }}>
          {icon}
        </IconContext.Provider>
      </div>

      <span>
        <b>{hightlight}</b>{description}
      </span>

    </div>

)
export default Card