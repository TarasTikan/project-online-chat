import { Route, Routes } from "react-router-dom";
import { SideBar } from "./SideBar/SideBar";

export const App = () => {
  return (
    <Routes
    >
      <Route path="/" element={<SideBar/>}></Route>
    </Routes>
  );
};
