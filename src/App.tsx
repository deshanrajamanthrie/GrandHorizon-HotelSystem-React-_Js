import {Fragment} from "react";
import TopHeader from "./components/layout/headers/topHeader.tsx";
import BottomHeader from "./components/layout/headers/bottomHeader.tsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./views/home.tsx";
import Destination from "./views/destination.tsx";
import Experince from "./views/experince.tsx";
import Offers from "./views/offers.tsx";
import Footer from "./components/layout/footer/footer.tsx";



function App() {
    return (
        <Fragment>
            <BrowserRouter>
                <TopHeader/>
                <BottomHeader/>
                <Routes>
                    <Route path={'/'} element={<Home/>}></Route>
                    <Route path={'/destination'} element={<Destination/>}></Route>
                    <Route path={'/offers'} element={<Offers/>}></Route>
                    <Route path={'/experience'} element={<Experince/>}></Route>
                </Routes>
                <Footer/>

            </BrowserRouter>
        </Fragment>
    )
}

export default App
