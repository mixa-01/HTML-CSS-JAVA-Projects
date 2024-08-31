document.addEventListener("DOMContentLoaded", () => {
    const monthElement = document.getElementById("month");
    const dateElement = document.getElementById("date");
    const yearElement = document.getElementById("year");
    const dayNameElement = document.getElementById("dayName");

    const currentDate = new Date();

    const options = { month: 'long' };
    monthElement.innerText = currentDate.toLocaleDateString("en-US", options);

    const dayOptions = { weekday: 'long' };
    dayNameElement.innerText = currentDate.toLocaleDateString("en-US", dayOptions);

    yearElement.innerText = currentDate.getFullYear();
    dateElement.innerText = currentDate.getDate();
});