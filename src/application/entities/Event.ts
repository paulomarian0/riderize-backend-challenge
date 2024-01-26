export class Event {
  id: string;
  ride_id: string;
  user_id: string;
  subscription_date: string;

  constructor(id: string, ride_id: string, user_id: string, subscription_date: string) {
    this.id = id;
    this.ride_id = ride_id;
    this.user_id = user_id;
    this.subscription_date = subscription_date;
  }
}
