import "./App.css";
import Block from "./Components/Blog_section/block";
import Catagory from "./Components/Category_section/category";
import CategoryList from "./Components/Category_section/category_list";
import Footer from "./Components/Footer_section/footer";
import Header from "./Components/Header/header";
import Letest from "./Components/latest_section/latest";
import Main from "./Components/Main_section/main";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductDetail from "./Components/modal_section/modal";
import Modal from "./Components/modal_section/modal";
import { products } from "./Components/data/product";
import CollectionImg from "./Components/Category_section/img";

function App() {
  return (
    <Router>
      <div className="App">
        <div>
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Main />
                  <Catagory />
                  <Block />
                </>
              }
            />

            <Route path="/categoryList" element={<CategoryList />} />

            <Route path="/letest" element={<CategoryList />} />
            <Route path={"/product/:id"} element={<Modal />} />

            {/* path={`/product/${products.category}/${products.name}`} */}
          </Routes>

          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
