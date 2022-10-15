const title = "Stealth Startup";

const description = `
Over the summer, I worked as a solo full-stack developer for a startup that helps type 2 diabetics.
I used React Native, NodeJS, and Firebase to develop a website and an app that analyze continuous glucose data.
`;

const markdown = `
This project was unique because it was so independent.
I would meet remotely with the startup's founders twice a week and get their new ideas for the app.
Sometimes they would give me Python code showing the analysis they wanted to do, and sometimes they would just share a sketch of a visualization they wanted to try.
Then, I would fully independently implement that into the application within a couple of days.
This unique level of control gave me lots of experience with every part of the web and mobile development process.
### Frontend
I used React Native to build a cross-platform mobile app. React Native Web is a project which enabled me to use that same codebase
to create a website, which we found much easier to test and distribute internally.
I also used TypeScript, which was an incredible help in managing such a large project.
One thing I really enjoyed was using SVG to create custom graphs and data visualizations like this:\n
![A graph I created for the startup](/GameImages/bodyGraphSm.png)\n
![A data visualization I created for the startup](/GameImages/bodyClockSm.png)\n
### Backend
I also built a backend for the app using NodeJS and hosted it with Heroku.
It signs users in with Google OAuth 2, and stores data in a Firebase real-time database.
The most challenging problem on the backend side was interfacing with the continuous glucose monitors.
Our service supports two different brands of CGM, and each has its own process for authenticating a user and getting their data.
`;

const grayImage = '/ProjectIcons/startupgray.jpg';

const colorImage = '/ProjectIcons/startupcolor.jpg';

export const stealthStartupInfo = {
    title,
    description,
    markdown,
    grayImage,
    colorImage
};

/*
planning
------
*web*
stealth startup
rpl
portfolio site
*games*
clump
do or die
writus
drunken dragon
the meatball in the machine
and more!
*skills*
c++
Java
React & React Native
JavaScript & TypeScript
*/