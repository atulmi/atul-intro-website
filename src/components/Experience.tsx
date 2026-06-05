import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import WorkIcon from "@mui/icons-material/Work";
import { experience } from "../data/portfolio";

export default function Experience() {
  return (
    <Box
      id="experience"
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
          Experience
        </Typography>

        <Typography
          variant="h4"
          sx={{ mt: 1, mb: 2, letterSpacing: "-0.01em" }}
        >
          Where I&apos;ve Worked
        </Typography>

        <Typography sx={{ color: "text.secondary", mb: 6 }}>
          A summary of my professional background.
        </Typography>

        {/* Timeline */}
        <Box sx={{ position: "relative", maxWidth: 760 }}>
          {/* Vertical line */}
          <Box
            sx={{
              position: "absolute",
              left: 19,
              top: 8,
              bottom: 8,
              width: 2,
              bgcolor: "divider",
              zIndex: 0,
            }}
          />

          {experience.map((item) => (
            <Box key={item.title} sx={{ display: "flex", gap: 3, mb: 5 }}>
              {/* Dot */}
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  bgcolor: "primary.main",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  zIndex: 1,
                  boxShadow: 2,
                }}
              >
                <WorkIcon sx={{ color: "#fff", fontSize: 18 }} />
              </Box>

              {/* Content */}
              <Paper
                variant="outlined"
                sx={{
                  p: 3,
                  flexGrow: 1,
                  borderRadius: 2,
                  bgcolor: "background.default",
                  borderColor: "grey.300",
                  "&:hover": { borderColor: "primary.main", boxShadow: 2 },
                  transition: "border-color 0.2s, box-shadow 0.2s",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    flexWrap: "wrap",
                    gap: 1,
                    mb: 1,
                  }}
                >
                  <Box>
                    <Typography variant="h3" sx={{ fontSize: "1.05rem" }}>
                      {item.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary", mt: 0.25 }}
                    >
                      {item.company}
                    </Typography>
                  </Box>
                  <Typography
                    variant="caption"
                    sx={{
                      bgcolor: "primary.main",
                      color: "#fff",
                      px: 1.5,
                      py: 0.5,
                      borderRadius: 1,
                      fontWeight: 500,
                      whiteSpace: "nowrap",
                    }}
                  >
                    {item.period}
                  </Typography>
                </Box>

                <Divider sx={{ my: 1.5 }} />

                <Box component="ul" sx={{ m: 0, pl: 2.5 }}>
                  {item.bullets.map((bullet) => (
                    <Box
                      key={bullet}
                      component="li"
                      sx={{
                        color: "text.secondary",
                        fontSize: "0.9rem",
                        lineHeight: 1.7,
                        mb: 0.5,
                      }}
                    >
                      {bullet}
                    </Box>
                  ))}
                </Box>
              </Paper>
            </Box>
          ))}
        </Box>

        <Typography sx={{ color: "text.secondary", mt: 5 }}>
          <Link href="#contact" underline="hover" sx={{ color: "primary.main", fontWeight: 500 }}>
            Interested? Get in touch.
          </Link>
        </Typography>
      </Container>
    </Box>
  );
}
