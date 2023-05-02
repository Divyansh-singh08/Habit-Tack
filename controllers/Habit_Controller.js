const Habit = require('../models/habit');

// Add new habit
module.exports.addHabit = async (req, res) => {
  try {
    const habit = await Habit.findOne({name: req.body.name});
    if(!habit){
      const name = req.body.name;
      let date = new Date().toDateString();
      await Habit.create({name: name,
        user: req.user.id,
        tracking: [
          {
            date: date,
            status: 'none'
          },
        ]
      });
    }
    return res.redirect('user/home');
  } catch (error) {
    console.log(error);
  }
}

// romove habit
module.exports.removeHabit = async (req, res) => {
  try {
    const id = req.params.id;
    await Habit.findByIdAndDelete({_id: id});
    return res.redirect('/user/home');
  } catch (error) {
    console.log(error)
  }
}

// 7day data details
module.exports.details = async (req, res) => {
  try {
    if(req.isAuthenticated()) {
      const habitId = req.params.id;
      const habit = await Habit.findById({_id:habitId});
      return res.render('habitData',{
        all_habits:habit
      });
    }
  } catch (error) {
    console.log(error)
  }
}

// status update
module.exports.updateStatus = async (req, res) => {
  try {
    const { habitId, id } = req.params;
    const { status } = req.body;

    // Find the habit by its id and update the specific day's status
    const updatedHabit = await Habit.findOneAndUpdate(
      { _id: habitId, "tracking._id": id },
      { $set: { "tracking.$.status": status } },
      { new: true }
    );
    return res.redirect("back");
  } catch (err) {
    res.status(500).json({
      message: "Error updating habit status",
      error: err.message,
    });
  }
};

