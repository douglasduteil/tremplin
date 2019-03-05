import Link from "next/link";
import React, { Component } from 'react';
import { JobOffer } from "src/models";

interface JobOfferListItemProps {
  jobOffer: JobOffer;
}

export class JobOfferListItem extends Component<JobOfferListItemProps, any> {

  public render() {
    return (<li>
      <Link href={`/offer?title=${this.props.jobOffer.title}`}>
        <a>{this.props.jobOffer.title}</a>
      </Link>
    </li>)
  }

}
