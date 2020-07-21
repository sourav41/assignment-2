console.log("Assignment No. 2");

//-------------------------------------------------------------------------------
console.log('----------------------------Very easy-------------------------------');

//-------------------------------------------------------------------------------
console.log('Q.1) convert min to sec');
convert=function(min)
{
    return(min*60);
}

console.log('5 minutes = ',convert(5),' sec');
console.log('3 minutes = ',convert(3),' sec');
console.log('2 minutes = ',convert(2),' sec');

//----------------------------------------------------------------------------------
console.log('Q.2) Divides Evenly');
dividesEvenly=function(num,div)
{
    if(num<div)
    {
        return('error : number is smaller than divisor');
    }
    else
    {
        if(num%div==0)
        {
            return('true');
        }
        else{
            return('false');
        }
    }    
}
console.log('98/7 divides evenly = ',dividesEvenly(98,7));
console.log('85/4 divides evenly = ',dividesEvenly(85,4));



//---------------------------------------------------------------------------------
console.log('-------------------------------Easy---------------------------------');

//----------------------------------------------------------------------------------
console.log('Q.1) Count Instances of a Character in a String');
charCount=function(letter,str)
{
    let count=0;
    for(let i=0;i<str.length;i++)
    {
        if(letter==str[i])
        {
            count++;
        }
    }
    return(count);
}

console.log('a, edabit ',charCount('a','edabit'));
console.log('c, Chamber of secrets ',charCount('c','chamber of secrets'));
console.log('b, big fat bubble ',charCount('b','big fat bubble'));


//------------------------------------------------------------------------------
console.log('Q.2) Add up the numbers from  a single Number');
addUP=function(num)
{
    if(num>1 && num<1000)
    {
        let add=0;
    for(let i=1;i<=num;i++)
    {
      add=add+i;
    }
    return(add);
    }
    else{
        return('Number out of range');
    }
}
console.log('4 -> ',addUP(4));
console.log('13 -> ',addUP(13));
console.log('600 -> ',addUP(600));


//---------------------------------------------------------------------------------
console.log('Q.3) Replace Vowel with Another Character');
replaceVolwel=function(str)
{
    str = str.replace('a',1); 
    str = str.replace('e',2); 
    str = str.replace('i',3); 
    str = str.replace('o',4); 
    str = str.replace('u',5);   
    return(str); 
}
console.log('karachi ',replaceVolwel("karachi"));
console.log('chembur ',replaceVolwel("chembur"));
console.log('khandbari ',replaceVolwel("khandbari"));


//---------------------------------------------------------------------------------------
console.log('--------------------------Medium--------------------------------');

//---------------------------------------------------------------------------------------
console.log('Q.1) Reverse words starting with a particular letter');
function specialReverse(str,letter)
 {
    var words = [];
    words = str.match(/\S+/g);
    var result = "";
    
        for (var i = 0; i < words.length; i++) {
            result += words[i].split('').reverse().join('') + " ";
         }
    
    return result
  }
  
  console.log("'word searches are super fun','s'        -->",specialReverse('word searches are super fun','s'));
  console.log("'First man to walk on the moon','m'      -->",specialReverse('First man to walk on the moon','m'));
  console.log("'peter piper picked pickled peppers','p' -->",specialReverse('peter piper picked pickled peppers','p'));



  //-------------------------------------------------------------------------------------------
  console.log('Q.2) Hitting the jackpot'); 
testJackpot =function(arr)
{
    let count=0;
    let temp=arr[0];
        for(let j=1;j<arr.length;j++)
        {
            if(temp!=arr[j])
            {
                return(false);
            }
        }
    return(true);
}
console.log('["@", "@", "@", "@"]  ',testJackpot(["@", "@", "@", "@"]));
console.log('["abc", "abc", "abc", "abc"]  ',testJackpot(["abc", "abc", "abc", "abc"]));
console.log('["SS", "SS", "SS", "SS"]  ',testJackpot(["SS", "SS", "SS", "SS"]));
console.log('["&&", "&", "&&&", "&&&&"]  ',testJackpot(["&&", "&", "&&&", "&&&&"]));
console.log('["SS", "SS", "SS", "Ss"]  ',testJackpot(["SS", "SS", "SS", "Ss"]));


//------------------------------------------------------------------------------------------------
console.log('Q.3) Removing Duplicates from array'); 
removeDups=function(x)
{
    let unique=[];
    x.forEach(element => {
        if(!unique.includes(element))
        {
            unique.push(element);
        }
    });
    return(unique);
}
console.log('[1, 0, 1, 0]  ',removeDups([1, 0, 1, 0]));
console.log('["The", "big", "cat"]  ',removeDups(["The", "big", "cat"]));
console.log('["John", "Taylor", "John"]  ',removeDups(["John", "Taylor", "John"]));



//---------------------------------------------------------------------------------------
console.log('--------------------------Hard--------------------------------');

//---------------------------------------------------------------------------------------
console.log('Q.1) Get real Type');
realType=function(x){
    
   
       if(x=="null")
       {
           return("null");
       }
       else if(Array.isArray(x)==true){
           return("Array");
       }
       else{
           return(typeof x);
       }
   
}
console.log(' 1 ->  ' ,realType(1));
console.log(' a ->  ' ,realType("a"));
console.log(' true ->  ' ,realType(true));
console.log(' [] ->  ' ,realType([]));
console.log(' null ->  ' ,realType("null"));



//-----------------------------------------------------------------------------------------------
console.log('Q.2) Numbers in String');
 numInStr=function (arr) 
 {
    var js=[];
    let unique=[];
    for(let i=0;i<arr.length;i++)
    {
      for(let j=0;j<10;j++)
        {
           if(arr[i].includes(j))
            {  
                
                js.push(arr[i]);
               
            }    
        }
     }
     js.forEach(element => {
        if(!unique.includes(element))
            {
                unique.push(element);
            }
        });
            return(unique);
}
console.log('["1a", "a", "2b", "b"] => ',numInStr(["1a", "a", "2b", "b"]));
console.log('["abc", "ab10"] => ',numInStr(["abc", "ab10"]));
console.log('["abc", "ab10c", "a10bc", "bcd"] => ',numInStr(["abc", "ab10c", "a10bc", "bcd"]));
console.log('["this is a test", "test1"] => ',numInStr(["this is a test", "test1"]));

 



