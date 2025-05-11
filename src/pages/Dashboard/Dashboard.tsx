import { ROUTES } from "@/components/constants/routes";
import { CardLayout, PageLayout } from "@/components/Layout";
import UserCard from "@/components/UserCard/Usercard";
import useGetChildList from "@/services/user/useGetUserList";
import { UserChild, UserChildListAPIResponse } from "@/services/user/user.types";
import { getLoggedInUserId } from "@/store/userStore";
import { calculateAge } from "@/utils/dateUtils";
import { Container, Typography, Button, Grid, Box } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const breadcrumbs = [{ label: "Dashboard" }];
  const navigate = useNavigate();

  const [userChildList, setUserChildList ] = useState<UserChild[] | null>(null)
  const userId = useSelector(getLoggedInUserId);

  console.log('userId is',userId);

  const onChildListFetchSuccess = (data:UserChildListAPIResponse )=>{
    if(data?.result){
      setUserChildList(data?.result);
      console.log('user child list is', data?.result);
    }
  }
  const {mutateAsync: getUserList } = useGetChildList({onSuccess:onChildListFetchSuccess});

  const getUserChildList = async()=>{
    await getUserList(userId);
  }
  useEffect(()=>{
    getUserChildList();
  },[]);

  return (
    <PageLayout breadcrumbs={breadcrumbs}>
      <CardLayout>
        <Container maxWidth="md">
          <Box sx={{ display:"flex", flex: 1, justifyContent:"space-between",alignItems:"center", flexDirection:{xs:'column',md:'row'}}}>
            <Typography variant="h4" gutterBottom>
              Vaccination Tracker
            </Typography>

            <Button
              variant="contained"
              color="primary"
              onClick={() => navigate(ROUTES.ADD_KID)}
            >
              Add Kid
            </Button>
          </Box>

          {userChildList?.length === 0 ? (
            <Typography variant="body1">
              No kids added yet. Click below to add.
            </Typography>
          ) : (
            <Grid container spacing={2}>
              {userChildList?.map((kid) => (
                <Grid item xs={12} sm={6} key={kid.id}>
                  <UserCard upcomingVaccination={"Hepatitis B - 20 Feb 2025"} age={calculateAge(kid.dob)} id={kid.id} name={kid.name}/>
                </Grid>
              ))}
            </Grid>
          )}
        </Container>
      </CardLayout>
    </PageLayout>
  );
};

export default Dashboard;
