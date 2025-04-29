import { ReactTyped } from 'react-typed';
import React from "react";
import { Container, Typography, Button, Grid, Card, CardContent, Box, Paper } from "@mui/material";
import { GitHub, LinkedIn, Email, Code, Laptop, Memory, Storage } from "@mui/icons-material";

const HomePage = () => {
  const projects = [
    {
      title: "Expense Tracker & Debt Repayment Calculator",
      description: "Tracks expenses and calculates debt-free timeline, with AI-powered insights in progress.",
      link: "https://github.com/Abdul7569/expense_tracker"
    },
    {
      title: "Project Accommodation",
      description: "A platform for international students to find housing, swap rooms, and list items for sale. Frontend is functional, backend and AI integration in progress.",
      link: "https://github.com/Abdul7569/project_accommodation"
    },
    {
      title: "Spam Detection using Naive Bayes",
      description: "Implements a spam detection system using Naive Bayes classifier trained on SMS messages.",
      link: "https://github.com/Abdul7569/spam_detection-using-NB"
    },
    {
      title: "Smart Watch Health Data Analysis",
      description: "Analyzes smart watch data using visualization libraries like Matplotlib and Seaborn.",
      link: "https://github.com/Abdul7569/smartwatch_dataanalysis"
    },
    {
      title: "Web application for spam detection",
      description: "A machine learning-powered web app that accurately classifies messages as spam or not using TF-IDF and Naive Bayes, helping users filter unwanted content effectively.",
      link: "https://github.com/Abdul7569/spam_detection_app",
      liveLink: "https://spam-detection-app-rhpb.vercel.app/"
    }
  ];

  return (
    <Container sx={{ textAlign: "center", mt: 5 }}>
      <Typography variant="h3" gutterBottom>
        Hi, I'm Abdul Kalam Pulicharla
      </Typography>
      <Typography variant="h5" sx={{ color: "black", mt: 1 }}>
        <ReactTyped
          strings={["Web Developer", "AI Enthusiast", "ML Enthusiast"]}
          typeSpeed={60}
          backSpeed={40}
          loop
        />
      </Typography>

      {/* Projects Section */}
      <Typography id="projects" variant="h4" sx={{ mt: 5 }}>
        Projects
      </Typography>
      <Grid container spacing={3} sx={{ mt: 3 }}>
        {projects.map((project, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <Typography variant="h5">{project.title}</Typography>
                  <Typography color="text.secondary" sx={{ mt: 1 }}>
                    {project.description}
                  </Typography>
                </div>
                <Button
                  variant="contained"
                  color="primary"
                  href={project.link}
                  sx={{ mt: 2 }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on GitHub
                </Button>

                {/* Add Visit Live App button below View on GitHub */}
                {project.liveLink && (
                  <Button
                    variant="contained"
                    color="secondary"
                    href={project.liveLink}
                    sx={{ mt: 2 }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit Live App
                  </Button>
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Skills Section */}
      <Box sx={{ mt: 5 }}>
        <Typography id="skills" variant="h4" sx={{ fontWeight: 'bold', textAlign: 'left' }}>
          Skills
        </Typography>

        <Grid container spacing={4} sx={{ mt: 3 }}>
          {/* Programming Languages & Databases */}
          <Grid item xs={12} sm={6}>
            <Paper elevation={3} sx={{ p: 2 }}>
              <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', fontWeight: 'bold' }}>
                <Code sx={{ mr: 2 }} /> 
                <span>Programming Languages & Databases</span>
              </Typography>
              <Typography variant="body1" sx={{ mt: 1 }}>
                Python, Java, SQL
              </Typography>
            </Paper>
          </Grid>

          {/* Tools & Libraries */}
          <Grid item xs={12} sm={6}>
            <Paper elevation={3} sx={{ p: 2 }}>
              <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', fontWeight: 'bold' }}>
                <Memory sx={{ mr: 2 }} />
                <span>Tools & Libraries</span>
              </Typography>
              <Typography variant="body1" sx={{ mt: 1 }}>
                Machine Learning (Scikit-learn, Pandas, NumPy, TensorFlow, Keras), GitHub, Microsoft Excel, Microsoft PowerPoint, Tableau
              </Typography>
            </Paper>
          </Grid>

          {/* Web Development */}
          <Grid item xs={12} sm={6}>
            <Paper elevation={3} sx={{ p: 2 }}>
              <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', fontWeight: 'bold' }}>
                <Laptop sx={{ mr: 2 }} />
                <span>Web Development</span>
              </Typography>
              <Typography variant="body1" sx={{ mt: 1 }}>
                HTML, CSS, JavaScript, Flask, Node.js, Bootstrap
              </Typography>
            </Paper>
          </Grid>

          {/* Operating Systems */}
          <Grid item xs={12} sm={6}>
            <Paper elevation={3} sx={{ p: 2 }}>
              <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', fontWeight: 'bold' }}>
                <Storage sx={{ mr: 2 }} />
                <span>Operating Systems</span>
              </Typography>
              <Typography variant="body1" sx={{ mt: 1 }}>
                Windows, Linux
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>

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
            href="https://www.linkedin.com/in/abdul-kalam-pulicharla-1876541b3/"
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
            href="https://mail.google.com/mail/?view=cm&fs=1&to=abdulkalampulicharla@gmail.com"
          >
            Email Me
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomePage;
