

// const trigonometry_menu = document.getElementById('trigonometry');
// // trigonometry_menu.className = 'dropdown-menu';
// const trigonometry_items = ['sin','cos','tan','sec','csc','cot','hyp'];
    
//     trigonometry_items.forEach(items=>
//         {
//         const link= document.createElement('a');
//             link.textContent =items;
//             link.href=`#${items.toLowerCase()}`;
         
//             trigonometry_menu.appendChild(link);
//         }
//     )

// const function_menu = document.getElementById('function');

// const function_items = ['|x|','rand','->deg'];

// function_items.forEach(funcs=>
//     {
//         const item = document.createElement('a');
//         item.textContent= funcs;
//         item.href=`#${funcs.toLowerCase()}`;
//         function_menu.appendChild(item);

//     }
// )

// const click = document.createEvent(click);

// for (let i=0;i<10;i++)
// {
//     var digits = [i];
// }

// function binarySearch(arr, x)
// {
//     let low = 0;
//     let high = arr.length - 1;
//     let mid;
//     while (high >= low) {
//         mid = low + Math.floor((high - low) / 2);
//         if (arr[mid] == x)
//             return true;

//         if (arr[mid] > x)
//             high = mid - 1;

//         else
//             low = mid + 1;
//     }
//     return false;
// }

// function checkDigit(digiInput)
// {
//     if(length(digiInput) == 1)
//         {
//          return true;
//         }

//     if(length(digiInput)>1)
//         {
//             let remain = digiInput;
//             let digit = remain%10;
//             if(length(remain)>=1)
//             {
//                 if (binarySearch(digits,digit) == true)
//                 {
//                     return true
//                 }
//                 else
//                 {
//                     return false
//                 }
//             }
//             remain = remain/10;
//            if(length(remain)<1)
//             {
//                 return true;
//             }
                
//         }
// }


function showOnClick(val)
{
    
    // if(binarySearch(digits,parameter) == true)
    //     {
            // return document.getElementById('display').append(parameter);
        // }

  if(val=='+/-')
    {
        if(document.getElementById('display').value>0)
            {
                document.getElementById('display').value = - document.getElementById('display').value;
            }
            else if(document.getElementById('display').value<0)
                {
                    document.getElementById('display').value= - document.getElementById('display').value;
                }
    }
    else if(val=='pi')
        {
            var out= document.getElementById('display');
            out.value+=Math.PI;
        }
       else if(val=='e')
            {
                var out1 =document.getElementById('display');
                out1.value+=Math.E;
            }
  else if(val=='log()')
        {
            var out2 =document.getElementById('display');
                out2.value+='log(';

        }
    else
    {
        var v= document.getElementById('display');
        v.value+= val;
    }


}

function factorial() {

    var n = document.getElementById('display');

    let res = 1;
    for (let i = 1; i <= n.value; i++) {
        res *= i;
    }
    document.getElementById('display').value=res;
}

function operate()
{
    var num1=document.getElementById('display');
    
    try
    {
      
                var res=eval(num1.value.replace('x','*'));
                document.getElementById('display').value = res;
        
    }
    catch
    {

        document.getElementById('display').value = Error;
    }


} 


function Clear(val)
{
    if(val=='backspace')
        {
            var num = document.getElementById('display');
           num.value= num.value.slice(0,-1);
        }
        if(val=='C')
            {
                var num = document.getElementById('display');
                num.value = ''; 
            }
}

function deg_rad(val)
{
    var deg_rad_Value_1=document.getElementById('DEG');
    var deg_rad_Value_2=document.getElementById('RAD');
    
    
    if(val== 'deg')
        {
            // deg_rad_Value_2.setAttribute('disabled',false);
            
             toggle_block('DEG');
             console.log(deg_rad_Value_1.value);
             disable_element('RAD');

            //  deg_rad_Value_1.setAttribute('disabled',isDisabled);
            //  deg_rad_Value_2.setAttribute('disabled','true');

        }
    else if(val== 'rad')
        {
            // deg_rad_Value='rad';
            
            disable_element('DEG');
           
            // deg_rad_Value_1.disabled= false;
            toggle_block('RAD');
            console.log(deg_rad_Value_2.value);
            // deg_rad_Value_2.setAttribute('disabled',false);
            

        }

}
function onReset()
{
    enable_element('DEG');
    enable_element('RAD');
    document.getElementById('child_DEG/RAD').remove();

}

function disable_element(id)
{
    var element=document.getElementById(id);
    element.disabled=true;
}
function enable_element(id)
{
    var element = document.getElementById(id);
    element.disabled=false;
}


function trigonometry_func(val)
{
    // var res=document.getElementById('display');
    // if(deg_rad('rad'))
    //     {

            if (val == 'Sin()')
            {
                
                
                return  showOnClick('sin(');
            }
            else if(val =='Cos()')
            {
                return  showOnClick('cos(');
            }
            else if(val =='Tan()')
            {
                return  showOnClick('tan(');
            }
            else if(val =='Cosec()')
            {
                return  showOnClick('cosec(');
            }
            else if(val =='Sec()')
            {
                return  showOnClick('sec(');
            }
            else if(val =='Cot()')
            {
                return  showOnClick('cot(');
            }


                    
                //     var res = document.getElementById('display');
                //    res.value= Math.sin((document.getElementById('display').value) *180/Math.PI);
                //    return res.value;
                // }
            // if (val == 'Cos()')
            //     {
            //         var res = document.getElementById('display');
            //         res.value.Math.cos((document.getElementById('display').value) *180/Math.PI);
            //     }
        // }


}

function toggle_block(val)
{
    var el= document.getElementById("function_types");
   
    var el_1=document.createElement('button');
    el_1.type= "button";
    el_1.id="child_DEG/RAD"
    el_1.style.margin="20px 20px 10px 10px";
    el_1.style.padding="10px 10px 10px 10px";
    el_1.textContent= val;
    el.appendChild(el_1);



}

function log_10()
{
    var el=document.getElementById('display');
    

            el.value = Math.log10(el.value);

    

}
function log10_e()
{
    

        var el=document.getElementById('display');
        el.value = Math.log(el.value);
 

}
function squareroot()
{
    var el=document.getElementById('display');
    el.value = Math.sqrt(el.value);
}
function cuberoot()
{
    var el=document.getElementById('display');
    el.value = Math.cbrt(el.value);
}








        

