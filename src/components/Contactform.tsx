// src/components/ContactForm.tsx
import React, { useState, useEffect } from 'react';
import { Box, TextField, Button, Typography, Grid } from '@mui/material';
import emailjs from '@emailjs/browser';

const ContactForm: React.FC = () => {
  // 1) Initialize EmailJS with your Public Key (User ID) once
  useEffect(() => {
    emailjs.init('8CGKi5KtVlMl75CCi');
    // ← Your public key from EmailJS dashboard
  }, []);

  // 2) State holds all template variables as defined in your EmailJS template
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    cityState: '',
    mcNumber: '',
    dotNumber: '',
    authorityTime: '',
    lowestCostPerMile: '',
    furthestDeadHead: '',
    truckDetails: '',
    trailerDimensions: '',
    maxLoad: '',
    additionalInfo: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // 3) Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // 4) On form submission, send via emailjs.send(...)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    console.log('Sending to EmailJS:', formData);

    emailjs
      .send(
        'service_mr5y8f7', // ← Your Service ID
        'template_gmtd4sq', // ← Your Template ID
        formData // ← formData keys must match template variables
        // No need to pass public key here because we called init()
      )
      .then(
        (response) => {
          console.log('Email sent:', response.status, response.text);
          alert('Form submitted successfully!');
          // Reset all fields
          setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            cityState: '',
            mcNumber: '',
            dotNumber: '',
            authorityTime: '',
            lowestCostPerMile: '',
            furthestDeadHead: '',
            truckDetails: '',
            trailerDimensions: '',
            maxLoad: '',
            additionalInfo: '',
          });
          setIsSubmitting(false);
        },
        (error) => {
          console.error('Error sending email:', error);
          alert('Failed to submit the form. Please try again.');
          setIsSubmitting(false);
        }
      );
  };

  return (
    <Box
      sx={{
        maxWidth: '800px',
        mx: 'auto',
        p: 4,
        bgcolor: 'white',
        color: 'black',
      }}
    >
      <Typography variant="h4" gutterBottom>
        Get More Information
      </Typography>

      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          {/* First Name */}
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </Grid>

          {/* Last Name */}
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </Grid>

          {/* Email Address */}
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Email Address"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Grid>

          {/* Phone */}
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </Grid>

          {/* City and State */}
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="City and State"
              name="cityState"
              value={formData.cityState}
              onChange={handleChange}
            />
          </Grid>

          {/* MC Number */}
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="MC Number"
              name="mcNumber"
              type="text"
              value={formData.mcNumber}
              onChange={handleChange}
            />
          </Grid>

          {/* DOT Number */}
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="DOT Number"
              name="dotNumber"
              type="text"
              value={formData.dotNumber}
              onChange={handleChange}
            />
          </Grid>

          {/* Authority Time */}
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Time Authority Active"
              name="authorityTime"
              value={formData.authorityTime}
              onChange={handleChange}
            />
          </Grid>

          {/* Lowest Cost Per Mile */}
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Lowest Cost Per Mile"
              name="lowestCostPerMile"
              value={formData.lowestCostPerMile}
              onChange={handleChange}
            />
          </Grid>

          {/* Furthest Dead Head */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Furthest Dead Head"
              name="furthestDeadHead"
              value={formData.furthestDeadHead}
              onChange={handleChange}
            />
          </Grid>

          {/* Truck Details */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Truck Details (Type, Make, Model, Year)"
              name="truckDetails"
              value={formData.truckDetails}
              onChange={handleChange}
            />
          </Grid>

          {/* Trailer Dimensions */}
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Trailer Dimensions"
              name="trailerDimensions"
              value={formData.trailerDimensions}
              onChange={handleChange}
            />
          </Grid>

          {/* Max Load */}
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Max Load (lbs)"
              name="maxLoad"
              value={formData.maxLoad}
              onChange={handleChange}
            />
          </Grid>

          {/* Additional Info */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Additional Info"
              name="additionalInfo"
              value={formData.additionalInfo}
              onChange={handleChange}
              multiline
              rows={4}
            />
          </Grid>
        </Grid>

        {/* Submit Button */}
        <Box mt={4}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default ContactForm;
