<!DOCTYPE html>
<html>
    <head>
        <title>japjap95's Rock-paper-scissors</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
        <link rel="stylesheet" href="grid.css">
    </head>
    <body class="parent">
            <div class="div1">Rock paper scissors! Press R to reset game. Maximum number of rounds is 66 in honour of everyone's favourite Star Wars order. You can also use the left, bottom and right arrows keys to choose rock, paper or scissors respectively. Much easier to spam keys than clicks.</div>
            <img id="rock" data-key="37" class="choice div2" src="images/rock.png"/>
            <img id="paper" data-key="40" class="choice div3" src="images/paper.png"/>
            <img id="scissors" data-key="39" class="choice div4" src="images/scissors.png"/>
            <div class="div5">Psst. Fancy taking on a small cryptographic challenge? I've hidden the first hint within the html code of this website. Use inspect element or view page source to find it.</div>
            <div data-key="82" class="div6">
                <span hint="01101110 01111001 01110010 01111000 01110101 01110110 01100001 01110010 00100111 01100110 00100000 01110100 01101000 01100001 00101110 00100000 01100111 01101100 01100011 01110010 00100000 01100111 01110101 01110010 00100000 01110011 01110110 01100001 01101110 01111001 00100000 01111001 01100010 01110000 01101110 01100111 01110110 01100010 01100001 00100000 01100010 01110011 00100000 01100111 01110101 01110010 00100000 01110000 01100010 01100001 01110000 01110010 01110001 01110110 01100001 01110100 00100000 01111000 01110110 01100001 01110100 00101110 00100000 01110010 01101111 01110100 01100001 01110100 01100101 00100000 01101101 01100101 00100000 01100010 01111001 00100000 01110100 01101000 01100101 00100000 00110110 01110100 01101000 00100000 01110000 01110010 01101001 01101101 01100101 00101110" id="terminal">TERMINAL</span>
            </div>
        </div>
        <img class="bottom_left" src="" />
        <img class="bottom_right" src="" />
    </body>
    <script type="module" src="app.js"></script>
</html>
