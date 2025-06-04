import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Container,
} from '@mui/material';

import dispatchImage from '../images/businesscard.png';
import haulingImage from '../images/newtruckstone.jpg';
import startupImage from '../images/logohdf.jpg';

const services = [
  {
    title: 'Getting Started in Trucking',
    description:
      'Dreaming of hitting the road as your own boss? HDF Hauling helps you navigate the journey to a successful trucking business. From permits to planning, we’re with you every step of the way.',
    points: [
      'Business Startup Assistance: Guidance on obtaining your CDL, forming your LLC, and acquiring necessary permits and insurance.',
      'Fleet Consulting: Advice on purchasing your first truck and scaling your operations.',
      'Expert Industry Knowledge: Insights into market trends, load opportunities, and best practices for success.',
      'Ongoing Support: Stay ahead with tools, resources, and mentorship tailored for new trucking entrepreneurs.',
    ],
    image: startupImage,
  },
  {
    title: 'Fleet Management Services',
    description:
      "Effortlessly keep your trucks moving and earning with HDF Hauling's expert dispatching services. We handle everything from load planning to negotiating the best rates, so you can focus on the road.",
    points: [
      'Maximized Earnings: We secure high-paying loads through strategic partnerships and expert negotiation.',
      '24/7 Support: Our dispatch team is always available to ensure smooth operations, no matter the time or location.',
      'Stress-Free Paperwork: Let us handle rate confirmations, broker communications, and compliance tasks for you.',
      'Personalized Solutions: Customized dispatch strategies tailored to your trucking business needs.',
    ],
    image: dispatchImage,
  },
  {
    title: 'Hauling Services',
    description:
      "Trust HDF Hauling for reliable, on-time delivery of freight across the country. Whether it's local or long-distance, we deliver excellence with every load.",
    points: [
      'On-Time Delivery: Your freight arrives on schedule, every time.',
      'Wide Range of Freight: We haul Hotshot Loads, flatbed with ramps, and specialty loads with care and precision.',
      'Modern Fleet: Our trucks are equipped with advanced tracking technology to ensure secure and efficient transit.',
      'Customer-First Approach: Exceptional communication and service for shippers and receivers alike.',
    ],
    image: haulingImage,
  },
];

const Services = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 4, background: 'black' }}>
      <Typography
        color="white"
        variant="h4"
        component="h1"
        textAlign="center"
        sx={{ marginBottom: 4, fontWeight: 'bold' }}
      >
        Our Services
      </Typography>
      <Grid container spacing={4}>
        {services.map((service, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={service.image}
                alt={service.title}
                sx={{ objectFit: 'cover' }}
              />
              <CardContent>
                <Typography variant="h5" component="h2" gutterBottom>
                  {service.title}
                </Typography>
                <Typography variant="body2" paragraph>
                  {service.description}
                </Typography>
                <Box component="ul" sx={{ pl: 2 }}>
                  {service.points.map((point, idx) => (
                    <li key={idx}>
                      <Typography variant="body2">{point}</Typography>
                    </li>
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Services;
