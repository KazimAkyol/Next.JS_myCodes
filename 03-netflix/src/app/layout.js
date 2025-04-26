import "./globals.css";
import "react-toastify/dist/ReactToastify.css";


// burası approuter gibi rotaları yönetiyor
export const metadata = {
  title: "Netflix",
  description: "A movie platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        
          {children}
         
      </body>
    </html>
  );
}
