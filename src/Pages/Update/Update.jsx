import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useLoaderData } from "react-router-dom";
import swal from "sweetalert";

export default function Update() {
    const spotData = useLoaderData();
  const handleSubmit = (event) => {
    event.preventDefault();
    const spot = {
      spotName: event.target.spotName.value,
      image: event.target.image.value,
      countryName: event.target.countryName.value,
      location: event.target.location.value,
      shortDescription: event.target.shortDescription.value,
      averageCost: event.target.averageCost.value,
      seasonality: event.target.seasonality.value,
      travelTime: event.target.travelTime.value,
      totalVisitorsPerYear: event.target.totalVisitorsPerYear.value,
      userEmail: event.target.userEmail.value,
      userName: event.target.userName.value,
    };

    fetch(`http://localhost:3000/alltouristspot/${spotData._id}`,{
      method: "PUT",
      headers:{
        "content-type": "application/json"
      },
      body: JSON.stringify(spot)

    })
      .then((res) => res.json())
      .then((data) => {
        swal("Updated", "Updated Successfully", "success");
      })
      .catch(err =>{
        swal("Error", `${err.message}`, "error");
      })
  };

  return (
    <Container component="main">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }} />
        <Typography component="h1" variant="h5">
          Update Spot
        </Typography>
        <Box className="w-full">
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-3"
          >
            <TextField
              margin="normal"
              required
              fullWidth
              label="Spot Name"
              name="spotName"
              autoComplete="Spot Name"
              autoFocus
              defaultValue={spotData.spotName}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              label="Image URL"
              name="image"
              autoComplete="Image URL"
              defaultValue={spotData.image}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              label="Country Name"
              name="countryName"
              autoComplete="Country Name"
              defaultValue={spotData.countryName}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              label="Location"
              name="location"
              autoComplete="Location"
              defaultValue={spotData.location}
            />

            <TextField
              margin="normal"
              required
              fullWidth
              label="Average Cost"
              name="averageCost"
              autoComplete="Average Cost"
              defaultValue={spotData.averageCost}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              label="Seasonality"
              name="seasonality"
              autoComplete="Seasonality"
              defaultValue={spotData.seasonality}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              label="Travel Time"
              name="travelTime"
              autoComplete="Travel Time"
              defaultValue={spotData.travelTime}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              label="Total Visitors Per Year"
              name="totalVisitorsPerYear"
              autoComplete="Total Visitors Per Year"
              defaultValue={spotData.totalVisitorsPerYear}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              label="User Email"
              name="userEmail"
              autoComplete="User Email"
              defaultValue={spotData.userEmail}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              label="User Name"
              name="userName"
              autoComplete="User Name"
              defaultValue={spotData.userName}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              label="Short Description"
              name="shortDescription"
              autoComplete="Short Description"
              className="md:col-span-2"
              defaultValue={spotData.shortDescription}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              className="md:col-span-2"
            >
              Update
            </Button>
          </form>
        </Box>
      </Box>
    </Container>
  );
}
