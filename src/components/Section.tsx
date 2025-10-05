import { Box, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";


export default function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
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
  