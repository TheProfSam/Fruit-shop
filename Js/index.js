document.addEventListener("DOMContentLoaded", function () {
    // Retrieve the current count from local storage or start at 0
    // let count = 0;
    let count = localStorage.getItem("visitorCount") || 0;
    
    // Convert count to a number and increment it
    count = Number(count) + 1;

    // Update the counter display
    document.getElementById("visitorCount").textContent = count;

    // Store the updated count in local storage
    localStorage.setItem("visitorCount", count);
});

