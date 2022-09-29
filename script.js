            $('.content').modaal();

            $('')

            //タブの設定
            function GethashID (hashIDName){
                if(hashIDName){
                    $('.tab li').find('a').each(function(){
                        var idName = $(this).attr('href');
                        if(idName == hashIDName){
                            var parentElm = $(this).parent();
                            $('.tab li').removeClass("active");
                            $(parentElm).addClass("active");

                            $(".area").removeClass("is-active");
                            $(hashIDName).addClass("is-active");
                        }
                    });
                }
            }

            $('.tab a').on('click',function(){
                var idName = $(this).attr('href');
                GethashID(idName);
                return false;
            });
            $(window).on('load',function(){
                $('.tab li:first-of type').addClass("active");
                $('.area:first-of-type').addClass("is-active");
                var hashName = location.hash;
                GethashID(hashName);
            });

            //アコーディオンをクリックした時の動作
$('.title').on('click', function() {//タイトル要素をクリックしたら
    var findElm = $(this).next(".box");//直後のアコーディオンを行うエリアを取得し
    $(findElm).slideToggle();//アコーディオンの上下動作
      
    if($(this).hasClass('close')){//タイトル要素にクラス名closeがあれば
      $(this).removeClass('close');//クラス名を除去し
    }else{//それ以外は
      $(this).addClass('close');//クラス名closeを付与
    }
  });
  
  //ページが読み込まれた際にopenクラスをつけ、openがついていたら開く動作※不必要なら下記全て削除
  $(window).on('load', function(){
    $('.accordion-area li:first-of-type section').addClass("open"); //accordion-areaのはじめのliにあるsectionにopenクラスを追加
    $(".open").each(function(index, element){ //openクラスを取得
      var Title =$(element).children('.title'); //openクラスの子要素のtitleクラスを取得
      $(Title).addClass('close');       //タイトルにクラス名closeを付与し
      var Box =$(element).children('.box'); //openクラスの子要素boxクラスを取得
      $(Box).slideDown(500);          //アコーディオンを開く
    });
  });
  
  var words = document.getElementsByClassName('word');
var wordArray = [];
var currentWord = 0;

words[currentWord].style.opacity = 1;
for (var i = 0; i < words.length; i++) {
  splitLetters(words[i]);
}

function changeWord() {
  var cw = wordArray[currentWord];
  var nw = currentWord == words.length-1 ? wordArray[0] : wordArray[currentWord+1];
  for (var i = 0; i < cw.length; i++) {
    animateLetterOut(cw, i);
  }
  
  for (var i = 0; i < nw.length; i++) {
    nw[i].className = 'letter behind';
    nw[0].parentElement.style.opacity = 1;
    animateLetterIn(nw, i);
  }
  
  currentWord = (currentWord == wordArray.length-1) ? 0 : currentWord+1;
}

function animateLetterOut(cw, i) {
  setTimeout(function() {
    cw[i].className = 'letter out';
  }, i*80);
}

function animateLetterIn(nw, i) {
  setTimeout(function() {
    nw[i].className = 'letter in';
  }, 340+(i*80));
}

function splitLetters(word) {
  var content = word.innerHTML;
  word.innerHTML = '';
  var letters = [];
  for (var i = 0; i < content.length; i++) {
    var letter = document.createElement('span');
    letter.className = 'letter';
    letter.innerHTML = content.charAt(i);
    word.appendChild(letter);
    letters.push(letter);
  }
  
  wordArray.push(letters);
}

changeWord();
setInterval(changeWord, 4000);
