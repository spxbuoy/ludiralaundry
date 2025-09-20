"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  ArrowForward,
  LocalLaundryService,
  Group,
  Star,
  Schedule,
  Speed,
  WhatsApp,
} from "@mui/icons-material";
import {
  Box,
  Container,
  Typography,
  Button,
  Paper,
  Avatar,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

// === Feature Card ===
const FeatureCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
}> = ({ icon, title, description }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <Paper
      elevation={4}
      sx={{
        p: 4,
        textAlign: "center",
        borderRadius: 3,
        height: "100%",
      }}
    >
      <Avatar
        sx={{
          bgcolor: "primary.main",
          color: "white",
          mx: "auto",
          mb: 2,
          width: 56,
          height: 56,
        }}
      >
        {icon}
      </Avatar>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Typography color="text.secondary">{description}</Typography>
    </Paper>
  </motion.div>
);

// === Testimonial Card ===
const TestimonialCard: React.FC<{
  avatar: string;
  name: string;
  testimonial: string;
}> = ({ avatar, name, testimonial }) => (
  <motion.div whileHover={{ scale: 1.03 }}>
    <Paper
      elevation={3}
      sx={{
        p: 3,
        borderRadius: 2,
        height: "100%",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
        <Avatar src={avatar} alt={name} sx={{ mr: 2 }} />
        <Typography variant="subtitle1" fontWeight="bold">
          {name}
        </Typography>
      </Box>
      <Typography color="text.secondary">"{testimonial}"</Typography>
    </Paper>
  </motion.div>
);

// === Main Landing Page ===
const LandingPage: React.FC = () => {
  return (
    <Box sx={{ backgroundColor: "#f8f9fa", position: "relative" }}>
      {/* Hero Section */}
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          py: { xs: 12, md: 20 },
          textAlign: "center",
          color: "white",
          background: "linear-gradient(135deg, #667eea, #764ba2, #8e44ad)",
        }}
      >
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <Typography
              variant="h2"
              component="h1"
              fontWeight="bold"
              gutterBottom
            >
              WELCOME TO LUDIRA LAUNDRY SERVICE
            </Typography>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <Typography
              variant="h5"
              component="p"
              sx={{ mb: 4, opacity: 0.9 }}
            >
              Pristine clean clothes, without the hassle. We pick up, clean, and
              deliver right to your door.
            </Typography>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }}>
            <Button
              component={RouterLink}
              to="/register"
              variant="contained"
              size="large"
              endIcon={<ArrowForward />}
              sx={{
                px: 5,
                py: 2,
                borderRadius: "50px",
                fontWeight: "bold",
                background:
                  "linear-gradient(135deg, #ff7e5f, #feb47b)",
                color: "white",
              }}
            >
              Ready To Clean?
            </Button>
          </motion.div>
        </Container>
      </Box>

      {/* Features */}
      <Container sx={{ py: 10, mt: -8 }}>
        <Box
          sx={{
            display: "flex",
            gap: 4,
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <FeatureCard
            icon={<LocalLaundryService />}
            title="Pristine Cleaning"
            description="Eco-friendly products to ensure your clothes are sparkling clean."
          />
          <FeatureCard
            icon={<Group />}
            title="Dedicated Team"
            description="Professional team handles your laundry with utmost care."
          />
          <FeatureCard
            icon={<Star />}
            title="Customer First"
            description="Satisfaction is our priority with seamless service."
          />
        </Box>
      </Container>

      {/* How It Works */}
      <Box sx={{ py: 10, backgroundColor: "white" }}>
        <Container>
          <Typography
            variant="h4"
            component="h2"
            fontWeight="bold"
            align="center"
            gutterBottom
          >
            How It Works
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: 4,
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <FeatureCard
              icon={<Schedule />}
              title="1. Schedule Pickup"
              description="Choose convenient time & place."
            />
            <FeatureCard
              icon={<LocalLaundryService />}
              title="2. We Clean"
              description="Best products & techniques."
            />
            <FeatureCard
              icon={<Speed />}
              title="3. Fast Delivery"
              description="Receive fresh laundry quickly."
            />
          </Box>
        </Container>
      </Box>

      {/* Testimonials */}
      <Box sx={{ py: 10 }}>
        <Container>
          <Typography
            variant="h4"
            fontWeight="bold"
            align="center"
            gutterBottom
          >
            What Our Clients Say
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: 4,
              flexWrap: "wrap",
              justifyContent: "center",
              mt: 4,
            }}
          >
            <TestimonialCard
              avatar=""
              name="Atis K."
              testimonial="Absolutely amazing service! My clothes never looked better."
            />
            <TestimonialCard
              avatar=""
              name="lau D."
              testimonial="Reliable and fast. Highly recommended!"
            />
            <TestimonialCard
              avatar=""
              name="Sophia L."
              testimonial="The team is professional and friendly."
            />
          </Box>
        </Container>
      </Box>

      {/* Floating WhatsApp Widget */}
      <motion.a
        href="https://wa.me/254112011036"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-widget"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 300 }}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          backgroundColor: "#25D366",
          color: "white",
          borderRadius: "50%",
          width: "60px",
          height: "60px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
          zIndex: 1000,
        }}
      >
        <WhatsApp fontSize="large" />
      </motion.a>
    </Box>
  );
};

export default LandingPage;
