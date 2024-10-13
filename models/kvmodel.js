import mongoose from "mongoose";

const KvSchema = new mongoose.Schema({
  key: { type: String, required: true, unique: true, maxlength: 32 },
  value: { type: mongoose.Schema.Types.Mixed, required: true },
  ttl: { type: Number, default: null },
  createdAt: { type: Date, default: Date.now },
});

// TTL (Time-To-Live) implementation
KvSchema.index(
  { createdAt: 1 },
  {
    expireAfterSeconds: function () {
      return this.ttl;
    },
  }
);

// Correct way to define the model
const KvModel = mongoose.model("KvModel", KvSchema);

export default KvModel;
