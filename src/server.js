import express from "express"; // express 모듈 불러오기

const app = express(); // express를 초기화 한 후 app에 할당

const PORT = 4000;

const handleHome = (req, res) => {  // express는 req와 res를 제공한다.
    return res.send("I love you now and forever."); // home 서버가 응답(respond)한다.
};

const handleLogin = (req, res) => {
    return res.send("Login ");
};

app.get("/", handleHome);
app.get("/login", handleLogin);

const handleListening = () =>
    console.log(`Server listening on port http://localhost:${PORT}🚀`);

app.listen(PORT, handleListening);

