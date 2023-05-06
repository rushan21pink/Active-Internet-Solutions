export enum ObjectType {
  FLAT = 1,
  NON_RESIDENTIAL_PLACE = 2,
  PARKING_PLACE = 3,
  STORE_ROOM = 4,
}

export enum PaymentType {
  FULL = 1,
  BANK = 2,
  FIFTY_FIFTY = 3,
  INSTALLMENT = 4,
  MORTGAGE = 5,
  BARTER = 6,
  BOOKING = 7,
}

export enum PaymentLevelComponent {
  CONTRACT = 1,
  PARTICIPANTS = 2,
  OBJECT_PARAMS = 3,
  PAYMENT = 4,
}
