import React, { useEffect, useRef } from 'react';
import { Box, Container, Typography, Button, Paper, Avatar } from '@mui/material';
import { ArrowForward, LocalLaundryService, Group, Star, Schedule, EnergySavingsLeaf, Speed, SupportAgent } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';
import { keyframes } from '@emotion/react';

// ===== Animations =====
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const slideIn = keyframes`
  from { opacity: 0; transform: translateX(-30px); }
  to { opacity: 1; transform: translateX(0); }
`;

const bounceIcon = keyframes`
  0%,100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
`;

const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const pulseButton = keyframes`
  0%, 100% { transform: scale(1); box-shadow: 0 0 20px rgba(255,126,95,0.5); }
  50% { transform: scale(1.05); box-shadow: 0 0 40px rgba(255,126,95,0.7); }
`;

// ===== Animated Box Wrapper =====
const AnimatedBox = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                ref.current?.style.setProperty('animation-delay', `${delay}s`);
                ref.current?.classList.add('animate');
            }
        }, { threshold: 0.1 });

        if (ref.current) observer.observe(ref.current);
        return () => {
            if (ref.current) observer.unobserve(ref.current);
        };
    }, [delay]);

    return (
        <Box ref={ref} sx={{
            opacity: 0,
            '&.animate': { animation: `${fadeIn} 0.8s ease-out forwards` }
        }}>
            {children}
        </Box>
    );
};

// ===== Feature Card =====
const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
    <Paper elevation={3} sx={{
        p: 4,
        textAlign: 'center',
        borderRadius: 2,
        height: '100%',
        transition: 'transform 0.3s, box-shadow 0.3s',
        '&:hover': { transform: 'translateY(-10px)', boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }
    }}>
        <Avatar sx={{
            bgcolor: 'primary.main', color: 'white',
            mx: 'auto', mb: 2, width: 56, height: 56,
            animation: `${bounceIcon} 2s ease-in-out infinite`
        }}>
            {icon}
        </Avatar>
        <Typography variant="h6" gutterBottom>{title}</Typography>
        <Typography color="text.secondary">{description}</Typography>
    </Paper>
);

