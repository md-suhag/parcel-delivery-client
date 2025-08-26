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
