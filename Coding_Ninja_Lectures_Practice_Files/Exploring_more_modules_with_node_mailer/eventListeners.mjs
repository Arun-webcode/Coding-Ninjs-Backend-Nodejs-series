import { UserEvents } from "./userEvents.mjs";

const userEvent = new UserEvents();

userEvent.createPost("This is my first post");

userEvent.on("postCreated", () => {
  console.log("Generic postCreated handler");
});

function saveToDatabase() {
  console.log("Saving post to Database");
}

function sendNotifications() {
  console.log("Sending Notifications");
}

function updateTimeline() {
  console.log("Update Timeline");
}

userEvent.addListener("postCreated", saveToDatabase);
userEvent.addListener("postCreated", sendNotifications);
userEvent.addListener("postCreated", updateTimeline);

userEvent.createPost("This is my first post");
