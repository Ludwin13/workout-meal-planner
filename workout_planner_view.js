const workoutEntryContainer = document.querySelector(
  ".workout-entry-container-main"
);
const addCategoryButton = document.getElementById("add-category");
const addWorkoutButton = document.getElementById("add-workout");
const workoutDropDown = document.getElementById("workout-dropdown");
const getTotalSets = document.getElementById("get-total");

const chestWorkoutsMap = new Map([
  ["1", "Incline Dumbbell Press"],
  ["2", "Incline Bench Press"],
  ["3", "Flat Dumbbell Press"],
  ["4", "Flat Bench Press"],
  ["5", "Decline Dumbbell Press"],
  ["6", "Decline Bench Press"],
  ["7", "Chest-Focused Dips"],
  ["8", "Machine Chest Flies"],
  ["9", "Dumbbell Chest Flies"],
  ["10", "Cable Chest Flies"],
]);

const backWorkoutsMap = new Map([
  ["1", "Lat Pulldowns"],
  ["2", "Chest-Supported Wide Dumbbell Rows"],
  ["3", "Chest-Supported Close-Grip Dumbbell Rows"],
  ["4", "Barbell Rows"],
  ["5", "Dumbbell Shrugs"],
  ["6", "Smith-Machine Shrugs"],
]);

const legWorkoutsMap = new Map([
  ["1", "Barbell Back Squats"],
  ["2", "Smith-Machine Back Squats"],
  ["3", "Leg Extensions"],
  ["4", "Machine Leg Press"],
  ["5", "Sissy Squats"],
  ["6", "Stiff-Legged Deadlift"],
  ["7", "Lying-down Hamstring Curl"],
  ["8", "Romanian Deadlifts"],
  ["9", "Bulgarian Split Squats"],
  ["10", "Single-Leg Machine Press"],
]);

const shoulderWorkoutsMap = new Map([
  ["1", "Dumbbell Lateral Raise"],
  ["2", "Cable Lateral Raise"],
  ["3", "Dumbbell Shoulder Press"],
  ["4", "Barbell Shoulder Press"],
  ["5", "Rear-delt Flies"],
  ["6", "Rear-delt Cable Flies"],
]);

const tricepWorkoutsMap = new Map([
  ["1", "Bar Tricep Pushdowns"],
  ["2", "Cable Tricep Pushdown"],
  ["3", "Close-grip Barbell Press"],
  ["4", "JM Press"],
  ["5", "Tricep Dips"],
  ["6", "Barbell Skullcrushers"],
  ["7", "Dumbbell Skullcrushers"],
  ["8", "Cable Tricep Extensions"],
]);

const bicepWorkoutsMap = new Map([
  ["1", "Supinated Bicep Dumbbell Curls"],
  ["2", "Barbell Bicep Curls"],
  ["3", "Hammer Curls"],
  ["4", "Preacher Curls"],
  ["5", "Spider Curls"],
  ["6", "Seated Dumbbell Biceps Curls"],
]);

// const chestWorkouts = new Map();
// const backWorkouts = new Map();
// const legWorkouts = new Map();
// const shouldersWorkouts = new Map();
// const bicepsWorkouts = new Map();
// const tricepsWorkouts = new Map();
const parametersMap = {
  // 1 === Chest
  // 2 === Back
  // 3 === Leg
  // 4 === Shoulder
  // 5 === Biceps
  // 6 === Triceps
  chestParam: new Map(),
  backParam: new Map(),
  legsParam: new Map(),
  shouldersParam: new Map(),
  bicepsParam: new Map(),
  tricepsParam: new Map(),
};

const workoutMaps = {
  chestWorkouts: new Map(),
  backWorkouts: new Map(),
  legsWorkouts: new Map(),
  shouldersWorkouts: new Map(),
  bicepsWorkouts: new Map(),
  tricepsWorkouts: new Map(),
};

const removeWorkoutCategories = new Map([
  ["category-remove-chest", workoutMaps.chestWorkouts],
  ["category-remove-back", workoutMaps.backWorkouts],
  ["category-remove-legs", workoutMaps.legsWorkouts],
  ["category-remove-shoulders", workoutMaps.shouldersWorkouts],
  ["category-remove-biceps", workoutMaps.bicepsWorkouts],
  ["category-remove-triceps", workoutMaps.tricepsWorkouts],
]);

