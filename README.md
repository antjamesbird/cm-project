# cm-project

## How to Run the App

There are two parts to the app. A Client and Server. You will need to have both running to view the app.

The Client uses 'Create React App', to get it running open your terminal and navigate to the "my-app" directory "cd my-app", once there you can install Node Dependencies by running "npm install". Once that is done, you can run "npm run start" - this will bring up the client on port: 3000

Once you have the client running, you can bring up the server. The server is using Express.js as a proxy so i could add CORS headers. In another terminal window navigate to the my-app directory - "cd my-app", and run the following command to start the server: "npm run server". This will start the server up on port 3001.

You are now good to go. Please reach out shoud you have any issues running the app.

Note: The 'github-trends-api' library suggested in the brief did not have a typescript compatible version.
