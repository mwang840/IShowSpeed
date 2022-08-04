# IShowSpeed

A discord bot that takes up the prescence of IShowSpeed and wraps around discords api (also will implement the behavior of IShowSpeed during streams)

Written in Typeascript and is run via node

<h1>Setup</h1>
-Node.js (v12 or higher)


-Discord application/account (desktop app or discords website)

-Any IDE is fine (Visual Studio Code prefered)

-Install Typescript globally (npm install -g typescript)

-Install Discord.js library (npm install discord.js)

-Check to see if your are up to date with the current packages (if not do npm i to keep up to date)

-Github set up (needed to clone the repository and access IShowSpeed)

-Edit the existing config.env file and the config-example.json (which you can place your discord server token here) and place your discords bot token here TOKEN = token name goes here

<h1>Running IShowSpeed</h1>
-Clone this repository on your pc and edit the config.env for the bot token that you are going to make


-Make sure Node.js is installed and configured to your path (node -v/npm -v checks it)

-Set up mongoDB, which IShowSpeed uses (https://www.mongodb.com/)

-Change the testServers id in <b>config.env</b> and replace it with the id of your server

-Place the mongo db password uri under the config.env file

-Rename config.env to .env and the config-example.json to config.json

-Run ***npm run dev***  which puts the bot online and enables the slash commands

-Have fun!!


<h1>Current Commands (slash)</h1>

- [X] Ping, sends a ping to the bot and replies with a pong
- [X] Siuuuu, Speed replies with SIUUUU
- [X] Dance, replies with ***Speed did his thang, he bussed down***
- [X] Adding, takes the sum of two numbers
- [X] Subtract, takes the difference of two numbers
- [X] Multiplying, takes the product of two numbers
- [X] SpeedTest (name will be changed) able to access IShowSpeeds main youtube channel
- [X] EmbedSpeed returns an basic embed (testing if embeds work)
- [X] Dividing, takes the dividend of two numbers (Note having the second number as zero will default to NaN)

<h1>Feedback</h1>
-If there are any bugs/issues, feel free to leave them in the issues section under its repository

<p2>This bot is created by Maxwell Wang and is managed by Maxwell Wang, Cameron Thacker and Christopher Bennett</p2>
