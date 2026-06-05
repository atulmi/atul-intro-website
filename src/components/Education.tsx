import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import SchoolIcon from "@mui/icons-material/School";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import { education, certifications } from "../data/portfolio";

const cardSx = {
  p: 3,
  height: "100%",
  borderRadius: 2,
  bgcolor: "background.default",
  borderColor: "divider",
  "&:hover": { borderColor: "primary.main", boxShadow: 2 },
  transition: "border-color 0.2s, box-shadow 0.2s",
};

export default function Education() {
  return (
    <Box
      id="education"
      component="section"
      sx={{ bgcolor: "background.paper", py: { xs: 6, md: 8 } }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="overline"
          sx={{
            color: "primary.main",
            fontWeight: 600,
            letterSpacing: "0.12em",
          }}
        >
          Education & Certifications
        </Typography>

        <Typography
          variant="h4"
          sx={{ mt: 1, mb: 6, letterSpacing: "-0.01em" }}
        >
          Credentials
        </Typography>

        <Grid container spacing={3} alignItems="stretch">
          {/* Degree */}
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Paper variant="outlined" sx={cardSx}>
              <Box
                sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 2 }}
              >
                <Box
                  sx={{
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    bgcolor: "grey.200",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <SchoolIcon sx={{ fontSize: 18, color: "text.secondary" }} />
                </Box>
                <Typography
                  variant="overline"
                  sx={{ color: "text.secondary", letterSpacing: "0.08em" }}
                >
                  Degree
                </Typography>
              </Box>

              <Typography variant="h3" sx={{ fontSize: "1.05rem", mb: 0.5 }}>
                {education.degree}
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "text.secondary", mb: 1 }}
              >
                {education.school}
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  bgcolor: "grey.200",
                  color: "text.secondary",
                  px: 1.5,
                  py: 0.5,
                  borderRadius: 1,
                  fontWeight: 500,
                  display: "inline-block",
                }}
              >
                {education.period}
              </Typography>
            </Paper>
          </Grid>

          {/* Certifications */}
          {certifications.map((cert) => (
            <Grid key={cert.name} size={{ xs: 12, sm: 6, md: 4 }}>
              <Paper variant="outlined" sx={cardSx}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1.5,
                    mb: 2,
                  }}
                >
                  <Box
                    sx={{
                      width: 36,
                      height: 36,
                      borderRadius: "50%",
                      bgcolor: "primary.main",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <WorkspacePremiumIcon
                      sx={{ fontSize: 18, color: "#fff" }}
                    />
                  </Box>
                  <Typography
                    variant="overline"
                    sx={{ color: "primary.main", letterSpacing: "0.08em" }}
                  >
                    Certification
                  </Typography>
                </Box>

                <Typography variant="h3" sx={{ fontSize: "1.05rem", mb: 0.5 }}>
                  {cert.name}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {cert.issuer}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
