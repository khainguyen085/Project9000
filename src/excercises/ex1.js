const str = prompt("nhap chuoi ky tu bat ky");
const nearest = (arr = [], el) => arr.reduce((acc, val) => Math.min(acc,
Math.abs(val - el)), Infinity);
const vowelNearestDistance = (str = '') => {
   const s = str.toLowerCase();
   const vowelIndex = [];
   for(let i = 0; i < s.length; i++){
      if(s[i] === 'a' || s[i] === 'e' || s[i] === 'i' || s[i] === 'o' ||
      s[i] === 'u'){
         vowelIndex.push(i);
      };
   };
   return s.split('').map((el, ind) => nearest(vowelIndex, ind));
};
console.log(vowelNearestDistance(str));

//bài odd square patch. xét điểm neo. rồi cộng tổng các số sau khi đã đổi thành số chẵn lẻ. nếu tạo thành khác không thì out vòng lập.