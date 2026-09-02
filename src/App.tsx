import { Route, Routes } from "react-router";

import { UnauthorizedPage } from "@/UnauthorizedPage/UnauthorizedPage.tsx";

import { ProtectedRoute } from "@/components/ProtectedRoute/ProtectedRoute.tsx";

import { RootLayout } from "@/layouts/RootLayout/RootLayout.tsx";
import { SidebarLayout } from "@/layouts/SidebarLayout/SidebarLayout.tsx";

import { AboutPage } from "@/pages/AboutPage/AboutPage.tsx";
import { AdminPage } from "@/pages/AdminPage/AdminPage.tsx";
import { ArticlePage } from "@/pages/ArticlePage/ArticlePage.tsx";
import { CategoryPage } from "@/pages/CategoryPage/CategoryPage.tsx";
import { ContactPage } from "@/pages/ContactPage/ContactPage.tsx";
import { HomePage } from "@/pages/HomePage/HomePage.tsx";
import { LoginPage } from "@/pages/LoginPage/LoginPage.tsx";
import { NotFoundPage } from "@/pages/NotFoundPage/NotFoundPage.tsx";
import { ProfilePage } from "@/pages/ProfilePage.tsx/ProfilePage.tsx";
import { RegisterPage } from "@/pages/RegisterPage/RegisterPage.tsx";
import { SearchPage } from "@/pages/SearchPage/SearchPage.tsx";

function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="aboutus" element={<AboutPage />} />
        <Route path="contactus" element={<ContactPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="unauthorized" element={<UnauthorizedPage />} />
        <Route path="article" element={<SidebarLayout />}>
          <Route path=":id" element={<ArticlePage />} />
        </Route>
        <Route path="category" element={<SidebarLayout />}>
          <Route path=":id" element={<CategoryPage />} />
        </Route>
        <Route path="search" element={<SidebarLayout />}>
          <Route path=":query?" element={<SearchPage />} />
        </Route>

        <Route element={<ProtectedRoute />}>
          <Route path="profile" element={<ProfilePage />} />
        </Route>

        <Route element={<ProtectedRoute allowedRoles={["admin"]} />}>
          <Route path="admin" element={<AdminPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
