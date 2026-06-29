import { Route, Routes } from "react-router";

import { RootLayout } from "@/layouts/RootLayout/RootLayout.tsx";
import { SidebarLayout } from "@/layouts/SidebarLayout/SidebarLayout.tsx";

import { ArticlePage } from "@/pages/ArticlePage/ArticlePage.tsx";
import { CategoryPage } from "@/pages/CategoryPage/CategoryPage.tsx";
import { HomePage } from "@/pages/HomePage/HomePage.tsx";
import { NotFoundPage } from "@/pages/NotFoundPage/NotFoundPage.tsx";

function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="article" element={<SidebarLayout />}>
          <Route path=":id" element={<ArticlePage />} />
        </Route>
        <Route path="category" element={<SidebarLayout />}>
          <Route path=":id" element={<CategoryPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
