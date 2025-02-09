export type Vaccination = {
  vaccineId: string;
  childId: string;
  shotNumber: number;
  dateTaken: Date;
  hospital: string;
  name?: string;
};

export type UserData = {
  name: string;
  dob: string;
  profileImage: string;
  vaccinations: Vaccination[];
  upcomingVaccinations: Vaccination[];
  gender: string;
  userId: string;
};

export type UserDetailsProps = {
  user: UserData;
};
