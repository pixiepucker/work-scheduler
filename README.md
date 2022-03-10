# Autumn Yarborough-Cain's Work Day Scheduler
## Week 5 Challenge ✨

This week's challenge was to build a work day scheduler using the starter code provided to us. After three days and three nights full of research, I was able to complete this week's challenge.

For this week, I decided to take the hard-coded elements route over the dynamically created route. And in the beginning, I had divs for each element. However, over time I realized that the fewer the divs, the better. I also decided to update the CSS to more closely represent my favorite color; pink. 💗

### File Amendments and Add-Ons
In order to optimize my index.html file, I deleted the div around my text and replaced it with an actual textarea. This would later allow me to add color to my timeblocks through a function that runs upon loading the page. I removed the div around my button element to further reduce the number of divs and fix a problem I had with elements running into each other. Along with this, I was able to utilize Bootstrap classes in order to create a clean and orderly interface. I also utilized Moment.js to work with and manipulate time in my script.js file.

- Within the script, I was able to do the following:
    - Implement jquery to append variables holding moment() to show the current date and time (24hr time)
    - Imlement jquery to optimize my event listeners and functions to set and get localStorage items
    - Implement jquery to create a function the runs when page is loaded that compares the time associated with the timeblocks and moment() current time in order to change color for event auditting by the hour

Comments for each action are included in the file as well.

### Preview of My Work 🌱
You can find my deployed webpage [here!](https://pixiepucker.github.io/work-scheduler/)

![screenshot of webpage showing title: Work Day Scheduler and current date and time. Below is 
display of blocks each representing one hour of the day that change according to time audit.](./assets/images/previewofsite.png)

#### Credits
Scenario, instruction, and starter code provided by UTSA's Trilogy Coding Bootcamp.