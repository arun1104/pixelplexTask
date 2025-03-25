const mongoose = require("mongoose");

const fetchSchemaFields = async () => {
    const CustomFieldModel = mongoose.model('CustomField');
    return await CustomFieldModel.find({ moduleName: "Meetings" });
};

const meetingSchema = new mongoose.Schema({
  agenda: { type: String, required: true },
  attendes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Contact",
    },
  ],
  attendesLead: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Lead",
    },
  ],
  location: String,
  related: String,
  dateTime: String,
  notes: String,
  // meetingReminders: { type: String, required: true },
  createBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    require: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
  deleted: {
    type: Boolean,
    default: false,
  },
});

const Meeting = mongoose.model("Meetings", meetingSchema, "Meetings");

const initializeMeetingSchema = async () => {
    const schemaFieldsData = await fetchSchemaFields();
    schemaFieldsData[0]?.fields?.forEach((item) => {
        contactSchema.add({ [item.name]: item?.backendType });
    });
};

module.exports = { Meeting, initializeMeetingSchema };
