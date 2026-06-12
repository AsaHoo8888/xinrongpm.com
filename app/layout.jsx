import "./globals.css";
import FloatingContact from "./FloatingContact";
import SiteFooter from "./SiteFooter";

export const metadata = {
  title: "Xinrongplas | Plastic Pipe Extrusion Machinery",
  description:
    "Jiangsu Xinrongplas Machinery Co., Ltd. Plastic pipe extrusion machinery since 1996.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <FloatingContact />
        <SiteFooter />
      </body>
    </html>
  );
}
