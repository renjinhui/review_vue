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
export function moveInOut(){
  return fetch('https://huiyan.baidu.com/openapi/v1/migration/rank?type=move&ak=kgD2HiDnLdUhwzd3CLuG5AWNfX3fhLYe&adminType=country&name=%E5%85%A8%E5%9B%BD').then((data)=>{
    return data.json();
  })
}