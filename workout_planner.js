const workoutEntryContainer = document.querySelector(".workout-entry-container-main");
const addCategoryButton = document.getElementById("add-category");
const addWorkoutButton = document.getElementById("add-workout");
const workoutDropDown = document.getElementById("workout-dropdown")

function addCategory() {
    const entryNumber = workoutEntryContainer.querySelectorAll(`fieldset`).length + 1;
    
    const newCategoryString = `
    <fieldset id="category-${workoutDropDown.value}">
        <legend>${workoutDropDown.value}</legend>
        <p>Test Paragraph</p>
        <button type="button">Add a workout ${entryNumber}</button>
    </fieldset>`;

    workoutEntryContainer.insertAdjacentHTML("beforeend", newCategoryString);
    
}


workoutEntryContainer.addEventListener('click', event => {
    const target = event.target;

    if(target.tagName === 'BUTTON') {

        if(workoutDropDown.value == 'Chest') {
            const newWorkoutString = `
            <select>
            <option>Incline Dumbbell Press</option>
            <option>Incline Bench Press</option>
            <option>Flat Dumbbell Press</option>
            <option>Flat Bench Press</option>
            <option>Decline Dumbbell Press</option>
            <option>Decline Bench Press</option>
            <option>Machine Chest Fly</option>
            <option>Cable Chest Fly</option>
            <option>Dumbbell Chest Fly</option>
            </select>
            <br/>
            `
            const currentCategory = document.querySelector(`#category-${workoutDropDown.value}`);
            
            currentCategory.insertAdjacentHTML("afterbegin", newWorkoutString);
        }
    }
});

addCategoryButton.addEventListener("click", addCategory);