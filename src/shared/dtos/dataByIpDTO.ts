export interface DataByIpDTO {
  ip: string;
  location: Location;
  ac: AutonomousSystem;
  isp: string;
}

export interface Location {
  country: string;
  region: string;
  city: string;
  lat: number;
  lng: number;
  postalCode: string;
  timezone: string;
  geonameId: number;
}

export interface AutonomousSystem {
  asn: number;
  name: string;
  route: string;
  domain: string;
  type: string;
}
