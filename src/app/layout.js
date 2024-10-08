import StoreProvider from "./components/StoreProvider";
import "./globals.css";

export const metadata = {
  title: "The Prepper",
  description: "An interview preparation tool",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <StoreProvider>
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}
