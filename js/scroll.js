$(document).ready(function () {
            var menu = $('ul.mn > li');
            var contents = $('#contents > div');

            menu.click(function () {
                var tg = $(this);
                var i = tg.index();
                var section = contents.eq(i);
                var tt = section.offset().top;

                menu.removeClass('on');
                tg.addClass('on');
                $('html, body').stop().animate({ scrollTop: tt + 1 });
            });

            $(window).scroll(function () {
                var sct = $(window).scrollTop(); // 현재화면의 스크롤
                $('#q_mn').stop().animate({ top: sct + 200 }, 500);

                contents.each(function () { // contents 아래에 있는 div를 순서대로 처리
                    var tg = $(this)
                    var i = tg.index();

                    if (tg.offset().top <= sct) {
                        menu.removeClass('on');
                        menu.eq(i).addClass('on');
                    }
                });
            });
        });