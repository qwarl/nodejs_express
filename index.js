// truy cap dependencies express trong node_modules nap vao const express
const express = require('express')
//khoi tao function express() gan vao const app, dependencies express co du? roi nen chi can khoi tao function
const app = express()
//chon port muon khoi chay
const port = 3000
// '/' dinh nghia route (duong dan den trang chu sau dau /)| dang nhu: http://localhost:3000/trang-chu neu app.get('/trang-chu')
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})