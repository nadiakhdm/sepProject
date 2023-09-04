import {SepProvider} from "@/components/provider";
import {ReduxProvider} from "../store/provider";
import "./globals.css";
import {Inter} from "next/font/google";
import "react-toastify/dist/ReactToastify.css";
import {ToastContainer} from "react-toastify";
const inter = Inter({subsets: ["latin"]});

export const metadata = {
  title: "sep Web app",
  description: "sep Web app",
};

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
          <SepProvider>{children}</SepProvider>

          <ToastContainer />
        </ReduxProvider>
      </body>
    </html>
  );
}
