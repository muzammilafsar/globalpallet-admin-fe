export interface Coupon {
name: String;
code: String;
amount: Number;
enable: Boolean;
details: String;
date_of_creation: Date;
validity: Date,
times_valid_per_user: Number;
first_order_only: Boolean;
valid_once: Boolean;
active: Boolean;  
min_order_value: Number;
min_order_applicable: Number;
percent: Number;
goldMember: Boolean; 
index: Number;
}