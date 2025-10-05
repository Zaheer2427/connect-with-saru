import { Box, Button, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import saruImage from "../assets/saru1.jpg";



export default function Hero() {
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
            Book Your Session Now – Just ₹149
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
              <p>I’m Saranya, creator of <b>Saru in sync</b> and an <b>IT Software Engineer</b> by profession. With a strong academic foundation in <b>Bsc IT., MBA (ISM) .,</b> I combine my technical background with real-life experiences to guide and support others.</p>
              <p>Through my YouTube channel and podcast, I share real, raw, and practical advice. Many of you reached out for deeper guidance, so I now offer personal sessions designed to help you gain clarity, direction, and confidence - whether in your studies, career, mindset, or life.</p>
              <p>My mission is simple: to help you unlock your potential, overcome roadblocks, and take the next step with confidence.</p>
            </Typography>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}