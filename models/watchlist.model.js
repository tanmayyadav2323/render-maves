
const { model, Schema } = require("mongoose");
const mongoose = require('mongoose');

const watchSchema = new Schema(
    {
        userId: { type: mongoose.Schema.Types.ObjectId, ref: 'Users' },
        movieId: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Movieview' }]
    },
    { timestamps: true }
);

module.exports = model("watch", watchSchema);