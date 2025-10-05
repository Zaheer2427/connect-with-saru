import { AppBar, Box, Button, Toolbar } from "@mui/material";
import { useEffect, useState } from "react";
import saruInSyncLogo from "../assets/saru-in-sync-name-logo.png";



// ---------- Sections Info ----------
const sections = [
  { id: "home", label: "Home" },
  { id: "what", label: "What I do" },
  { id: "how", label: "How it works" },
];

// ---------- Navbar ----------
export default function Navbar() {
  const [active, setActive] = useState("home");

  const handleScroll = () => {
    const scrollPos = window.scrollY + window.innerHeight / 3;
    for (let sec of sections) {
      const el = document.getElementById(sec.id);
      if (el && scrollPos >= el.offsetTop) setActive(sec.id);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0} // no shadow
        sx={{
          background: "rgba(0, 31, 63, 0.95)",
          transition: "background 0.4s ease",
        }}
      >
        <Toolbar
          sx={{
            justifyContent: { xs: "center", md: "space-between" }, // center on mobile, space-between on desktop
            px: { xs: 3, md: 8 }, // more horizontal padding
            minHeight: { xs: 70, md: 90 }, // increase height for all viewports
          }}
        >
          {/* Desktop nav */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
            {sections.map((sec) => (
              <Button
                key={sec.id}
                onClick={() => scrollTo(sec.id)}
                sx={{
                  borderRadius: 7,
                  border: active === sec.id ? "1px solid #ffffffff" : "none",
                  color: "#ffffffff",
                  fontWeight: 500,
                  fontSize: "1.1rem", // slightly bigger text
                  textTransform: "none",
                  px: 3,
                }}
              >
                {sec.label}
              </Button>
            ))}
          </Box>

          {/* Logo */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <a
              href="https://www.youtube.com/@SaruInSync"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={saruInSyncLogo}
                alt="Logo"
                style={{
                  height: "50px", // slightly bigger logo
                  width: "auto",
                  cursor: "pointer",
                }}
              />
            </a>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}