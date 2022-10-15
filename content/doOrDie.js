const title = "Do or Die!";

const description = `
245th out of 6,136 submissions in GMTK Game Jam 2022. Made by 3 people in 48 hours.
`;

const markdown = `
This game placed 245th out of 6,136 submissions in GMTK Game Jam 2022. The theme was "Roll the Dice",
so we created a game where you kill evil dice with funny hats. You have a different weapon for each side
of the die, and you have to use those weapons tactially to maximize your potential.
### Development
This game was made in 48 hours by three people.
We all worked together to come up with the design.
Me and one teammate did all the code in Game Maker Studio, and the other teammate made the art.
### Art
This game has a unique psuedo-3d art style. The code treats the game as 2D.
The objects are made of 2D images stacked closely on top of each other.
When all the images rotate together, the object appears to be 3D.
### How to Play
Use W, A, S, and D to move\n
![How to move](/GameImages/moveTutorial.gif)\n
Use left click on a dice to attack it. The attack will be different depending on the side you hit.\n
![How to attack](/GameImages/grabTutorial.gif)\n
![How to attack](/GameImages/hookTutorial.gif)\n
![How to attack](/GameImages/shotgunTutorial.gif)\n
![How to attack](/GameImages/dynamiteTutorial.gif)\n
As time passes, the background will turn red. If it turns all the way red, you'll die. Kill dice to stop that!\n
![How to die](/GameImages/newKillTutorial.gif)\n
### Play the Game
`;

const gameSrc = "https://itch.io/embed-upload/6183403?color=333333";

const gameHeight = "58%";

const grayImage = '/ProjectIcons/doordiegray.jpg';

const colorImage = '/ProjectIcons/doordiecolor.gif';

export const doOrDieInfo = {
    title,
    description,
    markdown,
    gameSrc,
    gameHeight,
    grayImage,
    colorImage
};