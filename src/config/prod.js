module.exports = {
  mongoURI: process.env.MONGO_URI,
  //MONGO_URI : 헤로쿠(heroku)에서 적어준 Config Vars 에 적어준 이름대로 똑같이 해주는거
  //시스템이 production mode일때 해당 uri 주소를 이용한다
};
