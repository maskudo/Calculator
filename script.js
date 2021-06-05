const botButtons = document.querySelector(".bottom-buttons")
const numbers = botButtons.querySelectorAll('button')
const screen = document.querySelector(".screen")

screen.textContent = numbers.textContent
screen.style.padding = "10px"
screen.style.fontSize = "25px"

let num1 = '', num2 = '', operator = '', evaluated

function evaluate(){
    if(operator === '+'){
        return Number(num1) + Number(num2)
    }
    else if(operator === '-'){
        return Number(num1) - Number(num2)
    }
    else if(operator === '*'){
        return Number(num1) * Number(num2)
    }
    else if(operator === '/'){
        return Number(num1) / Number(num2)
    }
}

numbers.forEach(item =>{
    item.addEventListener('click',()=>{
        if(item.className === 'sign' && num1!='' && num2===''){
            operator = item.textContent
            console.log(`operator = ${operator}`)
        }
        //else if(item.className ==='sign' &&)
        else{
            if(operator===''){
                num1 += item.textContent
                console.log(`num1 = ${num1}`)
            }
            else if(operator!='' && && num1!=''){
                num2 += item.textContent
                console.log(`num2 = ${num2}`)
            }
            else if(operator === '='){
                num1 = evaluate(num1,num2,operator)
                num2=''
                operator = ''
                console.log(`evaluated = ${num1}`)
            }
            // else{
            //     num1 = evaluate(num1,num2,operator)
            //     console.log(`num1 = ${num1}`)
            //     num2 = ''
            //     operator = ''
                
            // }
        }
    })
})
