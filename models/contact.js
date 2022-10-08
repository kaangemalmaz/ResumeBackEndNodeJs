// public string NameSurname { get; set; }
//         public string EMail { get; set; }
//         public string Title { get; set; }
//         public string Content { get; set; }

const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema(
  {
    nameSurname: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      trim: true,
    },

    title: {
      type: String,
      required: true,
      trim: true,
    },

    content: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    collection: "contacts",
    timestamps: true,
  }
);

const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;
