import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Grid } from '@mui/material';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
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
    email: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .send(
        'service_1icasl7', // Replace with your Service ID
        'template_gmtd4sq', // Replace with your Template ID
        formData,
        '8CGKi5KtVlMl75CCi' // Replace with your Public Key
      )
      .then(
        (response) => {
          console.log(
            'Email sent successfully!',
            response.status,
            response.text
          );
          alert('Form submitted successfully!');
          setFormData({
            firstName: '',
            lastName: '',
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
            email: '',
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
        margin: '0 auto',
        padding: 4,
      }}
    >
      <Typography variant="h4" gutterBottom>
        Driver Info Form
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          {/* First Name and Last Name */}
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
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Email Address"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Grid>

          {/* Phone, City/State */}
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Phone"
              name="phone"
              type="number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="City and State"
              name="cityState"
              value={formData.cityState}
              onChange={handleChange}
            />
          </Grid>

          {/* MC Number and DOT Number */}
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="MC Number"
              name="mcNumber"
              type="number"
              value={formData.mcNumber}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="DOT Number"
              name="dotNumber"
              type="number"
              value={formData.dotNumber}
              onChange={handleChange}
            />
          </Grid>

          {/* Authority Time and Costs */}
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Time Authority Active"
              name="authorityTime"
              value={formData.authorityTime}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Lowest Cost Per Mile"
              name="lowestCostPerMile"
              value={formData.lowestCostPerMile}
              onChange={handleChange}
            />
          </Grid>
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

          {/* Trailer Dimensions, Max Load */}
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Trailer Dimensions"
              name="trailerDimensions"
              value={formData.trailerDimensions}
              onChange={handleChange}
            />
          </Grid>
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
