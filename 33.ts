let ordinal_numbers=[1,2,3,4,5,6,7,8,9];
for (let i=0;i<9;i++) {

    if (ordinal_numbers[i]==1) {
        console.log("\n%dst",ordinal_numbers[i]);
    } 
    else if (ordinal_numbers[i]==2) {

        console.log("\n%dnd",ordinal_numbers[i]);

    }
    else if (ordinal_numbers[i]==3) {

        console.log("\n%drd",ordinal_numbers[i]);
    }
    else {

        console.log("\n%dth",ordinal_numbers[i]);
    }


}