import { JobOffer } from "@domain";
import getConfig from "next/config";
import { from, Observable } from "rxjs";
import { mergeMap } from 'rxjs/operators';

export const jobOfferRepository = (): { findAll: () => Observable<JobOffer[]> } => {
  return {
    findAll: () => api<JobOffer[]>(`job-offers`)
  }
}

// TODO(tglatt): extract to HttpClient.ts
const config = getConfig();

function api<T>(url: string): Observable<T> {
  return from(fetch(`${config.publicRuntimeConfig.API_URL}/${url}`)).pipe(
    mergeMap(res => res.json())
  );
}


