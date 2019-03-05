import { JobOffer } from "@domain";

export const jobOfferRepository = (): { findAll: () => JobOffer[] } => {
  return {
    findAll: () => {
      return jobOffers;
    }
  }
}


const jobOffers: JobOffer[] = [
  {
    "id": 1,
    "title": "Remplacement dans la Drôme"
  }, {
    "id": 2,
    "title": "Remplacement à Val Thorens"
  }, {
    "id": 3,
    "title": "Remplacement à Perpignan"
  }
]

