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
  Dialog,
  DialogTitle,
  DialogContent,
} from "@mui/material";
import { motion } from "framer-motion";
import saruInSyncLogo from "./assets/saru-in-sync-name-logo.png";
import saruImage2 from "./assets/Saru.jpg";
import saruImage from "./assets/saru1.jpg";
import saruImage1 from "./assets/saru2.jpg";
import sessionImage from "./assets/session-logo.jpg";
import educationImage from "./assets/education.jpg";
import careerImage from "./assets/career.jpeg";
import motivationImage from "./assets/motivation.jpg";
import personalDevelopment from "./assets/personalDevelopment.jpg";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PodcastsIcon from '@mui/icons-material/Podcasts';

// ---------- Sections Info ----------
const sections = [
  { id: "home", label: "Home" },
  { id: "what", label: "What I do" },
  { id: "how", label: "How it works" },
];

// ---------- Navbar ----------
function Navbar() {
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

// ---------- Hero ----------
function Hero() {
  return (
    <Box
      id="home"
      sx={{
        display: "flex",
        mt: { xs: 4, md: 6 },
        alignItems: "center",
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
              color: "#f45700" ,
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
            From studies and career to mindset, motivation, and self growth -
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
              background: "#011845",
              borderRadius: 8,
              color: "#fff",
              textTransform: "none",
              width: { xs: "100%", sm: "auto" }, // full width on mobile
            }}
            onClick={() =>
              document.getElementById("how")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Book Your Session Now – Just ₹99 (Launch Price)
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
                width: { xs: 200, sm: 220, md: 500 },
                height: { xs: 200, sm: 220, md: 500 },
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
                background: "#fac9acff",
                padding: "12px 16px",
                borderTopLeftRadius: "20px",
                borderTopRightRadius: "20px",
                borderBottomRightRadius: "20px",
                maxWidth: "600px",
              }}
            >
              I’m Saranya, creator of <b>Saru in sync</b> and an <b>IT Software Engineer</b> by profession. Through my YouTube channel and podcast, I share real, raw, and practical advice. Many of you asked for personal guidance, so I started one-to-one sessions. My mission is simple - to help you gain clarity, direction, and confidence in your studies, career, mindset, and life.
            </Typography>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}

// ---------- Section Wrapper ----------
function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <Box
      id={id}
      sx={{
        py: { xs: 2, md: 4 },   // consistent vertical padding
        px: { xs: 2, md: 4 },
        textAlign: "center",
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
            sx={{
              mb: { xs: 3, md: 5 },
              fontSize: { xs: "2rem", md: "3.5rem" },
              fontFamily: "'DM Serif Display', serif",
              color: "#011845",
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
    { title: "Educational Guidance", desc: "Study tips, time management, exam prep.", img: educationImage },
    { title: "Career Growth", desc: "Interview prep, resume advice, career switching.", img: careerImage },
    { title: "Mindset & Motivation", desc: "Confidence, focus, discipline.", img: motivationImage },
    { title: "Self-Development", desc: "Habits, lifestyle, personal growth.", img: personalDevelopment },
  ];

  return (
    <Section id="what" title="What I Do">
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
          gap: 3,
          alignItems: "center",
        }}
      >
        {/* First Image */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ gridColumn: "1 / 2", justifySelf: "center" }}
        >
          <Box
            component="img"
            src={saruImage1}
            alt="session"
            sx={{
              width: { xs: 200, sm: 220, md: 400 },
              height: { xs: 200, sm: 220, md: 400 },
              borderRadius: "50%",
              objectFit: "cover",
              boxShadow: "0 6px 16px rgba(0,0,0,0.25)",
            }}
          />
        </motion.div>

        {/* First row cards */}
        {items.slice(0, 2).map((i, index) => (
          <motion.div
            key={i.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 * index }}
          >
            <Card
              elevation={6}
              sx={{
                height: "100%",
                minHeight: { xs: 200, md: 220 },
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                borderRadius: "16px",
                backgroundImage: `url(${i.img})`,   // 👈 dynamic background image
                backgroundSize: "cover",
                backgroundPosition: "center",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Overlay for readability */}
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  bgcolor: "rgba(0,0,0,0.7)", // white semi-transparent overlay
                  zIndex: 1,
                }}
              />

              <CardContent sx={{ textAlign: "center", position: "relative", zIndex: 2 }}>
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  gutterBottom
                  sx={{ color: "#ffffffff", fontSize: { xs: "2rem", md: "2rem" }, fontFamily: "'DM Serif Display', serif" }}
                >
                  {i.title}
                </Typography>
                <Typography
                  variant="body1"
                  fontWeight="bold"
                  sx={{ color: "#ffffffff", fontSize: { xs: "1rem", md: "1.2rem" } }}
                >
                  {i.desc}
                </Typography>
              </CardContent>
            </Card>
          </motion.div>
        ))}

        {/* Second row cards */}
        {items.slice(2, 4).map((i, index) => (
          <motion.div
            key={i.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 * (index + 2) }}
          >
            <Card
              elevation={6}
              sx={{
                height: "100%",
                minHeight: { xs: 200, md: 220 },
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                borderRadius: "16px",
                backgroundImage: `url(${i.img})`,   // 👈 dynamic background image
                backgroundSize: "cover",
                backgroundPosition: "center",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Overlay for readability */}
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  bgcolor: "rgba(0,0,0,0.7)", // white semi-transparent overlay
                  zIndex: 1,
                }}
              />

              <CardContent sx={{ textAlign: "center", position: "relative", zIndex: 2 }}>
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  gutterBottom
                  sx={{ color: "#ffffffff", fontSize: { xs: "2rem", md: "2rem" }, fontFamily: "'DM Serif Display', serif" }}
                >
                  {i.title}
                </Typography>
                <Typography
                  variant="body1"
                  fontWeight="bold"
                  sx={{ color: "#ffffffff", fontSize: { xs: "1rem", md: "1.2rem" } }}
                >
                  {i.desc}
                </Typography>
              </CardContent>
            </Card>
          </motion.div>
        ))}

        {/* Second Image */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <Box
            component="img"
            src={saruImage2}
            alt="session"
            sx={{
              width: { xs: 200, sm: 220, md: 400 },
              height: { xs: 200, sm: 220, md: 400 },
              borderRadius: "50%",
              objectFit: "cover",
              boxShadow: "0 6px 16px rgba(0,0,0,0.25)",
            }}
          />
        </motion.div>
      </Box>
    </Section>
  );
}

