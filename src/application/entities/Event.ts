export class Event {
  id: string;
  ride_id: string;
  user_id: string;
  subscription_date: Date;

  constructor(id: string, ride_id: string, user_id: string, subscription_date: Date) {
    this.id = id;
    this.ride_id = ride_id;
    this.user_id = user_id;
    this.subscription_date = subscription_date;
  }
}
