const express = require('express');
const router = express.Router();
const axios = require('axios');

const callApi = async (url) => {
  const result = await axios({
    method: 'GET',
    url,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type,Accept',
      'Content-Type': 'application/json',
    },
    // withCredentials: true,
  });
  if (result && result.data) {
    return result.data.numbers;
  }
};

router.get('/numbers', async (req, res) => {
  try {
    const urlArr = req.query.url;
    const resultArr = [];
    if (urlArr.length > 0) {
      urlArr.forEach((url) => {
        resultArr.push(...callApi(url));
      });
    }
    return res.send({
      numbers: resultArr.sort(function (a, b) {
        return a - b;
      }),
    });
  } catch (error) {}
});

module.exports = router;
