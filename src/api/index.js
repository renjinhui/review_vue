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

export function getHotData(){
  return new Promise((res,rej)=>{
    jsonp('https://opendata.baidu.com/api.php?query=%E5%85%A8%E5%9B%BD&resource_id=39258&tn=wisetpl&format=json',{param:'cb'},(err,data)=>{
        if(err){
          rej()
        }else{
          res(data.data);
        }
    })
  })
}
export function getZbData(){
  return new Promise((res,rej)=>{
    jsonp('https://opendata.baidu.com/data/inner?tn=reserved_all_res_tn&dspName=iphone&from_sf=1&dsp=iphone&resource_id=28565&alr=1&query=%E8%82%BA%E7%82%8E',{param:'cb'},(err,data)=>{
        if(err){
          rej()
        }else{
          res(data.Result[0].DisplayData.result);
        }
    })
  })
}