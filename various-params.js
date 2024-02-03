// for a given string tell me whether it has even number of character or not

function evenSizedString(str)
{
    //   console.log(str);
    let size=str.length;
    console.log(str,size);
    if (size%2===0) {
        console.log('even size');
    }
    else{
        console.log('odd size');
    }
}

evenSizedString('Dhaka');