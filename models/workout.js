const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutExer = new Schema({
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "Type of exercise",
      },
      name: {
        type: String,
        trim: true,
        required: "Exercise name",
      },
      duration: {
        type: Number,
        required: "Exercise duration",
      },
      weight: {
        type: Number,
        trim: true,
        required: "Equipment weight",
      },
      reps: {
        type: Number,
        trim: true,
        required: "Number of reps",
      },
      sets: {
        type: Number,
        trim: true,
        required: "Number of sets",
      },
      distance: {
        type: Number,
        trim: true,
        required: "Total distance",
      },
    },
  ],

  day: {
    type: Date,
    default: Date.now,
  },
});

const Workout = mongoose.model("Workout", workoutExer);

module.exports = Workout;
