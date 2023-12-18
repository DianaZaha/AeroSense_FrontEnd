import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Typography, Box, Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from '@mui/material';
import { Link } from 'react-router-dom';

export default function ContactUs () {
  const form = useRef();
  const [openDialog, setOpenDialog] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    // Replace 'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', and 'YOUR_PUBLIC_KEY' with your actual emailJS credentials
    emailjs.sendForm('service_f5hx9ep', 'template_5d22yp9', form.current, '3A2LUsUTi7ktdnrXB')
      .then((result) => {
        console.log(result.text);
        // Optionally, you can close the dialog after sending the email
        setOpenDialog(false);
      })
      .catch((error) => {
        console.log(error.text);
      });
  };

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <>
      <Box>
        <Button color="primary" onClick={handleOpenDialog}>
          Need Help?
        </Button>
        <Link to="/">
        <Button color="primary">
          About Us
        </Button>
        </Link>
      </Box>

      {/* Pop-up Dialog */}
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Contact Us</DialogTitle>
        <DialogContent>
          <form ref={form} onSubmit={sendEmail}>
            <TextField
              label="Your Name"
              fullWidth
              name="user_name"
            />
            <TextField
              label="Your Email"
              fullWidth
              type="email"
              name="user_email"
            />
            <TextField
              label="Your Message"
              multiline
              fullWidth
              name="message"
            />
            <Box mt={2}>
              <Button type="submit" variant="contained" color="primary">
                Send
              </Button>
            </Box>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>

      <Box mt={2}>
        <Typography variant="body2">
          &copy; 2023 Your Company. All rights reserved.
        </Typography>
      </Box>
    </>
  );
};