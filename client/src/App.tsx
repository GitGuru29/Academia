import { useState } from 'react';
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import OrderDrawer from "./components/OrderDrawer";
import TrackOrderModal from "./components/TrackOrderModal";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import RefundPolicy from "./pages/RefundPolicy";

export interface OrderContext {
  tier?: string;
  service?: string;
}

function Router() {
  const [isOrderDrawerOpen, setIsOrderDrawerOpen] = useState(false);
  const [orderContext, setOrderContext] = useState<OrderContext>({});
  const [isTrackModalOpen, setIsTrackModalOpen] = useState(false);

  const openDrawerWithContext = (context?: OrderContext) => {
    setOrderContext(context || {});
    setIsOrderDrawerOpen(true);
  };

  return (
    <>
      <Navbar 
        onSubmitClick={() => openDrawerWithContext({ tier: 'General Inquiry', service: 'Not specified' })}
      />
      <Switch>
        <Route path={"/"} component={() => (
          <Home 
            onSubmitClick={(context) => openDrawerWithContext(context || { tier: 'General Inquiry', service: 'Not specified' })}
            onTrackClick={() => setIsTrackModalOpen(true)}
          />
        )} />
        <Route path={"/privacy-policy"} component={PrivacyPolicy} />
        <Route path={"/terms-of-service"} component={TermsOfService} />
        <Route path={"/refund-policy"} component={RefundPolicy} />
        <Route path={"/404"} component={NotFound} />
        {/* Final fallback route */}
        <Route component={NotFound} />
      </Switch>
      <Footer />
      <OrderDrawer 
        isOpen={isOrderDrawerOpen}
        onClose={() => setIsOrderDrawerOpen(false)}
        initialContext={orderContext}
      />
      <TrackOrderModal
        isOpen={isTrackModalOpen}
        onClose={() => setIsTrackModalOpen(false)}
      />
    </>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
