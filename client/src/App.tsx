import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme-provider";
import { AuthProvider } from "@/contexts/auth-context";
import { ProfileProvider } from "@/contexts/profile-context";
import { useEffect, useState } from "react";
import { initGA } from "./lib/analytics";
import { useAnalytics } from "./hooks/use-analytics";

// Layouts
import PublicLayout from "@/layouts/public-layout";
import AdminLayout from "@/layouts/admin-layout";

// Public Pages
import Home from "@/pages/home";
import Domains from "@/pages/domains";
import DomainDetails from "@/pages/domain-details";
import DomainLanding from "@/pages/domain-landing";
import Categories from "@/pages/categories";
import Login from "@/pages/login";
import NotFound from "@/pages/not-found";

// Landing Demo
import LandingDemo from "@/pages/landing-demo";

// Admin Pages
import AdminDashboard from "@/pages/admin/dashboard";
import AdminDomains from "@/pages/admin/domains";
import AddDomain from "@/pages/admin/add-domain";
import EditDomain from "@/pages/admin/edit-domain";
import AdminSales from "@/pages/admin/sales";
import AdminCategories from "@/pages/admin/categories";
import AdminFinancials from "@/pages/admin/financials";
import DomainAnalytics from "@/pages/admin/domain-analytics";
import Analytics from "@/pages/admin/analytics";
import AdminUsers from "@/pages/admin/users";
import GeneralSettings from "@/pages/admin/settings";
import AdminProfile from "@/pages/admin/profile";

function Router() {
  const [location] = useLocation();
  const isAdmin = location.startsWith("/admin");
  const [isCustomDomain, setIsCustomDomain] = useState(false);
  
  // Use the analytics hook to track page views
  useAnalytics();

  // Check if we're on a custom domain (not localhost, replit, etc.)
  useEffect(() => {
    const hostname = window.location.hostname;
    const isMainSite = hostname === 'localhost' || 
                       hostname.includes('.repl.co') || 
                       hostname.includes('.replit.app') || 
                       /^(\d{1,3}\.){3}\d{1,3}$/.test(hostname);
    
    setIsCustomDomain(!isMainSite);
  }, []);

  // Landing page routing is handled in the Switch statement below

  return (
    <Switch>
      {/* Domain Landing Page Demo */}
      <Route path="/landing/:domainName">
        {(params) => (
          <LandingDemo domainName={params.domainName} />
        )}
      </Route>
      
      {/* Test route for domain landing pages */}
      <Route path="/test-domain/:domain">
        {(params) => (
          <DomainLanding testMode={true} domainId={params.domain} />
        )}
      </Route>
      
      {/* Public Routes */}
      <Route path="/">
        {() => (
          <PublicLayout>
            <Home />
          </PublicLayout>
        )}
      </Route>
      <Route path="/domains">
        {() => (
          <PublicLayout>
            <Domains />
          </PublicLayout>
        )}
      </Route>
      <Route path="/domains/:id">
        {(params) => (
          <PublicLayout>
            <DomainDetails id={params.id} />
          </PublicLayout>
        )}
      </Route>
      <Route path="/categories">
        {() => (
          <PublicLayout>
            <Categories />
          </PublicLayout>
        )}
      </Route>
      <Route path="/login">
        {() => (
          <PublicLayout>
            <Login />
          </PublicLayout>
        )}
      </Route>

      {/* Admin Routes */}
      <Route path="/admin">
        {() => (
          <AdminLayout>
            <AdminDashboard />
          </AdminLayout>
        )}
      </Route>
      <Route path="/admin/domains">
        {() => (
          <AdminLayout>
            <AdminDomains />
          </AdminLayout>
        )}
      </Route>
      <Route path="/admin/domains/add">
        {() => (
          <AdminLayout>
            <AddDomain />
          </AdminLayout>
        )}
      </Route>
      <Route path="/admin/domains/edit/:id">
        {(params) => (
          <AdminLayout>
            <EditDomain id={params.id} />
          </AdminLayout>
        )}
      </Route>
      <Route path="/admin/sales">
        {() => (
          <AdminLayout>
            <AdminSales />
          </AdminLayout>
        )}
      </Route>
      <Route path="/admin/categories">
        {() => (
          <AdminLayout>
            <AdminCategories />
          </AdminLayout>
        )}
      </Route>
      <Route path="/admin/financials">
        {() => (
          <AdminLayout>
            <AdminFinancials />
          </AdminLayout>
        )}
      </Route>
      <Route path="/admin/domain-analytics">
        {() => (
          <AdminLayout>
            <DomainAnalytics />
          </AdminLayout>
        )}
      </Route>
      <Route path="/admin/analytics">
        {() => (
          <Analytics />
        )}
      </Route>
      <Route path="/admin/users">
        {() => (
          <AdminLayout>
            <AdminUsers />
          </AdminLayout>
        )}
      </Route>
      <Route path="/admin/settings">
        {() => (
          <AdminLayout>
            <GeneralSettings />
          </AdminLayout>
        )}
      </Route>
      <Route path="/admin/profile">
        {() => (
          <AdminLayout>
            <AdminProfile />
          </AdminLayout>
        )}
      </Route>

      {/* Fallback to 404 */}
      <Route>
        {() => (
          <PublicLayout>
            <NotFound />
          </PublicLayout>
        )}
      </Route>
    </Switch>
  );
}

function App() {
  // Initialize Google Analytics when app loads
  useEffect(() => {
    // Verify required environment variable is present
    if (!import.meta.env.VITE_GA_MEASUREMENT_ID) {
      console.warn('Missing required Google Analytics key: VITE_GA_MEASUREMENT_ID');
    } else {
      initGA();
    }
  }, []);
  
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="light">
        <AuthProvider>
          <ProfileProvider>
            <TooltipProvider>
              <Toaster />
              <Router />
            </TooltipProvider>
          </ProfileProvider>
        </AuthProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
