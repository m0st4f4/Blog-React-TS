import "./App.css";
import {Route, Routes} from "react-router";
import {RootLayout} from "@/layouts/RootLayout/RootLayout.tsx";
import {HomePage} from "@/pages/HomePage/HomePage.tsx";

function App() {

    return (
        <Routes>
            <Route element={<RootLayout/>}>
                <Route index element={<HomePage/>}/>
            </Route>
        </Routes>
    );
}

export default App;
