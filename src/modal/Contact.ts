import { Schema, Document,models, model } from "mongoose";

export interface Contact extends Document {
  _id: string;
  name: string;
  email: string;
  message: string;
  date: Date;
}

const ContactSchema: Schema<Contact> = new Schema( {
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
    date: { type: Date, default: Date.now },
  })

const Contact = models.Contact || model("Contact", ContactSchema);
export default Contact;
