import KvModel from "../models/kvmodel.js";

export const createKeyValue = async (req, res) => {
  try {
    const { key, value, ttl } = req.body;

    const keyValue = new KvModel({ key, value, ttl, createdAt: Date.now() });
    await keyValue.save();
    res.status(201).json({ message: "key-value pair creatd successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getkeyValue = async (req, res) => {
  try {
    const getitems = await KvModel.find({});

    return res.status(200).json({ getitems });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const readKeyValue = async (req, res) => {
  try {
    const id = req.params.id;
    const keyValue = await KvModel.findById(id);
    if (!keyValue) {
      return res.status(404).json({ message: "key not found or TTL expired" });
    }
    res.json(keyValue);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteKeyValue = async (req, res) => {
  try {
    const id = req.params.id;

    const result = await KvModel.findByIdAndDelete(id);

    if (!result) {
      return res.status(404).json({ message: "key not found" });
    }

    res.json({ message: "key-value pair delted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
