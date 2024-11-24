import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider, useTheme } from "next-themes";
import { Outlet, useNavigate } from "react-router-dom";
import { Toaster } from "sonner";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

type Theme = "dark" | "light" | "system" | undefined;

const App = () => {
  const navigate = useNavigate();
  const { theme } = useTheme();

  return (
    <ThemeProvider>
      <NextUIProvider navigate={navigate}>
        <Navbar />
        <div className="container px-6 md:px-8 py-20 min-h-screen">
          <Outlet />
        </div>
        <Footer />
        <Toaster theme={theme as Theme} />
      </NextUIProvider>
    </ThemeProvider>
  );
};

export default App;
