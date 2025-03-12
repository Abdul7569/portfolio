import React from "react";
import { Container, Typography, Button, Grid, Card, CardContent } from "@mui/material";
import { GitHub, LinkedIn, Email } from "@mui/icons-material";

const HomePage = () => {
  return (
    <Container sx={{ textAlign: "center", mt: 5 }}>
      <Typography variant="h3" gutterBottom>
        Hi, I'm Abdul Kalam Pulicharla
      </Typography>
      <Typography variant="h5" color="text.secondary">
        Data Scientist | AI & ML Enthusiast
      </Typography>

      {/* Projects Section */}
      <Typography id="projects" variant="h4" sx={{ mt: 5 }}>
        Projects
      </Typography>
      <Grid container spacing={3} sx={{ mt: 3 }}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h5">Fraud Detection System</Typography>
              <Typography color="text.secondary">Using ML models to detect fraud in transactions.</Typography>
              <Button variant="contained" color="primary" href="https://github.com/Abdul7569">
                View on GitHub
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h5">Stack Overflow Tags Prediction</Typography>
              <Typography color="text.secondary">Predicting relevant tags using NLP and ML.</Typography>
              <Button variant="contained" color="primary" href="https://github.com/Abdul7569">
                View on GitHub
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Skills Section */}
      <Typography id="skills" variant="h4" sx={{ mt: 5 }}>
        Skills
      </Typography>
      <Typography variant="body1">
        Python, Machine Learning, Deep Learning, NLP, Computer Vision, SQL, Pandas, NumPy, Flask, React.js
      </Typography>

      {/* Contact Section */}
      <Typography id="contact" variant="h4" sx={{ mt: 5 }}>
        Contact
      </Typography>
      <Grid container justifyContent="center" spacing={2}>
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            startIcon={<LinkedIn />}
            href="https://www.linkedin.com/in/your-linkedin/"
            target="_blank"
          >
            LinkedIn
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="secondary"
            startIcon={<GitHub />}
            href="https://github.com/Abdul7569"
            target="_blank"
          >
            GitHub
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="error"
            startIcon={<Email />}
            href="mailto:your-email@gmail.com"
          >
            Email Me
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomePage;
