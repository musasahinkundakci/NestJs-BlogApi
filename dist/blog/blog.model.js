"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogSchema = void 0;
const mongoose = require("mongoose");
exports.BlogSchema = new mongoose.Schema({
    title: { required: true, type: String },
    description: { required: true, type: String },
    content: { required: true, type: String },
    postedBy: { required: true, type: mongoose.Schema.Types.ObjectId, ref: "User" },
    date: {
        type: Date,
        default: Date.now
    },
});
//# sourceMappingURL=blog.model.js.map