function HowItWorks() {
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
          maxWidth: 500,
          color: "#f45700",
          mx: "auto",
          fontSize: { xs: "1rem", md: "1.2rem" },
        }}
      >
        Click the button below to open the booking form and complete payment via UPI.
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
        Book Now & Unlock Clarity – ₹99 Launch Offer
      </Typography>
      <Button
        variant="contained"
        size="large"
        sx={{
          mt: 2,
          mb: { xs: 2.5 },
          background: "#f45700",
          textTransform: "none",
          borderRadius: 8,
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
        py: 2,
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
            width: { xs: 200, sm: 220, md: 150 },
            height: { xs: 200, sm: 220, md: 150 },
            borderRadius: "50%",
            objectFit: "cover",
            boxShadow: "0 6px 16px rgba(0,0,0,0.25)",
          }}
        />

        {/* Links and Socials */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {/* Links */}
          <Box sx={{ display: "flex", gap: 2 }}>
            {["FAQs", "Terms", "About", "Feedback"].map((link) => (
              link === "Feedback" ? 
              <Button
                key={link}
                component="a"
                href="https://forms.gle/mfKj3A27DV2xmcCd6"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: "#fff",
                  fontSize: { xs: "0.8rem", md: "0.9rem" },
                  textTransform: "none",
                }}
              >
                {link}
              </Button>
              :
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
              href="https://open.spotify.com/show/2PVSJSbp7uAlWhrKmHL2LJ?si=88b144a0054343f0"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: "#fff" }}
            >
              <PodcastsIcon sx={{ fontSize: 32 }} /> {/* increased size */}
            </IconButton>
            <IconButton
              href="https://www.linkedin.com/in/saranya-606374260/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: "#fff" }}
            >
              <LinkedInIcon sx={{ fontSize: 32 }} />
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
              href="https://www.instagram.com/saru_insync/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: "#fff" }}
            >
              <InstagramIcon sx={{ fontSize: 32 }} /> {/* increased size */}
            </IconButton>
          </Box>

        </Box>
      </Box>

      {/* Copyright */}
      <Typography
        variant="body1"
        sx={{
          fontSize: { xs: "0.75rem", md: "0.9rem" },
          mt: 4,
          textAlign: "center",
        }}
      >
        © {new Date().getFullYear()} Connect with saru · Online guidance · Contact:{" "}
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
                <b>What can I expect from a session?</b><br />👉 A one-to-one conversation focused on your challenges, giving you clarity and practical next steps.
              </Typography>
              <Typography>
                <b>How long is a session?</b><br />👉 Around 25–30 minutes.
              </Typography>
              <Typography>
                <b>Will this really help me?</b><br />👉 Yes, if you’re ready for honest and practical advice.
              </Typography>
              {/* <Typography>
                <b>How many sessions do I need?</b><br />👉 Some people find clarity in just one session, while others prefer a series of sessions for continued support. It depends on your situation - you’re free to decide after your first experience.
              </Typography> */}
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
                I’m Saranya, creator of <b>Saru in sync</b> and an <b>IT Software Engineer</b> by profession. 
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
    <div style={{background: "#EFEBEA"}}>
      <Navbar />
      <main>
        <Hero />
        <WhatIDo />
        <HowItWorks />
      </main>
      <Footer />
    </div>
  );
}
