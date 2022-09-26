import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../containers/Home";
import Carrito from "../containers/Carrito";
import Producto from "../containers/Producto";
import Layout from "../components/Layout";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>

            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route exact path="/" element={<Home />}></Route>
                        <Route
                            exact
                            path="/Carrito"
                            element={<Carrito />}
                        ></Route>
                        <Route
                            exact
                            path="/Producto"
                            element={<Producto />}
                        ></Route>
                    </Routes>
                </Layout>
            </BrowserRouter>
        </>
    );
}

export default App;
