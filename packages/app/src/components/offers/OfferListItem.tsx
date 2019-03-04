import Link from "next/link";
import React, { Component } from 'react';
import { Offer } from "src/models";

interface OfferListItemProps {
  offer: Offer;
}

export class OfferListItem extends Component<OfferListItemProps, any> {

  public render() {
    return (<li>
      <Link href={`/offer?title=${this.props.offer.title}`}>
        <a>{this.props.offer.title}</a>
      </Link>
    </li>)
  }

}
