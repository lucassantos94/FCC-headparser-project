const getRequestHeader = (requestData)=>{
  
  return {ipaddress: requestData.ip,language:requestData.headers['accept-language'],software:requestData.headers['user-agent']}
}

module.exports = getRequestHeader