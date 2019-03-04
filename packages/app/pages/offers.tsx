import { Layout, OfferListItem } from "@components";
import { NextContext } from "next";
import React, { Component } from "react";
import { Offer } from "src/models";

interface OffersProps {
  offers: Offer[];
}

export default class OffersPage extends Component<OffersProps, any> {

  public static getInitialProps = async () => {
    const res: Offer[] = [];
    res.push({ title: "Remplacement dans la Drôme", id: "1" });
    res.push({ title: "Remplacement autour du bassin d'arcachon", id: "2" });
    return { offers: res };
  }

  public render() {
    return (
      <Layout>
        <h1>Offres</h1>
        <ul>
          {this.props.offers.map(offer => <OfferListItem key={offer.id} offer={offer}></OfferListItem>)}
        </ul>
      </Layout>
    )
  }

}




