import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "pages/home";
import Movies from "./pages/movies";
import Series from "pages/series";
import { AnimatePresence } from "framer-motion";
import MovieCategory from "pages/movieCategory";
import Search from "pages/search";
import MovieData from "pages/movie";
import TvData from "pages/tv";
import SearchData from "pages/searchData";
import NotFound from "pages/404";
function App() {
  return (
    <AnimatePresence
      exitBeforeEnter
      initial={false}
      onExitComplete={() => window.scrollTo(0, 0)}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/movies" element={<Movies />}></Route>
          <Route path="/series" element={<Series />}></Route>
          <Route path="/search" element={<Search />}></Route>
          <Route path="/movies/:slug" element={<MovieCategory />}></Route>
          <Route path="/series/:slug" element={<MovieCategory />}></Route>
          <Route path="/movie/:id" element={<MovieData />}></Route>
          <Route path="/tv/:id" element={<TvData />}></Route>
          <Route path="/search/:id" element={<SearchData />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
      {/* <Layout>
      Afa
    </Layout> */}
    </AnimatePresence>
  );
}

export default App;
