let s= 123456;
try{
    s = s.split("").reverse().join("");

}catch(error){
    console.log(error.message);
}finally{
    console.log(s)}

