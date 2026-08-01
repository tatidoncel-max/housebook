import { useState, useEffect, useRef } from "react";

// TODO: Reemplazar con la imagen real del logo (images/logo.png)
const LOGO_URL = "https://via.placeholder.com/200x32/ffffff/4a90d9?text=HouseBook";
// TODO: Reemplazar con la imagen real del logo alternativo (images/logo-alt.png)
const LOGO_ALT_URL = "https://via.placeholder.com/200x32/1a1a2e/ffffff?text=HouseBook";
// TODO: Reemplazar con la imagen real del móvil (images/mobile.png)
const MOBILE_IMG = "https://via.placeholder.com/400x600/e8f4fd/4a90d9?text=App+Screenshot";
// TODO: Reemplazar con imagen real (images/feature/feature-new-01.jpg)
const FEATURE1_IMG = "https://via.placeholder.com/520x420/e8f4fd/4a90d9?text=Smart+Organization";
// TODO: Reemplazar con imagen real (images/feature/feature-new-02.jpg)
const FEATURE2_IMG = "https://via.placeholder.com/520x420/e8f4fd/4a90d9?text=Adding+Items";
// TODO: Reemplazar con imagen real (images/feature/iphone-ipad.png)
const IPHONE_IPAD_IMG = "https://via.placeholder.com/580x480/dce8f7/4a90d9?text=iPhone+%2B+iPad";
// TODO: Reemplazar con badge real de App Store (images/app-store.png)
const APP_STORE_IMG = "https://via.placeholder.com/160x48/000000/ffffff?text=App+Store";
// TODO: Reemplazar con badge real de Google Play (images/google-play.png)
const GOOGLE_PLAY_IMG = "https://via.placeholder.com/160x48/000000/ffffff?text=Google+Play";

const testimonials = [
  {
    id: 1,
    text: "¡Excelente aplicación! Muy fácil de usar, muchas funcionalidades, fácil de compartir, ¡simplemente brillante en todos los aspectos! ¡Bien hecho! ¡Sin duda la MEJOR que existe!",
  },
  {
    id: 2,
    text: "Llevo usando esta aplicación aproximadamente un mes y ¡es fantástica! Me encanta que me da la libertad de agregar múltiples subcontenedores para poder categorizar las cosas aún mejor. La estoy usando para mis patrones y materiales de bordado. Lo tengo dividido por el armario donde están las cosas, el archivador o la cesta, y aún más por diseñador o fabricante. Evitar comprar duplicados es muy fácil. El desarrollador también es muy útil.",
  },
  {
    id: 3,
    text: "Supera con creces a las otras aplicaciones de inventario con 4 estrellas que he probado. Esta es una aplicación de inventario personal para el hogar. Las características más importantes para mí son: marca, modelo y base de datos de números de serie. Además de la ubicación (habitaciones, dependencias y cajas). Y el valor de cada artículo; necesario para las primas y reclamaciones del seguro de propiedad personal. Y los datos se almacenan en la nube y se pueden exportar a una hoja de datos Excel. Esta aplicación está hecha de forma correcta.",
  },
];

