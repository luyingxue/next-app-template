import "@/styles/globals.css";
import {Providers} from "./providers";
import Header from "@/components/header";
export default function RootLayout({children}: { children: React.ReactNode }) {
  return (
    <html lang="en" className='dark'>
      <body>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}