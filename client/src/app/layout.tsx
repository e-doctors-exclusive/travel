import Head from 'next/head'
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "../styles/landing.css";
import "../styles/Navbar.css";
import "../styles/SignUp.css";
import "../styles/header.css";
import "../styles/PassengerInfo.css";
import "../styles/FlightFinder.css";
import "../styles/Payment.css";
import "../styles/PlaneBooking.css";
import "../styles/ClientProfil.css";
import "../styles/ClientProfil.css";
import "../styles/DatePickers.css";
import "../styles/FlightFinder.css";
import "../styles/Footer.css";
import "../styles/SignIn.css";
import "../styles/header.css"
import { Provider } from "react-redux";
import { ReduxProvider } from "@/store/provide";
import { ToastContainer } from "react-toastify";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
      <link
            rel="stylesheet"
            type="text/css"
            href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
          />
      </Head>
      <ToastContainer/>
      <body className={inter.className}>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
