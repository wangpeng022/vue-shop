let http=require('http');
let url=require('url');
let sliders=require('./db/sliders');
let imgList=require('./db/imgList');
let fs=require('fs');
function getUser(cb) {
  fs.readFile('./db/USER.json','utf8',function (err,data) {
    if(err||data.length===0){cb([]);}
    else {cb(JSON.parse(data))}

  });
}
function writeInfo(data,cb) {
  fs.writeFile('./db/USER.json',JSON.stringify(data),cb);
}
http.createServer(function (req,res) {
  let {pathname,query}=url.parse(req.url,true);
  if(pathname==='/api/sliders'){
    res.end(JSON.stringify(sliders));
  }else if(pathname==='/api/imgList'){
    res.end(JSON.stringify(imgList));
  }
  else if(pathname==='/api/user'){
    let id=parseInt(query.id);
    switch(req.method){
      case 'GET':
        if(id){
          //查询某一个
        }else {
          // getUser(function (data) {
          //   res.end(JSON.stringify(data.reverse()));
          // })
        }
        break;
      case 'POST':
        if(id){
          let str='';
          req.on('data',function (chunk) {
            str+=chunk;
          });
          req.on('end',function () {
            let personInfo=JSON.parse(str);
            getUser(function (users) {
              let flag=users.some(item=>item.id===personInfo.id);
              if(flag){
                res.end(JSON.stringify(personInfo))
              }

            })
          });

        }
        break;
      case 'DELETE':
        break;
      case 'PUT':
        if(id){
          let str='';
          req.on('data',function (chunk) {
            str+=chunk;
          });
          req.on('end',function () {
            let registerInfo=JSON.parse(str);
            getUser(function (users) {
              registerInfo.id=users.length?users[users.length-1].id+1:1;
              users.push(registerInfo);
              writeInfo(users,function () {
                res.end(JSON.stringify(registerInfo));
              })
            })
          })
        }
        break;
    }
  }
}).listen(8070);


// else if(pathname==='/api/hot'){
//   getBook(function (data) {
//     res.end(JSON.stringify(data.reverse().slice(0,12)));
//   })
// else if(pathname==='/api/book'){
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
