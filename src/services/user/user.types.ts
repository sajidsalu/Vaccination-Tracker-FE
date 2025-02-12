export type UserChildListAPIResponse = {
  result: UserChild[];
};

export type Vaccination = {
  vaccineId: string;
  shotNumber: string;
  dateTaken: string;
};
export type UserChild = {
  id: string;
  name: string;
  dob: string;
  gender: string;
  userId: string;
  vaccinations: Vaccination[];
};
