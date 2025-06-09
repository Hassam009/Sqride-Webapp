// src/components/Footer.tsx
import React from 'react';
import { 
  Box, 
  Typography, 
  Container, 
  Grid, 
  Link, 
  IconButton,
  TextField,
  Button 
} from '@mui/material';
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  DeliveryDining, 
  LocalPhone, 
  Email,
  Schedule 
} from '@mui/icons-material';
import { styled } from '@mui/material/styles';

const GradientFooter = styled(Box)(({ theme }) => ({
  background: `linear-gradient(135deg, 
    #023047 0%, 
    #219EBC 50%, 
    #8ECAE6 100%)`,
  color: theme.palette.common.white,
  padding: theme.spacing(6, 0),
  position: 'relative',
  '&:before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '4px',
    background: `linear-gradient(90deg, 
      #FB8500 0%, 
      #FFB703 100%)`
  }
}));

const FooterLink = styled(Link)(({ theme }) => ({
  color: 'rgba(255, 255, 255, 0.9)',
  display: 'block',
  marginBottom: theme.spacing(1),
  transition: 'all 0.2s ease',
  '&:hover': {
    color: '#FFB703',
    transform: 'translateX(4px)',
    textDecoration: 'none',
    fontWeight: 500
  },
}));

const SocialIcon = styled(IconButton)(({ theme }) => ({
  color: '#023047',
  backgroundColor: 'rgba(255, 255, 255, 0.9)',
  marginRight: theme.spacing(1),
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: '#FFB703',
    color: '#023047',
    transform: 'scale(1.1)',
  },
}));

const ContactItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: theme.spacing(2),
  '& svg': {
    marginRight: theme.spacing(1.5),
    color: '#FFB703',
    fontSize: '1.2rem'
  },
  '& .MuiTypography-root': {
    color: 'rgba(255, 255, 255, 0.9)'
  }
}));

const NewsletterInput = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    color: theme.palette.common.white,
    '& fieldset': {
      borderColor: 'rgba(255, 255, 255, 0.3)',
    },
    '&:hover fieldset': {
      borderColor: 'rgba(255, 255, 255, 0.5)',
    },
  },
  '& .MuiInputLabel-root': {
    color: 'rgba(255, 255, 255, 0.7)',
  },
}));

const Footer: React.FC = () => {
  return (
    <GradientFooter component="footer">
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="space-between">
          {/* Brand & Tagline */}
          <Grid item xs={12} sm={6} md={3}>
            <Box display="flex" alignItems="center" mb={2}>
              <DeliveryDining fontSize="large" sx={{ color: '#FFB703', mr: 1.5 }} />
              <Typography variant="h5" fontWeight={700} sx={{ color: 'white' }}>
                Cheezious
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)', lineHeight: 1.6 }}>
              Delivering cheezy khushiyan to your doorstep since 2010. 
              Our passion for cheese creates unforgettable dining experiences.
            </Typography>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" fontWeight={600} gutterBottom sx={{ color: '#FFB703' }}>
              Quick Links
            </Typography>
            <Box>
              <FooterLink href="#" underline="hover">
                Home
              </FooterLink>
              <FooterLink href="#" underline="hover">
                Menu
              </FooterLink>
              <FooterLink href="#" underline="hover">
                About Us
              </FooterLink>
              <FooterLink href="#" underline="hover">
                Locations
              </FooterLink>
              <FooterLink href="#" underline="hover">
                Contact
              </FooterLink>
            </Box>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" fontWeight={600} gutterBottom sx={{ color: '#FFB703' }}>
              Contact Us
            </Typography>
            <ContactItem>
              <LocalPhone />
              <Typography variant="body2">
                +92 300 1234567
              </Typography>
            </ContactItem>
            <ContactItem>
              <Email />
              <Typography variant="body2">
                info@cheezious.com
              </Typography>
            </ContactItem>
            <ContactItem>
              <Schedule />
              <Typography variant="body2">
                11:00 AM - 11:00 PM (Daily)
              </Typography>
            </ContactItem>
          </Grid>

          {/* Social Media & Newsletter */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" fontWeight={600} gutterBottom sx={{ color: '#FFB703' }}>
              Follow Us
            </Typography>
            <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)', mb: 2 }}>
              Stay connected for cheezy updates and special offers!
            </Typography>
            <Box>
              <SocialIcon href="#" aria-label="Facebook">
                <Facebook />
              </SocialIcon>
              <SocialIcon href="#" aria-label="Instagram">
                <Instagram />
              </SocialIcon>
              <SocialIcon href="#" aria-label="Twitter">
                <Twitter />
              </SocialIcon>
            </Box>
            
            <Box mt={3}>
              <Typography variant="body2" fontWeight={500} mb={1} sx={{ color: 'white' }}>
                Subscribe to our newsletter
              </Typography>
              <Box component="form" display="flex">
                <NewsletterInput
                  variant="outlined"
                  placeholder="Your email"
                  size="small"
                  fullWidth
                  sx={{ mr: 1 }}
                  InputProps={{
                    sx: { color: 'white' }
                  }}
                />
                <Button 
                  variant="contained" 
                  sx={{ 
                    backgroundColor: '#FB8500',
                    color: '#023047',
                    whiteSpace: 'nowrap',
                    fontWeight: 'bold',
                    boxShadow: 'none',
                    '&:hover': {
                      backgroundColor: '#FFB703'
                    }
                  }}
                  type="submit"
                >
                  Join
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* Divider */}
        <Box 
          mt={4} 
          borderTop={1} 
          borderColor="rgba(255, 255, 255, 0.1)" 
          pt={3} 
          textAlign="center"
        >
          <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
            © {new Date().getFullYear()} Cheezious. All rights reserved. | 
            <Link href="#" sx={{ color: 'rgba(255, 255, 255, 0.7)', ml: 1 }} underline="hover">
              Privacy Policy
            </Link> | 
            <Link href="#" sx={{ color: 'rgba(255, 255, 255, 0.7)', ml: 1 }} underline="hover">
              Terms of Service
            </Link>
          </Typography>
        </Box>
      </Container>
    </GradientFooter>
  );
};

export default Footer;