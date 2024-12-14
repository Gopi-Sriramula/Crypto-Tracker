export const convertDate = function(date){
     var myDate = new Date(date);
     return myDate.getDate()+"/"+(myDate.getMonth()+1)
}