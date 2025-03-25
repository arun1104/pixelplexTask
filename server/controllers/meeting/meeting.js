const { Meeting } = require("../../model/schema/meeting");

const add = async (req, res) => {
  try {
    const meeting = new Meeting(req.body);
    await meeting.save();
    res.status(200).json(meeting);
  } catch (err) {
    console.error("Failed to create meeting:", err);
    res.status(400).json({ error: "Failed to create meeting" });
  }
};

const index = async (req, res) => {
  const query = req.query;
  query.deleted = false;

  const allMeetings = await Meeting.find(query)
    .populate({
      path: "createBy",
      match: { deleted: false },
    })
    .exec();

  return res.status(200).json(allMeetings);
};

const view = async (req, res) => {
  const meeting = await Meeting.findById(req.params.id);
  return res.status(200).json(meeting);
};

const deleteData = async (req, res) => {
    const meeting = await Meeting.findByIdAndUpdate(
        req.params.id,
        { deleted: true },
        { new: true }
    );
    if (!meeting) {
        return res.status(404).json({ message: "Meeting not found" });
    }
    return res.status(200).json(meeting);
};

const deleteMany = async (req, res) => {
    const ids = req.body;
    if (!ids || !Array.isArray(ids)) {
        return res.status(400).json({ message: "Invalid request" });
    }

    const result = await Meeting.updateMany(
        { _id: { $in: ids } },
        { deleted: true }
    );

    return res.status(200).json({ message: "Meetings deleted successfully", result });
};

module.exports = { add, index, view, deleteData, deleteMany };
