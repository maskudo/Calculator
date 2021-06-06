const botButtons = document.querySelector(".bottom-buttons")
const topButtons = document.querySelector('.top-buttons')
const numbers = botButtons.querySelectorAll('button')
const clrDel = topButtons.querySelectorAll('button')
const screen = document.querySelector(".screen")

screen.style.padding = "10px"
screen.style.fontSize = "25px"

let num1 = '', num2 = '', operator = ''

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
    screen.textContent = `${num1}${operator}${num2}`
}

function clear(){
    num1 = ''
    num2 = ''
    operator = ''
}

function Delete(){
    if(num2!=''){
        num2 = num2.slice(0,-1)
    }
    else if(operator!=''){
        operator = ''
    }
    else{
        num1 = num1.slice(0,-1)
    }
    
}

numbers.forEach(item =>{
    item.addEventListener('click',()=>{
        if(item.className=='sign'){
            if(item.textContent == '='){
                if(num1!='' && num2!='' && operator!=''){
                    num1 = `${evaluate()}`
                    operator = ''
                    num2 = ''
                }
            }
            else{
                if(num1 != '' && num2!=''){
                    num1 = `${evaluate()}`
                    operator = item.textContent
                    num2 = ''
                }
                else if(num1 != ''){
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

clrDel.forEach(item =>{
    item.addEventListener('click',() =>{
        if(item.id=='clr'){
            clear()
        }
        else if(item.id=='del'){
            Delete()
        }
        display()
    })
})

