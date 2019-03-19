import { JobOffer } from "@domain";
import fetch from "node-fetch";
import { from, Observable } from "rxjs";
import { mergeMap } from 'rxjs/operators';

export const jobOfferRepository = (): { findAll: () => Observable<JobOffer[]> } => {
  return {
    findAll:  () => api<JobOffer[]>("http://127.0.0.1:1337/api/job-offers")
  }
}

function api<T>(url: string): Observable<T> {
  return from(fetch(url)).pipe(
    mergeMap(res => res.json())
  );
}


