import * as readline from "readline";
import { publishBlog, writeBlog } from "./blogActions.js";

const iface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

iface.question("Enter your blog: ", (input) => {
  writeBlog("myblog.txt", input);
  iface.close();
  console.log(publishBlog("myblog.txt"));
});

// In blogActions.js, we first import the fs and readline modules, which are built-in Node.js modules for working with the file system and for reading input from the command line, respectively.

// We export three functions from the module: writeBlog, iface and publishBlog. The writeBlog function takes a file path and a string representing the user's blog post as arguments, and appends the blog post to the specified file using the fs.appendFile method. The publishBlog function takes a file path as an argument, reads the contents of the file using the fs.readFile method, and logs the contents to the console.

// We then create a readline interface that we'll use to prompt the user to enter their blog.

// Finally, we prompt the user to enter their blog using the iface.question method, call the writeBlog function to append the blog to the myblog.txt file, call the publishBlog function to log the updated blog to the console, and close the readline interface.
