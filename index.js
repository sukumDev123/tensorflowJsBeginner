import * as tf from '@tensorflow/tfjs'
import express from 'express'
import http from 'http'
const app = express()
function random(start , end){
    return Math.random() * end  + start;
}
let values = []
for(let i = 0 ; i < 30 ; i++) {
    values[i] =random(0,100)
}
const shape = [2,5,3]
const tense = tf.tensor3d(values,shape,'int32')
const vtense = tf.variable(tense)
console.log(vtense)












app.set('views', './');
app.set('view engine', 'ejs');
app.use(express.static('./'));
app.get('/' , (req,res)  => {
    res.render('views/index' , {
        tfShow : ''
    })

})
http.createServer(app).listen(3000)