const styles = {
  // Reset & Base
  body: {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    margin: 0,
    padding: 0,
    color: "#333",
    overflowX: "hidden",
  },
  // Navbar
  navbar: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    backgroundColor: "#fff",
    boxShadow: "0 2px 20px rgba(0,0,0,0.08)",
    padding: "12px 0",
    transition: "all 0.3s ease",
  },
  navContainer: {
    maxWidth: "1140px",
    margin: "0 auto",
    padding: "0 20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  navLogo: {
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
  },
  navLogoText: {
    fontSize: "24px",
    fontWeight: "700",
    color: "#4a90d9",
    letterSpacing: "-0.5px",
  },
  navLinks: {
    display: "flex",
    alignItems: "center",
    gap: "32px",
    listStyle: "none",
    margin: 0,
    padding: 0,
  },
  navLink: {
    textDecoration: "none",
    color: "#555",
    fontSize: "15px",
    fontWeight: "500",
    transition: "color 0.2s ease",
    cursor: "pointer",
  },
  navLinkActive: {
    color: "#4a90d9",
    fontWeight: "600",
  },
  navLinkAccount: {
    textDecoration: "none",
    color: "#fff",
    fontSize: "14px",
    fontWeight: "600",
    backgroundColor: "#4a90d9",
    padding: "8px 20px",
    borderRadius: "25px",
    transition: "all 0.2s ease",
  },
  hamburger: {
    display: "none",
    background: "none",
    border: "none",
    cursor: "pointer",
    flexDirection: "column",
    gap: "5px",
    padding: "4px",
  },
  hamburgerLine: {
    width: "24px",
    height: "2px",
    backgroundColor: "#555",
    borderRadius: "2px",
    transition: "all 0.3s ease",
  },
  mobileMenu: {
    backgroundColor: "#fff",
    padding: "16px 20px",
    borderTop: "1px solid #f0f0f0",
    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
  },
  mobileNavLinks: {
    listStyle: "none",
    margin: 0,
    padding: 0,
    display: "flex",
    flexDirection: "column",
    gap: "4px",
  },
  mobileNavLink: {
    textDecoration: "none",
    color: "#555",
    fontSize: "15px",
    fontWeight: "500",
    padding: "10px 0",
    display: "block",
    borderBottom: "1px solid #f5f5f5",
    transition: "color 0.2s ease",
    cursor: "pointer",
  },
  // Hero Section
  hero: {
    background: "linear-gradient(135deg, #4a90d9 0%, #1e3a5f 60%, #0f2240 100%)",
    minHeight: "100vh",
    paddingTop: "120px",
    paddingBottom: "80px",
    position: "relative",
    overflow: "hidden",
  },
  heroContainer: {
    maxWidth: "1140px",
    margin: "0 auto",
    padding: "0 20px",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    alignItems: "center",
    gap: "40px",
  },
  heroContent: {
    textAlign: "left",
  },
  heroTitle: {
    color: "#fff",
    fontSize: "clamp(32px, 5vw, 52px)",
    fontWeight: "800",
    lineHeight: "1.2",
    marginBottom: "24px",
    letterSpacing: "-1px",
  },
  heroText: {
    color: "rgba(255,255,255,0.88)",
    fontSize: "17px",
    lineHeight: "1.8",
    marginBottom: "40px",
    maxWidth: "480px",
  },
  heroBtns: {
    display: "flex",
    gap: "16px",
    flexWrap: "wrap",
    alignItems: "center",
  },
  storeBtn: {
    display: "inline-block",
    transition: "transform 0.2s ease, opacity 0.2s ease",
    cursor: "pointer",
  },
  storeBtnImg: {
    height: "52px",
    borderRadius: "8px",
    display: "block",
  },
  heroImageContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  heroImage: {
    maxWidth: "100%",
    maxHeight: "580px",
    objectFit: "contain",
    filter: "drop-shadow(0 20px 60px rgba(0,0,0,0.35))",
    animation: "float 4s ease-in-out infinite",
  },
  // Decorative shapes
  shapesContainer: {
    position: "absolute",
    inset: 0,
    overflow: "hidden",
    pointerEvents: "none",
  },
  // Info Banner
  infoBanner: {
    backgroundColor: "#fff",
    padding: "0 20px",
    marginTop: "-60px",
    position: "relative",
    zIndex: 10,
  },
  infoBannerInner: {
    maxWidth: "1140px",
    margin: "0 auto",
    backgroundColor: "#fff",
    borderRadius: "12px",
    boxShadow: "0 10px 50px rgba(0,0,0,0.12)",
    padding: "48px 52px",
  },
  infoBannerTitle: {
    fontSize: "22px",
    fontWeight: "700",
    color: "#222",
    marginBottom: "16px",
  },
  infoBannerText: {
    color: "#777",
    fontSize: "16px",
    lineHeight: "1.8",
    margin: 0,
  },
  // Section
  section: {
    padding: "80px 0",
  },
  sectionContainer: {
    maxWidth: "1140px",
    margin: "0 auto",
    padding: "0 20px",
  },
  // Feature Sections
  featureRow: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    alignItems: "center",
    gap: "60px",
  },
  featureRowReverse: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    alignItems: "center",
    gap: "60px",
    direction: "rtl",
  },
  featureImageWrapper: {
    direction: "ltr",
    borderRadius: "16px",
    overflow: "hidden",
    boxShadow: "0 20px 60px rgba(0,0,0,0.12)",
    transition: "transform 0.3s ease",
  },
  featureImage: {
    width: "100%",
    display: "block",
  },
  featureContent: {
    direction: "ltr",
    padding: "20px 0",
  },
  featureTitle: {
    fontSize: "clamp(26px, 4vw, 36px)",
    fontWeight: "700",
    color: "#222",
    marginBottom: "20px",
    letterSpacing: "-0.5px",
  },
  featureText: {
    color: "#666",
    fontSize: "16px",
    lineHeight: "1.8",
    marginBottom: "32px",
  },
  testimonialQuote: {
    backgroundColor: "#f8f9ff",
    borderLeft: "4px solid #4a90d9",
    padding: "20px 24px",
    borderRadius: "0 8px 8px 0",
    fontStyle: "italic",
    color: "#555",
    fontSize: "15px",
    lineHeight: "1.7",
    margin: 0,
  },
  // Services Section
  servicesBg: {
    backgroundColor: "#f8f9fc",
    padding: "80px 0 0 0",
    overflow: "hidden",
  },
  servicesSectionTitle: {
    textAlign: "center",
    marginBottom: "60px",
    padding: "0 20px",
  },
  servicesSectionH2: {
    fontSize: "clamp(28px, 4vw, 40px)",
    fontWeight: "700",
    color: "#222",
    marginBottom: "16px",
    letterSpacing: "-0.5px",
  },
  servicesSectionP: {
    color: "#777",
    fontSize: "16px",
    lineHeight: "1.7",
    maxWidth: "580px",
    margin: "0 auto",
  },
  servicesRow: {
    maxWidth: "1400px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    alignItems: "center",
    gap: "0",
  },
  serviceImageWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
    overflow: "hidden",
  },
  serviceImage: {
    width: "100%",
    maxWidth: "580px",
    display: "block",
    objectFit: "cover",
  },
  serviceBoxWrapper: {
    padding: "40px 60px 80px 40px",
  },
  serviceItemsGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "32px",
  },
  serviceItem: {
    padding: "28px 24px",
    backgroundColor: "#fff",
    borderRadius: "12px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
  },
  serviceIcon: {
    fontSize: "32px",
    color: "#4a90d9",
    marginBottom: "16px",
    display: "block",
  },
  serviceItemTitle: {
    fontSize: "17px",
    fontWeight: "700",
    color: "#222",
    marginBottom: "10px",
  },
  serviceItemText: {
    color: "#777",
    fontSize: "14px",
    lineHeight: "1.7",
    margin: 0,
  },
  // Testimonials
  testimonialsSection: {
    padding: "80px 0",
    backgroundColor: "#fff",
  },
  testimonialsContainer: {
    maxWidth: "900px",
    margin: "0 auto",
    padding: "0 20px",
  },
  testimonialSlider: {
    position: "relative",
    overflow: "hidden",
  },
  testimonialCard: {
    backgroundColor: "#fff",
    borderRadius: "16px",
    padding: "40px 48px",
    boxShadow: "0 8px 40px rgba(0,0,0,0.1)",
    textAlign: "center",
    minHeight: "180px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  testimonialText: {
    color: "#555",
    fontSize: "17px",
    lineHeight: "1.8",
    fontStyle: "italic",
    margin: 0,
  },
  testimonialDots: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginTop: "32px",
  },
  testimonialDot: {
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    border: "none",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
  testimonialNavBtns: {
    display: "flex",
    justifyContent: "center",
    gap: "16px",
    marginTop: "24px",
  },
  testimonialNavBtn: {
    width: "44px",
    height: "44px",
    borderRadius: "50%",
    border: "2px solid #4a90d9",
    backgroundColor: "transparent",
    color: "#4a90d9",
    fontSize: "18px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 0.2s ease",
  },
  // CTA Section
  ctaSection: {
    backgroundColor: "#1e3a5f",
    padding: "80px 0",
    textAlign: "center",
  },
  ctaContainer: {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "0 20px",
  },
  ctaTitle: {
    color: "#fff",
    fontSize: "clamp(28px, 4vw, 44px)",
    fontWeight: "700",
    marginBottom: "16px",
    letterSpacing: "-0.5px",
  },
  ctaText: {
    color: "rgba(255,255,255,0.8)",
    fontSize: "18px",
    marginBottom: "40px",
  },
  ctaBtns: {
    display: "flex",
    gap: "16px",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  // Footer
  footer: {
    backgroundColor: "#1a1a2e",
  },
  footerMain: {
    padding: "60px 0 40px",
  },
  footerContainer: {
    maxWidth: "1140px",
    margin: "0 auto",
    padding: "0 20px",
    display: "grid",
    gridTemplateColumns: "2fr 1fr 1fr",
    gap: "40px",
  },
  footerLogoText: {
    fontSize: "26px",
    fontWeight: "700",
    color: "#4a90d9",
    letterSpacing: "-0.5px",
  },
  footerColTitle: {
    color: "#fff",
    fontSize: "15px",
    fontWeight: "600",
    marginBottom: "20px",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
  },
  footerLinks: {
    listStyle: "none",
    margin: 0,
    padding: 0,
  },
  footerLink: {
    color: "rgba(255,255,255,0.6)",
    textDecoration: "none",
    fontSize: "14px",
    lineHeight: "2.2",
    transition: "color 0.2s ease",
    display: "block",
  },
  footerBottom: {
    backgroundColor: "#111",
    textAlign: "center",
    padding: "20px",
  },
  footerBottomText: {
    color: "rgba(255,255,255,0.4)",
    fontSize: "13px",
    margin: 0,
  },
  footerBottomLink: {
    color: "rgba(255,255,255,0.6)",
    textDecoration: "none",
  },
  // Scroll to top
  scrollTop: {
    position: "fixed",
    bottom: "30px",
    right: "30px",
    width: "48px",
    height: "48px",
    backgroundColor: "#4a90d9",
    color: "#fff",
    border: "none",
    borderRadius: "50%",
    cursor: "pointer",
    fontSize: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 4px 20px rgba(74,144,217,0.5)",
    transition: "all 0.3s ease",
    zIndex: 999,
  },
};

// Floating shapes for hero background
function HeroShapes() {
  const shapeData = [
    { top: "10%", left: "5%", size: 80, opacity: 0.08, delay: "0s" },
    { top: "20%", left: "15%", size: 50, opacity: 0.06, delay: "0.5s" },
    { top: "60%", left: "8%", size: 120, opacity: 0.05, delay: "1s" },
    { top: "80%", left: "20%", size: 60, opacity: 0.07, delay: "0.3s" },
    { top: "5%", right: "10%", size: 90, opacity: 0.07, delay: "0.8s" },
    { top: "40%", right: "5%", size: 70, opacity: 0.06, delay: "0.2s" },
    { top: "70%", right: "15%", size: 100, opacity: 0.05, delay: "1.2s" },
    { top: "85%", right: "25%", size: 55, opacity: 0.08, delay: "0.6s" },
  ];

  return (
    <div style={styles.shapesContainer}>
      {shapeData.map((s, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            top: s.top,
            left: s.left,
            right: s.right,
            width: s.size,
            height: s.size,
            borderRadius: "50%",
            backgroundColor: `rgba(255,255,255,${s.opacity})`,
            animationDelay: s.delay,
            animation: `pulse 6s ease-in-out infinite`,
          }}
        />
      ))}
    </div>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredNav, setHoveredNav] = useState(null);
  const [hoveredStore, setHoveredStore] = useState(null);
  const [hoveredServiceItem, setHoveredServiceItem] = useState(null);
  const [hoveredNavBtn, setHoveredNavBtn] = useState(null);
  const [testimonialFading, setTestimonialFading] = useState(false);
  const testimonialTimer = useRef(null);

  // Auto-play testimonials
  useEffect(() => {
    testimonialTimer.current = setInterval(() => {
      changeTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(testimonialTimer.current);
  }, []);

  const changeTestimonial = (indexOrFn) => {
    setTestimonialFading(true);
    clearInterval(testimonialTimer.current);
    setTimeout(() => {
      setActiveTestimonial(indexOrFn);
      setTestimonialFading(false);
    }, 300);
    testimonialTimer.current = setInterval(() => {
      changeTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
  };

  const goToTestimonial = (idx) => {
    changeTestimonial(idx);
  };

  const prevTestimonial = () => {
    changeTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const nextTestimonial = () => {
    changeTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  // Scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (id) => {
    setMenuOpen(false);
    if (id === "home") {
      scrollToTop();
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Responsive helpers
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  return (
    <div style={styles.body}>
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-18px); }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.06; }
          50% { transform: scale(1.15); opacity: 0.12; }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { margin: 0; }

        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; text-align: center !important; }
          .hero-content { order: 2; }
          .hero-image-col { order: 1; }
          .hero-btns { justify-content: center !important; }
          .hero-text { max-width: 100% !important; }
          .feature-row { grid-template-columns: 1fr !important; }
          .feature-row-reverse { grid-template-columns: 1fr !important; direction: ltr !important; }
          .services-row { grid-template-columns: 1fr !important; }
          .service-box-wrapper { padding: 40px 20px 60px !important; }
          .service-items-grid { grid-template-columns: 1fr 1fr !important; gap: 20px !important; }
          .footer-grid { grid-template-columns: 1fr !important; }
          .info-banner-inner { padding: 32px 24px !important; }
          .nav-links-desktop { display: none !important; }
          .hamburger-btn { display: flex !important; }
        }
        @media (max-width: 560px) {
          .service-items-grid { grid-template-columns: 1fr !important; }
          .testimonial-card { padding: 28px 20px !important; }
          .cta-btns { flex-direction: column; align-items: center !important; }
          .hero-btns-wrap { flex-direction: column; align-items: center !important; }
        }
        .nav-link-item:hover { color: #4a90d9 !important; }
        .footer-link-item:hover { color: rgba(255,255,255,0.9) !important; }
        .store-btn-wrap:hover { transform: translateY(-3px) !important; opacity: 0.9 !important; }
        .service-card:hover { transform: translateY(-4px) !important; box-shadow: 0 12px 40px rgba(0,0,0,0.12) !important; }
        .scroll-top-btn:hover { transform: translateY(-3px) scale(1.05) !important; box-shadow: 0 8px 30px rgba(74,144,217,0.7) !important; }
        .testimonial-nav-btn:hover { background-color: #4a90d9 !important; color: #fff !important; }
        .account-btn:hover { background-color: #3578c4 !important; transform: translateY(-1px) !important; }
        .feature-image-wrap:hover { transform: translateY(-6px) !important; }
      `}</style>

      {/* ===== NAVBAR ===== */}
      <nav
        style={{
          ...styles.navbar,
          boxShadow: scrolled
            ? "0 4px 30px rgba(0,0,0,0.12)"
            : "0 2px 20px rgba(0,0,0,0.05)",
          padding: scrolled ? "8px 0" : "12px 0",
        }}
      >
        <div style={styles.navContainer}>
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); scrollToTop(); }}
            style={styles.navLogo}
          >
            {/* TODO: Reemplazar con <img src={LOGO_URL} width={200} height={32} alt="HouseBook logo" /> */}
            <span style={styles.navLogoText}>
              🏠 HouseBook
            </span>
          </a>

          {/* Desktop nav */}
          <ul style={styles.navLinks} className="nav-links-desktop">
            {[
              { label: "Inicio", id: "home" },
              { label: "Preguntas Frecuentes", href: "https://housebook.io/FAQ.html" },
              { label: "Contacto", href: "https://housebook.io/contact.html" },
            ].map((item, i) => (
              <li key={i} style={{ listStyle: "none" }}>
                {item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    style={styles.navLink}
                    className="nav-link-item"
                  >
                    {item.label}
                  </a>
                ) : (
                  <span
                    onClick={() => scrollToSection(item.id)}
                    style={{ ...styles.navLink, ...styles.navLinkActive }}
                    className="nav-link-item"
                  >
                    {item.label}
                  </span>
                )}
              </li>
            ))}
            <li style={{ listStyle: "none" }}>
              <a
                href="https://app.housebook.io/auth"
                target="_blank"
                rel="noreferrer"
                style={styles.navLinkAccount}
                className="account-btn"
              >
                Mi Cuenta
              </a>
            </li>
          </ul>

          {/* Hamburger */}
          <button
            className="hamburger-btn"
            style={{ ...styles.hamburger, display: "none" }}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menú"
          >
            <span style={{
              ...styles.hamburgerLine,
              transform: menuOpen ? "rotate(45deg) translate(5px, 5px)" : "none",
            }} />
            <span style={{
              ...styles.hamburgerLine,
              opacity: menuOpen ? 0 : 1,
            }} />
            <span style={{
              ...styles.hamburgerLine,
              transform: menuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none",
            }} />
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div style={styles.mobileMenu}>
            <ul style={styles.mobileNavLinks}>
              {[
                { label: "Inicio", action: () => scrollToSection("home") },
                { label: "Preguntas Frecuentes", href: "https://housebook.io/FAQ.html" },
                { label: "Contacto", href: "https://housebook.io/contact.html" },
                { label: "Mi Cuenta", href: "https://app.housebook.io/auth" },
              ].map((item, i) => (
                <li key={i}>
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      style={styles.mobileNavLink}
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <span
                      style={styles.mobileNavLink}
                      onClick={item.action}
                    >
                      {item.label}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>

      {/* ===== HERO SECTION ===== */}
      <section style={styles.hero} id="home">
        <HeroShapes />
        <div
          style={{
            ...styles.heroContainer,
            animation: "fadeInUp 0.8s ease both",
          }}
          className="hero-grid"
        >
          {/* Text content */}
          <div style={styles.heroContent} className="hero-content">
            <h1 style={styles.heroTitle}>
              ¡El inventario del hogar hecho fácil!
            </h1>
            <p style={styles.heroText} className="hero-text">
              ¿Cansado del caos que causan los artículos fuera de lugar? Saluda a HouseBook – tu compañero de inventario doméstico todo en uno, ¡disponible ahora en Android, iOS y la Web!
            </p>
            <div
              style={styles.heroBtns}
              className="hero-btns hero-btns-wrap"
            >
              <a
                href="https://apps.apple.com/us/app/housebook/id1489866496"
                target="_blank"
                rel="noreferrer"
                style={styles.storeBtn}
                className="store-btn-wrap"
              >
                {/* TODO: Reemplazar con <img src={APP_STORE_IMG} /> real */}
                <img
                  src={APP_STORE_IMG}
                  alt="Descargar en App Store"
                  style={styles.storeBtnImg}
                />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=chenige.chkchk.wairz"
                target="_blank"
                rel="noreferrer"
                style={styles.storeBtn}
                className="store-btn-wrap"
              >
                {/* TODO: Reemplazar con <img src={GOOGLE_PLAY_IMG} /> real */}
                <img
                  src={GOOGLE_PLAY_IMG}
                  alt="Disponible en Google Play"
                  style={styles.storeBtnImg}
                />
              </a>
            </div>
          </div>

          {/* Hero image */}
          <div style={styles.heroImageContainer} className="hero-image-col">
            {/* TODO: Reemplazar con imagen real del móvil (images/mobile.png) */}
            <img
              src={MOBILE_IMG}
              alt="Captura de pantalla de la app"
              style={styles.heroImage}
            />
          </div>
        </div>
      </section>

      {/* ===== INFO BANNER ===== */}
      <section style={styles.infoBanner} id="info">
        <div style={{ maxWidth: "1140px", margin: "0 auto", padding: "0 20px" }}>
          <div style={styles.infoBannerInner} className="info-banner-inner">
            <h3 style={styles.infoBannerTitle}>Los desastres ocurren.</h3>
            <p style={styles.infoBannerText}>
              Incendios, tornados, inundaciones, etc. Tener un inventario del hogar actualizado te ayudará a resolver tu reclamación de seguro más rápido. Todo está respaldado en la nube, por lo que no necesitas preocuparte por perder tus datos, incluso si pierdes tu teléfono.
            </p>
          </div>
        </div>
      </section>

      {/* ===== FEATURE 1: Smart Organization ===== */}
      <section style={{ ...styles.section, paddingTop: "100px" }} id="features">
        <div style={styles.sectionContainer}>
          <div style={styles.featureRow} className="feature-row">
            {/* Image */}
            <div
              style={styles.featureImageWrapper}
              className="feature-image-wrap"
            >
              {/* TODO: Reemplazar con imagen real (images/feature/feature-new-01.jpg) */}
              <img
                src={FEATURE1_IMG}
                alt="Organización inteligente"
                style={styles.featureImage}
              />
            </div>
            {/* Content */}
            <div style={styles.featureContent}>
              <h2 style={styles.featureTitle}>Organización Inteligente</h2>
              <p style={styles.featureText}>
                HouseBook está organizado como tu casa ya está organizada. Por Habitación, Almacenamiento (ej. un armario) e incluso Sub-Almacenamiento (ej. un cajón en el armario).
              </p>
              <blockquote style={styles.testimonialQuote}>
                "Después de probar 5 aplicaciones de inventario diferentes, ¡encontré HouseBook y fue el jackpot! Hace todo lo que estaba buscando."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FEATURE 2: Adding Items ===== */}
      <section style={{ ...styles.section, paddingTop: "0" }}>
        <div style={styles.sectionContainer}>
          <div style={styles.featureRowReverse} className="feature-row-reverse">
            {/* Image */}
            <div
              style={styles.featureImageWrapper}
              className="feature-image-wrap"
            >
              {/* TODO: Reemplazar con imagen real (images/feature/feature-new-02.jpg) */}
              <img
                src={FEATURE2_IMG}
                alt="Agregar artículos es fácil"
                style={styles.featureImage}
              />
            </div>
            {/* Content */}
            <div style={{ ...styles.featureContent, direction: "ltr" }}>
              <h2 style={styles.featureTitle}>Agregar artículos es muy fácil</h2>
              <p style={styles.featureText}>
                Nuestra cámara personalizada te permite tomar una foto, agregar información adicional, guardar y luego estar listo para agregar otro artículo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICES / SHARE & COLLABORATE ===== */}
      <section style={styles.servicesBg} id="share">
        <div style={styles.servicesSectionTitle}>
          <h2 style={styles.servicesSectionH2}>Comparte y Colabora</h2>
          <p style={styles.servicesSectionP}>
            Invita a compañeros de casa, inquilinos o clientes a colaborar en tu inventario. Además, compartir un simple enlace permite que otros vean tu inventario sin esfuerzo.
          </p>
        </div>

        <div style={styles.servicesRow} className="services-row">
          {/* Left image */}
          <div style={styles.serviceImageWrapper}>
            {/* TODO: Reemplazar con imagen real (images/feature/iphone-ipad.png) */}
            <img
              src={IPHONE_IPAD_IMG}
              alt="iPhone e iPad"
              style={styles.serviceImage}
            />
          </div>

          {/* Right: service items */}
          <div style={styles.serviceBoxWrapper} className="service-box-wrapper">
            <div style={styles.serviceItemsGrid} className="service-items-grid">
              {[
                {
                  icon: "🏠",
                  title: "Comparte con Compañero de Casa",
                  text: "Da acceso a alguien para ver y modificar tu casa",
                },
                {
                  icon: "🔗",
                  title: "Comparte con enlace público",
                  text: "Permite que cualquiera con el enlace tenga acceso de solo lectura a tu casa",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  style={styles.serviceItem}
                  className="service-card"
                >
                  <span style={styles.serviceIcon}>{item.icon}</span>
                  <h3 style={styles.serviceItemTitle}>{item.title}</h3>
                  <p style={styles.serviceItemText}>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section style={styles.testimonialsSection} id="testimonial">
        <div style={styles.testimonialsContainer}>
          {/* Section heading */}
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <h2 style={{ ...styles.servicesSectionH2, marginBottom: "8px" }}>
              Lo que dicen nuestros usuarios
            </h2>
            <p style={{ color: "#999", fontSize: "15px" }}>
              Reseñas reales de la App Store y Google Play
            </p>
          </div>

          {/* Slider */}
          <div style={styles.testimonialSlider}>
            <div
              style={{
                ...styles.testimonialCard,
                opacity: testimonialFading ? 0 : 1,
                transform: testimonialFading ? "translateY(8px)" : "translateY(0)",
                transition: "opacity 0.3s ease, transform 0.3s ease",
              }}
              className="testimonial-card"
            >
              <p style={styles.testimonialText}>
                "{testimonials[activeTestimonial].text}"
              </p>
            </div>
          </div>

          {/* Navigation buttons */}
          <div style={styles.testimonialNavBtns}>
            <button
              style={styles.testimonialNavBtn}
              className="testimonial-nav-btn"
              onClick={prevTestimonial}
              aria-label="Anterior"
            >
              ‹
            </button>
            <button
              style={styles.testimonialNavBtn}
              className="testimonial-nav-btn"
              onClick={nextTestimonial}
              aria-label="Siguiente"
            >
              ›
            </button>
          </div>

          {/* Dots */}
          <div style={styles.testimonialDots}>
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => goToTestimonial(i)}
                style={{
                  ...styles.testimonialDot,
                  backgroundColor: i === activeTestimonial ? "#4a90d9" : "#d0ddef",
                  transform: i === activeTestimonial ? "scale(1.3)" : "scale(1)",
                }}
                aria-label={`Ir al testimonio ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section style={styles.ctaSection} id="cta">
        <div style={styles.ctaContainer}>
          <h2 style={styles.ctaTitle}>Es hora de actuar</h2>
          <p style={styles.ctaText}>Únete y organízate</p>
          <div style={styles.ctaBtns} className="cta-btns">
            <a
              href="https://apps.apple.com/us/app/housebook/id1489866496"
              target="_blank"
              rel="noreferrer"
              style={styles.storeBtn}
              className="store-btn-wrap"
            >
              {/* TODO: Reemplazar con imagen real del badge de App Store */}
              <img
                src={APP_STORE_IMG}
                alt="Descargar en App Store"
                style={styles.storeBtnImg}
              />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=chenige.chkchk.wairz"
              target="_blank"
              rel="noreferrer"
              style={styles.storeBtn}
              className="store-btn-wrap"
            >
              {/* TODO: Reemplazar con imagen real del badge de Google Play */}
              <img
                src={GOOGLE_PLAY_IMG}
                alt="Disponible en Google Play"
                style={styles.storeBtnImg}
              />
            </a>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer style={styles.footer}>
        <div style={styles.footerMain}>
          <div style={styles.footerContainer} className="footer-grid">
            {/* Logo col */}
            <div>
              {/* TODO: Reemplazar con <img src={LOGO_ALT_URL} width={200} height={32} alt="HouseBook" /> */}
              <span style={styles.footerLogoText}>🏠 HouseBook</span>
              <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "14px", marginTop: "16px", lineHeight: "1.7" }}>
                Tu compañero de inventario doméstico todo en uno.
              </p>
            </div>

            {/* Product */}
            <div>
              <h6 style={styles.footerColTitle}>Producto</h6>
              <ul style={styles.footerLinks}>
                <li>
                  <a
                    href="https://housebook.io/FAQ.html"
                    target="_blank"
                    rel="noreferrer"
                    style={styles.footerLink}
                    className="footer-link-item"
                  >
                    Preguntas Frecuentes
                  </a>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h6 style={styles.footerColTitle}>Empresa</h6>
              <ul style={styles.footerLinks}>
                <li>
                  <a
                    href="https://housebook.io/contact.html"
                    target="_blank"
                    rel="noreferrer"
                    style={styles.footerLink}
                    className="footer-link-item"
                  >
                    Contacto
                  </a>
                </li>
                <li>
                  <a
                    href="https://homelog-3ce86.firebaseapp.com/privacy_policy.html"
                    target="_blank"
                    rel="noreferrer"
                    style={styles.footerLink}
                    className="footer-link-item"
                  >
                    Política de Privacidad
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <div style={styles.footerBottom}>
          <p style={styles.footerBottomText}>
            Copyright &copy; {new Date().getFullYear()} HouseBook. Diseñado y desarrollado por{" "}
            {/* TODO: Actualizar el crédito del desarrollador original si se desea */}
            <a
              href="https://themefisher.com/"
              target="_blank"
              rel="noreferrer"
              style={styles.footerBottomLink}
            >
              Themefisher
            </a>
          </p>
        </div>
      </footer>

      {/* ===== SCROLL TO TOP ===== */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          style={{
            ...styles.scrollTop,
            opacity: showScrollTop ? 1 : 0,
            transform: showScrollTop ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.3s ease",
          }}
          className="scroll-top-btn"
          aria-label="Volver arriba"
        >
          ↑
        </button>
      )}
    </div>
  );
}