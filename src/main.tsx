import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { BrowserRouter } from "react-router";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { DirectionProvider } from "@/components/ui/direction.tsx";

import App from "./App.tsx";
import "./i18n";

import "./index.css";
import "./styles/colors.css";
import "./styles/shadows.css";
import "./styles/shapes.css";
import "./styles/typography.css";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 50000,
      gcTime: 100000,
      refetchOnWindowFocus: true,
      refetchOnMount: true,
      refetchOnReconnect: true,
      retry: 3,
    },
    mutations: {
      retry: 3,
    },
  },
});
// TypeScript only:
declare global {
  interface Window {
    __TANSTACK_QUERY_CLIENT__: import("@tanstack/query-core").QueryClient;
  }
}
window.__TANSTACK_QUERY_CLIENT__ = queryClient;

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <DirectionProvider dir="ltr">
        <QueryClientProvider client={queryClient}>
          <App />
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </DirectionProvider>
    </BrowserRouter>
  </StrictMode>,
);
