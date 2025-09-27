import { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Dialog,
  DialogTitle,
  DialogContent,
} from "@mui/material";
import { motion } from "framer-motion";
import saruInSyncLogo from "./assets/saru-in-sync-name-logo.png";
import saruImage from "./assets/Saru.jpg";
import sessionImage from "./assets/session-logo.jpg";
import MenuIcon from "@mui/icons-material/Menu";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from '@mui/icons-material/LinkedIn';


// ---------- Sections Info ----------
const sections = [
  { id: "home", label: "Home" },
  { id: "what", label: "What I do" },
  { id: "how", label: "How it works" },
];

// ---------- Navbar ----------
function Navbar() {
  const [active, setActive] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);

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
    setMobileOpen(false);
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
            justifyContent: "space-between",
            px: { xs: 3, md: 8 }, // more horizontal padding
            minHeight: { xs: 80, md: 100 }, // increase height for all viewports
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

          {/* Mobile nav */}
          <IconButton
            color="inherit"
            sx={{ display: { md: "none" }, color: "#ffffffff" }}
            onClick={() => setMobileOpen(true)}
          >
            <MenuIcon />
          </IconButton>

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

      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        PaperProps={{
          sx: {
            background: "#EFEBEA",
            color: "#011845",
          },
        }}
      >
        <Box sx={{ width: 220 }} role="presentation">
          <List>
            {sections.map((sec) => (
              <ListItem key={sec.id} disablePadding>
                <ListItemButton
                  onClick={() => {
                    scrollTo(sec.id);
                    setMobileOpen(false);
                  }}
                  sx={{
                    borderRight: active === sec.id ? "2px solid #011845" : "none",
                    color: "inherit",
                  }}
                >
                  <ListItemText primary={sec.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}

// ---------- Hero ----------
function Hero() {
  return (
    <Box
      id="home"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        background: "#EFEBEA",
      }}
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: "center" }}
        >
          <Typography
            variant="h2"
            gutterBottom
            sx={{
              fontSize: { xs: "2rem", md: "4rem" },
              fontFamily: "'DM Serif Display', serif",
              color: "#011845",
              fontWeight: 900,
            }}
          >
            Connect With Saru
          </Typography>

          <Typography
            variant="h5"
            gutterBottom
            sx={{
              fontSize: { xs: "1.5rem", md: "2.5rem" },
              fontFamily: "'DM Serif Display', serif",
              color: "#011845",
              fontWeight: 900,
            }}
          >
            One-to-One Guidance That Actually Works
          </Typography>

          <Typography
            variant="h6"
            gutterBottom
            sx={{
              fontWeight: 600,
              fontSize: { xs: "1rem", md: "1.3rem" },
              color: "#011845",
            }}
          >
            From studies and career to mindset, motivation, and self-growth —
            I help you get clarity and confidence in life.
          </Typography>

          <Button
            variant="contained"
            sx={{
              mt: 4,
              px: { xs: 3, md: 5 },
              py: 1.5,
              fontWeight: 700,
              fontSize: { xs: "1rem", md: "1.1rem" },
              background: "#f45700",
              borderRadius: "12px",
              color: "#fff",
              textTransform: "none",
              width: { xs: "100%", sm: "auto" }, // full width on mobile
            }}
            onClick={() =>
              document.getElementById("how")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Book your session now — First 25 Get 25% Off!
          </Button>

          {/* About Section */}
          <Box
            sx={{
              mt: 6,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 4,
              flexDirection: { xs: "column", md: "row" },
              textAlign: { xs: "center", md: "left" },
            }}
          >
          <Box
            component="img"
            src={saruImage}
            alt="Saru"
            sx={{
              width: { xs: 180, sm: 220, md: 350 },
              height: { xs: 180, sm: 220, md: 350 },
              borderRadius: "50%",
              objectFit: "cover",
              boxShadow: "0 6px 16px rgba(0,0,0,0.25)",
            }}
          />

            <Typography
              variant="h6"
              sx={{
                fontWeight: 500,
                fontSize: { xs: "0.95rem", md: "1.2rem" },
                color: "#011845",
                maxWidth: "600px",
              }}
            >
              I’m Saranya, creator of <b>Saru in sync</b> and an <b>IT Business Consultant</b> by profession. Through my YouTube channel and podcast, I share real, raw, and practical advice. Many of you asked for personal guidance, so I started one-to-one sessions. My mission is simple — to help you gain clarity, direction, and confidence in your studies, career, mindset, and life.
            </Typography>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}

// ---------- Section Wrapper ----------
function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Box
      id={id}
      sx={{
        minHeight: "100vh",
        py: { xs: 6, md: 10 },
        px: { xs: 2, md: 6 },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        background: "#EFEBEA",
        color: "#011845",
      }}
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h3"
            gutterBottom
            sx={{
              mb: 4,
              fontFamily: "'DM Serif Display', serif",
              fontSize: { xs: "2rem", md: "2.5rem" },
              fontWeight: 900,
            }}
          >
            {title}
          </Typography>
          {children}
        </motion.div>
      </Container>
    </Box>
  );
}

