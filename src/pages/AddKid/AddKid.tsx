import { useState } from "react";
import {
  Container,
  TextField,
  Button,
  MenuItem,
  Grid,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { CardLayout, PageLayout } from "@/components/Layout";

const genders = ["Male", "Female", "Other"];

const AddEditKid = () => {
  const { pathname } = useLocation();
  console.log('pathname',pathname);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    gender: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    navigate("/");
  };

  const navigateBack = ()=> navigate(-1);

  const title = pathname.includes("/edit")? "Edit Kid" : "Add Kid";
  
  return (
    <PageLayout breadcrumbs={[{ label: title }]}>
      <CardLayout onClickBackButton={navigateBack} title={title}>
        <Container maxWidth="sm">
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
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
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  type="date"
                  label="Date of Birth"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  InputLabelProps={{ shrink: true }}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  select
                  fullWidth
                  label="Gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  required
                >
                  {genders.map((gender) => (
                    <MenuItem key={gender} value={gender}>
                      {gender}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
            </Grid>

            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ mt: 2 }}
            >
              Save
            </Button>
          </form>
        </Container>
      </CardLayout>
    </PageLayout>
  );
};

export default AddEditKid;
