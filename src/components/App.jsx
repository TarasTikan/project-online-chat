import { Route, Routes } from "react-router-dom";
import { SideBar } from "./SideBar/SideBar";
import { ListChat } from "./ListFriends/ListChat";


export const App = () => {
  return (
    <Routes
    >
      <Route path="/" element={<SideBar/>}>
        <Route index element={<ListChat/>}/>
      </Route>
    </Routes>
  );
};
