const axios = require("axios");
// const { Payments } = require("../database/index.js");
module.exports = {
  makePayment: async (req, res) => {
    const url = "https://developers.flouci.com/api/generate_payment";
    const payload={
      "app_token": "5285e298-f673-4ce3-a6ad-c179b992948e",
      "app_secret": process.env.FLOUCI_SECRET,
      "accept_card":"true",
      "amount":req.body.amount,
      "success_link": "http://localhost:1337/success",
      "fail_link": "http://localhost:1337/fail",
      "session_timeout_secs": 1200,
      "developer_tracking_id": "6c67718c-5ebd-4531-aa8f-e123ddee5290"
    }
    try {
      const data  = await axios.post(url,payload)
      res.send(data.data)
    } catch (error) {
      throw error
    }
  },
  verify : async(req,res)=>{
    const id = req.params.id
    const url = `https://developers.flouci.com/api/verify_payment/${id}`
      try {
        const data = await axios.get(url,{headers : {
          'Content-Type': 'application/json',
          'apppublic':"5285e298-f673-4ce3-a6ad-c179b992948e",
          'appsecret': "7ba905c7-ac45-40aa-9e9e-0a9387f28b68"
        }}) 
        res.send(data.data)
      } catch (error) {
        throw error
      }
  }



};

// getAll: async (req, res) => {
//   try {
//     const all = await Payments.findAll();
//     res.json(all);
//   } catch (error) {
//     throw error;
//   }
// },
// getById: async (req, res) => {
//   try {
//     const all = await Payments.findAll({
//       where: {
//         userId: req.params.userid,
//       },
//     });
//     res.json(all);
//   } catch (error) {
//     throw error;
//   }
// },
// add: async (req, res) => {
//   try {
//     await Product.create(req.body);
//     res.json({
//       status: "success",
//       message: "Payment added successfully!!!",
//       data: null,
//     });
//   } catch (err) {
//     throw err;
//   }
// },
