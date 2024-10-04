const express = require('express');
const router = express.Router();

//In-memory storage for workouts
let workouts = [];

//Add a new workout
router.post('/', (req, res) => {
    const { user, exercises } = req.body;


    // Create a new workout object
    const newWorkout = {
        id: workouts.length + 1,
        user,
        exercises,
        createdAt: new Date(),
    };

    // Add workout to the in-memory array
    workouts.push(newWorkout);

    // Return the added workout
    res.status(201).json(newWorkout);
});

// Get all workouts
router.get('/', (req, res) => {
    res.status(200).json(workouts);
});

// Delete a workout by ID
router.delete('/', (req, res) => {
    const { id } = req.params;

    // Find the workout by ID and remove it
    workouts = workouts.filter(workout => workout.id !== parseInt(id));
    res.status(200).json({ message: `Workout ${id}deleted` });
});

module.exports = router;

