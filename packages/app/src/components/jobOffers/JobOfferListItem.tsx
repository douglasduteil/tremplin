import Link from "next/link";
import React, { Component } from 'react';
import { JobOfferProps } from "./JobOfferProps";



export class JobOfferListItem extends Component<JobOfferProps, any> {

  public render() {
    return (<li>
      <Link href={`/offer?title=${this.props.jobOffer.title}`}>
        <a>{this.props.jobOffer.title}</a>
      </Link>
    </li>)
  }

}
