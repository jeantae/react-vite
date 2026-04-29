import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      {/* 1. 공통 레이아웃을 부모로 설정 */}
      <Route path="/" element={<MainLayout />}>
        {/* 2. 각 상세 페이지들 */}
        <Route index element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route path="projects/:projectId" element={<ProjectDetail />} />
        <Route path="contact" element={<Contact />} />
      </Route>

      {/* 3. 404 페이지 (레이아웃 제외하고 싶을 때 밖에 배치) */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
