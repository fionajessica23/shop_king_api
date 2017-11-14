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
      imgUrl: 'http://via.placeholder.com/150x150'
    }, {
      id: 2,
      name: 'watch',
      price: 50,
      imgUrl: 'http://via.placeholder.com/150x150'
    }, {
      id: 3,
      name: 'blanket',
      price: 15,
      imgUrl: 'http://via.placeholder.com/150x150'
    }, {
      id: 4,
      name: 'bag',
      price: 20,
      imgUrl: 'http://via.placeholder.com/150x150'
    }]
  }

  res.json(data)
})

app.listen(PORT, () => {
  console.log(`listening at port ${PORT}`);

})
