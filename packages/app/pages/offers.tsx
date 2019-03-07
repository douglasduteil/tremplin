import { JobOfferListItem } from "@components/jobOffers";
import { PageLayout } from "@components/layout";
import { JobOffer } from "@domain";
import { jobOfferRepository } from '@repository';
import React, { Component } from "react";

interface JobOffersProps {
  jobOffers: JobOffer[];
}

export default class JobOffersPage extends Component<JobOffersProps, any> {

  public static getInitialProps = async () => {
    const data = jobOfferRepository().findAll();
    return { jobOffers: data };
  }

  public render() {
    return (
      <PageLayout>
        <h1>Offres</h1>
        <ul>
          {this.props.jobOffers.map(jobOffer => <JobOfferListItem key={jobOffer.id} jobOffer={jobOffer}></JobOfferListItem>)}
        </ul>
      </PageLayout>
    )
  }

}




