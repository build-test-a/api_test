import axios from "axios"

export default function handler(req, res) {
    console.log(req.body, req.query)
    let zipcode = req.query.zip || "9071801"
    axios.get(`https://api.zipaddress.net/?zipcode=${zipcode}`)
    .then( (responce) => {
        res.status(200).json(JSON.stringify(responce.data))
    })
    .catch((res) => {
        console.log(res)
    })
 
  }