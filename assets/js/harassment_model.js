// JavaScript

const maxlen = 400;
const alphabet = "abcdefghijklmnopqrstuvwxyz@.!? ";
const num_chars = alphabet.length+1;
var model;
async function init(){
  model = await tf.loadModel('http://www.solaire.ie/assets/model/model.json');
  console.log("Done")
}

char_dict = {};
for (var i = 0; i < alphabet.length; i++) {
  char = alphabet.charAt(i);
  char_dict[char] = i;
}

function char_to_int(x) {
  if (x in char_dict){
    return char_dict[x];
  }
  return num_chars-1;
}

function to_one_hot_char(s) {
    l = [];
    s = s.toLowerCase();
    for (var i = 0; i < s.length; i++) {
      char = s.charAt(i);
      l.push(char_to_int(char));
    }
    if(l.length < maxlen){
        for (var i = l.length; i < maxlen; i++) {
            l.push(num_chars-1);
        }
    }
    l = l.slice(0,maxlen);
    tensor = tf.oneHot(l, num_chars).reshape([maxlen,num_chars]);
    tensor = tf.cast(tensor, 'float32');
    return tf.reshape(tensor,[1,400,32])
}

init()
