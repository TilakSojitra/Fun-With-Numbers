$('#sel1').on('change', function () {
    let val = $('#sel1').val();
    let sel2 = document.getElementById('sel2');
    switch (val) {
        case '2 (binary)':
            sel2.children[1].disabled = true;
            sel2.children[1].selected = false;
            sel2.children[2].disabled = false;
            sel2.children[3].disabled = false;
            sel2.children[4].disabled = false;
            break;
        case '8 (octal)':
            sel2.children[2].disabled = true;
            sel2.children[2].selected = false;
            sel2.children[1].disabled = false;
            sel2.children[4].disabled = false;
            sel2.children[3].disabled = false;
            break;
        case '10 (decimal)':
            sel2.children[3].disabled = true;
            sel2.children[3].selected = false;
            sel2.children[1].disabled = false;
            sel2.children[2].disabled = false;
            sel2.children[4].disabled = false;
            break;
        case '16 (hex)':
            sel2.children[4].disabled = true;
            sel2.children[4].selected = false;
            sel2.children[1].disabled = false;
            sel2.children[2].disabled = false;
            sel2.children[3].disabled = false;
            break;
    }
})

function onConvert(e) {
    e.preventDefault();
    let num = document.getElementById('number').value;
    let from = $('#sel1').val();
    let to = $('#sel2').val();
    if(to == undefined){
        alert('Please select \'To base\' field');
        $('#sel2').focus();
        return;
    }
    if(num == ""){
        $('#number').val('Please Enter number');
        $('#number').css("color","red");
        setTimeout(() => {
            $('#number').val('');
            $('#number').focus();
            $('#number').css("color","black");
        }, 2000);
        return; 
    }
    if (!from.includes('16') & isNaN(num)) {
        $('#number').val('Please Enter number containing 0-9*');
        $('#number').css("color","red");
        setTimeout(() => {
            $('#number').val('');
            $('#number').focus();
            $('#number').css("color","black");
        }, 2000);
        return;
    }
    else if (from.includes('2')){
        for(let i=0;i<num.length;i++){
            if(num[i] != '0' & num[i] != '1'){
                $('#number').val('Please Enter number using only 0 or 1*');
                $('#number').css("color","red");
                setTimeout(() => {
                    $('#number').val('');
                    $('#number').focus();
                    $('#number').css("color","black");
                }, 2000);
                return;
            }
        }
    }
    else if (from.includes('16') & isNaN(num)){
        for(let i=0;i<num.length;i++){
            if(isNaN(num[i])){
                if(num[i].toUpperCase() != 'A' & num[i].toUpperCase() != 'B' & num[i].toUpperCase() != 'C'& num[i].toUpperCase() != 'D'& num[i].toUpperCase() != 'E'& num[i].toUpperCase() != 'F' ){
                    $('#number').val('Please Enter number containing 0-9 and/or A-F*');
                    $('#number').css("color","red");
                    setTimeout(() => {
                        $('#number').val('');
                        $('#number').focus();
                        $('#number').css("color","black");
                    }, 2000);
                    return;
                }
            }
        }
    }
    else if (from.includes('8')){
        for(let i=0;i<num.length;i++){
            if(num[i] == '8' || num[i] == '9'){
                $('#number').val('Please Enter number containing 0-7');
                $('#number').css("color","red");
                setTimeout(() => {
                    $('#number').val('');
                    $('#number').focus();
                    $('#number').css("color","black");
                }, 2000);
                return;
            }
        }
    }
    
    let ans = document.getElementById('answer');
    if (from.includes('10') & to.includes('2')) {
        ans.textContent = parseInt(num).toString(2);
    }
    else if (from.includes('10') & to.includes('8')) {
        ans.textContent = parseInt(num).toString(8);
    }
    else if (from.includes('10') & to.includes('16')) {
        ans.textContent = parseInt(num).toString(16).toUpperCase();
    }
    else if (from.includes('2') & to.includes('10')) {
        ans.textContent = parseInt(num,2).toString(10);
    }
    else if (from.includes('2') & to.includes('8')) {
        ans.textContent = parseInt(num,2).toString(8);
    }
    else if (from.includes('2') & to.includes('16')) {
        ans.textContent = parseInt(num,2).toString(16).toUpperCase();
    }
    else if (from.includes('8') & to.includes('2')) {
        ans.textContent = parseInt(num,8).toString(2);
    }
    else if (from.includes('8') & to.includes('10')) {
        ans.textContent = parseInt(num,8).toString(10);
    }
    else if (from.includes('8') & to.includes('16')) {
        ans.textContent = parseInt(num,8).toString(16).toUpperCase();
    }
    else if (from.includes('16') & to.includes('2')) {
        ans.textContent = parseInt(num,16).toString(2);
    }
    else if (from.includes('16') & to.includes('10')) {
        ans.textContent = parseInt(num,16).toString(10);
    }
    else if (from.includes('16') & to.includes('8')) {
        ans.textContent = parseInt(num,16).toString(8);
    }
}

function onSwap(e){
    e.preventDefault();
    let from = $('#sel1').val();
    let to = $('#sel2').val();
    if(to == undefined){
        alert('Please select \'To base\' field first and then click to swap');
        $('#sel2').focus();
        return;
    }
    let sel2 = document.getElementById('sel2');
    $('#sel1').val(to);
    $('#sel2').val(from);
    if(from.includes('2')){
        sel2.children[1].disabled=false;
    }
    else if(from.includes('8')){
        sel2.children[2].disabled=false;
    }
    else if(from.includes('10')){
        sel2.children[3].disabled=false;
    }
    else{
        sel2.children[4].disabled=false;
    }
    from = $('#sel1').val();
    if(from.includes('2')){
        sel2.children[1].disabled=true;
    }
    else if(from.includes('8')){
        sel2.children[2].disabled=true;
    }
    else if(from.includes('10')){
        sel2.children[3].disabled=true;
    }
    else{
        sel2.children[4].disabled=true;
    }  
}
