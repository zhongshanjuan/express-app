var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource !!!');
});


/**
 * @api {post} /user/login 用户登录
 * @apiDescription 用户登录
 * @apiName login
 * @apiGroup User
 * @apiParam {string} username 用户名
 * @apiParam {string} loginPass 密码
 * @apiSuccess {json} result
 * @apiSuccessExample {json} Success-Response:
 *  {
 *      code: 200,
 *      msg: "success",
 *     token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"
 *         
 *     
 *  }
 * @apiSampleRequest http://localhost:3000/user/login
 * @apiVersion 1.0.0
 */
router.post('/login', function (req, res, next) {
  console.log("json===");
  //json
  console.log(req.body);

  // console.log(req.headers);
  res.send({
    code: 200,
    msg: "success",
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"
  });
});


var Mock = require('mockjs')

router.get('/getmock', function (req, res, next) {
  res.send(Mock.mock({
    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
    'list|1-10': [{
      // 属性 id 是一个自增数，起始值为 1，每次增 1
      'id|+1': 1
    }]
  }));
});

module.exports = router;
