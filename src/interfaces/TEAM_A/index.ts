export interface IJOB {
  title: string;
  salary: number;
}

export interface IPERSON {
  name: string;
  age: number;
  jobs?: string[];
}

export interface CLUB_MEMBER {
  id: number;
  title: string;
  name: string;
}

export interface EVENT {
  id: number;
  name: string;
  image?: string;
  about_event: string;
  event_date: string;
  event_time: string;
  event_location: string;
}

export interface ICLUB {
  id: number;
  name: string;
  about_club?: string;
  image?: string;
  club_members?: {
    member_cnt: number;
    members: number[];
  },
  club_officers?: {
    officer_cnt: number;
    officers: number[];
  },
  club_events?: {
    event_cnt: number;
    events: number;
  },
  
}
