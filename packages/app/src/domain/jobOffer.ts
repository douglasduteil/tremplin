export interface JobOffer {
  id?: number;
  title: string;
  publishedAt: Date;
  placeOfWork: {
    description: string;
    address: Address;
    facilities: string[];
    image: string;
  },
  person: {
    medicalPractice: MedicalPractice

  }
};

export type MedicalPractice = 'familyDoctor';

export type Address = Readonly<{
  street: string;
  zipCode: string;
  city: string;
}>;
