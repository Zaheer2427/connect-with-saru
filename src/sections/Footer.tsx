import { Box, Button, Dialog, DialogContent, DialogTitle, IconButton, Typography } from "@mui/material";
import { useState } from "react";
import sessionImage from "../assets/session-logo.jpg";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PodcastsIcon from '@mui/icons-material/Podcasts';

export default function Footer() {
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
              <Typography><b>Cancellations / Rescheduling:</b> Sessions can be rescheduled at least 5 hours in advance. Late cancellations may not be refunded.</Typography>
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