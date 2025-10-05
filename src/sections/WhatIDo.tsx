import { Box, Card, CardContent, Typography } from "@mui/material";
import { motion } from "framer-motion";
import Section from "../components/Section";
import saruImage1 from "../assets/saru2.jpg";
import saruImage2 from "../assets/Saru.jpg";
import educationImage from "../assets/education.jpg";
import careerImage from "../assets/career.jpeg";
import motivationImage from "../assets/motivation.jpg";
import personalDevelopment from "../assets/personalDevelopment.jpg";


export default function WhatIDo() {
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