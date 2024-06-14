import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>home</div>,
  },
  {
    path: "/about",
    element: <div>about</div>,
  },
  {
    path: "/contact",
    element: <div>contact</div>,
  },
  //   <Route path="/" element={} />,
  //   <Route path="/about" element={<div>about</div>} />,
  //   <Route path="/contact" element={<div>contact</div>} />,
]);

export default router;
