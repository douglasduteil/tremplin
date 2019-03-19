import { JobOfferListItem } from "@components/jobOffers";
import { PageLayout } from "@components/layout";
import { JobOffer } from "@domain";
import { jobOfferRepository } from '@repository';
import React, { Component } from "react";
import { Subscription } from "rxjs";

export default class JobOffersPage extends Component<{}, { jobOffers: JobOffer[] }> {

  private subscription!: Subscription;

  public constructor(props: {}) {
    super(props);
    this.state = { jobOffers: [] };
  }

  public componentDidMount() {
    this.subscription = jobOfferRepository().findAll().subscribe(jobOffers => this.setState({ jobOffers }));
  }

  public componentWillUnmount() {
    this.subscription.unsubscribe();
  }

  public render() {
    return (
      <PageLayout>
        <h1>Offres</h1>
        <ul>
          {this.state.jobOffers.map(jobOffer => <JobOfferListItem key={jobOffer.id} jobOffer={jobOffer}></JobOfferListItem>)}
        </ul>
      </PageLayout>
    )
  }

}




