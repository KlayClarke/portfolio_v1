import { Routes, Route, BrowserRouter } from "react-router-dom";
import About from "./components/about/About";
import Header from "./components/header/Header";
import "./routeswitch.module.scss";

export default function RouteSwitch() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<About />}></Route>
        </Routes>
      </main>
    </BrowserRouter>
  );
}
