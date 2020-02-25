function checkCashRegister(price, cash, cid) {

var cid1 = cid.map(function(arr) {
    return [...arr];
})

let cidW = cid1.reverse()

//stringmaker
for (let i=0; i <= 8; i++) {
  cidW[i][1] = cidW[i][1]}
//denot values
cidW[0][2] = "100"; cidW[1][2] = "20"; cidW[2][2] = "10"; cidW[3][2] = "5"; cidW[4][2] = "1"; cidW[5][2] = ".25"; cidW[6][2] = ".1"; cidW[7][2] = ".05"; cidW[8][2] = ".01"; 
//beschikbaar
cidW[0][3] = (cidW[0][1] / cidW[0][2]).toFixed(); cidW[1][3] = (cidW[1][1] / cidW[1][2]).toFixed(); cidW[2][3] = (cidW[2][1] / cidW[2][2]).toFixed(); cidW[3][3] = (cidW[3][1] / cidW[3][2]).toFixed(); cidW[4][3] = (cidW[4][1] / cidW[4][2]).toFixed(); cidW[5][3] = (cidW[5][1] / cidW[5][2]).toFixed(); cidW[6][3] = (cidW[6][1] / cidW[6][2]).toFixed(); cidW[7][3] = (cidW[7][1] / cidW[7][2]).toFixed(); cidW[8][3] = (cidW[8][1] / cidW[8][2]).toFixed()
//console.log(cidW)

//totCid
let totCid = 0
for (let i=0; i <= 8; i++) {
  totCid += cidW[i][1]}
 totCid = totCid.toFixed(2)
console.log('totCid ' + totCid) 

let output = {status: '', change: []}
let totRef = (cash-price); //console.log(totRef)
let alreadyRef = "0"; //console.log(alreadyRef)
let stillRef = totRef; console.log('stillref voor '+stillRef)

if (stillRef.toString() == totCid.toString()) {
  output.status = 'CLOSED'
  output.change = cid
  } else {

      for (let i=0; i <= 8; i++) {
        //console.log(cidW[i])
        let neededDED = (Math.floor(stillRef / cidW[i][2]))
        //console.log('need '+neededDED)
        //console.log('avail '+cidW[i][3])
        
        if (neededDED > cidW[i][3]) {
          //console.log('tekort')
          if (cidW[i][3] > 0) {output.change[i] = cidW[i][0] + ", "+cidW[i][3]}
          alreadyRef = cidW[i][3]*cidW[i][2]
          //console.log(alreadyRef)
          } else
        
        if (neededDED <= cidW[i][3]) {
          //console.log('er is genoeg')
          if (neededDED > 0 ) {output.change[i] = cidW[i][0] + ", "+neededDED}
          
          alreadyRef = neededDED*cidW[i][2]
          //console.log(alreadyRef)
          }
        output.status = 'OPEN'
        stillRef = (stillRef - alreadyRef).toFixed(2)
        }

      if (stillRef > 0) {
        output.status = 'INSUFFICIENT_FUNDS'
        output.change = []
        } 
}


console.log('stillref na '+stillRef)
return output

}


const res = checkCashRegister(0, 310, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
console.log(res)


