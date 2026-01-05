import express from "express";
import ejs from "ejs";
import { promises as fs } from "fs";
import { log } from "console";

const server = express();
const PORT = 3000;

server.use("/img", express.static("img"));
server.use("/lib", express.static("lib"));
server.use("/css", express.static("css"));
server.use("/js", express.static("js"));
server.use("/fonts", express.static("fonts"));

const dateTable = [
  {
    name: "Angular Project",
    client: "Muhammad Rahimov",
    users: "Jamshiddin",
    status: "faol",
    action: ":",
  },
  {
    name: "React Project",
    client: "Tolmas O'rinov",
    users: "Javlon",
    status: "ishni tugatdi",
    action: ":",
  },
  {
    name: "VueJs Project",
    client: "Sardor Sunattilayev",
    users: "Sardor",
    status: "faol bo'lgan",
    action: ":",
  },
  {
    name: "Bootstrap Project",
    client: "Suhrob Amirov",
    users: "Tolmas",
    status: "default",
    action: ":",
  },
];

server.get("/", async (req, res) => {
  const view = await fs.readFile("./index.html", "utf8");
  const home = ejs.render(view, {
    projectName: "My project",
    userName: "Jamshiddin",
  });
  res.send(home);
});

server.get("/index.html", async (req, res) => {
  const view = await fs.readFile("./index.html", "utf8");
  const home = ejs.render(view, {
    projectName: "My project",
    userName: "Jamshiddin",
  });
  res.send(home);
});

server.get("/error.html", async (req, res) => {
  const view = await fs.readFile("./error.html", "utf8");
  const home = ejs.render(view, {
    projectName: "My project",
    userName: "Jamshiddin",
  });
  res.send(home);
});
server.get("/login.html", async (req, res) => {
  const view = await fs.readFile("./login.html", "utf8");
  const home = ejs.render(view, {
    projectName: "My project",
    userName: "Jamshiddin",
  });
  res.send(home);
});
server.get("/profile.html", async (req, res) => {
  const view = await fs.readFile("./profile.html", "utf8");
  const home = ejs.render(view, {
    projectName: "My project",
    userName: "Jamshiddin",
    lastName: "Babajonov",
    email: "jbm050690@mail.com",
    number: "957990034",
  });
  res.send(home);
});
server.get("/reset.html", async (req, res) => {
  const view = await fs.readFile("./reset.html", "utf8");
  const home = ejs.render(view, {
    projectName: "My project",
    userName: "Jamshiddin",
  });
  res.send(home);
});

server.get("/signup.html", async (req, res) => {
  const view = await fs.readFile("./signup.html", "utf8");
  const home = ejs.render(view, {
    projectName: "My project",
    userName: "Jamshiddin",
  });
  res.send(home);
});

server.get("/tables.html", async (req, res) => {
  const view = await fs.readFile("./tables.html", "utf8");
  const home = ejs.render(view, {
    projectName: "My project",
    userName: "Jamshiddin",
    table: dateTable,
  });
  res.send(home);
});

server.listen(PORT, () => {
  console.log(` Server running on http://localhost:${PORT}`);
});
