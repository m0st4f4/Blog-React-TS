import { Route, Routes } from "react-router";

import { RootLayout } from "@/layouts/RootLayout/RootLayout.tsx";

import { ArticlePage } from "@/pages/ArticlePage/ArticlePage.tsx";
import { CategoryPage } from "@/pages/CategoryPage/CategoryPage.tsx";
import { HomePage } from "@/pages/HomePage/HomePage.tsx";
import { NotFoundPage } from "@/pages/NotFoundPage/NotFoundPage.tsx";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="article/:id" element={<ArticlePage />} />
        <Route path="category/:id" element={<CategoryPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
