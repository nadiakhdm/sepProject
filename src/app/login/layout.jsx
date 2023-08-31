import {Inter} from "next/font/google";

const inter = Inter({subsets: ["latin"]});

export const metadata = {
  title: "loginPage",
  description: "loginPage",
};

export default function Layout({children}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
