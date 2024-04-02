export interface Order {

  order_special_id: Number;
  user: String;
  name: String;
  items: Array<String>;
  total_items: Number;
  total_price: Number;
  mobile: String;
  order_cancelled: Boolean;
  cod: Boolean;
  order_date: Date;
  delivery_address: String;
  order_completed: Boolean;

}
