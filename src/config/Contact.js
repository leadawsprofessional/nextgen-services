import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, },
  phone: { type: String, required:true },
  message:{type: String, required:true},
  query:{type: String, required:true},
  submittedAt: { type: Date, default: Date.now },
});

const Contact = mongoose.models.contacts || mongoose.model("contacts", contactSchema);

export default Contact;