function addCategory() {
  // Add new category
  const newCategoryString = `
    <fieldset class="${workoutDropDown.value}">
        <legend>${workoutDropDown.value}</legend>
        <label>Max Sets Per Workout: <input type="number" id="total-sets-${workoutDropDown.value}" placeholder="e.g. 4-8 sets"></input></label>
        
        <button type="button" id="add-workout-${workoutDropDown.value}">Add Workout</button>
        <select id="${workoutDropDown.value}-workouts"></select>
        <button type="button" id="category-remove-${workoutDropDown.value}">X</button>
    </fieldset>`;

  // Check if workout category (fieldset) already exists.
  const workoutCategory = document.querySelector(`.${workoutDropDown.value}`);
  if (workoutCategory === null) {
    workoutEntryContainer.insertAdjacentHTML("beforeend", newCategoryString);
  }

  const chestWorkoutSelection = document.querySelector(
    ".Chest #Chest-workouts"
  );
  const backWorkoutSelection = document.querySelector(`.Back #Back-workouts`);
  const legsWorkoutSelection = document.querySelector(`.Legs #Legs-workouts`);
  const shoulderWorkoutSelection = document.querySelector(
    `.Shoulders #Shoulders-workouts`
  );
  const bicepsWorkoutSelection = document.querySelector(
    `.Biceps #Biceps-workouts`
  );
  const tricepsWorkoutSelection = document.querySelector(
    `.Triceps #Triceps-workouts`
  );

  if (chestWorkoutSelection !== null) {
    chestWorkoutsMap.forEach((value) => {
      const option = document.createElement("option");
      option.value = value;
      option.text = value;
      chestWorkoutSelection.appendChild(option);
    });
  }

  if (backWorkoutSelection !== null) {
    backWorkoutsMap.forEach((value) => {
      const option = document.createElement("option");
      option.value = value;
      option.text = value;
      backWorkoutSelection.appendChild(option);
    });
  }

  //Legs
  if (legsWorkoutSelection !== null) {
    legWorkoutsMap.forEach((value) => {
      const option = document.createElement("option");
      option.value = value;
      option.text = value;
      legsWorkoutSelection.appendChild(option);
    });
  }
  //Shoulders
  if (shoulderWorkoutSelection !== null) {
    shoulderWorkoutsMap.forEach((value) => {
      const option = document.createElement("option");
      option.value = value;
      option.text = value;
      shoulderWorkoutSelection.appendChild(option);
    });
  }
  //Biceps
  if (bicepsWorkoutSelection !== null) {
    bicepWorkoutsMap.forEach((value) => {
      const option = document.createElement("option");
      option.value = value;
      option.text = value;
      bicepsWorkoutSelection.appendChild(option);
    });
  }
  //Triceps
  if (tricepsWorkoutSelection !== null) {
    tricepWorkoutsMap.forEach((value) => {
      const option = document.createElement("option");
      option.value = value;
      option.text = value;
      tricepsWorkoutSelection.appendChild(option);
    });
  }
}

