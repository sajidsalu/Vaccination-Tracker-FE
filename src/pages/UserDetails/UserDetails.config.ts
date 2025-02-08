import { UserData } from "./UserDetails.type";

export const dummyUser: UserData = {
  userId: "user_123",
  name: "Ayaan Khan",
  dob: "2020-05-15",
  gender: "Male",
  profileImage: "https://randomuser.me/api/portraits/men/10.jpg",
  vaccinations: [
    {
      vaccineId: "vaccine_1",
      childId: "user_123",
      shotNumber: 1,
      dateTaken: new Date("2021-06-10"),
      hospital: "City Health Center",
      name: "Hepatitis B",
    },
    {
      vaccineId: "vaccine_2",
      childId: "user_123",
      shotNumber: 2,
      dateTaken: new Date("2021-09-15"),
      hospital: "Green Valley Hospital",
      name: "DTP",
    },
    {
      vaccineId: "vaccine_3",
      childId: "user_123",
      shotNumber: 1,
      dateTaken: new Date("2022-01-20"),
      hospital: "Sunrise Pediatrics",
      name: "MMR",
    },
  ],
  upcomingVaccinations: [
    {
      vaccineId: "vaccine_4",
      childId: "user_123",
      shotNumber: 2,
      dateTaken: new Date("2025-03-15"), // This will be treated as the due date
      hospital: "Sunrise Pediatrics",
      name: "MMR",
    },
    {
      vaccineId: "vaccine_5",
      childId: "user_123",
      shotNumber: 3,
      dateTaken: new Date("2026-07-10"),
      hospital: "Green Valley Hospital",
      name: "DTP Booster",
    },
  ],
};
