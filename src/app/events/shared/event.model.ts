export interface IEvent {
  id: number;
  name: string;
  date: string;
  time: string;
  price: number;
  image: string;
  location?: {
    address: string
    city: string
    country: string
  };
  onlineUrl?: string;
  sessions: ISession[];
}

export interface ISession {
  eventId: number;
  id: number;
  name: string;
  presenter: string;
  duration: number;
  level1: string;
  level2: string;
  level3: string;
  period: string;
  abstract: string;
  voters: string[];
}
