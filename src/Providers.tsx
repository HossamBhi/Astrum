import { ThemeProvider } from "@material-tailwind/react";
import { ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider>
      <BrowserRouter>{children}</BrowserRouter>
    </ThemeProvider>
  );
};
export default Providers;
