import Header from "../components/Header.js"

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="en">
        <body>
       
          <Header/>
          {children}
          </body>
      </html>
    );
  }

