import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";
import ExitIntentPopup from "./ExitIntentPopup";

const Layout = ({ children }: { children: ReactNode }) => (
  <div className="flex min-h-screen flex-col">
    <Header />
    <main className="flex-1">{children}</main>
    <Footer />
    <WhatsAppButton />
    <ExitIntentPopup />
  </div>
);

export default Layout;
