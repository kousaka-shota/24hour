const oneCountUp = (e) => {
    let count = document.getElementById("oneFloor").innerText;
    count = Number(count) + 1;
    document.getElementById("oneFloor").innerText = count;
  };
  
  const twoCountUp = (e) => {
    let count = document.getElementById("twoFloor").innerText;
    count = Number(count) + 1;
    document.getElementById("twoFloor").innerText = count;
  };
  
  const threeCountUp = (e) => {
    let count = document.getElementById("threeFloor").innerText;
    count = Number(count) + 1;
    document.getElementById("threeFloor").innerText = count;
  };
  
  const fourCountUp = (e) => {
    let count = document.getElementById("fourFloor").innerText;
    count = Number(count) + 1;
    document.getElementById("fourFloor").innerText = count;
  };
  
  document.getElementById("oneCountUp").addEventListener("click", oneCountUp);
  
  document.getElementById("twoCountUp").addEventListener("click", twoCountUp);
  
  document.getElementById("threeCountUp").addEventListener("click", threeCountUp);
  
  document.getElementById("fourCountUp").addEventListener("click", fourCountUp);
  