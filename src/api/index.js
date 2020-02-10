import jsonp from 'jsonp';
export function getChinaData(){
  return new Promise((res,rej)=>{
    jsonp('https://interface.sina.cn/news/wap/fymap2020_data.d.json?_=1580892522427',{},(err,data)=>{
        if(err){
          rej()
        }else{
          res(data.data);
        }
    })
  })
}