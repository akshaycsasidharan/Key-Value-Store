import mongoose from "mongoose";

const KvSchema = new mongoose.Schema({
  key: { type: String, required: true, unique: true, maxlength: 32 },
  value: { type: mongoose.Schema.Types.Mixed, required: true },
  ttl: { type: Number, default: null },
  createdAt: { type: Date, default: Date.now },
});

KvSchema.index(
  { createdAt: 1 },
  {
    expireAfterSeconds: function () {
      return this.ttl;
    },
  }
);

const KvModel = mongoose.connect("KvModel", KvSchema);

export default KvModel;