// ---------- What I Do ----------
function WhatIDo() {
  const items = [
    { title: "Educational Guidance", desc: "Study tips, time management, exam prep." },
    { title: "Career Growth", desc: "Interview prep, resume advice, career switching." },
    { title: "Mindset & Motivation", desc: "Confidence, focus, discipline." },
    { title: "Self-Development", desc: "Habits, lifestyle, personal growth." },
  ];

  return (
    <Section id="what" title="What I Do">
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", md: "repeat(4, 1fr)" },
          gap: 3,
          justifyItems: "center",
        }}
      >
        {items.map((i, index) => (
          <motion.div
            key={i.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 * index }}
            style={{ width: "100%" }}
          >
            <Card
              elevation={6}
              sx={{
                height: "100%",
                minHeight: { xs: 180, md: 220 },
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                bgcolor: "rgba(255,255,255,0.95)",
                borderRadius: "16px",
              }}
            >
              <CardContent sx={{ textAlign: "center" }}>
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  gutterBottom
                  sx={{ color: "#003366", fontSize: { xs: "1rem", md: "1.2rem" } }}
                >
                  {i.title}
                </Typography>
                <Typography variant="body2" sx={{ color: "#333", fontSize: { xs: "0.85rem", md: "0.95rem" } }}>
                  {i.desc}
                </Typography>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </Box>
    </Section>
  );
}

function How() {
  return (
    <Section id="how" title="How It Works">
      {/* Bullet Points */}
      <Box
        component="ul"
        sx={{
          mt: 4,
          mx: "auto",
          fontSize: { xs: "1rem", md: "1.2rem" },
          textAlign: { xs: "left", md: "center" },
          listStyleType: "disc",
          listStylePosition: "inside",
          maxWidth: "600px",
          pl: { xs: 2, md: 0 },
        }}
      >
        <li>Fill the booking form with your details and purpose.</li>
        <li>Scan the QR code and pay via GPay/PhonePe.</li>
        <li>Upload the payment screenshot in the form.</li>
        <li>We verify and send the meeting link by Email.</li>
      </Box>

      {/* Booking CTA */}
      <Typography
        gutterBottom
        sx={{
          mt: 4,
          maxWidth: 600,
          mx: "auto",
          fontSize: { xs: "1rem", md: "1.2rem" },
        }}
      >
        Click the button below to open the booking form and complete payment via
        UPI.
      </Typography>
      <Typography
        variant="h6"
        gutterBottom
        sx={{
          fontWeight: 600,
          fontSize: { xs: "1rem", md: "1.3rem" },
          color: "#011845",
        }}
      >
        Book your session now — First 25 Get <span style={{ textDecoration: "line-through" }}>₹199</span> ₹149 (25% OFF)
      </Typography>
      <Button
        variant="contained"
        size="large"
        sx={{
          mt: 2,
          background: "#f45700",
          textTransform: "none",
          width: { xs: "100%", sm: "auto" },
        }}
        href="https://forms.gle/Uorb2UQojku3ZaxS7"
        target="_blank"
        rel="noreferrer"
      >
        Open Booking Form
      </Button>
    </Section>
  );
}

