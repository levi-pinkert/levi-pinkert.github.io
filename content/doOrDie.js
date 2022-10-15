const title = "Do or Die!";

const description = `
245th out of 6,136 submissions in GMTK Game Jam 2022. Made by 3 people in 48 hours.
`;

const markdown = `
This game placed **245th** out of **6,136** submissions in GMTK Game Jam 2022.
The theme was "Roll the Dice", so we created a totally chaotic action game where you kill dice.
You use a different weapon depending on the side of the die you hit, which forces you to strategize and react.
### Development
I created the game with [Will Farhat](https://www.willfarhat.com) and Charlie Heatherly.
Will and I coded the game in Game Maker Studio while Charlie created the art.
We took the game from conception to completion in just 48 hours.
### Art
This game has a unique psuedo-3D art style. Under the hood, everything is really just 2D.
However, we render the objects by stacking a bunch of 2D images on top of each other.
When all these images rotate together, they create the illusion of a 3D object.
Other details, like giving the objects a fake shadow, really sell the effect.
### How to Play
Use **WASD** to move\n
![How to move](/GameImages/moveTutorial.gif)\n
Use **left click** to attack a die. The attack will be different depending on the side you hit.\n
![How to attack](/GameImages/grabTutorial.gif)\n
![How to attack](/GameImages/hookTutorial.gif)\n
![How to attack](/GameImages/shotgunTutorial.gif)\n
![How to attack](/GameImages/dynamiteTutorial.gif)\n
As time goes on, the background color changes. When it becomes red, you die!
Push dice off the board to score points and delay your death.\n
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