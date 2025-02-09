import { useState } from "react";
import {
  Container,
  Typography,
  Box,
  Avatar,
  Button,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { PageLayout, CardLayout } from "@/components/Layout";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@/components/constants/routes";

const ProfilePage = () => {
  const navigate = useNavigate();

  // Dummy User Data (Replace with API data)
  const [user, setUser] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
  });

  const [editMode, setEditMode] = useState(false);
  const [editedUser, setEditedUser] = useState({ ...user });

  const handleEditClick = () => {
    setEditedUser({ ...user });
    setEditMode(true);
  };

  const handleSaveChanges = () => {
    setUser(editedUser);
    setEditMode(false);
  };

  const handleDeleteAccount = () => {
    if (window.confirm("Are you sure you want to delete your account?")) {
      console.log("Account deleted");
      navigate(ROUTES.LOGIN);
    }
  };

  return (
    <PageLayout breadcrumbs={[{ label: "Profile" }]}>
      <CardLayout title="User Profile">
        <Container maxWidth="sm">
          <Box sx={{ textAlign: "center", mb: 4 }}>
            <Avatar sx={{ width: 80, height: 80, margin: "auto" }} />
            <Typography variant="h4">{user.name}</Typography>
            <Typography variant="body1">{user.email}</Typography>
          </Box>

          {/* Edit and Delete Buttons */}
          <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
            <Button variant="contained" color="primary" onClick={handleEditClick}>
              Edit Profile
            </Button>
            <Button variant="contained" color="error" onClick={handleDeleteAccount}>
              Delete Account
            </Button>
          </Box>
        </Container>
      </CardLayout>

      {/* Edit Profile Modal */}
      <Dialog open={editMode} onClose={() => setEditMode(false)}>
        <DialogTitle>Edit Profile</DialogTitle>
        <DialogContent>
          <TextField
            label="Name"
            fullWidth
            margin="dense"
            value={editedUser.name}
            onChange={(e) => setEditedUser({ ...editedUser, name: e.target.value })}
          />
          <TextField
            label="Email"
            fullWidth
            margin="dense"
            value={editedUser.email}
            onChange={(e) => setEditedUser({ ...editedUser, email: e.target.value })}
          />
          <TextField
            label="New Password"
            type="password"
            fullWidth
            margin="dense"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setEditMode(false)} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleSaveChanges} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </PageLayout>
  );
};

export default ProfilePage;
