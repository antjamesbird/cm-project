# cm-project

## How to Run the App

There are two parts to the app. A Client and Server. You will need to have both running to view the app.

The Client uses <a href="https://create-react-app.dev/" target="_blank">Create React App</a> boilerplate. To get it running open your terminal and navigate to the "my-app" directory: <strong>"cd my-app"</strong>, once there you can install Node Dependencies by running <strong>"npm install"</strong>. Once that is done, you can run <strong>"npm run start"</strong> - this will bring up the client on port: 3000

Once you have the client running, you can bring up the server. The server is using <a href="https://expressjs.com/" target="_blank">Express.js</a> as a proxy so i could add CORS headers. In another terminal window navigate to the my-app directory - <strong>"cd my-app"</strong>, and run the following command to start the server: <strong>"npm run server"</strong>. This will start the server up on port 3001.

You are now good to go. Please reach out shoud you have any issues running the app.

Note: The 'github-trends-api' library suggested in the brief did not have a typescript compatible version.
