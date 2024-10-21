"use client";

import 'bootstrap/dist/css/bootstrap.min.css'; 
import "./globals.css"; 
import 'bootstrap/dist/js/bootstrap.min.js';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={``}>
        {children}
      </body>
    </html>
  );
}
