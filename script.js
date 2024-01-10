function toggleMode() {
    const toggle = document.getElementById("checkbox");
    const section = document.querySelector(".section-4");
    const left = document.querySelector(".left");
    const right = document.querySelector(".right");
    const elementSiangKiri = document.querySelector('.left .quotes');
    const elementSiangKanan = document.querySelector('.right .box');
    const elementMalamKiri = document.querySelector(".left .box");
    const elementMalamKanan = document.querySelector(".right .sepenggal");

    left.classList.remove("trans-left");
    right.classList.remove("trans-right");

    if (toggle.checked) {
        section.classList.remove("malam");
        section.classList.add("siang");
        left.classList.add("trans-left");
        right.classList.add("trans-right");
        setTimeout(function () {
            elementSiangKanan.classList.remove("hidden");
            elementSiangKiri.classList.remove("hidden");
            elementMalamKanan.classList.add("hidden");
            elementMalamKiri.classList.add("hidden");
        }, 500);
        setTimeout(function () {
            left.classList.remove("trans-left");
            right.classList.remove("trans-right");
        }, 1000);
    } else {
        section.classList.add("malam");
        section.classList.remove("siang");
        left.classList.add("trans-left");
        right.classList.add("trans-right");
        setTimeout(function () {
            elementSiangKanan.classList.add("hidden");
            elementSiangKiri.classList.add("hidden");
            elementMalamKanan.classList.remove("hidden");
            elementMalamKiri.classList.remove("hidden");
        }, 500);
        setTimeout(function () {
            left.classList.remove("trans-left");
            right.classList.remove("trans-right");
        }, 1000);
    }
}

function rotated(button) {
    var card = button.closest(".card");

    card.classList.add("rotated");
}

function unrotate(button) {
    var card = button.closest(".card");

    card.classList.remove("rotated");
}

var words = ["Bahagia", "Sehat", "Indah", "Sejahtera", "Sakinah", "Produktif"];
var flag = 0;
var text = runningTextElement;
var speed = 250;

function getRandomWords() {
    var word = words[flag];

    flag++;
    if (flag == words.length) {
        flag = 0;
    }

    return word;
}

function runningText() {
    var word = getRandomWords();
    var length = word.length;

    for (var i = 0; i < length; i++) {
        (function (i) {
            setTimeout(function () {
                var oldText = text.textContent;
                text.textContent = oldText + word[i];
                if (i == length - 1) {
                    setTimeout(removeWord, speed * i);
                }
            }, speed * i);
        })(i);
    }

    function removeWord() {
        for (var j = 0; j < length; j++) {
            (function (j) {
                setTimeout(function () {
                    var oldText = text.textContent.slice(0, -1);
                    text.textContent = oldText;

                    if (j == length - 1) {
                        setTimeout(runningText, speed * j);
                    }
                }, (speed * j) / 2);
            })(j);
        }
    }
}

runningText();

var button = document.querySelector('.show-trigger');

button.addEventListener('click', function () {
    var element = document.querySelector('.shalat-box');

    if (element.classList.contains('hide')) {
        element.classList.remove('hide');
    }
    else {
        element.classList.add('hide');
    }
})

function observeElement(className, showClass) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add(showClass);
            }
            else {
                entry.target.classList.remove(showClass);
            }
        });
    });

    const hiddenElements = document.querySelectorAll(className);
    hiddenElements.forEach((el) => observer.observe(el));
}

const observer = new IntersectionObserver(
    (entry) => {
        var footer = document.querySelector('footer');
        if (entry[0].isIntersecting) {
            footer.classList.remove('hidden');
        } else {
            footer.classList.add('hidden');
        }        
    }    
);

const targetElement = document.querySelector('.footer');
observer.observe(targetElement);
