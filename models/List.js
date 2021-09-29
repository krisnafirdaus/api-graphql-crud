const mongoose = require("mongoose");

const ListSchema = new mongoose.Schema({
    part_name: String,
    spesifikasi: String,
    merek: String,
    stock: Number,
    limit: Number,
    use_at: String,
});

const List = mongoose.model("List", ListSchema);

module.exports = List;
