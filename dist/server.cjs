var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// server.ts
var import_express = __toESM(require("express"), 1);
var import_path2 = __toESM(require("path"), 1);
var import_bcryptjs = __toESM(require("bcryptjs"), 1);
var import_jsonwebtoken2 = __toESM(require("jsonwebtoken"), 1);
var import_vite = require("vite");

// server/db.ts
var import_fs = __toESM(require("fs"), 1);
var import_path = __toESM(require("path"), 1);
var import_url = require("url");
var import_meta = {};
var dbDir = "";
try {
  dbDir = __dirname;
} catch (e) {
  try {
    const metaUrl = import_meta?.url;
    if (metaUrl) {
      dbDir = import_path.default.dirname((0, import_url.fileURLToPath)(metaUrl));
    } else {
      dbDir = process.cwd();
    }
  } catch (err) {
    dbDir = process.cwd();
  }
}
var DB_FILE_PATH = import_path.default.join(process.cwd(), "db.json");
try {
  if (import_fs.default.existsSync(DB_FILE_PATH)) {
    import_fs.default.accessSync(DB_FILE_PATH, import_fs.default.constants.W_OK);
  } else {
    import_fs.default.writeFileSync(DB_FILE_PATH, "{}");
    import_fs.default.unlinkSync(DB_FILE_PATH);
  }
} catch (err) {
  DB_FILE_PATH = import_path.default.join(dbDir, "..", "db.json");
}
var initialData = {
  users: [
    {
      id: "u1",
      name: "Ananya Sen",
      email: "ananya.sen@jis.edu",
      // hashed for 'student123'
      passwordHash: "$2a$10$W65R8KxKzscS9Ea0T9XU9OF2fRscgC7X8aMHeZ.1xM.sZ8H8XmUo2",
      department: "CSE",
      semester: "6th",
      subjects: ["Data Structures", "Web Development", "Operating Systems"],
      goals: "Prepare for JIS campus hackathon and upcoming semester exams.",
      learningStyle: "Visual",
      availability: {
        days: ["Monday", "Wednesday", "Friday", "Saturday"],
        times: ["Afternoon", "Evening"]
      },
      avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ananya",
      streakDays: 8,
      lastActiveDate: (/* @__PURE__ */ new Date()).toISOString(),
      isAdmin: false,
      createdAt: new Date(Date.now() - 30 * 24 * 60 * 60 * 1e3).toISOString()
    },
    {
      id: "u2",
      name: "Rohit Das",
      email: "rohit.das@jis.edu",
      passwordHash: "$2a$10$W65R8KxKzscS9Ea0T9XU9OF2fRscgC7X8aMHeZ.1xM.sZ8H8XmUo2",
      department: "IT",
      semester: "4th",
      subjects: ["Database Systems", "Core Java", "Discrete Mathematics"],
      goals: "Looking to clear doubts in SQL normalizations and join a steady group.",
      learningStyle: "Kinesthetic",
      availability: {
        days: ["Tuesday", "Thursday", "Saturday", "Sunday"],
        times: ["Morning", "Evening"]
      },
      avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rohit",
      streakDays: 5,
      lastActiveDate: (/* @__PURE__ */ new Date()).toISOString(),
      isAdmin: false,
      createdAt: new Date(Date.now() - 25 * 24 * 60 * 60 * 1e3).toISOString()
    },
    {
      id: "u3",
      name: "Priyanka Roy",
      email: "priyanka.roy@jis.edu",
      passwordHash: "$2a$10$W65R8KxKzscS9Ea0T9XU9OF2fRscgC7X8aMHeZ.1xM.sZ8H8XmUo2",
      department: "ECE",
      semester: "6th",
      subjects: ["Microprocessors", "Web Development", "Digital Communication"],
      goals: "Acing the labs and collaborative project development.",
      learningStyle: "Auditory",
      availability: {
        days: ["Monday", "Tuesday", "Thursday"],
        times: ["Evening"]
      },
      avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priyanka",
      streakDays: 12,
      lastActiveDate: (/* @__PURE__ */ new Date()).toISOString(),
      isAdmin: false,
      createdAt: new Date(Date.now() - 40 * 24 * 60 * 60 * 1e3).toISOString()
    },
    {
      id: "u_admin",
      name: "Prof. S. Ghosal (JIS Admin)",
      email: "admin@jis.edu",
      passwordHash: "$2a$10$W65R8KxKzscS9Ea0T9XU9OF2fRscgC7X8aMHeZ.1xM.sZ8H8XmUo2",
      // student123
      department: "CSE",
      semester: "Faculty",
      subjects: ["All Subjects"],
      goals: "Oversee university-wide study collaboration dashboard.",
      learningStyle: "Reading/Writing",
      availability: {
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        times: ["Morning", "Afternoon"]
      },
      avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Admin",
      streakDays: 45,
      lastActiveDate: (/* @__PURE__ */ new Date()).toISOString(),
      isAdmin: true,
      createdAt: new Date(Date.now() - 100 * 24 * 60 * 60 * 1e3).toISOString()
    }
  ],
  groups: [
    {
      id: "g1",
      name: "JIS Web Dev Titans",
      subject: "Web Development",
      department: "CSE",
      semester: "6th",
      learningStyle: "Visual",
      description: "A target-driven study group looking to master React + Tailwind for the upcoming JIS TechFest hackathon. We focus on building real-world projects and solving challenges.",
      rules: "No spamming and join the group calls regularly. Shared learning resources must be relevant to the syllabus.",
      creatorId: "u1",
      members: ["u1", "u3", "u2"],
      resources: [
        {
          id: "r1",
          title: "Vite + React Quickstart Guide for JIS TechFest",
          url: "https://react.dev",
          sharedBy: "Ananya Sen",
          sharedByUserId: "u1",
          timestamp: new Date(Date.now() - 3 * 24 * 60 * 60 * 1e3).toISOString()
        },
        {
          id: "r2",
          title: "Tailwind CSS Layout Cheat Sheet",
          url: "https://tailwindcss.com",
          sharedBy: "Priyanka Roy",
          sharedByUserId: "u3",
          timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1e3).toISOString()
        }
      ],
      isOnline: true,
      createdAt: new Date(Date.now() - 10 * 24 * 60 * 60 * 1e3).toISOString()
    },
    {
      id: "g2",
      name: "Discrete Maths Doubts Crackers",
      subject: "Discrete Mathematics",
      department: "IT",
      semester: "4th",
      learningStyle: "Kinesthetic",
      description: "Struggling with Set Theory and Graph Proofs? We study twice a week, solving textbook exercises step-by-step.",
      rules: "Participate in doubt solving. Help one student before asking your question.",
      creatorId: "u2",
      members: ["u2", "u1"],
      resources: [
        {
          id: "r3",
          title: "Graph Theory Lecture Slides (Prof. Roy)",
          url: "https://arxiv.org",
          sharedBy: "Rohit Das",
          sharedByUserId: "u2",
          timestamp: new Date(Date.now() - 1 * 24 * 60 * 60 * 1e3).toISOString()
        }
      ],
      isOnline: false,
      createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1e3).toISOString()
    }
  ],
  messages: [
    {
      id: "m1",
      groupId: "g1",
      senderId: "u1",
      senderName: "Ananya Sen",
      text: "Hey everyone! Welcome to the JIS Web Dev Titans study group! Ready to design our hackathon project?",
      timestamp: new Date(Date.now() - 2 * 60 * 60 * 1e3).toISOString()
    },
    {
      id: "m2",
      groupId: "g1",
      senderId: "u3",
      senderName: "Priyanka Roy",
      text: "Yes, Ananya! Let's schedule a study session for Monday evening regarding React state management.",
      timestamp: new Date(Date.now() - 1 * 60 * 60 * 1e3).toISOString()
    },
    {
      id: "m3",
      groupId: "g1",
      senderId: "u2",
      senderName: "Rohit Das",
      text: "I uploaded the Tailwind guide in our resources! Let me know if you guys find it helpful.",
      timestamp: new Date(Date.now() - 15 * 60 * 1e3).toISOString()
    }
  ],
  notifications: [
    {
      id: "n1",
      userId: "u1",
      text: "Rohit Das has requested to join your study group 'JIS Web Dev Titans'.",
      type: "request",
      relativeId: "g1",
      read: false,
      timestamp: new Date(Date.now() - 12 * 60 * 60 * 1e3).toISOString()
    },
    {
      id: "n2",
      userId: "u2",
      text: "Ananya Sen accepted your join request for 'JIS Web Dev Titans'!",
      type: "accept",
      relativeId: "g1",
      read: true,
      timestamp: new Date(Date.now() - 1 * 60 * 60 * 1e3).toISOString()
    }
  ],
  requests: [
    {
      id: "req1",
      groupId: "g1",
      groupName: "JIS Web Dev Titans",
      requesterId: "u2",
      requesterName: "Rohit Das",
      type: "join",
      status: "accepted",
      timestamp: new Date(Date.now() - 4 * 60 * 60 * 1e3).toISOString()
    }
  ]
};
var LocalDatabase = class {
  constructor() {
    this.data = this.load();
  }
  load() {
    try {
      if (import_fs.default.existsSync(DB_FILE_PATH)) {
        const fileContent = import_fs.default.readFileSync(DB_FILE_PATH, "utf-8");
        const parsed = JSON.parse(fileContent);
        if (parsed.users && parsed.groups && parsed.messages && parsed.notifications && parsed.requests) {
          return parsed;
        }
      }
    } catch (err) {
      console.error("Error loading local database file, creating a new fresh one:", err);
    }
    this.saveData(initialData);
    return JSON.parse(JSON.stringify(initialData));
  }
  saveData(newData) {
    try {
      import_fs.default.writeFileSync(DB_FILE_PATH, JSON.stringify(newData, null, 2), "utf-8");
    } catch (err) {
      console.error("Failed to write database file:", err);
    }
  }
  write() {
    this.saveData(this.data);
  }
  // Getters
  getUsers() {
    return this.data.users;
  }
  getGroups() {
    return this.data.groups;
  }
  getMessages() {
    return this.data.messages;
  }
  getNotifications() {
    return this.data.notifications;
  }
  getRequests() {
    return this.data.requests;
  }
  // Setters/upserts
  addUser(user) {
    this.data.users.push(user);
    this.write();
  }
  updateUser(updated) {
    this.data.users = this.data.users.map((u) => u.id === updated.id ? updated : u);
    this.write();
  }
  deleteUser(userId) {
    this.data.users = this.data.users.filter((u) => u.id !== userId);
    this.data.groups.forEach((g) => {
      g.members = g.members.filter((id) => id !== userId);
    });
    this.data.groups = this.data.groups.filter((g) => g.creatorId !== userId);
    this.write();
  }
  addGroup(group) {
    this.data.groups.push(group);
    this.write();
  }
  updateGroup(updated) {
    this.data.groups = this.data.groups.map((g) => g.id === updated.id ? updated : g);
    this.write();
  }
  deleteGroup(groupId) {
    this.data.groups = this.data.groups.filter((g) => g.id !== groupId);
    this.data.messages = this.data.messages.filter((m) => m.groupId !== groupId);
    this.data.requests = this.data.requests.filter((r) => r.groupId !== groupId);
    this.write();
  }
  addMessage(msg) {
    this.data.messages.push(msg);
    this.write();
  }
  deleteMessage(msgId) {
    this.data.messages = this.data.messages.filter((m) => m.id !== msgId);
    this.write();
  }
  addNotification(notification) {
    this.data.notifications.push(notification);
    this.write();
  }
  markNotificationsRead(userId) {
    this.data.notifications = this.data.notifications.map((n) => n.userId === userId ? { ...n, read: true } : n);
    this.write();
  }
  addRequest(req) {
    this.data.requests.push(req);
    this.write();
  }
  updateRequest(reqId, status) {
    this.data.requests = this.data.requests.map((r) => r.id === reqId ? { ...r, status } : r);
    this.write();
  }
};
var db = new LocalDatabase();

