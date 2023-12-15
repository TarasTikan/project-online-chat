import { Link, Outlet } from "react-router-dom"
import { BasketSection, ItemFunction, ListFunction } from "./SideBar.styled"

export const SideBar = () => {
    return (
      <BasketSection>
        <div>
          <div>foto</div>
          <ListFunction>
            <ItemFunction>
              <Link to="/">чат</Link>
            </ItemFunction>
            <ItemFunction>
              <Link>поиск</Link>
            </ItemFunction>
          </ListFunction>
          <ul>
            <li>
              <p>настр</p>
              <p>виход</p>
            </li>
          </ul>
        </div> 
        <Outlet />
      </BasketSection>
    );
}