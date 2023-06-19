
// create a variable to hold your NFT's
const nfts=[];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (name,date,amt) {
const NFT={
    "name":name,
    "date":date,
    "amt":amt

}
nfts.push(NFT);
console.log("minted "+name);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
  for(let i=0;i<nfts.length;i++)
   {

   console.log("\nID: "+(i+1));
   console.log("name "+nfts[i].name);
   console.log("Date "+nfts[i].date);
   console.log("amount "+nfts[i].amt);
   }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("\nThe number of NFTs minted is: "+nfts.length+"\n");

}

// call your functions below this line

mintNFT("Solana","4/5/23",3);
mintNFT("Eth","4/5/23",2);
mintNFT("Bit","6/6/23",1);
listNFTs();
getTotalSupply();