//Add workouts per container
workoutEntryContainer.addEventListener("click", (event) => {
  const target = event.target;

  if (target.tagName === "INPUT" && target.type === "number") {
    if (target.id.startsWith("total-sets-")) {
      if (target.id.includes("Chest")) {
        target.addEventListener("input", function () {
          console.log(target.value);
        });
      } else if (target.id.includes("Back")) {
        target.addEventListener("input", function () {
          console.log(target.value);
        });
      } else if (target.id.includes("Shoulders")) {
        target.addEventListener("input", function () {
          console.log(target.value);
        });
      } else if (target.id.includes("Legs")) {
        target.addEventListener("input", function () {
          console.log(target.value);
        });
      } else if (target.id.includes("Biceps")) {
        target.addEventListener("input", function () {
          console.log(target.value);
        });
      } else if (target.id.includes("Triceps")) {
        target.addEventListener("input", function () {
          console.log(target.value);
        });
      }
    } else if (target.id.startsWith("sets-")) {
      if (target.id.includes("Chest-")) {
        target.addEventListener("input", function () {
          parametersMap.chestParam.set("");
          console.log(target.value);
        });
      } else if (target.id.includes("Back-")) {
        target.addEventListener("input", function () {
          console.log(target.value);
        });
      } else if (target.id.includes("Shoulders-")) {
        target.addEventListener("input", function () {
          console.log(target.value);
        });
      } else if (target.id.includes("Legs-")) {
        target.addEventListener("input", function () {
          console.log(target.value);
        });
      } else if (target.id.includes("Biceps-")) {
        target.addEventListener("input", function () {
          console.log(target.value);
        });
      } else if (target.id.includes("Triceps-")) {
        target.addEventListener("input", function () {
          console.log(target.value);
        });
      }
    } else if (target.id.startsWith("reps-")) {
      // console.log(target.value);
      if (target.id.includes("Chest")) {
        target.addEventListener("input", function () {
          console.log(target.value);
        });
      } else if (target.id.includes("Back")) {
        target.addEventListener("input", function () {
          console.log(target.value);
        });
      } else if (target.id.includes("Shoulders")) {
        target.addEventListener("input", function () {
          console.log(target.value);
        });
      } else if (target.id.includes("Legs")) {
        target.addEventListener("input", function () {
          console.log(target.value);
        });
      } else if (target.id.includes("Biceps")) {
        target.addEventListener("input", function () {
          console.log(target.value);
        });
      } else if (target.id.includes("Triceps")) {
        target.addEventListener("input", function () {
          console.log(target.value);
        });
      }
    }
  }

  if (target.tagName === "BUTTON") {
    if (target.id.startsWith("category-remove-")) {
      const targetMapReference = getTargetMap(target, 16, "add-remove");
      if (targetMapReference) {
        handleRemoveCategory(target, targetMapReference);
      }
    } else if (target.id.startsWith("remove-workout-")) {
      const targetMapReference = getTargetMap(target, 15, "add-remove");
      if (targetMapReference) {
        removeWorkout(targetMapReference, target);
        target.closest("fieldset").remove();
      }
    } else if (target.id.startsWith("add-workout-")) {
      const targetMapReference = getTargetMap(target, 12, "add-remove");
      if (targetMapReference) {
        // target.id.substring(12) gives "Chest", "Back", etc.
        addWorkout(target.id.substring(12), targetMapReference);
      }
    }
  }
});

addCategoryButton.addEventListener("click", addCategory);

function addWorkout(category, selectedWorkoutMap) {
  const workoutSelection = document.querySelector(`#${category}-workouts`);
  const workoutEntryNumber =
    document.querySelectorAll(`.${category} fieldset`).length + 1;

  if ([...selectedWorkoutMap.values()].includes(workoutSelection.value)) {
    window.alert("Workout already added");
  } else {
    const addWorkout = `<fieldset class="${workoutSelection.value}">
        <legend>Entry ${workoutEntryNumber}</legend>
        <div class="name-container">
          <h3>${workoutSelection.value}</h3>
        </div>
        <div class="sets-container">
          <label for="sets-${workoutSelection.value}">Sets: </label><input type="number" id="sets-${category}-${workoutSelection.value}">
        </div>
        <div class="reps-container">
          <label for="reps-${workoutSelection.value}">Reps: </label><input type="number" id="reps-${category}-${workoutSelection.value}">
        </div>
          <button type="button" id="remove-workout-${category}">X</button>
        </fieldset>`;
    selectedWorkoutMap.set(workoutEntryNumber, workoutSelection.value);

    const currentCategory = document.querySelector(`.${category}`);

    currentCategory.insertAdjacentHTML("beforeend", addWorkout);
  }
}

function getTargetMap(target, prefixLength) {
  const targetMap =
    target.id.substring(prefixLength).toLowerCase() + "Workouts";
  const targetMapReference = workoutMaps[targetMap];

  if (targetMapReference instanceof Map) {
    return targetMapReference;
  }
  return null;
}

function removeWorkout(selectedWorkoutMap, target) {
  for (let [key, value] of selectedWorkoutMap) {
    if (value === target.closest("fieldset").className) {
      selectedWorkoutMap.delete(key);
      target.closest("fieldset").remove();
    }
  }
}

function handleRemoveCategory(target, selectedWorkoutMap) {
  console.log("inside");
  selectedWorkoutMap.clear();
  target.closest("fieldset").remove();
}

function retrieveInputsVal() {
  const chestInputs = document.querySelectorAll(".Chest input");

  chestInputs.forEach((items) => {
    console.log(items.id + " " + items.value);
  });
}

function inputNumberHandler(target, mapReference) {
  target.addEventListener("input", function () {});
}

getTotalSets.addEventListener("click", retrieveInputsVal);
