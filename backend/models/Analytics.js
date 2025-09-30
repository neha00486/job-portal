const mongoose = require("mongoose");

const analyticsSchema = new mongoose.Schema(
    {
        employer: { type: mongoose.Schema.Types.ObjectId, ref: "Job", required: true},
        totalJobsPosted: { type: Number, ref: "User", default: 0 },
        totalApplicationReceived: { type: Number, ref: "User", default: 0 }, 
        totalHired: { type: Number, ref: "User", default: 0 }, 
    },
    { timestamps: true }

);

module.exports = mongoose.model("Analytics", analyticsSchema);