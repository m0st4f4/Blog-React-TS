import { Route, Routes } from "react-router";

import { RootLayout } from "@/layouts/RootLayout/RootLayout.tsx";
import { SidebarLayout } from "@/layouts/SidebarLayout/SidebarLayout.tsx";

import { AboutPage } from "@/pages/AboutPage/AboutPage.tsx";
import { ArticlePage } from "@/pages/ArticlePage/ArticlePage.tsx";
import { CategoryPage } from "@/pages/CategoryPage/CategoryPage.tsx";
import { ContactPage } from "@/pages/ContactPage/ContactPage.tsx";
import { HomePage } from "@/pages/HomePage/HomePage.tsx";
import { NotFoundPage } from "@/pages/NotFoundPage/NotFoundPage.tsx";
import { SearchPage } from "@/pages/SearchPage/SearchPage.tsx";

function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="aboutus" element={<AboutPage />} />
        <Route path="contactus" element={<ContactPage />} />
        <Route path="article" element={<SidebarLayout />}>
          <Route path=":id" element={<ArticlePage />} />
        </Route>
        <Route path="category" element={<SidebarLayout />}>
          <Route path=":id" element={<CategoryPage />} />
        </Route>
        <Route path="search" element={<SidebarLayout />}>
          <Route path=":query?" element={<SearchPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
