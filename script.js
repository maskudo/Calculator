const botButtons = document.querySelector(".bottom-buttons")
const numbers = botButtons.querySelectorAll('button')
const screen = document.querySelector(".screen")

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
function display(){
    screen.textContent = `${num1} ${operator} ${num2}`
}

numbers.forEach(item =>{
    item.addEventListener('click',()=>{
        if(item.className=='sign'){
            if(item.textContent == '='){
                num1 = evaluate()
                operator = ''
                num2 = ''
            }
            else{
                if(num1 != ''){
                    operator = item.textContent
                }
            }
        }
        else{
            if(operator===''){
                num1 += item.textContent
            }
            else{
                num2 += item.textContent
            }
        }
        display()
    })
})
