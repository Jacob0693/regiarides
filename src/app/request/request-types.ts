export type RequestSegment = {
  pickup: string;
  destination: string;
  date: string;
  time: string;
};

export type RequestData = {
  experience: string;
  tripType: string;
  direction: string;
  pickup: string;
  destination: string;
  date: string;
  time: string;
  passengers: string;
  carryOn: string;
  checkedBags: string;
  airport: string;
  airline: string;
  flightNumber: string;
  duration: string;
  itineraryNotes: string;
  vehicle: string;
  specificModel: string;
  preferences: string[];
  preferredLanguage: string;
  specialRequests: string;
  name: string;
  email: string;
  phone: string;
  contactMethod: string;
  consent: boolean;
};

export type RequestSubmission = {
  data: RequestData;
  segments: RequestSegment[];
  companyWebsite?: string;
};
