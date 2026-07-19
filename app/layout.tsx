import type { Metadata, Viewport } from "next";
import "./globals.css";
import "./polish.css";

export const metadata: Metadata = { title: "מה נכון עבורי עכשיו?", description: "רגע קצר של תשומת לב ובחירה" };
export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#f6f0e7" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="he" dir="rtl"><body>{children}</body></html>;
}
