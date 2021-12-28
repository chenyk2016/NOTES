// inRange('192.244.255.255', '192.0.0.0', '192.255.0.0')

// ip 255进一
function inRange(ip, start, end) {
  return ipToNum(ip) >= ipToNum(start) && ipToNum(ip) <= ipToNum(end)
}

function ipToNum(ip) {
  const ipS = ip.split('.')
  const l = ipS.length
  return ipS.reduce((pre, v, i) => {
    return pre + v * Math.pow(256, l - 1 - i)
  }, 0)
}

console.log( ipToNum('192.0.0.0'), ipToNum('0.0.1.0') );
console.log(  inRange('192.244.255.255', '192.0.0.0', '192.255.0.0')  );
console.log(  inRange('', '192.0.0.0', '192.255.0.0')  );
console.log(  inRange('192.0.0.1', '192.0.0.0', '192.255.0.0')  );