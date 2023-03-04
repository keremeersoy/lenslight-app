import mongoose from "mongoose";

const { Schema } = mongoose;

const photoSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true, // tanım girerken başta veya sonda boşluk varsa onlardan kurtulmayı sağlıyor
  },
  description: {
    type: String,
    reqired: true,
    trim: true,
  },
  uploadedAt: {
    type: Date,
    default: Date.now,
  },
});

const Photo = mongoose.model("Photo", photoSchema);

export default Photo;
