import { JobOfferListItem } from "@components/jobOffers";
import { PageLayout } from "@components/layout";
import { JobOffer } from "@domain";
import { jobOfferRepository } from '@repository';
import React, { useEffect, useState } from "react";

export default () => {

  const [jobOffers, setJobOffers] = useState<JobOffer[]>([]);

  useEffect(() => {
    const subscription = jobOfferRepository().findAll().subscribe(res => { setJobOffers(res); });
    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return (
    <PageLayout>
      <h1>Offres</h1>
      <ul>
        {jobOffers.map(jobOffer => <JobOfferListItem key={jobOffer.id} jobOffer={jobOffer}></JobOfferListItem>)}
      </ul>
    </PageLayout>
  )
}





