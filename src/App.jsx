import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Categories from "./pages/Categories";
import Sidebar from "./components/sidebar/Sidebar";
import "./App.css";
import ModelOutput from "./components/data/data";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  // const [cost, setCost] = useState(0);
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60 * 5,
        gcTime: 1000 * 60 * 30, // From React Query version 5, gcTime is used instead of cacheTime
      },
    },
  });

  return (
    <div className="app">
      <Router>
        <QueryClientProvider client={queryClient}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "12px",
              width: "100%",
              height: "90%",
            }}
          >
            <div>{/* <Sidebar /> */}</div>
            <div style={{ width: "100%" }}>
              <Routes>
                <Route path="/" Component={Dashboard} />
                <Route path="/categories" Component={Categories} />
              </Routes>
            </div>
          </div>
        </QueryClientProvider>
      </Router>
    </div>
  );
}

export default App;
