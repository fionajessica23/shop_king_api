var express = require('express')
var app = express()
var cors = require('cors')
const PORT = 9000

// for security setting if the API are running in different server from our server
app.use(cors())

app.get('/api/items', (req, res) => {
  const data = {
    items: [{
      id: 1,
      name: 'shoes',
      price: 10,
      imgUrl: 'https://lh6.googleusercontent.com/rta9aEiUdeZUFHZtEfOVbhoVnyWU-Zl7txrk0WBb9gBi9rFnlFRJ6LNxEs0fqPJtG2-ifMqAX7slbloYgaQi=w1855-h966'
    }, {
      id: 2,
      name: 'watch',
      price: 50,
      imgUrl: 'https://lh3.googleusercontent.com/OhPTh_UhSxCmo-d95EPUASwVSyzcctm1caYlDo0C_bkzpDYu75tchKBksU0RkPrX74FZy9gt1urUEOR5ydpC=w1855-h966'
    }, {
      id: 3,
      name: 'shirt',
      price: 25,
      imgUrl: 'https://lh6.googleusercontent.com/9ieR-k1cIVP0Ll6nsleIPcJAQ6Lw8ZBRyfRfmwIySq2HkSwHRcInNYdt9shpJsFBpxbv9NyvePWEbXCrjIb-=w1855-h966'
    }, {
      id: 4,
      name: 'bag',
      price: 20,
      imgUrl: 'https://lh5.googleusercontent.com/bQpu-2Yo3WXCAsizVs1v1a65QjI6HBld41ja3kKx_XQ1CQBa4UECjTlVvQfCCRfAJ520gsfqKbpm8xPPaJoq=w912-h887'
    }, {
      id: 5,
      name: 'jacket',
      price: 35,
      imgUrl: 'https://lh3.googleusercontent.com/-dLgyrSnBG1Ifgv_axXTw48SaWwnLEAgGOn6sBZuIaoW58hO3sbQ3UtfpnLhiyIgW05bsUnSxwxcUch15YUK=w1855-h966'
    }, {
      id: 6,
      name: 'cap',
      price: 10,
      imgUrl: 'https://lh4.googleusercontent.com/pNUdCyJ4Zu1YChtByNv3mhNswvxQRAcHOjmcOEBG_ghEClcY1UL6ou0dyaIwuu3ztdHqgr5oSrOtcdUE7RTy=w1855-h966'
    }]
  }

  res.json(data)
})

app.listen(PORT, () => {
  console.log(`listening at port ${PORT}`);

})
