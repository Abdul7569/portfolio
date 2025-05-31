import React, { useState } from "react";
import {
  Container,
  Typography,
  Box,
  Button,
  Grid,
  Paper,
  Switch
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { ReactTyped } from "react-typed";
import Particles from "react-tsparticles";
import {
  LinkedIn,
  GitHub,
  Email,
  Build,
  Memory,
  Code,
  Autorenew
} from "@mui/icons-material";

const HomePage = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [showWings, setShowWings] = useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light"
    }
  });

  const handleToggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const handleToggleProjects = () => {
    setShowWings(!showWings);
  };
  

  return (
    <ThemeProvider theme={theme}>
      <Particles
        id="tsparticles"
        options={{
          fullScreen: { enable: true, zIndex: -1 },
          background: {
            color: { value: darkMode ? "#0d1117" : "#f0f0f0" }
          },
          fpsLimit: 60,
          particles: {
            number: { value: 30, density: { enable: true, area: 800 } },
            color: { value: ["#00eaff", "#ff4ecd", "#ffc93c"] },
            shape: { type: "circle" },
            opacity: { value: 0.4, random: true },
            size: { value: { min: 20, max: 40 }, random: true },
            move: {
              enable: true,
              speed: 1,
              direction: "top",
              random: true,
              outModes: { default: "out" }
            }
          },
          interactivity: {
            events: {
              onHover: { enable: false },
              onClick: { enable: false }
            }
          },
          detectRetina: true
        }}
      />

      <Container sx={{ mt: 4, position: "relative", zIndex: 1 }}>
        <Box sx={{ textAlign: "right" }}>
          <Typography sx={{ display: "inline", mr: 1 }}>
            {darkMode ? "Dark" : "Light"} Mode
          </Typography>
          <Switch checked={darkMode} onChange={handleToggleTheme} />
        </Box>

        <Grid container spacing={4} alignItems="center" sx={{ mt: 4 }}>
          <Grid item xs={12} md={4}>
            <Box
              component="img"
              src="/abdulpic.jpeg"
              alt="Abdul Kalam"
              sx={{ width: "100%", maxWidth: "300px", height: "300px", objectFit: "cover", borderRadius: 2, boxShadow: 4, mx: "auto", display: "block" }}
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography variant="h4" fontWeight="bold">
              Hi, I'm Abdul Kalam Pulicharla
            </Typography>
            <Typography variant="h6" sx={{ mt: 1, color: "gray" }}>
              <ReactTyped
                strings={["Data Engineer", "Data Enthusiast", "AI & ML Explorer"]}
                typeSpeed={60}
                backSpeed={30}
                loop
              />
            </Typography>
            <Typography sx={{ mt: 2, fontStyle: "italic" }}>
  “I don’t just work with data — I live in it.”
  <br /><br />
  When I began exploring universities for my master's journey, I didn’t just rely on brochures or rankings — I dove into the numbers. From acceptance rates to program outcomes, I analyzed every bit of data I could find. Out of six approved colleges, it was the metrics and trends that led me to choose <strong>Northern Illinois University</strong> — a decision backed entirely by data.
  <br /><br />
  But that was just the beginning.
  <br /><br />
  Whether I’m training machine learning models while walking outdoors or brainstorming solutions from the comfort of my room, data is always around me — and within me. I don’t just see charts or predictions; I see <strong>potential</strong>, <strong>patterns</strong>, and <strong>possibilities</strong>. Data helps me make informed decisions, and I want to help others do the same.
  <br /><br />
  My passion lies in using data not just to solve problems — but to create impact. From building intelligent pipelines to making real-time predictions, I strive to turn raw numbers into real-world transformation. I believe the future belongs to those who can read between the rows — and I’m here to lead that change.
</Typography>
          </Grid>
        </Grid>
          
        <Box  sx={{ mt: 10, textAlign: "center" }}>
          <Button variant="contained" onClick={handleToggleProjects}>
            🚀 Projects
          </Button>
        </Box>
        {/* Wing Panels */}
        <Box sx={{ position: "relative", height: showWings ? "620px" : "0px", transition: "height 0.5s ease-in-out", mt: 4, overflow: "hidden" }}>
          {/* Left Wing */}
          <Paper
            elevation={4}
            sx={{ position: "absolute", top: 0, left: 0, width: { xs: "100%", md: "45%" }, p: 3, borderRadius: 2, transform: showWings ? "translateX(0)" : "translateX(-150%)", transition: "transform 0.8s ease-in-out", backgroundColor: "#e0f7fa" }}
          >
            <Typography variant="h6" gutterBottom>
              🔁 Pipelines
            </Typography>
            <Button variant="contained" fullWidth sx={{ mt: 1, backgroundColor: "#00796b" }} href="https://github.com/Abdul7569/adf-etl-pipeline" target="_blank">
              Azure ADF ETL Pipeline
            </Button>
            <Button variant="contained" fullWidth sx={{ mt: 1, backgroundColor: "#00796b" }} href="https://github.com/Abdul7569/Stock_market_dashboards" target="_blank">
              Stock Market ETL & Visualization Pipeline
            </Button>
          
          </Paper>

          {/* Right Wing */}
          <Paper
            elevation={4}
            sx={{ position: "absolute", top: 0, right: 0, width: { xs: "100%", md: "45%" }, p: 3, borderRadius: 2, transform: showWings ? "translateX(0)" : "translateX(150%)", transition: "transform 0.8s ease-in-out", backgroundColor: "#f3e5f5" }}
          >
            <Typography variant="h6" gutterBottom>
              📊 Visualization World
            </Typography>
            <Button variant="contained" fullWidth sx={{ mt: 1, backgroundColor: "#6a1b9a" }} href="https://app.powerbi.com/view?r=eyJrIjoiZWU4NjM0ZTYtODg3NC00ZjdkLThiYzgtMzY4ODYwNWZhYWJkIiwidCI6ImVhODczMzkwLThjMWMtNDIzMS1hNzk5LTZiNWEwMjM1YjJlNiIsImMiOjN9" target="_blank">
              Stock Market Trends Dashboard
            </Button>
            <Button variant="contained" fullWidth sx={{ mt: 1, backgroundColor: "#6a1b9a" }} href="https://colab.research.google.com/drive/11t-dX4eNwszAWpOzeAE2YE031mAY265D#scrollTo=8a76f702-a3cf-4f98-8391-0ee535640212" target="_blank">
              Smartwatch Data Dnalysis
            </Button>
            
          </Paper>

          {/* Bottom Wing – ML Models */}
          <Paper
            elevation={4}
            sx={{
              position: "absolute",
              top: "55%",
              left: "50%",
              transform: showWings ? "translate(-50%, -50%)" : "translate(-50%, 150%)",
              width: { xs: "90%", md: "60%" },
              p: 3,
              borderRadius: 2,
              transition: "transform 0.8s ease-in-out",
              backgroundColor: "#fff3e0"
            }}
          >
          

            <Typography variant="h6" gutterBottom>
              🧠 ML Models
            </Typography>
            <Button variant="contained" fullWidth sx={{ mt: 1, backgroundColor: "#ef6c00" }} href="https://abdul7569-ai-powered-resume-role-recommender-app-rcso5x.streamlit.app/" target="_blank">
              AI Powered Resume Role Recommender (BERT)
            </Button>
            <Button variant="contained" fullWidth sx={{ mt: 1, backgroundColor: "#ef6c00" }} href="https://spam-detection-app-rhpb.vercel.app/" target="_blank">
              Spam Detection Application Using Naive Bayes
            </Button>
            
          </Paper>
        </Box>





        {/* Skills Section */}
        <Box sx={{ mt: 5 }}>
          <Typography id="skills" variant="h4" sx={{ fontWeight: 'bold', textAlign: 'left' }}>
            Skills
          </Typography>
          <Grid container spacing={4} sx={{ mt: 3 }}>
            <Grid item xs={12} sm={6}>
              <Paper elevation={3} sx={{ p: 2 }}>
                <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', fontWeight: 'bold' }}>
                  <Code sx={{ mr: 2 }} /> Programming Languages & Databases
                </Typography>
                <Typography variant="body1" sx={{ mt: 1 }}>
                  Python, Java, SQL, PostgreSQL
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper elevation={3} sx={{ p: 2 }}>
                <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', fontWeight: 'bold' }}>
                  <Memory sx={{ mr: 2 }} /> Tools & Libraries
                </Typography>
                <Typography variant="body1" sx={{ mt: 1 }}>
                  Machine Learning(Scikit-learn, Pandas, NumPy, TensorFlow, Keras), GitHub, Excel, PowerPoint, Power BI
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper elevation={3} sx={{ p: 2 }}>
                <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', fontWeight: 'bold' }}>
                  <Build sx={{ mr: 2 }} /> DevOps
                </Typography>
                <Typography variant="body1" sx={{ mt: 1 }}>
                  Docker, GitHub Actions, CI/CD Pipelines
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper elevation={3} sx={{ p: 2 }}>
                <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', fontWeight: 'bold' }}>
                  <Autorenew sx={{ mr: 2 }} /> ETL Workflow
                </Typography>
                <Typography variant="body1" sx={{ mt: 1 }}>
                  Azure(ADF,Databricks,Azure SQL),Apache Spark,Airflow,Snowflake
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Box>

        <Typography id="contact" variant="h4" sx={{ mt: 8, textAlign: "center" }}>
          Contact
        </Typography>
        <Grid container justifyContent="center" spacing={2} sx={{ mt: 2 }}>
          <Grid item>
            <Button variant="contained" color="primary" startIcon={<LinkedIn />} href="https://www.linkedin.com/in/abdul-kalam-pulicharla-1876541b3/" target="_blank">
              LinkedIn
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" color="secondary" startIcon={<GitHub />} href="https://github.com/Abdul7569" target="_blank">
              GitHub
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" color="error" startIcon={<Email />} href="mailto:abdulkalampulicharla@gmail.com">
              Email Me
            </Button>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default HomePage;