function Footer() {
  const [openModal, setOpenModal] = useState<string | null>(null);

  const handleOpen = (modal: string) => setOpenModal(modal);
  const handleClose = () => setOpenModal(null);

  return (
    <Box
      sx={{
        py: 4,
        px: { xs: 2, md: 6 },
        textAlign: "left",
        color: "#fff",
        background: "rgba(0, 31, 63, 0.95)"
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: { xs: "center", md: "center" },
          gap: { xs: 3, md: 6 },
          justifyContent: "center"
        }}
      >
        {/* Image */}
        <Box
          component="img"
          src={sessionImage}
          alt="session"
          sx={{
            width: { xs: 180, sm: 220, md: 200 },
            height: { xs: 180, sm: 220, md: 200 },
            borderRadius: "50%",
            objectFit: "cover",
            boxShadow: "0 6px 16px rgba(0,0,0,0.25)",
          }}
        />

        {/* Links and Socials */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {/* Links */}
          <Box sx={{ display: "flex", gap: 2 }}>
            {["FAQs", "Terms", "About"].map((link) => (
              <Button
                key={link}
                sx={{
                  color: "#fff",
                  fontSize: { xs: "0.8rem", md: "0.9rem" },
                  textTransform: "none",
                }}
                onClick={() => handleOpen(link)}
              >
                {link}
              </Button>
            ))}
          </Box>

          {/* Social Icons */}
          <Box sx={{ display: "flex", gap: 1.5, justifyContent: "center" }}>
            <IconButton
              href="https://www.instagram.com/saru_insync/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: "#fff" }}
            >
              <InstagramIcon sx={{ fontSize: 32 }} /> {/* increased size */}
            </IconButton>
            <IconButton
              href="https://www.youtube.com/@SaruInSync"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: "#fff" }}
            >
              <YouTubeIcon sx={{ fontSize: 32 }} />
            </IconButton>
            <IconButton
              href="https://www.linkedin.com/in/saranya-606374260/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: "#fff" }}
            >
              <LinkedInIcon sx={{ fontSize: 32 }} />
            </IconButton>
          </Box>

        </Box>
      </Box>

      {/* Copyright */}
      <Typography
        variant="body2"
        sx={{
          fontSize: { xs: "0.75rem", md: "0.9rem" },
          mt: 4,
          textAlign: "center",
        }}
      >
        © {new Date().getFullYear()} Sync Guidance · Online guidance · Contact:{" "}
        <a href="mailto:saruinsync.connect@gmail.com" style={{ color: "inherit" }}>
          saruinsync.connect@gmail.com
        </a>
      </Typography>

      {/* Modal Dialog (keep as is) */}
      <Dialog open={Boolean(openModal)} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle>{openModal}</DialogTitle>
        <DialogContent dividers>
          {openModal === "FAQs" && (
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <Typography>
                <b>What if I don’t know what to ask?</b><br />👉 That’s okay! We’ll figure it out together.
              </Typography>
              <Typography>
                <b>How long is a session?</b><br />👉 Around 25–30 minutes.
              </Typography>
              <Typography>
                <b>Will this really help me?</b><br />👉 Yes, if you’re ready for honest and practical advice.
              </Typography>
              <Typography>
                <b>Who are these sessions for?</b><br />👉 Anyone feeling stuck in studies, career, mindset, or life direction.
              </Typography>
            </Box>
          )}
          {openModal === "Terms" && (
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <Typography><b>Purpose:</b> Sessions are intended for guidance, motivation, clarity, and personal growth only.</Typography>
              <Typography><b>Professional Advice:</b> If you are facing serious mental health issues, please consult a qualified healthcare professional.</Typography>
              <Typography><b>Payments:</b> Full payment is required at the time of booking. Refunds are not provided after the session.</Typography>
              <Typography><b>Cancellations / Rescheduling:</b> Sessions can be rescheduled at least 24 hours in advance. Late cancellations may not be refunded.</Typography>
              <Typography><b>Confidentiality:</b> All information shared during sessions is kept strictly confidential.</Typography>
              <Typography><b>Acceptance:</b> By booking a session, you acknowledge that you understand and agree to these terms.</Typography>
            </Box>
          )}
          {openModal === "About" && (
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <Typography sx={{ fontSize: { xs: "1rem", md: "1.2rem" } }}>
                I’m Saranya, creator of <b>Saru in sync</b> and an <b>IT Business Consultant</b> by profession. 
                Through my YouTube channel and podcast, I share real, raw, and practical advice.
              </Typography>
            </Box>
          )}
        </DialogContent>
      </Dialog>
    </Box>
  );
}

// ---------- App ----------
export default function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <WhatIDo />
        <How />
      </main>
      <Footer />
    </div>
  );
}
