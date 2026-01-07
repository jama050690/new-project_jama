import path from "path";
import { fileURLToPath } from "url";
import { promises as fs } from "fs";
import express from "express";
import ejs from "ejs";

const server = express();
const PORT = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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

async function renderIndex(req, res) {
  const view = await fs.readFile(
    path.join(__dirname, "src", "index.html"),
    "utf8"
  );
  const home = ejs.render(view, {
    projectName: "My project",
    userName: "Jamshiddin",
  });
  res.send(home);
}

server.get("/", renderIndex);
server.get("/index.html", renderIndex);

server.get("/error.html", async (req, res) => {
  const view = await fs.readFile("./src/error.html", "utf8");
  const home = ejs.render(view, {
    projectName: "My project",
    userName: "Jamshiddin",
  });
  res.send(home);
});
server.get("/login.html", async (req, res) => {
  const view = await fs.readFile("./src/login.html", "utf8");
  const home = ejs.render(view, {
    projectName: "My project",
    userName: "Jamshiddin",
  });
  res.send(home);
});
server.get("/profile.html", async (req, res) => {
  const view = await fs.readFile("./src/profile.html", "utf8");
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
  const view = await fs.readFile("./src/reset.html", "utf8");
  const home = ejs.render(view, {
    projectName: "My project",
    userName: "Jamshiddin",
  });
  res.send(home);
});

server.get("/signup.html", async (req, res) => {
  const view = await fs.readFile("./src/signup.html", "utf8");
  const home = ejs.render(view, {
    projectName: "My project",
    userName: "Jamshiddin",
  });
  res.send(home);
});

server.get("/tables.html", async (req, res) => {
  const view = await fs.readFile("./src/tables.html", "utf8");
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
