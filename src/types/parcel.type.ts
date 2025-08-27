interface IParcelReceiver {
  name: string;
  phone: string;
  email?: string;
  address: string;
}

export interface IParcel {
  _id: string;
  type: string;
  weight: number;
  sender: string;
  receiver: IParcelReceiver;
  pickingAddress: string;
  status: string;
  isBlocked: boolean;
  statusLogs: StatusLog[];
  createdAt: Date;
  updatedAt: Date;
  trackingId: string;
  deliveryFee: number;
  deliveryDate: Date;
}

export interface StatusLog {
  location?: string;
  time: Date;
  status: string;
  note?: string;
}

export interface ICreateParcel {
  type: "DOCUMENT" | "REGULAR";
  weight: number;
  receiver: IParcelReceiver;
  pickingAddress: string;
}

export interface IUpdateParcel {
  id: string;
  status: string;
}

export type IParcelTrackData = Pick<
  IParcel,
  "_id" | "receiver" | "isBlocked" | "statusLogs"
>;

export interface IParcelStats {
  totalParcel: number;
  totalParcelByStatus: ITotalParcelByStatus[];
  totalParcelByParcelType: ITotalParcelByParcelType[];
  totalDeliveredParcelByMonths: ITotalDeliveredParcelByMonth[];
}

export interface ITotalDeliveredParcelByMonth {
  delivered: number;
  year: number;
  month: string;
}

export interface ITotalParcelByParcelType {
  count: number;
  type: string;
}

export interface ITotalParcelByStatus {
  count: number;
  status: string;
}
