export class Ride {
  id: string;
  name: string;
  start_date: Date;
  start_date_registration: Date;
  end_date_registration: Date;
  additional_information: string | null;
  start_place: string;
  participants_limit: number | null;

  constructor(
    id: string,
    name: string,
    start_date: Date,
    start_date_registration: Date,
    end_date_registration: Date,
    additional_information: string,
    start_place: string,
    participants_limit: number,
  ) {
    this.id = id;
    this.name = name;
    this.start_date = start_date;
    this.start_date_registration = start_date_registration;
    this.end_date_registration = end_date_registration;
    this.additional_information = additional_information;
    this.start_place = start_place;
    this.participants_limit = participants_limit;
  }
}
