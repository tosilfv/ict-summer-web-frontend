import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Modal from "@mui/material/Modal";
import LaunchIcon from "@mui/icons-material/Launch";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
  button: {
    padding: "15px",
  },
  dialog: {
    display: "flex",
    marginTop: "30px",
    justifyContent: "center",
  },
  typography: {
    color: "blue",
    fontWeight: "800",
    textAlign: "center",
  },
};

export default function LandingPage() {
  const [open, setOpen] = useState(false);

  const handleOpen = (event) => {
    event.preventDefault();
    console.log("clicked into handleOpen");
    if (open === false) {
      setOpen(true);
    }
  };

  const handleClose = (event) => {
    event.preventDefault();
    console.log("clicked into handleClose");
    if (open === true) {
      setOpen(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("clicked into handleSubmit");
    const data = new FormData(event.currentTarget);
    console.log({
      username: data.get("userID"),
      password: data.get("password"),
    });
  };

  return (
    <div>
      <Box>
        <Typography variant="h2" style={style.typography}>
          Landing Page
        </Typography>
        <Container style={style.dialog}>
          <Button
            style={style.button}
            onClick={handleOpen}
            variant="outlined"
            startIcon={<LaunchIcon />}
          >
            Open Log In Dialog
          </Button>
        </Container>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box sx={{ ...style, width: 400 }}>
            <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Log in
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 3 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="userID"
                label="UserID"
                name="userID"
                autoComplete="UserID"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="Password"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Log In
              </Button>
            </Box>
          </Box>
        </Container>
      </Modal>
    </div>
  );
}
