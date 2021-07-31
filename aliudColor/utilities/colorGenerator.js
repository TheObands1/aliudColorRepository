export const HSLNormalColor = () => {

   const h = Math.floor(Math.random() * (335 - 0) + 0);
   const s = Math.floor(Math.random() * (95 - 90) + 90);
   const l = Math.floor(Math.random() * (75 - 65) + 65);

   return {h, s, l}

 };
 
 export const HSLDifferentColor = ({ h, s, l }) => {

   
   const newH = h + Math.floor(Math.random() * (25 - 20) + 20);
   const newS = s + Math.floor(Math.random() * (5 - 0) + 0);;
   const newL = l +  Math.floor(Math.random() * (15 - 5) + 5);

   return { h: newH, s:newS, l:newL};
  
 };