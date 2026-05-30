import { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import NavListComponent from "../hero/nav_list.component";
import CookieConsentBanner from "../cookie-consent/cookie-consent.component";
import FooterComponent from "../footer/footer.component";

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  const { pathname } = useLocation();
  const isAuthPage = pathname === "/login" || pathname === "/signup";

  return (
    <div className="flex flex-col min-h-screen w-full bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">
      {!isAuthPage && <NavListComponent />}
      <CookieConsentBanner />
      
      <div className="flex-grow w-full flex flex-col min-h-0 box-border">
        {children}
      </div>
      
      {!isAuthPage && <FooterComponent />}
    </div>
  );
};

export default RootLayout;