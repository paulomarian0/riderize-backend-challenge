export class Ride {
  id: string;
  name: string;
  startDate: Date;
  startDateRegistration: Date;
  endDateRegistration: Date;
  additionalInformation: string;
  startPlace: string;
  participantsLimit: number;

  constructor(
    id: string,
    name: string,
    startDate: Date,
    startDateRegistration: Date,
    endDateRegistration: Date,
    additionalInformation: string,
    startPlace: string,
    participantsLimit: number,
  ) {
    this.id = id;
    this.name = name;
    this.startDate = startDate;
    this.startDateRegistration = startDateRegistration;
    this.endDateRegistration = endDateRegistration;
    this.additionalInformation = additionalInformation;
    this.startPlace = startPlace;
    this.participantsLimit = participantsLimit;
  }
}
