import React from "react";
import {
  TextField,
  Button,
  MenuItem,
  Box,
  Typography,
  Container,
  Paper,
} from "@mui/material";
import "../Styles/Complain/complain.css";

function FormComponent() {
  const [formValues, setFormValues] = React.useState({
    title: "",
    category: "",
    description: "",
  });

  const categories = [
    { value: "Service Quality", label: "Service Quality" },
    { value: "Product Quality", label: "Product Quality" },
    { value: "Billing Issues", label: "Billing Issues" },
    { value: "Delivery Issues", label: "Delivery Issues" },
    { value: "Customer Support", label: "Customer Support" },
    { value: "Technical Issues", label: "Technical Issues" },
    { value: "Account Issues", label: "Account Issues" },
    { value: "Other", label: "Other" },
  ];

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formValues);
  };

  return (
    <div
      style={{
        backgroundColor: "#EAEEF9",
        height: "100vh",
        width: "100vw",
        margin: 0,
        padding: 0,
      }}
    >
      <Container maxWidth="sm" className="complaint-page">
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Paper
            sx={{
              mt: 3,
              padding: 3,
              width: "100%",
              boxShadow: "0px 0px 10px rgba(0,0,0,0.2)",
            }}
          >
            <Typography variant="h4" align="center" gutterBottom>
              Complaint Form
            </Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                variant="outlined"
                margin="normal"
                label="Title"
                name="title"
                value={formValues.title}
                onChange={handleChange}
              />
              <TextField
                fullWidth
                select
                variant="outlined"
                margin="normal"
                label="Category"
                name="category"
                value={formValues.category}
                onChange={handleChange}
              >
                {categories.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                fullWidth
                variant="outlined"
                margin="normal"
                label="Description"
                name="description"
                multiline
                rows={4}
                value={formValues.description}
                onChange={handleChange}
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{ mt: 3 }}
              >
                Submit
              </Button>
            </form>
          </Paper>
        </Box>
      </Container>
    </div>
  );
}

export default FormComponent;
