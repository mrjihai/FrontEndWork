var input = ''
var record = ''
var answer = ''
var op = ''

function log(){
    console.log.apply(console,arguments)
}

function clickEevnet(){
    $('button').on('click',function(){
        //console.log('123')
        var value = $(this).html()
        log('value --->',value)
        if(value == 'AC'){// clear all
            clearAll()

        }else if(value !== '+' && value !=='-' && value !=='*' && value !=='/'&& value !=='=' && value !== '.'){
            //if input is number
            input += value
            record += value
            //log('input--->', input)
            //log('record-->',record)
            displayHistory(record)
            displayInput(input)
        }else if(value ==='='){
            // if operator is  =
            record += value
            //log('click = input--->',record)
            calculate(op)
            displayInput(answer)
            displayHistory(record)

        }else{
            //if click is + - * /
            op = value
            record += value
            answer = input
            input = ''
            log('answer part 1 -->', answer)
            displayHistory(record)
            displayInput(value)
        }
    })
}
function clearAll(){
    log('clear all')
    input = ''
    answer = ''
    record = ''
    $('#answer').html('0')
    $('#history').html('0')

}

function calculate(operator){
    if(operator === '+'){
        answer = Number(answer) + Number(input)
        log('operator---> +', answer)
    }
    else if (operator === '-') {
        answer = Number(answer) - Number(input)
        log('operator---> -',answer)

    }else if (operator === '/') {
        answer = Number(answer) / Number(input)
        log('operator---> /',answer)

    }else if(operator ==='*'){
        answer = Number(answer) * Number(input)
        log('operator---> *',answer)
    }

    record += answer

}

function displayHistory(record){
    log('function display record--->',record)
    $('#history').html(record)
}


function displayInput(number){
    $('#answer').html(number)
    if(number.length > 12){
        alert('fuck you , too many numbers')
        input = ''
        answer = ''
        history =''
        $('#answer').html('0')
    }
}

clickEevnet()
