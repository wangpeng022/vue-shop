let http=require('http');
let url=require('url');
let sliders=require('./db/sliders');
let imgList=require('./db/imgList');
// let fs=require('fs');
// function getBook(cb) {
//   fs.readFile('./db/book.json','utf8',function (err,data) {
//     if(err||data.length===0){cb([]);}
//     else {cb(JSON.parse(data))}y

//   });
// }
http.createServer(function (req,res) {
  let {pathname,query}=url.parse(req.url,true);
  if(pathname==='/api/sliders'){
    res.end(JSON.stringify(sliders));
  }else if(pathname==='/api/imgList'){
    res.end(JSON.stringify(imgList));

  }
}).listen(8009);


// else if(pathname==='/api/hot'){
//   getBook(function (data) {
//     res.end(JSON.stringify(data.reverse().slice(0,12)));
//   })
//else if(pathname==='/api/book'){
// let id=parseInt(query.id);
// switch(req.method){
//   case 'GET':
//     if(id){
//       //查询某一个
//     }else {
//       getBook(function (data) {
//         res.end(JSON.stringify(data.reverse()));
//       })
//     }
//     break;
//   case 'POST':
//     break;
//   case 'DELETE':
//     break;
//   case 'PUT':
//     break;
// }
// }
