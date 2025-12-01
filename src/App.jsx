import { RouterProvider } from "react-router";
import { router } from "./router";
import { RootLayout } from "./views/layouts/RootLayout";

function App() {
  return (
    <>
      <RootLayout>
        <RouterProvider router={router} />
      </RootLayout>
    </>
  );
}

export default App;
