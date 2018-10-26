$(document).ready(() => {


    let onState = false;
    let ans = 0;

    let sign = "";

    //number buttons
    let one = $('.button_1');
    let two = $('.button_2');
    let three = $('.button_3');
    let four = $('.button_4');
    let five = $('.button_5');
    let six = $('.button_6');
    let seven = $('.button_7');
    let eight = $('.button_8');
    let nine = $('.button_9');
    let zero = $('.button_0');
    let dec = $('.button_dec');
    let equal = $('.button_equal');
    let dist = $('.dist');

    let answer = $('.button_ans');
    let ce = $('.button_ce');
    let onOff = $('.button_power');

    //math buttons
    let add = $('.button_add');
    let times = $('.button_times');
    let divide = $('.button_divide');
    let subs = $('.button_subs');

    //screens
    let equation = $('.equation code');
    let result = $('.answer code');

    
    //put on the calculator
    onOff.click(() => {
        if(onState) {
            onState = false;
            equation.html("");
            result.html("");
        }else {
            onState = true;
            result.html(0);
        }
    });

    console.log(parseInt("1 + 3"));
    
    
    //displaying button
    one.click(() => {
        let word = equation.html();

        if(onState) {
            equation.html(`${word}1`);
        }
        
    });


    two.click(() => {
        let word = equation.html();

        if(onState) {
            equation.html(`${word}2`);
        }
        
    });


    three.click(() => {
        let word = equation.html();

        if(onState) {
            equation.html(`${word}3`);
        }
        
    });


    four.click(() => {
        let word = equation.html();

        if(onState) {
            equation.html(`${word}4`);
        }
        
    });


    five.click(() => {
        let word = equation.html();

        if(onState) {
            equation.html(`${word}5`);
        }
        
    });


    six.click(() => {
        let word = equation.html();

        if(onState) {
            equation.html(`${word}6`);
        }
        
    });


    seven.click(() => {
        let word = equation.html();

        if(onState) {
            equation.html(`${word}7`);
        }
        
    });


    eight.click(() => {
        let word = equation.html();

        if(onState) {
            equation.html(`${word}8`);
        }
        
    });


    nine.click(() => {
        let word = equation.html();

        if(onState) {
            equation.html(`${word}9`);
        }
        
    });


    zero.click(() => {
        let word = equation.html();

        if(onState) {
            equation.html(`${word}0`);
        }
        
    });


    dec.click(() => {
        let word = equation.html();

        if(onState) {
            equation.html(`${word}.`);
        }
        
    });


    add.click(() => {
        let word = equation.html();

        if(onState) {
            equation.html(`${word}+`);
        }
        
    });

    subs.click(() => {
        let word = equation.html();

        if(onState) {
            equation.html(`${word}-`);
          
        }
        
    });


    divide.click(() => {
        let word = equation.html();

        if(onState) {
            equation.html(`${word}/`);
        }
        
    });

    times.click(() => {
        let word = equation.html();

        if(onState) {
            equation.html(`${word}*`);
        }
        
    });


    answer.click(() => {
        let word = equation.html();

        if(onState) {
            equation.html(`${word}ans`);
        }
        
    });





    //ce button
    ce.click(() => {
        if(onState) {
            equation.html("");
            result.html(0);
        }
    });
    


    //equal button
    equal.click(() => {
        let maths = parseFloat(equation.html());
        result.html(maths);
    });

















});