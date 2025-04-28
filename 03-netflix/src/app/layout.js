import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import AuthContextProvider from "@/context/AuthContext";
import Navbar from "@/components/Navbar";

// burası approuter gibi rotaları yönetiyor
export const metadata = {
  title: "Netflix",
  description: "A movie platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthContextProvider>
          <Navbar />
          {children}
          <ToastContainer />
        </AuthContextProvider>
      </body>
    </html>
  );
}
