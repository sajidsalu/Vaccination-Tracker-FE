import { useState } from "react";
import { Container, TextField, Button, MenuItem, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { kids } from "@/constants/user.constants";
import { CardLayout, PageLayout } from "@/components/Layout";

// Vaccination statuses
const statuses = ["Scheduled", "Completed", "Missed"];

const AddVaccination = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    childId: "",
    vaccineName: "",
    vaccinationDate: "",
    status: "Scheduled",
    notes: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/");
  };

  const navigateBack = ()=> navigate(-1);

  return (
    <PageLayout breadcrumbs={[{label:"user"},{label:"vaccination"}]}>
        <CardLayout onClickBackButton={navigateBack} title="Add Vaccination">
    <Container maxWidth="sm">

      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              select
              fullWidth
              label="Select Child"
              name="childId"
              value={formData.childId}
              onChange={handleChange}
              required
            >
              {kids.map((kid) => (
                <MenuItem key={kid.id} value={kid.id}>
                  {kid.name}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Vaccine Name"
              name="vaccineName"
              value={formData.vaccineName}
              onChange={handleChange}
              required
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              type="date"
              label="Vaccination Date"
              name="vaccinationDate"
              value={formData.vaccinationDate}
              onChange={handleChange}
              InputLabelProps={{ shrink: true }}
              required
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              select
              fullWidth
              label="Status"
              name="status"
              value={formData.status}
              onChange={handleChange}
              required
            >
              {statuses.map((status) => (
                <MenuItem key={status} value={status}>
                  {status}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Place/hospital"
              name="place"
              value={formData.vaccineName}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Notes"
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              multiline
              rows={3}
            />
          </Grid>
        </Grid>

        <Button type="submit" variant="contained" color="primary" sx={{ mt: 4 }} fullWidth>
          Save
        </Button>
      </form>
    </Container>
    </CardLayout>
    </PageLayout>
  );
};

export default AddVaccination;
