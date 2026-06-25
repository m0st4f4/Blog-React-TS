import { Route, Routes } from "react-router";

import { RootLayout } from "@/layouts/RootLayout/RootLayout.tsx";

import { ArticlePage } from "@/pages/ArticlePage/ArticlePage.tsx";
import { HomePage } from "@/pages/HomePage/HomePage.tsx";
import { NotFoundPage } from "@/pages/NotFoundPage/NotFoundPage.tsx";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="article/:id" element={<ArticlePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
