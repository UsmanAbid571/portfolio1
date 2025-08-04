import { Schema, Document,models, model } from "mongoose";

export interface Service extends Document {
  _id: string;
  name: string;
  email: string;
  phone: number;
  websiteDetails: string;
  description: string;
  date: Date;
}

const ServiceSchema: Schema<Service> = new Schema( {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: Number, required: false },
    websiteDetails: { type: String, required: true },
    description: { type: String, required: false },
    date: { type: Date, default: Date.now },
  })

const Service = models.Service || model("Service", ServiceSchema);
export default Service;
