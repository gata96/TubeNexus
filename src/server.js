import express from "express";

const PORT = 4000;

const app = express(); // 1. application 만들기

const handleHome = (req, res) => { // 2. 서버에서 client로 Respond
    return res.send("I Love you Forever");  
}; 

const handleLogin = (req, res) => {
    return res.send("Login here.");
};

app.get("/", handleHome);
app.get("/login", handleLogin);

const handleListening = () =>
    console.log(`Server listening on port http://localhost:${PORT}🚀`);

app.listen(PORT, handleListening); // 3. Server는 계속 client의 요구(request)를 'listen'하고 있다.

