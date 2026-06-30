import mongoose, { Schema, models } from "mongoose";

const ContactLeadSchema = new Schema(
  {
    fullName: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    phone: { type: String, trim: true },
    subject: { type: String, required: true, trim: true },
    message: { type: String, required: true, trim: true },
    serviceInterest: { type: String, trim: true },
    status: { type: String, enum: ["new", "contacted", "closed"], default: "new" }
  },
  { timestamps: true }
);

export default models.ContactLead || mongoose.model("ContactLead", ContactLeadSchema);
