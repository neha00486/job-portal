const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema(
    {
        title: { type: String, required: true},
        description: { type: String, required: true },
        requirememnts: { type: String, required: true},
        location: { type: String },
        category: { type: String },
        type: {
            type: String,
            enum: ["Remote", "Full-Time", "Internship"],
            required: true,
        },
        company: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, //employer

        salaryMin: { type: Number },
        salaryMax: { type: Number },
        isClosed: { type: Boolean, default: faslse },
    },
    { timestamps: true }

);

module.exports=mongoose.model("Job", jobSchema);