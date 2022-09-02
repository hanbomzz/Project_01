const express = require("express");
const app = express(); //서버에서 사용될 설정, URI설정을 담당하는 페이지
const bodyParser = require("body-parser"); //요청 데이터(req)를 받을때 분석해서 받아주는 역할
const cookieParser = require("cookie-parser"); //
const config = require("./config/key"); //DB연결할때 모드에 따른 URI변환 위해 필요
const mongoose = require("mongoose"); //MongoDB의 ODM(Object Document Mapping), MongoDB의 Document를 JS의 객체로 바꾸어주는 역할

const connect = mongoose
  .connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true }) //MonggoDB 연결
  .then(() => console.log("MongoDB Connected!!!!!")) //연결에 성공하면 then으로 넘어와서 실행
  .catch((err) => console.log(err)); //에러 콘솔창 표시

app.use(bodyParser.urlencoded({ extended: true })); //express.urlencoded :  URL 인코딩 페이로드로 들어오는 요청을 구문 분석
app.use(bodyParser.json()); //express.json :   JSON 페이로드로 들어오는 요청을 구문 분석
app.use(cookieParser());
