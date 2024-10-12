const workoutEntryContainer = document.querySelector(
  ".workout-entry-container-main"
);

const getTotalSetsReps = document.getElementById("get-total-sets-reps");

workoutEntryContainer.addEventListener("click", (event) => {
  const target = event.target;

  if (target.tagName === "BUTTON") {
    //Chest Fieldset
    if (target.innerText === "Add Chest Workout") {
      const workoutSelection = document.querySelector(`.Chest #Chest-workouts`);

      if (selectedWorkouts.indexOf(workoutSelection.value) !== -1) {
        window.alert("Workout already added");
      } else {
        selectedWorkouts.push(workoutSelection.value);

        const addWorkout = `<fieldset id="workout-field">
        <h3>${workoutSelection.value} <label>Sets: </label><input id="${workoutSelection.value}-sets" type="number" placeholder="4"/><label>Reps: </label><input id="${workoutSelection.value}-reps" type="number" placeholder="4"/><button type="button">X</button></h3></fieldset>`;

        const currentCategory = document.querySelector(`.Chest`);

        currentCategory.insertAdjacentHTML("beforeend", addWorkout);
      }
    }
    //Back Fieldset
    if (target.innerText === "Add Back Workout") {
      const workoutSelection = document.querySelector(`.Back #Back-workouts`);

      if (selectedWorkouts.indexOf(workoutSelection.value) !== -1) {
        window.alert("Workout already added");
      } else {
        selectedWorkouts.push(workoutSelection.value);

        const addWorkout = `<fieldset id="workout-field"><h3>${workoutSelection.value} <label>Sets: </label><input id="workout-sets" type="number" placeholder="4"/><label>Reps: </label><input id="workout-reps" type="number" placeholder="4"/><button type="button">X</button></h3></fieldset>`;
        const currentCategory = document.querySelector(`.Back`);

        currentCategory.insertAdjacentHTML("beforeend", addWorkout);
      }
    }
    //Legs Fieldset
    if (target.innerText === "Add Legs Workout") {
      const workoutSelection = document.querySelector(`.Legs #Legs-workouts`);

      if (selectedWorkouts.indexOf(workoutSelection.value) !== -1) {
        window.alert("Workout already added");
      } else {
        selectedWorkouts.push(workoutSelection.value);

        const addWorkout = `<fieldset id="workout-field"><h3>${workoutSelection.value} <label>Sets: </label><input id="workout-sets" type="number" placeholder="4"/><label>Reps: </label><input id="workout-reps" type="number" placeholder="4"/><button type="button">X</button></h3></fieldset>`;
        const currentCategory = document.querySelector(`.Legs`);

        currentCategory.insertAdjacentHTML("beforeend", addWorkout);
      }
    }
    //Shoulders Fieldset
    if (target.innerText === "Add Shoulder Workout") {
      const workoutSelection = document.querySelector(
        `.Shoulder #Shoulder-workouts`
      );

      if (selectedWorkouts.indexOf(workoutSelection.value) !== -1) {
        window.alert("Workout already added");
      } else {
        selectedWorkouts.push(workoutSelection.value);

        const addWorkout = `<fieldset id="workout-field"><h3>${workoutSelection.value} <label>Sets: </label><input id="workout-sets" type="number" placeholder="4"/><label>Reps: </label><input id="workout-reps" type="number" placeholder="4"/><button type="button">X</button></h3></fieldset>`;
        const currentCategory = document.querySelector(`.Shoulder`);

        currentCategory.insertAdjacentHTML("beforeend", addWorkout);
      }
    }
    //Biceps Fieldset
    if (target.innerText === "Add Biceps Workout") {
      const workoutSelection = document.querySelector(
        `.Biceps #Biceps-workouts`
      );

      if (selectedWorkouts.indexOf(workoutSelection.value) !== -1) {
        window.alert("Workout already added");
      } else {
        selectedWorkouts.push(workoutSelection.value);

        const addWorkout = `<fieldset id="workout-field"><h3>${workoutSelection.value} <label>Sets: </label><input id="workout-sets" type="number" placeholder="4"/><label>Reps: </label><input id="workout-reps" type="number" placeholder="4"/><button type="button">X</button></h3></fieldset>`;
        const currentCategory = document.querySelector(`.Biceps`);

        currentCategory.insertAdjacentHTML("beforeend", addWorkout);
      }
    }
    //Triceps Fieldset
    if (target.innerText === "Add Triceps Workout") {
      const workoutSelection = document.querySelector(
        `.Triceps #Triceps-workouts`
      );

      if (selectedWorkouts.indexOf(workoutSelection.value) !== -1) {
        window.alert("Workout already added");
      } else {
        selectedWorkouts.push(workoutSelection.value);

        const addWorkout = `<fieldset id="workout-field"><h3>${workoutSelection.value} <label>Sets: </label><input id="workout-sets" type="number" placeholder="4"/><label>Reps: </label><input id="workout-reps" type="number" placeholder="4"/><button type="button">X</button></h3></fieldset>`;
        const currentCategory = document.querySelector(`.Triceps`);

        currentCategory.insertAdjacentHTML("beforeend", addWorkout);
      }
    }
  }
});
