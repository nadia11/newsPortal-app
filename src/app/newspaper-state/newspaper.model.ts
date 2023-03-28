import { ID } from '@datorama/akita';

interface Multimedia{

  url	:string;

  format:string;

  height:number;

  width:number;

  type:number;

  subtype:string;

  caption:string;

  copyright:string;
}



export interface Newspaper {

  _id: string;

  section: string;

  subsection: string;

  title: string;

  abstract: string;

  url: string;

  uri: string;

  byline: string;

  item_type: string;

  updated_date: string;

  created_date: string;

  published_date: string;

  material_type_facet: string;

  kicker: string;

  des_facet: string[];

  org_facet	: string[];

  per_facet	: string[];

  geo_facet	: string[];

  multimedia: Multimedia[];

  short_url: string;

}

export function createNewspaper(params: Partial<Newspaper>) {
  return {
  } as Newspaper;
}
