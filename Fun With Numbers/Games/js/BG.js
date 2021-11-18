$('#red').val('0');
$('#green').val('0');
$('#blue').val('0');
$('.red_val').text('0');
$('.green_val').text('0');
$('.blue_val').text('0');
$('.BGchange').css('background', 'rgb(0,0,0)');

function rgb2hex(rgb) {
    rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    function hex(x) {
        return ("0" + parseInt(x).toString(16)).slice(-2);
    }
    return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
}

let bgColor = $('.BGchange').css('backgroundColor');
bgColor = rgb2hex(bgColor);
$('.colorvalue').text(bgColor);
$('.colorvalue').css('color', 'white');

$('#red').on('mousemove', function () {
    let red = $('#red').val();
    let green = $('#green').val();
    let blue = $('#blue').val();
    $('.BGchange').css('background', `rgb(${red},${green},${blue})`);
    $('.red_val').text(red);
    let bgColor = $('.BGchange').css('backgroundColor');
    bgColor = rgb2hex(bgColor);
    $('.colorvalue').text(bgColor);
    if (red > 130 || green > 130 || blue > 130) {
        $('.colorvalue').css('color', 'black');
    }
    else
        $('.colorvalue').css('color', 'white');
})

$('#green').on('mousemove', function () {
    let red = $('#red').val();
    let green = $('#green').val();
    let blue = $('#blue').val();
    $('.BGchange').css('background', `rgb(${red},${green},${blue})`);
    $('.green_val').text(green);
    let bgColor = $('.BGchange').css('backgroundColor');
    bgColor = rgb2hex(bgColor);
    $('.colorvalue').text(bgColor);
    if (red > 130 || green > 130 || blue > 130) {
        $('.colorvalue').css('color', 'black');
    }
    else
        $('.colorvalue').css('color', 'white');
})

$('#blue').on('mousemove', function () {
    let red = $('#red').val();
    let green = $('#green').val();
    let blue = $('#blue').val();
    $('.BGchange').css('background', `rgb(${red},${green},${blue})`);
    $('.blue_val').text(blue);
    let bgColor = $('.BGchange').css('backgroundColor');
    bgColor = rgb2hex(bgColor);
    $('.colorvalue').text(bgColor);
    if (red > 130 || green > 130 || blue > 130) {
        $('.colorvalue').css('color', 'black');
    }
    else
        $('.colorvalue').css('color', 'white');
})