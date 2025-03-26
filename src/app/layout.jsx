import "./globals.css";

import Body from "@/ui/Body";

export const metadata = {
  title: "StevenAdiS Portofolio Website",
  description: "This is my personal portofolio website."
};


export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <Body>
        {children}
      </Body>
    </html>
  );
}
