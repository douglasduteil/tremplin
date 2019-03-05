import { JobOfferListItem, Layout } from "@components";
import { JobOffer } from "@models";
import React, { Component } from "react";

interface JobOffersProps {
  jobOffers: JobOffer[];
}

export default class JobOffersPage extends Component<JobOffersProps, any> {

  public static getInitialProps = async () => {
    const res: JobOffer[] = [];
    res.push({ title: "Remplacement dans la Drôme", id: "1" });
    res.push({ title: "Remplacement autour du bassin d'arcachon", id: "2" });
    return { offers: res };
  }

  public render() {
    return (
      <Layout>
        <h1>Offres</h1>
        <ul>
          {this.props.jobOffers.map(jobOffer => <JobOfferListItem key={jobOffer.id} jobOffer={jobOffer}></JobOfferListItem>)}
        </ul>
      </Layout>
    )
  }

}




