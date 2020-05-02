# Hack-At-Home-2020
This is another hackathon repo for our app Pollen


How to create a new expo react native app
 - https://expo.io/learn

Trying to run 
    >npm install expo-cli --global

    Getting an error.. errno: -13, EACCES, 

    running
    >npm install expo-cli
    lets see...
    okay that worked

Now running: 
    >expo init pollen
        choosing blank (TypeScript)
    
    Chose to install all dependenices through yarn

Run project
>cd pollen
>yarn start

    gott sdkVersion error ..didn't work

>expo start

    didnt work

>expo-cli start --tunnel

        sdkVersion is missing .. guess thats it
        Going to make sdkVersion and expo version the same

Installing sdkVersion
go to app.json and add sdkVersion like I have in my app.json
deete your node_modules folder
run 
    >yarn install


>expo-cli start --tunnel

Now you can scan the qr code on your iphone and can start working on App.tsx!
