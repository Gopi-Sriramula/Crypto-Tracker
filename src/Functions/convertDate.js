export const convertDate = function(number){
     const date = new Date(number);
     const result = date.getDate()+"/"+(date.getMonth()+1);
     return result;
}