// ===== Testimonial Card =====
const TestimonialCard = ({ avatar, name, testimonial }: { avatar: string, name: string, testimonial: string }) => (
    <Paper elevation={3} sx={{
        p: 3, borderRadius: 2, height: '100%',
        transition: 'transform 0.3s', '&:hover': { transform: 'translateY(-5px)' }
    }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Avatar src={avatar} alt={name} sx={{ mr: 2 }} />
            <Typography variant="subtitle1" fontWeight="bold">{name}</Typography>
        </Box>
        <Typography color="text.secondary">"{testimonial}"</Typography>
    </Paper>
);

// ===== How It Works Step =====
const HowItWorksStep = ({ icon, title, description, delay }: { icon: React.ReactNode, title: string, description: string, delay: number }) => (
    <AnimatedBox delay={delay}>
        <Box sx={{ textAlign: 'center' }}>
            <Avatar sx={{ bgcolor: 'secondary.main', color: 'white', mx: 'auto', mb: 2, width: 64, height: 64, animation: `${bounceIcon} 1.5s ease-in-out infinite` }}>
                {icon}
            </Avatar>
            <Typography variant="h6" gutterBottom fontWeight="bold">{title}</Typography>
            <Typography color="text.secondary">{description}</Typography>
        </Box>
    </AnimatedBox>
);

// ===== Main Landing Page =====
const LandingPage: React.FC = () => {
    return (
        <Box sx={{ backgroundColor: '#f8f9fa' }}>
            {/* Hero Section */}
            <Box sx={{
                position: 'relative',
                overflow: 'hidden',
                py: { xs: 12, md: 20 },
                textAlign: 'center',
                color: 'white',
                background: 'linear-gradient(135deg, #667eea, #764ba2, #8e44ad)',
                backgroundSize: '400% 400%',
                animation: `${gradientAnimation} 15s ease infinite`,
                clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0% 100%)',
            }}>
                <Container>
                    <Typography variant="h2" component="h1" fontWeight="bold" gutterBottom sx={{ animation: `${fadeIn} 1s ease-in-out` }}>
                        WELCOME TO LUDIRA LAUNDRY SERVICE.
                    </Typography>
                    <Typography variant="h5" component="p" sx={{ mb: 4, opacity: 0.9, animation: `${fadeIn} 1s ease-in-out 0.2s` }}>
                        Pristine clean clothes, without the hassle. We pick up, clean, and deliver right to your door.
                    </Typography>
                    <Button component={RouterLink} to="/register" variant="contained" size="large" endIcon={<ArrowForward />} sx={{
                        px: 5, py: 2, borderRadius: '50px', fontWeight: 'bold',
                        background: 'linear-gradient(135deg, #ff7e5f, #feb47b)',
                        color: 'white',
                        animation: `${pulseButton} 2s ease-in-out infinite`,
                        '&:hover': { transform: 'scale(1.1)', boxShadow: '0 0 60px rgba(255,126,95,0.8)' }
                    }}>
                        Ready To Clean?
                    </Button>
                </Container>

                {/* Floating bubbles/icons */}
                <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
                    {[...Array(15)].map((_, i) => (
                        <Box key={i} sx={{
                            position: 'absolute',
                            width: `${20 + Math.random() * 30}px`,
                            height: `${20 + Math.random() * 30}px`,
                            backgroundColor: 'rgba(255,255,255,0.3)',
                            borderRadius: '50%',
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            animation: `${keyframes`
                              0% { transform: translateY(0px) rotate(0deg); }
                              50% { transform: translateY(-30px) rotate(180deg); }
                              100% { transform: translateY(0px) rotate(360deg); }
                            `} ${5 + Math.random() * 5}s ease-in-out infinite`,
                        }} />
                    ))}
                </Box>
            </Box>

            {/* Features Section */}
            <Container sx={{ py: 10, mt: -8 }}>
                <Box sx={{ display: 'flex', gap: 4, flexWrap: 'wrap', justifyContent: 'center' }}>
                    <AnimatedBox delay={0}>
                        <Box sx={{ width: { xs: '100%', md: '300px' } }}>
                            <FeatureCard icon={<LocalLaundryService />} title="Pristine Cleaning" description="Eco-friendly products to ensure your clothes are sparkling clean." />
                        </Box>
                    </AnimatedBox>
                    <AnimatedBox delay={0.2}>
                        <Box sx={{ width: { xs: '100%', md: '300px' } }}>
                            <FeatureCard icon={<Group />} title="Dedicated Team" description="Professional team handles your laundry with utmost care." />
                        </Box>
                    </AnimatedBox>
                    <AnimatedBox delay={0.4}>
                        <Box sx={{ width: { xs: '100%', md: '300px' } }}>
                            <FeatureCard icon={<Star />} title="Customer First" description="Satisfaction is our priority with seamless service." />
                        </Box>
                    </AnimatedBox>
                </Box>
            </Container>

            {/* How It Works Section */}
            <Box sx={{ py: 10, backgroundColor: 'white' }}>
                <Container>
                    <Typography variant="h4" component="h2" fontWeight="bold" align="center" gutterBottom>How It Works</Typography>
                    <Typography align="center" color="text.secondary" sx={{ mb: 6, maxWidth: '600px', mx: 'auto' }}>
                        Getting your laundry done has never been easier. Just a few simple steps.
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 4, flexWrap: 'wrap', justifyContent: 'center' }}>
                        <HowItWorksStep icon={<Schedule />} title="1. Schedule Pickup" description="Choose convenient time & place." delay={0.1} />
                        <HowItWorksStep icon={<LocalLaundryService />} title="2. We Clean" description="Best products & techniques." delay={0.3} />
                        <HowItWorksStep icon={<Speed />} title="3. Fast Delivery" description="Receive fresh laundry quickly." delay={0.5} />
                    </Box>
                </Container>
            </Box>

            {/* Testimonials Section */}
            <Box sx={{ py: 10 }}>
                <Container>
                    <Typography variant="h4" fontWeight="bold" align="center" gutterBottom>What Our Clients Say</Typography>
                    <Box sx={{ display: 'flex', gap: 4, flexWrap: 'wrap', justifyContent: 'center', mt: 4 }}>
                        <TestimonialCard avatar="" name="Atis K." testimonial="Absolutely amazing service! My clothes never looked better." />
                        <TestimonialCard avatar="" name="lau D." testimonial="Reliable and fast. Highly recommended!" />
                        <TestimonialCard avatar="" name="Sophia L." testimonial="The team is professional and friendly." />
                    </Box>
                </Container>
            </Box>
        </Box>
    );
};

export default LandingPage;
