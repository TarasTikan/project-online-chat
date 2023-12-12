import { Link } from "react-router-dom"
import { BasketSection } from "./SideBar.styled"

export const SideBar = () => {
    return (
      <BasketSection>
        <div>foto</div>
        <ul>
          <li>
            <Link>чат</Link>
            <Link>поиск</Link>
          </li>
        </ul>
        <ul>
          <li>
            <p>настр</p>
            <p>виход</p>
          </li>
        </ul>
      </BasketSection>
    );
}