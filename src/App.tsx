import { useEffect, useMemo, useState } from 'react';
import { Routes, Route, useLocation, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Home from './pages/Home';
import Services from './pages/Services';
import Rentals from './pages/Rentals';
import Gallery from './pages/Gallery';
import About from './pages/About';
import Quote from './pages/Quote';
import MainLayout from './layouts/MainLayout';
import SEO from './components/SEO';
import ConsentBanner from './components/ConsentBanner';
import Analytics from './components/Analytics';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  const { i18n } = useTranslation();
  const [consent, setConsent] = useState<string | null>(localStorage.getItem('cc-consent'));

  useEffect(() => {
    document.documentElement.lang = i18n.language;
    localStorage.setItem('cc-lang', i18n.language);
  }, [i18n.language]);

  const routes = useMemo(
    () => (
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <SEO titleKey="seo.homeTitle" descriptionKey="seo.homeDescription" />
              <Home />
            </MainLayout>
          }
        />
        <Route
          path="/services"
          element={
            <MainLayout>
              <SEO titleKey="seo.servicesTitle" descriptionKey="seo.servicesDescription" />
              <Services />
            </MainLayout>
          }
        />
        <Route
          path="/rentals"
          element={
            <MainLayout>
              <SEO titleKey="seo.rentalsTitle" descriptionKey="seo.rentalsDescription" />
              <Rentals />
            </MainLayout>
          }
        />
        <Route
          path="/gallery"
          element={
            <MainLayout>
              <SEO titleKey="seo.galleryTitle" descriptionKey="seo.galleryDescription" />
              <Gallery />
            </MainLayout>
          }
        />
        <Route
          path="/about"
          element={
            <MainLayout>
              <SEO titleKey="seo.aboutTitle" descriptionKey="seo.aboutDescription" />
              <About />
            </MainLayout>
          }
        />
        <Route
          path="/quote"
          element={
            <MainLayout>
              <SEO titleKey="seo.quoteTitle" descriptionKey="seo.quoteDescription" />
              <Quote />
            </MainLayout>
          }
        />
        <Route
          path="*"
          element={
            <MainLayout>
              <SEO title="Page not found" description="Charming Castle page not found" />
              <div className="container" style={{ padding: '3rem 0' }}>
                <h1>404</h1>
                <p>Page not found.</p>
                <Link to="/" className="btn btn-primary">Return home</Link>
              </div>
            </MainLayout>
          }
        />
      </Routes>
    ),
    []
  );

  return (
    <>
      <ScrollToTop />
      <Analytics consent={consent === 'accepted'} />
      {routes}
      <ConsentBanner
        consent={consent}
        onAccept={() => setConsent('accepted')}
        onDecline={() => setConsent('declined')}
      />
    </>
  );
}

export default App;
