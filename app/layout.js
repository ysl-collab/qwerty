
import "./globals.css";
import {Header} from "@/app/components/Header/Header";

export const metadata = {
  title: "qwerty",
  description: "Онлайн-ресурс для обучения 'qwerty'",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