// server/middleware/authMiddleware.ts
var import_jsonwebtoken = __toESM(require("jsonwebtoken"), 1);
var JWT_SECRET = process.env.JWT_SECRET || "JIS_STUDY_GROUP_JWT_SECRET_2026_KEY";
function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    res.status(401).json({ message: "Authorization header is missing." });
    return;
  }
  const token = authHeader.split(" ")[1];
  if (!token) {
    res.status(401).json({ message: "Token is missing." });
    return;
  }
  try {
    const decoded = import_jsonwebtoken.default.verify(token, JWT_SECRET);
    const user = db.getUsers().find((u) => u.id === decoded.userId);
    if (!user) {
      res.status(401).json({ message: "User associated with this token no longer exists." });
      return;
    }
    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid or expired authorization token." });
  }
}

// server.ts
var PORT = 3e3;
function updateStreakIfChanged(user) {
  const todayStr = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
  const lastActiveStr = user.lastActiveDate ? user.lastActiveDate.split("T")[0] : "";
  if (todayStr === lastActiveStr) {
    return user;
  }
  const today = new Date(todayStr);
  const lastActive = new Date(lastActiveStr);
  const diffTime = today.getTime() - lastActive.getTime();
  const diffDays = Math.ceil(diffTime / (1e3 * 60 * 60 * 24));
  let newStreak = user.streakDays;
  if (diffDays === 1) {
    newStreak += 1;
  } else if (diffDays > 1) {
    newStreak = 1;
  } else if (!user.lastActiveDate) {
    newStreak = 1;
  }
  const updatedUser = {
    ...user,
    streakDays: newStreak,
    lastActiveDate: (/* @__PURE__ */ new Date()).toISOString()
  };
  db.updateUser(updatedUser);
  return updatedUser;
}
function calculateCompatibility(userA, userB) {
  if (userA.id === userB.id) return 100;
  let score = 15;
  if (userA.department && userB.department && userA.department.toLowerCase() === userB.department.toLowerCase()) {
    score += 20;
  }
  if (userA.semester && userB.semester && userA.semester.toLowerCase() === userB.semester.toLowerCase()) {
    score += 20;
  }
  if (userA.subjects && userB.subjects) {
    const shared = userA.subjects.filter((s) => userB.subjects.some((bs) => bs.toLowerCase() === s.toLowerCase()));
    if (shared.length > 0) {
      score += Math.min(30, shared.length * 15);
    }
  }
  if (userA.learningStyle && userB.learningStyle) {
    if (userA.learningStyle === userB.learningStyle) {
      score += 10;
    } else {
      const pair = [userA.learningStyle, userB.learningStyle].sort().join("-");
      if (pair === "Reading/Writing-Visual" || pair === "Auditory-Visual" || pair === "Kinesthetic-Visual") {
        score += 5;
      }
    }
  }
  if (userA.availability && userB.availability) {
    const sharedDays = userA.availability.days.filter((d) => userB.availability.days.includes(d));
    const sharedTimes = userA.availability.times.filter((t) => userB.availability.times.includes(t));
    if (sharedDays.length > 0 && sharedTimes.length > 0) {
      score += 15;
    } else if (sharedDays.length > 0 || sharedTimes.length > 0) {
      score += 7;
    }
  }
  return Math.min(99, score);
}
async function startServer() {
  const app = (0, import_express.default)();
  app.use(import_express.default.json());
  app.post("/api/auth/signup", async (req, res) => {
    try {
      const { name, email, password, department, semester, learningStyle, subjects } = req.body;
      if (!name || !email || !password) {
        res.status(400).json({ message: "Name, email and password are required." });
        return;
      }
      const users = db.getUsers();
      if (users.some((u) => u.email.toLowerCase() === email.toLowerCase())) {
        res.status(400).json({ message: "Student email already registered." });
        return;
      }
      const salt = await import_bcryptjs.default.genSalt(10);
      const passwordHash = await import_bcryptjs.default.hash(password, salt);
      const userId = "u_" + Math.random().toString(36).substr(2, 9);
      const newUser = {
        id: userId,
        name,
        email,
        passwordHash,
        department: department || "CSE",
        semester: semester || "1st",
        subjects: subjects || [],
        goals: "",
        learningStyle: learningStyle || "Visual",
        availability: {
          days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          times: ["Evening"]
        },
        avatarUrl: `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(name)}`,
        streakDays: 1,
        lastActiveDate: (/* @__PURE__ */ new Date()).toISOString(),
        isAdmin: false,
        createdAt: (/* @__PURE__ */ new Date()).toISOString()
      };
      db.addUser(newUser);
      const token = import_jsonwebtoken2.default.sign({ userId: newUser.id, email: newUser.email }, JWT_SECRET, { expiresIn: "7d" });
      const { passwordHash: _, ...userSafe } = newUser;
      res.status(210).json({ token, user: userSafe });
    } catch (e) {
      console.error(e);
      res.status(500).json({ message: "System signup failure." });
    }
  });
  app.post("/api/auth/login", async (req, res) => {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        res.status(400).json({ message: "Email and password are required." });
        return;
      }
      const users = db.getUsers();
      const user = users.find((u) => u.email.toLowerCase() === email.toLowerCase());
      if (!user) {
        res.status(401).json({ message: "Invalid email or password." });
        return;
      }
      const isMatch = await import_bcryptjs.default.compare(password, user.passwordHash);
      if (!isMatch) {
        res.status(401).json({ message: "Invalid email or password." });
        return;
      }
      const updatedUser = updateStreakIfChanged(user);
      const token = import_jsonwebtoken2.default.sign({ userId: updatedUser.id, email: updatedUser.email }, JWT_SECRET, { expiresIn: "7d" });
      const { passwordHash: _, ...userSafe } = updatedUser;
      res.json({ token, user: userSafe });
    } catch (e) {
      console.error(e);
      res.status(500).json({ message: "System authentication failure." });
    }
  });
  app.get("/api/auth/me", authMiddleware, (req, res) => {
    if (!req.user) {
      res.status(401).json({ message: "Unauthorized access." });
      return;
    }
    const updated = updateStreakIfChanged(req.user);
    const { passwordHash: _, ...userSafe } = updated;
    res.json(userSafe);
  });
  app.put("/api/users/profile", authMiddleware, (req, res) => {
    if (!req.user) {
      res.status(401).json({ message: "Unauthorized." });
      return;
    }
    const { department, semester, subjects, goals, availability, learningStyle, avatarUrl, name } = req.body;
    const updatedUser = {
      ...req.user,
      name: name || req.user.name,
      department: department || req.user.department,
      semester: semester || req.user.semester,
      subjects: subjects || req.user.subjects,
      goals: goals !== void 0 ? goals : req.user.goals,
      availability: availability || req.user.availability,
      learningStyle: learningStyle || req.user.learningStyle,
      avatarUrl: avatarUrl || req.user.avatarUrl,
      lastActiveDate: (/* @__PURE__ */ new Date()).toISOString()
    };
    db.updateUser(updatedUser);
    const { passwordHash: _, ...userSafe } = updatedUser;
    res.json({ message: "Profile updated successfully!", user: userSafe });
  });
  app.post("/api/users/streak-checkin", authMiddleware, (req, res) => {
    if (!req.user) {
      res.status(401).json({ message: "Unauthorized." });
      return;
    }
    const todayStr = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
    const lastActiveStr = req.user.lastActiveDate ? req.user.lastActiveDate.split("T")[0] : "";
    let updatedUser = { ...req.user };
    updatedUser.streakDays = req.user.streakDays + 1;
    updatedUser.lastActiveDate = (/* @__PURE__ */ new Date()).toISOString();
    db.updateUser(updatedUser);
    const { passwordHash: _, ...userSafe } = updatedUser;
    res.json({ message: "Pomodoro Study session logged! Streak increased.", user: userSafe });
  });
  app.get("/api/users/match", authMiddleware, (req, res) => {
    if (!req.user) {
      res.status(401).json({ message: "Unauthorized." });
      return;
    }
    const self = req.user;
    const allUsers = db.getUsers().filter((u) => u.id !== self.id);
    const matches = allUsers.map((u) => {
      const percentage = calculateCompatibility(self, u);
      const { passwordHash: _, ...safeUser } = u;
      return {
        student: safeUser,
        compatibility: percentage
      };
    }).sort((a, b) => b.compatibility - a.compatibility);
    res.json(matches);
  });
  app.get("/api/users", authMiddleware, (req, res) => {
    const list = db.getUsers().map((u) => {
      const { passwordHash: _, ...safe } = u;
      return safe;
    });
    res.json(list);
  });
  app.post("/api/groups", authMiddleware, (req, res) => {
    if (!req.user) {
      res.status(401).json({ message: "Unauthorized." });
      return;
    }
    const { name, subject, department, semester, learningStyle, description, rules, isOnline } = req.body;
    if (!name || !subject || !description) {
      res.status(400).json({ message: "Group Name, Subject, and Description are required." });
      return;
    }
    const groupId = "g_" + Math.random().toString(36).substr(2, 9);
    const newGroup = {
      id: groupId,
      name,
      subject,
      department: department || req.user.department,
      semester: semester || req.user.semester,
      learningStyle: learningStyle || req.user.learningStyle,
      description,
      rules: rules || "Treat every member with collegiate respect.",
      creatorId: req.user.id,
      members: [req.user.id],
      // Creator joins immediately
      resources: [],
      isOnline: isOnline !== void 0 ? isOnline : true,
      createdAt: (/* @__PURE__ */ new Date()).toISOString()
    };
    db.addGroup(newGroup);
    const welcomeAlert = {
      id: "n_" + Math.random().toString(36).substr(2, 9),
      userId: req.user.id,
      text: `Your study group '${name}' has been compiled successfully. Invite peers to begin collaboration!`,
      type: "system",
      relativeId: groupId,
      read: false,
      timestamp: (/* @__PURE__ */ new Date()).toISOString()
    };
    db.addNotification(welcomeAlert);
    res.status(211).json({ message: "Group created!", group: newGroup });
  });
  app.get("/api/groups", authMiddleware, (req, res) => {
    let groups = db.getGroups();
    const self = req.user;
    const { subject, semester, department, learningStyle, limit } = req.query;
    if (subject) {
      groups = groups.filter((g) => g.subject.toLowerCase().includes(subject.toLowerCase()));
    }
    if (semester) {
      groups = groups.filter((g) => g.semester.toLowerCase() === semester.toLowerCase());
    }
    if (department) {
      groups = groups.filter((g) => g.department.toLowerCase() === department.toLowerCase());
    }
    if (learningStyle) {
      groups = groups.filter((g) => g.learningStyle.toLowerCase() === learningStyle.toLowerCase());
    }
    const mapped = groups.map((g) => {
      const creator = db.getUsers().find((u) => u.id === g.creatorId);
      const isMember = self ? g.members.includes(self.id) : false;
      let compatibilityScore = 50;
      if (self) {
        const matchesSubject = self.subjects.some((s) => s.toLowerCase() === g.subject.toLowerCase());
        compatibilityScore += matchesSubject ? 30 : 0;
        compatibilityScore += self.department.toLowerCase() === g.department.toLowerCase() ? 10 : 0;
        compatibilityScore += self.semester.toLowerCase() === g.semester.toLowerCase() ? 9 : 0;
      }
      return {
        ...g,
        creatorName: creator ? creator.name : "Unknown Faculty/Student",
        memberCount: g.members.length,
        isMember,
        compatibilityScore
      };
    });
    res.json(mapped);
  });
  app.get("/api/groups/:id", authMiddleware, (req, res) => {
    const groupId = req.params.id;
    const group = db.getGroups().find((g) => g.id === groupId);
    if (!group) {
      res.status(404).json({ message: "Study Group not found." });
      return;
    }
    const membersList = db.getUsers().filter((u) => group.members.includes(u.id)).map((u) => {
      const { passwordHash: _, ...safe } = u;
      return safe;
    });
    const msgsList = db.getMessages().filter((m) => m.groupId === groupId);
    const isMember = req.user ? group.members.includes(req.user.id) : false;
    res.json({
      ...group,
      membersDetails: membersList,
      messages: msgsList,
      isMember
    });
  });
  app.post("/api/groups/:id/join", authMiddleware, (req, res) => {
    if (!req.user) {
      res.status(401).json({ message: "Unauthorized." });
      return;
    }
    const groupId = req.params.id;
    const group = db.getGroups().find((g) => g.id === groupId);
    if (!group) {
      res.status(404).json({ message: "Group not found." });
      return;
    }
    if (group.members.includes(req.user.id)) {
      res.status(400).json({ message: "You are already a member of this active study group." });
      return;
    }
    const creatorId = group.creatorId;
    const exists = db.getRequests().find(
      (r) => r.groupId === groupId && r.requesterId === req.user.id && r.status === "pending"
    );
    if (exists) {
      res.status(400).json({ message: "A pending join request is already submitted for this study group." });
      return;
    }
    const requestId = "req_" + Math.random().toString(36).substr(2, 9);
    const newRequest = {
      id: requestId,
      groupId,
      groupName: group.name,
      requesterId: req.user.id,
      requesterName: req.user.name,
      type: "join",
      status: "pending",
      timestamp: (/* @__PURE__ */ new Date()).toISOString()
    };
    db.addRequest(newRequest);
    const creatorNotification = {
      id: "n_" + Math.random().toString(36).substr(2, 9),
      userId: creatorId,
      text: `${req.user.name} requested to join your study group "${group.name}".`,
      type: "request",
      relativeId: groupId,
      read: false,
      timestamp: (/* @__PURE__ */ new Date()).toISOString()
    };
    db.addNotification(creatorNotification);
    res.json({ message: "Join request with compatibility score submitted to creator.", request: newRequest });
  });
  app.post("/api/requests/:id/action", authMiddleware, (req, res) => {
    if (!req.user) {
      res.status(401).json({ message: "Unauthorized." });
      return;
    }
    const requestId = req.params.id;
    const { action } = req.body;
    const joinReq = db.getRequests().find((r) => r.id === requestId);
    if (!joinReq) {
      res.status(404).json({ message: "Request not found." });
      return;
    }
    const group = db.getGroups().find((g) => g.id === joinReq.groupId);
    if (!group) {
      res.status(404).json({ message: "Associated study group does not exist." });
      return;
    }
    if (group.creatorId !== req.user.id && !req.user.isAdmin) {
      res.status(403).json({ message: "Forbidden. Only the studio creator can accept/reject members." });
      return;
    }
    if (joinReq.status !== "pending") {
      res.status(400).json({ message: "This request has already been processed." });
      return;
    }
    if (action === "accept") {
      db.updateRequest(requestId, "accepted");
      if (!group.members.includes(joinReq.requesterId)) {
        group.members.push(joinReq.requesterId);
        db.updateGroup(group);
      }
      const userNotification = {
        id: "n_" + Math.random().toString(36).substr(2, 9),
        userId: joinReq.requesterId,
        text: `Your request to join "${group.name}" has been accepted!`,
        type: "accept",
        relativeId: group.id,
        read: false,
        timestamp: (/* @__PURE__ */ new Date()).toISOString()
      };
      db.addNotification(userNotification);
      const systemMsg = {
        id: "sys_" + Math.random().toString(36).substr(2, 9),
        groupId: group.id,
        senderId: "system",
        senderName: "JIS Companion Core",
        text: `${joinReq.requesterName} joined the study group!`,
        timestamp: (/* @__PURE__ */ new Date()).toISOString()
      };
      db.addMessage(systemMsg);
      res.json({ message: "Student request accepted. Member joined.", req: joinReq });
    } else {
      db.updateRequest(requestId, "rejected");
      const userNotification = {
        id: "n_" + Math.random().toString(36).substr(2, 9),
        userId: joinReq.requesterId,
        text: `Your request to join "${group.name}" was declined. Keep searching for other peers!`,
        type: "reject",
        relativeId: group.id,
        read: false,
        timestamp: (/* @__PURE__ */ new Date()).toISOString()
      };
      db.addNotification(userNotification);
      res.json({ message: "Request declined.", req: joinReq });
    }
  });
  app.post("/api/requests/invite", authMiddleware, (req, res) => {
    if (!req.user) {
      res.status(401).json({ message: "Unauthorized." });
      return;
    }
    const { groupId, targetUserId } = req.body;
    const group = db.getGroups().find((g) => g.id === groupId);
    const target = db.getUsers().find((u) => u.id === targetUserId);
    if (!group || !target) {
      res.status(404).json({ message: "Study Group or Student not found in directory." });
      return;
    }
    const inviteId = "req_" + Math.random().toString(36).substr(2, 9);
    const newRequest = {
      id: inviteId,
      groupId,
      groupName: group.name,
      requesterId: targetUserId,
      requesterName: target.name,
      type: "invite",
      status: "pending",
      timestamp: (/* @__PURE__ */ new Date()).toISOString()
    };
    db.addRequest(newRequest);
    const inviteNotification = {
      id: "n_" + Math.random().toString(36).substr(2, 9),
      userId: targetUserId,
      text: `${req.user.name} invited you to join the study group "${group.name}".`,
      type: "invite",
      relativeId: groupId,
      read: false,
      timestamp: (/* @__PURE__ */ new Date()).toISOString()
    };
    db.addNotification(inviteNotification);
    res.json({ message: `Invitation successfully sent to ${target.name}!` });
  });
  app.post("/api/groups/:id/notes", authMiddleware, (req, res) => {
    if (!req.user) {
      res.status(401).json({ message: "Unauthorized." });
      return;
    }
    const groupId = req.params.id;
    const { title, url } = req.body;
    if (!title || !url) {
      res.status(400).json({ message: "Resource/Notes Title and URL/Link are required." });
      return;
    }
    const group = db.getGroups().find((g) => g.id === groupId);
    if (!group) {
      res.status(404).json({ message: "Group not found." });
      return;
    }
    if (!group.members.includes(req.user.id)) {
      res.status(403).json({ message: "Access denied. Must be a member of this study group to share notes." });
      return;
    }
    const newResource = {
      id: "res_" + Math.random().toString(36).substr(2, 9),
      title,
      url,
      sharedBy: req.user.name,
      sharedByUserId: req.user.id,
      timestamp: (/* @__PURE__ */ new Date()).toISOString()
    };
    group.resources.push(newResource);
    db.updateGroup(group);
    const updateMsg = {
      id: "m_" + Math.random().toString(36).substr(2, 9),
      groupId: group.id,
      senderId: "system",
      senderName: "JIS Resources",
      text: `${req.user.name} shared a new study notes link: "${title}"`,
      timestamp: (/* @__PURE__ */ new Date()).toISOString()
    };
    db.addMessage(updateMsg);
    res.status(211).json({ message: "Notes shared successfully with study peers!", resources: group.resources });
  });
  app.get("/api/groups/:id/messages", authMiddleware, (req, res) => {
    const groupId = req.params.id;
    const group = db.getGroups().find((g) => g.id === groupId);
    if (!group) {
      res.status(404).json({ message: "Study Group not found." });
      return;
    }
    if (!group.members.includes(req.user.id) && !req.user.isAdmin) {
      res.status(403).json({ message: "Forbidden. Join this study group to access discussion history." });
      return;
    }
    const messages = db.getMessages().filter((m) => m.groupId === groupId);
    res.json(messages);
  });
  app.post("/api/groups/:id/messages", authMiddleware, (req, res) => {
    if (!req.user) {
      res.status(401).json({ message: "Unauthorized." });
      return;
    }
    const groupId = req.params.id;
    const { text } = req.body;
    if (!text || text.trim() === "") {
      res.status(400).json({ message: "Message text cannot be empty." });
      return;
    }
    const group = db.getGroups().find((g) => g.id === groupId);
    if (!group) {
      res.status(404).json({ message: "Study Group not found." });
      return;
    }
    if (!group.members.includes(req.user.id)) {
      res.status(403).json({ message: "Join group to post text messages." });
      return;
    }
    const newMessage = {
      id: "m_" + Math.random().toString(36).substr(2, 9),
      groupId,
      senderId: req.user.id,
      senderName: req.user.name,
      text,
      timestamp: (/* @__PURE__ */ new Date()).toISOString()
    };
    db.addMessage(newMessage);
    res.status(212).json(newMessage);
  });
  app.get("/api/notifications", authMiddleware, (req, res) => {
    if (!req.user) {
      res.status(401).json({ message: "Unauthorized." });
      return;
    }
    const userId = req.user.id;
    const notifications = db.getNotifications().filter((n) => n.userId === userId).sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
    let pendingRequests = [];
    const myGroupIds = db.getGroups().filter((g) => g.creatorId === userId).map((g) => g.id);
    if (myGroupIds.length > 0 || req.user.isAdmin) {
      pendingRequests = db.getRequests().filter(
        (r) => (myGroupIds.includes(r.groupId) || req.user.isAdmin) && r.status === "pending"
      );
    }
    const invites = db.getRequests().filter(
      (r) => r.requesterId === userId && r.type === "invite" && r.status === "pending"
    );
    res.json({
      notifications,
      pendingRequests,
      invites
    });
  });
  app.post("/api/notifications/read", authMiddleware, (req, res) => {
    if (!req.user) {
      res.status(401).json({ message: "Unauthorized." });
      return;
    }
    db.markNotificationsRead(req.user.id);
    res.json({ success: true, message: "All notifications flagged read." });
  });
  app.get("/api/stats", authMiddleware, (req, res) => {
    if (!req.user) {
      res.status(401).json({ message: "Unauthorized." });
      return;
    }
    if (!req.user.isAdmin) {
      res.status(403).json({ message: "Forbidden. Admin credentials required for platform stats." });
      return;
    }
    const users = db.getUsers();
    const groups = db.getGroups();
    const messages = db.getMessages();
    const notifications = db.getNotifications();
    const requests = db.getRequests();
    const totalStudents = users.length;
    const totalGroups = groups.length;
    const totalMessages = messages.length;
    const totalRequests = requests.length;
    const departmentDistribution = {};
    users.forEach((u) => {
      departmentDistribution[u.department] = (departmentDistribution[u.department] || 0) + 1;
    });
    const subjectDistribution = {};
    groups.forEach((g) => {
      subjectDistribution[g.subject] = (subjectDistribution[g.subject] || 0) + 1;
    });
    const learningStyleDistribution = {};
    users.forEach((u) => {
      learningStyleDistribution[u.learningStyle] = (learningStyleDistribution[u.learningStyle] || 0) + 1;
    });
    const totalMatchingCalculated = 84;
    const compatibilityMatchRate = 78;
    res.json({
      metrics: {
        totalStudents,
        totalGroups,
        totalMessages,
        totalRequests,
        compatibilityMatchRate
      },
      departmentDistribution,
      subjectDistribution,
      learningStyleDistribution
    });
  });
  app.delete("/api/groups/:id", authMiddleware, (req, res) => {
    if (!req.user) {
      res.status(401).json({ message: "Unauthorized." });
      return;
    }
    const groupId = req.params.id;
    const group = db.getGroups().find((g) => g.id === groupId);
    if (!group) {
      res.status(404).json({ message: "Group not found." });
      return;
    }
    if (group.creatorId !== req.user.id && !req.user.isAdmin) {
      res.status(403).json({ message: "Only Creator or Admins delete groups." });
      return;
    }
    db.deleteGroup(groupId);
    res.json({ success: true, message: "Study Group deleted successfully." });
  });
  app.delete("/api/messages/:id", authMiddleware, (req, res) => {
    if (!req.user) {
      res.status(401).json({ message: "Unauthorized." });
      return;
    }
    const msgId = req.params.id;
    const msg = db.getMessages().find((m) => m.id === msgId);
    if (!msg) {
      res.status(404).json({ message: "Message not found." });
      return;
    }
    const associatedGroup = db.getGroups().find((g) => g.id === msg.groupId);
    const isCreator = associatedGroup ? associatedGroup.creatorId === req.user.id : false;
    if (!isCreator && !req.user.isAdmin && msg.senderId !== req.user.id) {
      res.status(403).json({ message: "Forbidden. Inadequate privileges to delete message." });
      return;
    }
    db.deleteMessage(msgId);
    res.json({ success: true, message: "Message removed from discussion board." });
  });
  app.delete("/api/users/:id", authMiddleware, (req, res) => {
    if (!req.user || !req.user.isAdmin) {
      res.status(403).json({ message: "Admin credentials required." });
      return;
    }
    const userId = req.params.id;
    if (userId === req.user.id) {
      res.status(400).json({ message: "You cannot delete yourself, Admin!" });
      return;
    }
    const exists = db.getUsers().find((u) => u.id === userId);
    if (!exists) {
      res.status(404).json({ message: "User not found in directory." });
      return;
    }
    db.deleteUser(userId);
    res.json({ success: true, message: `Successfully offboarded student: ${exists.name}` });
  });
  app.post("/api/users/:id/promote", authMiddleware, (req, res) => {
    if (!req.user || !req.user.isAdmin) {
      res.status(403).json({ message: "Admin rights required." });
      return;
    }
    const userId = req.params.id;
    const student = db.getUsers().find((u) => u.id === userId);
    if (!student) {
      res.status(404).json({ message: "Student not found." });
      return;
    }
    student.isAdmin = true;
    db.updateUser(student);
    res.json({ success: true, message: `${student.name} promoted to System Administrator.` });
  });
  if (process.env.NODE_ENV !== "production") {
    const vite = await (0, import_vite.createServer)({
      server: { middlewareMode: true },
      appType: "spa"
    });
    app.use(vite.middlewares);
  } else {
    const distPath = import_path2.default.join(process.cwd(), "dist");
    app.use(import_express.default.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(import_path2.default.join(distPath, "index.html"));
    });
  }
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Study Group Matcher server is active at http://localhost:${PORT}`);
  });
}
startServer();
//# sourceMappingURL=server.cjs.map
