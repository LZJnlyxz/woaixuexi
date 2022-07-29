const climbStairs = (n) => {
    if(n===2||n===3){
        return n;
    }else{
        return climbStairs(n-1)+climbStairs(n-2);
    }
 
}
module.exports = climbStairs; 
