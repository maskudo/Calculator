const botButtons = document.querySelector(".bottom-buttons")
const topButtons = document.querySelector('.top-buttons')
const numbers = botButtons.querySelectorAll('button')
const clrDel = topButtons.querySelectorAll('button')
const screen = document.querySelector(".screen")
const buttons = document.querySelectorAll('button')


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
                if(!(num1.includes('.') && item.textContent === '.')){
                    num1 += item.textContent
                }
            }
            else{
                if(!(num2.includes('.') && item.textContent ==='.')){
                    num2 += item.textContent
                }
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

//keyboard support
document.addEventListener('keydown',(e) => {
    if((e.key>=0 && e.key<=9) 
        || e.key=='.' ||e.key=='/' || e.key=='*' ||e.key=='-' ||e.key=='+'){
        e.preventDefault()
        buttons.forEach(item => {
            if(item.id === e.key){
                item.click()
            }
        })
    }
    else if(e.key=="Enter"){
        e.preventDefault()
        document.getElementById('=').click()
    }
    else if(e.key=='Backspace'){
        e.preventDefault()
        document.getElementById('del').click()
    }
    else if(e.key=='Escape'){
        e.preventDefault()
        document.getElementById('clr').click()
    }
})