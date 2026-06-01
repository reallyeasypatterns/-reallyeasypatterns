
$(function () {
    $('#header').each(function () {

        var $window = $(window), 
            $header = $(this), 
            headerOffsetTop = $header.offset().top;

        $window.on('scroll', function () {
            if ($window.scrollTop() > headerOffsetTop) {
                $header.addClass('sticky');
            } else {
                $header.removeClass('sticky');
            }
        });
        $window.trigger('scroll');

    });
});
$(function () {
    $('#gnb').each(function () {

        var $window = $(window), 
            $gnb = $(this), 
            gnbOffsetTop = $gnb.offset().top;

        $window.on('scroll', function () {
            if ($window.scrollTop() > gnbOffsetTop) {
                $gnb.addClass('sticky');
            } else {
                $gnb.removeClass('sticky');
            }
        });
        $window.trigger('scroll');

    });
});
$(document).ready(function(e) {
	$('#bt_menu').click(function(e) {
        $(this).toggleClass('on');
		$('#menu').toggleClass('on');
    });
});

$(document).ready(function() {
    // 1. 패턴 데이터 정의 (url이 있는 것과 없는 것을 구분합니다)
    var patternData = [
        { en: "I want to ~", kr: "~하고 싶어", url: "lesson_001.html" },
        { en: "I'm going to ~", kr: "~할 예정이야 (할 거야)", url: "lesson_002.html" },
        { en: "Can I ~?", kr: "~해도 돼? (내가 할 수 있을까?)", url: "lesson_003.html" },
        { en: "Can you ~?", kr: "~해 줄래? (네가 해 줄 수 있어?)", url: "lesson_004.html" },
        { en: "I have to ~", kr: "~해야만 해", url: "lesson_005.html" },
        { en: "I need to ~", kr: "~할 필요가 있어 (해야 해)", url: "lesson_006.html" },
        { en: "Do you want to ~?", kr: "~하고 싶어?", url: "lesson_007.html" },
        { en: "Do you like ~?", kr: "~ 좋아해?", url: "lesson_008.html" },
        { en: "I like to ~", kr: "~하는 걸 좋아해", url: "" },
        { en: "I don't think ~", kr: "~인 것 같지 않아 (내 생각엔 ~가 아니야)", url: "" },
        { en: "It's time to ~", kr: "~할 시간이야", url: "" },
        { en: "Are you sure ~?", kr: "정말 ~야? (확실해?)", url: "" },
        { en: "I'm sorry for ~", kr: "~해서 미안해", url: "" },
        { en: "Thank you for ~", kr: "~해 줘서 고마워", url: "" },
        { en: "Don't forget to ~", kr: "~하는 거 잊지 마", url: "" },
        { en: "I'm looking for ~", kr: "~를 찾고 있어", url: "" },
        { en: "I'm trying to ~", kr: "~하려고 노력 중이야 (하는 중이야)", url: "" },
        { en: "How about ~?", kr: "~는 어때?", url: "" },
        { en: "What are you ~?", kr: "너 지금 뭐 ~하는 거야?", url: "" },
        { en: "Where is ~?", kr: "~는 어디에 있어?", url: "" },
        { en: "When do you ~?", kr: "너 언제 ~해?", url: "" },
        { en: "Why did you ~?", kr: "너 왜 ~했어?", url: "" },
        { en: "Let's ~", kr: "우리 ~하자", url: "" },
        { en: "You should ~", kr: "너 ~하는 게 좋겠어 (해야 해)", url: "" },
        { en: "Would you like ~?", kr: "~하시겠어요? (~ 원하세요?)", url: "" },
        { en: "I think I should ~", kr: "나 ~해야 할 것 같아", url: "" },
        { en: "I used to ~", kr: "나 예전에 ~하곤 했어", url: "" },
        { en: "I'm good at ~", kr: "나 ~ 잘해", url: "" },
        { en: "I'm afraid of ~", kr: "나 ~가 두려워 (무서워)", url: "" },
        { en: "I'm ready to ~", kr: "나 ~할 준비가 됐어", url: "" },
        { en: "Is it okay if I ~?", kr: "내가 ~해도 괜찮을까?", url: "" },
        { en: "It looks like ~", kr: "~처럼 보여 (인 것 같아)", url: "" },
        { en: "There is / are ~", kr: "~가 있어", url: "" },
        { en: "I can't wait to ~", kr: "빨리 ~하고 싶어 (기다릴 수 없어)", url: "" },
        { en: "I can't believe ~", kr: "~라니 믿을 수 없어", url: "" },
        { en: "I don't know how to ~", kr: "어떻게 ~해야 할지 모르겠어", url: "" },
        { en: "I remember ~", kr: "나 ~한 거 기억나", url: "" },
        { en: "I decided to ~", kr: "나 ~하기기로 결정했어 (마음먹었어)", url: "" },
        { en: "I promise to ~", kr: "나 ~하겠다고 약속할게", url: "" },
        { en: "I'm interested in ~", kr: "나 ~에 관심 있어", url: "" },
        { en: "Have you ever ~?", kr: "너 이전에 ~해 본 적 있어?", url: "" },
        { en: "How long does it take to ~?", kr: "~하는 데 얼마나 걸려?", url: "" },
        { en: "What do you think about ~?", kr: "~에 대해 어떻게 생각해?", url: "" },
        { en: "Make sure to ~", kr: "반드시 ~하도록 해", url: "" },
        { en: "You don't have to ~", kr: "너 ~ 안 해도 돼 (할 필요 없어)", url: "" },
        { en: "It's hard to ~", kr: "~하는 건 어려워", url: "" },
        { en: "It's easy to ~", kr: "~하는 건 쉬워", url: "" },
        { en: "I'm busy ~ing", kr: "나 ~하느라 바빠", url: "" },
        { en: "I feel like ~ing", kr: "나 ~하고 싶은 기분이야", url: "" },
        { en: "No wonder ~", kr: "어쩐지 ~하더라니 (하는 게 당연해)", url: "" },
        { en: "I'd like to ~", kr: "~하고 싶습니다 (공손하게)", url: "" },
        { en: "I was about to ~", kr: "막 ~하려던 참이었어", url: "" },
        { en: "It takes time to ~", kr: "~하는 데 시간이 걸려", url: "" },
        { en: "Are you ready to ~?", kr: "~할 준비 됐어?", url: "" },
        { en: "I am planning to ~", kr: "나 ~할 계획이야", url: "" },
        { en: "I'm glad to ~", kr: "~하게 되어서 기뻐", url: "" },
        { en: "I'm worried about ~", kr: "나 ~가 걱정돼", url: "" },
        { en: "I'm tired of ~", kr: "나 ~에 질렸어 (지쳤어)", url: "" },
        { en: "I'm proud of ~", kr: "나 ~가 자랑스러워", url: "" },
        { en: "Is there any ~?", kr: "무슨 ~가 있나요?", url: "" },
        { en: "That's why ~", kr: "그게 바로 ~한 이유야", url: "" },
        { en: "That's what I ~", kr: "그게 바로 내가 ~한 거야", url: "" },
        { en: "That's how I ~", kr: "그게 바로 내가 ~한 방법이야", url: "" },
        { en: "As far as I know, ~", kr: "내가 알기로는 ~", url: "" },
        { en: "It depends on ~", kr: "~에 달려 있어", url: "" },
        { en: "It's clear that ~", kr: "~는 분명해 (명백해)", url: "" },
        { en: "I have no idea ~", kr: "전혀 모르겠어 (~에 대해)", url: "" },
        { en: "I don't care about ~", kr: "나 ~에 상관 안 해 (신경 안 써)", url: "" },
        { en: "I'm thinking of ~ing", kr: "나 ~할까 생각 중이야", url: "" },
        { en: "I enjoy ~ing", kr: "나 ~하는 걸 즐겨", url: "" },
        { en: "I keep ~ing", kr: "나 계속해서 ~해", url: "" },
        { en: "I gave up ~ing", kr: "나 ~하는 거 포기했어", url: "" },
        { en: "I finished ~ing", kr: "나 ~하는 거 끝냈어", url: "" },
        { en: "Do you mind if I ~?", kr: "내가 ~해도 괜찮을까요? (실례가 안 된다면)", url: "" },
        { en: "You'd better ~", kr: "너 ~하는 게 좋을 거야 (강한 권유/경고)", url: "" },
        { en: "You are supposed to ~", kr: "너 원래 ~하기로 되어 있어 (해야 해)", url: "" },
        { en: "I'm looking forward to ~ing", kr: "나 ~하기를 손꼽아 기다리고 있어", url: "" },
        { en: "I used to think ~", kr: "나 예전에는 ~라고 생각했었어", url: "" },
        { en: "I have a hard time ~ing", kr: "나 ~하는 데 애먹고 있어 (힘들어)", url: "" },
        { en: "Feel free to ~", kr: "편하게 ~하세요", url: "" },
        { en: "Don't hesitate to ~", kr: "주저하지 말고 ~하세요", url: "" },
        { en: "It is worth ~ing", kr: "~할 가치가 있어", url: "" },
        { en: "There is no need to ~", kr: "~할 필요 전혀 없어", url: "" },
        { en: "I happened to ~", kr: "나 우연히 ~하게 됐어", url: "" },
        { en: "I meant to ~", kr: "나 원래 ~할 의도였어 (하려고 했어)", url: "" },
        { en: "I didn't mean to ~", kr: "나 일부러 ~하려던 건 아니었어 (미안해)", url: "" },
        { en: "I'm not sure if ~", kr: "~인지 잘 모르겠어", url: "" },
        { en: "It's no use ~ing", kr: "~해봐야 소용없어", url: "" },
        { en: "No matter what ~", kr: "무슨 일이 있어도 (~에 상관없이)", url: "" },
        { en: "No matter how ~", kr: "아무리 ~할지라도", url: "" },
        { en: "Speaking of ~", kr: "~에 대해 말하자면", url: "" },
        { en: "On behalf of ~", kr: "~를 대표해서 / ~를 대신해서", url: "" },
        { en: "Instead of ~ing", kr: "~하는 것 대신에", url: "" },
        { en: "In terms of ~", kr: "~라는 면에서 (~에 관해서)", url: "" },
        { en: "According to ~", kr: "~에 따르면", url: "" },
        { en: "Thanks to ~", kr: "~ 덕분에", url: "" },
        { en: "Apart from ~", kr: "~를 제외하고 / ~ 외에도", url: "" },
        { en: "In spite of ~", kr: "~에도 불구하고", url: "" },
        { en: "As a matter of fact, ~", kr: "사실은 (실제로는)", url: "" },
        { en: "To be honest, ~", kr: "솔직히 말해서", url: "" }
    ];

    // 2. 데이터를 기반으로 리스트 자동 생성
    var listHtml = '';
    $.each(patternData, function(index, item) {
        var lessonNum = String(index + 1).padStart(3, '0');
        var targetUrl = '#n';   // 기본 링크 값 설정
        var activeClass = '';   // 기본 클래스 빈값 설정

        // url 값이 비어있지 않고 실제 존재할 때의 조건 처리
        if (item.url && item.url !== '') {
            targetUrl = item.url;
            activeClass = ' active'; // unit 클래스 옆에 한 칸 띄우고 붙도록 세팅
        }

        listHtml += '<div class="unit' + activeClass + '">';
        listHtml += '    <div class="num">LESSON ' + lessonNum + '</div>';
        listHtml += '    <dl>';
        listHtml += '        <dt>' + item.en + '</dt>';
        listHtml += '        <dd>' + item.kr + '</dd>';
        listHtml += '    </dl>';
        listHtml += '    <a href="' + targetUrl + '" class="bt_ov">상세보기</a>';
        listHtml += '</div>';
    });
    
    $('.pattern_list').html(listHtml);

    // 3. 실시간 검색 기능
    $('#pattern_search').on('keyup', function() {
        var value = $(this).val().toLowerCase();
        $('.pattern_list .unit').filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
        });
    });
});

$(document).ready(function() {
    $('.box + a').on('mousedown touchstart', function(e) {
        e.preventDefault();
        $(this).closest('li').addClass('active');
    });

    $(document).on('mouseup mouseleave touchend', function() {
        $('li.active').removeClass('active');
    });
});

$(document).ready(function() {
    $('.lesson .sentences .op li input').on('change', function() {
        var idx = $(this).parent().index();
        var isChecked = $(this).is(':checked');
        
        $('.tb_sentences tbody tr').each(function() {
            // 체크가 해제되면(.is(':checked')가 false) 클래스를 추가하고, 체크되면 제거합니다.
            $(this).children().eq(idx).toggleClass('blind_text', !isChecked);
        });
    });
});

$(document).ready(function() {
    var jsonFileName = $('.lesson').attr('data-json');
    
    if (jsonFileName) {
        $.getJSON('../data/' + jsonFileName, function(data) {
            var tableRows = '';
            var patternKeyword = data.pattern_en;
            var patternKorean = data.pattern_kr;

            // 1. 상단 .pattern 영역에 JSON 데이터 자동 삽입 (영어 패턴 부분은 span으로 감싸기)
            if (patternKeyword && patternKorean) {
                $('.lesson .sentences .op .pattern').html('<span class="point_text">' + patternKeyword + '</span> ' + patternKorean);
            }
            
            // 2. 루프를 돌며 테이블 tbody에 데이터 바인딩 및 패턴 강조 처리
            $.each(data.sentences, function(index, item) {
                var fullEnglish = item.en;
                
                if (patternKeyword) {
                    var regex = new RegExp('(' + patternKeyword + ')', 'gi');
                    fullEnglish = fullEnglish.replace(regex, '<span class="point_text">$1</span>');
                }

                tableRows += '<tr>';
                tableRows += '    <td>' + fullEnglish + '</td>';
                tableRows += '    <td>' + item.kr + '</td>';
                tableRows += '    <td>' + item.pron + '</td>';
                tableRows += '</tr>';
            });
            
            $('.tb_sentences tbody').html(tableRows);
        }).fail(function() {
            console.log('JSON 데이터를 불러오는 데 실패했습니다 경로를 확인해 주세요.');
        });
    }

    // 3. 옵션 체크박스 클릭 시 해당 열의 텍스트 토글 (인덱스 구조 맞춤)
    $('.lesson .sentences .op ul li input').on('change', function() {
        var idx = $(this).parent().index();
        var isChecked = $(this).is(':checked');
        
        $('.tb_sentences tbody tr').each(function() {
            $(this).children().eq(idx).toggleClass('blind_text', !isChecked);
        });
    });
});
$(document).on('click', 'a._ready_menu', function(e) {
    e.preventDefault(); // 링크 이동 원천 차단
    var menuText = $(this).text();
    alert('"' + menuText + '" 메뉴는 현재 준비 중입니다 조금만 기다려 주세요!');    
});
$(document).ready(function() {
    // 1. 패턴 데이터 정의
    var quizPatternData = [
        { en: "I want to ~", kr: "~하고 싶어", json: "../data/rep001_sentences.json" },
        { en: "I'm going to ~", kr: "~할 예정이야 (할 거야)", json: "../data/rep002_sentences.json" },
        { en: "Can I ~?", kr: "~해도 돼? (내가 할 수 있을까?)", json: "../data/rep003_sentences.json" },
        { en: "Can you ~?", kr: "~해 줄래? (네가 해 줄 수 있어?)", json: "../data/rep004_sentences.json" },
        { en: "I have to ~", kr: "~해야만 해", json: "../data/rep005_sentences.json" },
        { en: "I need to ~", kr: "~할 필요가 있어 (해야 해)", json: "../data/rep006_sentences.json" },
        { en: "Do you want to ~?", kr: "~하고 싶어?", json: "../data/rep007_sentences.json" },
        { en: "Do you like ~?", kr: "~ 좋아해?", json: "../data/rep008_sentences.json" },
        { en: "I like to ~", kr: "~하는 걸 좋아해", json: "" },
        { en: "I don't think ~", kr: "~인 것 같지 않아 (내 생각엔 ~가 아니야)", json: "" },
        { en: "It's time to ~", kr: "~할 시간이야", json: "" },
        { en: "Are you sure ~?", kr: "정말 ~야? (확실해?)", json: "" },
        { en: "I'm sorry for ~", kr: "~해서 미안해", json: "" },
        { en: "Thank you for ~", kr: "~해 줘서 고마워", json: "" },
        { en: "Don't forget to ~", kr: "~하는 거 잊지 마", json: "" },
        { en: "I'm looking for ~", kr: "~를 찾고 있어", json: "" },
        { en: "I'm trying to ~", kr: "~하려고 노력 중이야 (하는 중이야)", json: "" },
        { en: "How about ~?", kr: "~는 어때?", json: "" },
        { en: "What are you ~?", kr: "너 지금 뭐 ~하는 거야?", json: "" },
        { en: "Where is ~?", kr: "~는 어디에 있어?", json: "" },
        { en: "When do you ~?", kr: "너 언제 ~해?", json: "" },
        { en: "Why did you ~?", kr: "너 왜 ~했어?", json: "" },
        { en: "Let's ~", kr: "우리 ~하자", json: "" },
        { en: "You should ~", kr: "너 ~하는 게 좋겠어 (해야 해)", json: "" },
        { en: "Would you like ~?", kr: "~하시겠어요? (~ 원하세요?)", json: "" },
        { en: "I think I should ~", kr: "나 ~해야 할 것 같아", json: "" },
        { en: "I used to ~", kr: "나 예전에 ~하곤 했어", json: "" },
        { en: "I'm good at ~", kr: "나 ~ 잘해", json: "" },
        { en: "I'm afraid of ~", kr: "나 ~가 두려워 (무서워)", json: "" },
        { en: "I'm ready to ~", kr: "나 ~할 준비가 됐어", json: "" },
        { en: "Is it okay if I ~?", kr: "내가 ~해도 괜찮을까?", json: "" },
        { en: "It looks like ~", kr: "~처럼 보여 (인 것 같아)", json: "" },
        { en: "There is / are ~", kr: "~가 있어", json: "" },
        { en: "I can't wait to ~", kr: "빨리 ~하고 싶어 (기다릴 수 없어)", json: "" },
        { en: "I can't believe ~", kr: "~라니 믿을 수 없어", json: "" },
        { en: "I don't know how to ~", kr: "어떻게 ~해야 할지 모르겠어", json: "" },
        { en: "I remember ~", kr: "나 ~한 거 기억나", json: "" },
        { en: "I decided to ~", kr: "나 ~하기기로 결정했어 (마음먹었어)", json: "" },
        { en: "I promise to ~", kr: "나 ~하겠다고 약속할게", json: "" },
        { en: "I'm interested in ~", kr: "나 ~에 관심 있어", json: "" },
        { en: "Have you ever ~?", kr: "너 이전에 ~해 본 적 있어?", json: "" },
        { en: "How long does it take to ~?", kr: "~하는 데 얼마나 걸려?", json: "" },
        { en: "What do you think about ~?", kr: "~에 대해 어떻게 생각해?", json: "" },
        { en: "Make sure to ~", kr: "반드시 ~하도록 해", json: "" },
        { en: "You don't have to ~", kr: "너 ~ 안 해도 돼 (할 필요 없어)", json: "" },
        { en: "It's hard to ~", kr: "~하는 건 어려워", json: "" },
        { en: "It's easy to ~", kr: "~하는 건 쉬워", json: "" },
        { en: "I'm busy ~ing", kr: "나 ~하느라 바빠", json: "" },
        { en: "I feel like ~ing", kr: "나 ~하고 싶은 기분이야", json: "" },
        { en: "No wonder ~", kr: "어쩐지 ~하더라니 (하는 게 당연해)", json: "" },
        { en: "I'd like to ~", kr: "~하고 싶습니다 (공손하게)", json: "" },
        { en: "I was about to ~", kr: "막 ~하려던 참이었어", json: "" },
        { en: "It takes time to ~", kr: "~하는 데 시간이 걸려", json: "" },
        { en: "Are you ready to ~?", kr: "~할 준비 됐어?", json: "" },
        { en: "I am planning to ~", kr: "나 ~할 계획이야", json: "" },
        { en: "I'm glad to ~", kr: "~하게 되어서 기뻐", json: "" },
        { en: "I'm worried about ~", kr: "나 ~가 걱정돼", json: "" },
        { en: "I'm tired of ~", kr: "나 ~에 질렸어 (지쳤어)", json: "" },
        { en: "I'm proud of ~", kr: "나 ~가 자랑스러워", json: "" },
        { en: "Is there any ~?", kr: "무슨 ~가 있나요?", json: "" },
        { en: "That's why ~", kr: "그게 바로 ~한 이유야", json: "" },
        { en: "That's what I ~", kr: "그게 바로 내가 ~한 거야", json: "" },
        { en: "That's how I ~", kr: "그게 바로 내가 ~한 방법이야", json: "" },
        { en: "As far as I know, ~", kr: "내가 알기로는 ~", json: "" },
        { en: "It depends on ~", kr: "~에 달려 있어", json: "" },
        { en: "It's clear that ~", kr: "~는 분명해 (명백해)", json: "" },
        { en: "I have no idea ~", kr: "전혀 모르겠어 (~에 대해)", json: "" },
        { en: "I don't care about ~", kr: "나 ~에 상관 안 해 (신경 안 써)", json: "" },
        { en: "I'm thinking of ~ing", kr: "나 ~할까 생각 중이야", json: "" },
        { en: "I enjoy ~ing", kr: "나 ~하는 걸 즐겨", json: "" },
        { en: "I keep ~ing", kr: "나 계속해서 ~해", json: "" },
        { en: "I gave up ~ing", kr: "나 ~하는 거 포기했어", json: "" },
        { en: "I finished ~ing", kr: "나 ~하는 거 끝냈어", json: "" },
        { en: "Do you mind if I ~?", kr: "내가 ~해도 괜찮을까요? (실례가 안 된다면)", json: "" },
        { en: "You'd better ~", kr: "너 ~하는 게 좋을 거야 (강한 권유/경고)", json: "" },
        { en: "You are supposed to ~", kr: "너 원래 ~하기로 되어 있어 (해야 해)", json: "" },
        { en: "I'm looking forward to ~ing", kr: "나 ~하기를 손꼽아 기다리고 있어", json: "" },
        { en: "I used to think ~", kr: "나 예전에는 ~라고 생각했었어", json: "" },
        { en: "I have a hard time ~ing", kr: "나 ~하는 데 애먹고 있어 (힘들어)", json: "" },
        { en: "Feel free to ~", kr: "편하게 ~하세요", json: "" },
        { en: "Don't hesitate to ~", kr: "주저하지 말고 ~하세요", json: "" },
        { en: "It is worth ~ing", kr: "~할 가치가 있어", json: "" },
        { en: "There is no need to ~", kr: "~할 필요 전혀 없어", json: "" },
        { en: "I happened to ~", kr: "나 우연히 ~하게 됐어", json: "" },
        { en: "I meant to ~", kr: "나 원래 ~할 의도였어 (하려고 했어)", json: "" },
        { en: "I didn't mean to ~", kr: "나 일부러 ~하려던 건 아니었어 (미안해)", json: "" },
        { en: "I'm not sure if ~", kr: "~인지 잘 모르겠어", json: "" },
        { en: "It's no use ~ing", kr: "~해봐야 소용없어", json: "" },
        { en: "No matter what ~", kr: "무슨 일이 있어도 (~에 상관없이)", json: "" },
        { en: "No matter how ~", kr: "아무리 ~할지라도", json: "" },
        { en: "Speaking of ~", kr: "~에 대해 말하자면", json: "" },
        { en: "On behalf of ~", kr: "~를 대표해서 / ~를 대신해서", json: "" },
        { en: "Instead of ~ing", kr: "~하는 것 대신에", json: "" },
        { en: "In terms of ~", kr: "~라는 면에서 (~에 관해서)", json: "" },
        { en: "According to ~", kr: "~에 따르면", json: "" },
        { en: "Thanks to ~", kr: "~ 덕분에", json: "" },
        { en: "Apart from ~", kr: "~를 제외하고 / ~ 외에도", json: "" },
        { en: "In spite of ~", kr: "~에도 불구하고", json: "" },
        { en: "As a matter of fact, ~", kr: "사실은 (실제로는)", json: "" },
        { en: "To be honest, ~", kr: "솔직히 말해서", json: "" }
    ];

    // 2. 데이터를 기반으로 리스트 자동 생성
    var listHtml = '';
    $.each(quizPatternData, function(index, item) {
        var lessonNum = String(index + 1).padStart(3, '0');
        var activeClass = '';

        if (item.json && item.json !== '') {
            activeClass = ' active';
        }

        listHtml += '<div class="unit' + activeClass + '" data-json="' + item.json + '">';
        listHtml += '    <div class="num">LESSON ' + lessonNum + '</div>';
        listHtml += '    <dl>';
        listHtml += '        <dt>' + item.en + '</dt>';
        listHtml += '        <dd>' + item.kr + '</dd>';
        listHtml += '    </dl>';
        listHtml += '</div>';
    });
    $('.quiz_pattern_list').html(listHtml);

    // 3. 패턴 아이템 다중 선택 및 카운터 실시간 연동 이벤트
    $('.quiz_pattern_list').on('click', '.unit.active', function() {
        $(this).toggleClass('selected');
        
        var selectedCount = $('.quiz_pattern_list .unit.selected').length;
        
        // 하단 하이라이트 카운터에 실시간 숫자 반영
        $('.quiz_list_fixed p em').text(selectedCount);
        
        // 최소 3개 이상 선택 시 클래스 'on' 추가 및 버튼 비활성화 해제
        if (selectedCount >= 3) {
            $('.quiz_list_fixed').addClass('on');
            $('#btn_start_quiz').removeClass('disabled');
        } else {
            $('.quiz_list_fixed').removeClass('on');
            $('#btn_start_quiz').addClass('disabled');
        }
    });

    // 4. 퀴즈 풀기 버튼 클릭 - 난이도별 세트(쉬움 3, 보통 4, 어려움 3) 순차 조합 기능
    $('#btn_start_quiz').on('click', function(e) {
        e.preventDefault();
        if ($(this).hasClass('disabled')) return false;

        var deferreds = [];
        var easySentences = [];
        var normalSentences = [];
        var hardSentences = [];

        $('.quiz_pattern_list .unit.selected').each(function() {
            var jsonFile = $(this).attr('data-json');
            if (jsonFile) {
                deferreds.push(
                    $.getJSON(jsonFile, function(data) {
                        if (data.sentences && data.sentences.length > 0) {
                            $.each(data.sentences, function(i, val) {
                                val.pattern_en = data.pattern_en;
                                
                                // 3개 단위 구조 분기 (0,1,2 중 0: 쉬움 / 1: 보통 / 2: 어려움)
                                var difficultyStep = i % 3;
                                if (difficultyStep === 0) {
                                    easySentences.push(val);
                                } else if (difficultyStep === 1) {
                                    normalSentences.push(val);
                                } else {
                                    hardSentences.push(val);
                                }
                            });
                        }
                    })
                );
            }
        });

        $.when.apply($, deferreds).done(function() {
            // 유효성 검증
            if (easySentences.length === 0 || normalSentences.length === 0 || hardSentences.length === 0) {
                alert('선택한 패턴의 문장 데이터가 부족하거나 찾을 수 없습니다.');
                return;
            }

            // 피셔-예이츠 셔플 공통 함수
            function shuffleArray(arr) {
                for (var i = arr.length - 1; i > 0; i--) {
                    var j = Math.floor(Math.random() * (i + 1));
                    var temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                }
            }

            // 난이도 그룹별 개별 셔플 진행
            shuffleArray(easySentences);
            shuffleArray(normalSentences);
            shuffleArray(hardSentences);

            // 규격에 맞춰 슬라이싱 추출 (쉬움 3문항, 보통 4문항, 어려움 3문항)
            var chosenEasy = easySentences.slice(0, 3);
            var chosenNormal = normalSentences.slice(0, 4);
            var chosenHard = hardSentences.slice(0, 3);

            // [핵심 포인트] 앞에서부터 난이도가 빌드업되도록 순서대로 결합하여 10개 구성
            var finalQuizData = [].concat(chosenEasy, chosenNormal, chosenHard);

            // 로컬스토리지에 저장 후 즉시 이동
            localStorage.setItem('current_quiz_set', JSON.stringify(finalQuizData));
            window.location.href = './quiz.html';

        }).fail(function() {
            alert('데이터 파일 로드 중 오류가 발생했습니다. 경로를 확인해 주세요.');
        });
    });

    // 5. 실시간 검색 기능
    $('#quiz_pattern_search').on('keyup', function() {
        var value = $(this).val().toLowerCase();
        $('.quiz_pattern_list .unit').filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
        });
    });

});
$(document).ready(function() {
    let wordDatabase = [];
    let currentPool = [];
    
    let activeKrWords = [null, null, null, null, null];
    let activeEnWords = [null, null, null, null, null];

    let completedKrSlots = [];
    let completedEnSlots = [];

    let pendingKrSlots = []; 
    let pendingEnSlots = [];

    let newlyMatchedKrSlots = [];
    let newlyMatchedEnSlots = [];

    let globalRefillTimer = null;

    let selectedKrValue = null;
    let selectedEnValue = null;

    // 새로운 관리 항목들
    let matchedCount = 0;      // 맞춘 단어 쌍 누적 카운트
    let combo = 0;             // 현재 연속 콤보
    let maxCombo = 0;          // 최대 달성 콤보
    let totalTimeLimit = 0;    // 총 부여된 제한 시간 (단어수 * 1초)
    let timeLeft = 0;          // 남은 시간
    let timerInterval = null;  // 타이머 인터벌 객체

    let isFinalFiveMode = false;

    let waitingKrBuffer = [];
    let waitingEnBuffer = [];

    const board = document.getElementById("game-board");
    const comboLabel = document.getElementById("combo-label");
    const gameProgress = document.getElementById("game-progress");
    const progressLabel = document.getElementById("progress-label");
    const timerLabel = document.getElementById("timer-label");
    const patternTitleView = document.getElementById("game-pattern-title");

    function shuffle(array) {
        return array.sort(() => Math.random() - 0.5);
    }

    async function loadGameData() {
        const savedGame = localStorage.getItem('selected_word_game');
        if (!savedGame) {
            alert("선택된 게임 데이터가 없습니다. 리스트 페이지로 이동합니다.");
            window.location.href = './index.html';
            return;
        }

        const gameSetup = JSON.parse(savedGame);
        patternTitleView.innerText = gameSetup.title;

        try {
            const response = await fetch(gameSetup.json_file);
            if (!response.ok) throw new Error("네트워크 응답 오류");
            
            wordDatabase = await response.json();
            
            if (wordDatabase && wordDatabase.length >= 5) {
                createBoardElements();
                initGame();
            } else {
                alert("게임 진행을 위해 최소 5개 이상의 단어가 필요합니다.");
            }
        } catch (error) {
            console.error("데이터 로드 실패:", error);
            alert("단어 데이터를 불러오는 데 실패했습니다.\n요청 경로: " + gameSetup.json_file);
        }
    }

    function createBoardElements() {
        board.innerHTML = "";
        for (let i = 0; i < 5; i++) {
            const krBtn = document.createElement("button");
            krBtn.className = "word-btn";
            krBtn.dataset.type = "kr";
            krBtn.dataset.index = i;
            krBtn.onclick = () => handleSelect(krBtn);

            const enBtn = document.createElement("button");
            enBtn.className = "word-btn";
            enBtn.dataset.type = "en";
            enBtn.dataset.index = i;
            enBtn.onclick = () => handleSelect(enBtn);

            board.appendChild(krBtn);
            board.appendChild(enBtn);
        }
    }

    function initGame() {
        currentPool = shuffle([...wordDatabase]);
        let initialKr = [], initialEn = [];
        
        for(let i=0; i<5; i++) {
            let word = currentPool.pop();
            initialKr.push(word.kr);
            initialEn.push(word.en);
        }
        
        shuffle(initialKr); shuffle(initialEn);
        activeKrWords = initialKr; activeEnWords = initialEn;
        
        pendingKrSlots = []; pendingEnSlots = [];
        newlyMatchedKrSlots = []; newlyMatchedEnSlots = [];
        completedKrSlots = []; completedEnSlots = [];
        waitingKrBuffer = []; waitingEnBuffer = [];
        if(globalRefillTimer) clearTimeout(globalRefillTimer);
        globalRefillTimer = null;
        
        selectedKrValue = null;
        selectedEnValue = null;
        
        // 변수 초기화
        matchedCount = 0;
        combo = 0;
        maxCombo = 0;
        isFinalFiveMode = false;

        // 타이머 설정 (한 쌍당 1초)
        totalTimeLimit = wordDatabase.length * 1.5;
        timeLeft = totalTimeLimit;
        
        startTimer();
        updateHUD();

        const allButtons = board.querySelectorAll('.word-btn');
        allButtons.forEach(btn => {
            btn.className = "word-btn";
            const idx = parseInt(btn.dataset.index);
            if (btn.dataset.type === "kr") {
                btn.innerText = activeKrWords[idx] || "";
            } else {
                btn.innerText = activeEnWords[idx] || "";
            }
        });

        renderBoard();
    }

    // 타이머 시작 함수
    function startTimer() {
        if(timerInterval) clearInterval(timerInterval);
        timerInterval = setInterval(() => {
            timeLeft--;
            if(timeLeft <= 0) {
                timeLeft = 0;
                clearInterval(timerInterval);
                updateHUD();
                setTimeout(() => {
                    alert("⏰ 시간이 초과되었습니다! 게임 오버.");
                    initGame(); // 게임 재시작
                }, 100);
                return;
            }
            updateHUD();
        }, 1000); // 1초 단위 구동
    }

    function renderBoard() {
        const allButtons = board.querySelectorAll('.word-btn');
        
        allButtons.forEach(btn => {
            const i = parseInt(btn.dataset.index);
            const isKr = btn.dataset.type === "kr";
            const currentText = isKr ? activeKrWords[i] : activeEnWords[i];
            
            btn.innerText = currentText || "";
            btn.className = "word-btn";

            if (isKr) {
                if (completedKrSlots.includes(i)) {
                    btn.classList.add("completed-gray");
                } else if (pendingKrSlots.includes(i)) {
                    if (newlyMatchedKrSlots.includes(i)) {
                        btn.classList.add("dimming");
                    } else {
                        btn.classList.add("dimmed-stay");
                    }
                } else if (selectedKrValue && selectedKrValue === btn.innerText) {
                    btn.classList.add("selected");
                }
            } else {
                if (completedEnSlots.includes(i)) {
                    btn.classList.add("completed-gray");
                } else if (pendingEnSlots.includes(i)) {
                    if (newlyMatchedEnSlots.includes(i)) {
                        btn.classList.add("dimming");
                    } else {
                        btn.classList.add("dimmed-stay");
                    }
                } else if (selectedEnValue && selectedEnValue === btn.innerText) {
                    btn.classList.add("selected");
                }
            }
        });
    }

    function handleSelect(btn) {
        const idx = parseInt(btn.dataset.index);
        if (btn.classList.contains('dimming') || btn.classList.contains('dimmed-stay') || btn.classList.contains('completed-gray') || btn.innerText === "") return;

        if (btn.dataset.type === "kr") {
            if (selectedKrValue === btn.innerText) {
                selectedKrValue = null;
            } else {
                selectedKrValue = btn.innerText;
            }
        } else {
            if (selectedEnValue === btn.innerText) {
                selectedEnValue = null;
            } else {
                selectedEnValue = btn.innerText;
            }
        }
        
        renderBoard();

        if (selectedKrValue && selectedEnValue) {
            const krVal = selectedKrValue;
            const enVal = selectedEnValue;
            
            const krIdx = activeKrWords.indexOf(krVal);
            const enIdx = activeEnWords.indexOf(enVal);

            const match = wordDatabase.find(w => w.kr === krVal && w.en === enVal);

            if (match) {
                matchedCount += 1; // 맞춘 개수 증가
                combo += 1;        // 콤보 증가
                if (combo > maxCombo) maxCombo = combo; // 맥스 콤보 갱신
                
                updateHUD();

                completedKrSlots.push(krIdx);
                completedEnSlots.push(enIdx);

                const uncompletedCountOnBoard = 5 - completedKrSlots.length + pendingKrSlots.length;
                const totalRemainingWords = currentPool.length + waitingKrBuffer.length + uncompletedCountOnBoard;

                if (isFinalFiveMode || totalRemainingWords <= 5) {
                    isFinalFiveMode = true;
                    if(globalRefillTimer) clearTimeout(globalRefillTimer);
                    pendingKrSlots = [];
                    pendingEnSlots = [];
                    waitingKrBuffer = [];
                    waitingEnBuffer = [];
                    newlyMatchedKrSlots = [];
                    newlyMatchedEnSlots = [];
                    selectedKrValue = null;
                    selectedEnValue = null;

                    renderBoard();
                    checkGameClear();
                } else {
                    completedKrSlots = completedKrSlots.filter(id => id !== krIdx);
                    completedEnSlots = completedEnSlots.filter(id => id !== enIdx);

                    if(globalRefillTimer) clearTimeout(globalRefillTimer);

                    if (currentPool.length > 0) {
                        let word = currentPool.pop();
                        waitingKrBuffer.push(word.kr);
                        waitingEnBuffer.push(word.en);
                    }

                    selectedKrValue = null;
                    selectedEnValue = null;

                    pendingKrSlots.push(krIdx);
                    pendingEnSlots.push(enIdx);
                    
                    newlyMatchedKrSlots = [krIdx];
                    newlyMatchedEnSlots = [enIdx];
                    
                    if (pendingKrSlots.length >= 2) {
                        processPushRefill();
                    } else {
                        renderBoard();
                        globalRefillTimer = setTimeout(() => {
                            if (pendingKrSlots.length > 0) {
                                processPushRefill();
                            }
                        }, 3000);
                    }
                }

            } else {
                const allButtons = board.querySelectorAll('.word-btn');
                let targetKrBtn, targetEnBtn;
                allButtons.forEach(b => {
                    if(b.dataset.type === "kr" && b.innerText === krVal) targetKrBtn = b;
                    if(b.dataset.type === "en" && b.innerText === enVal) targetEnBtn = b;
                });

                if(targetKrBtn) targetKrBtn.classList.add("wrong");
                if(targetEnBtn) targetEnBtn.classList.add("wrong");
                
                combo = 0; // 틀리면 콤보 리셋
                updateHUD();

                selectedKrValue = null;
                selectedEnValue = null;

                setTimeout(() => {
                    renderBoard();
                }, 300);
            }
        }
    }

    function processPushRefill() {
        let targetKrIndices = [...pendingKrSlots];
        let targetEnIndices = [...pendingEnSlots];

        pendingKrSlots = [];
        pendingEnSlots = [];
        newlyMatchedKrSlots = [];
        newlyMatchedEnSlots = [];

        let count = targetKrIndices.length;
        let finalKrToInsert = [];
        let finalEnToInsert = [];

        for(let i = 0; i < count; i++) {
            if(waitingKrBuffer.length > 0) {
                finalKrToInsert.push(waitingKrBuffer.shift());
                finalEnToInsert.push(waitingEnBuffer.pop());
            }
        }

        const allButtons = board.querySelectorAll('.word-btn');
        allButtons.forEach(btn => {
            const i = parseInt(btn.dataset.index);
            if (btn.dataset.type === "kr" && targetKrIndices.includes(i)) btn.classList.remove('dimming');
            if (btn.dataset.type === "en" && targetEnIndices.includes(i)) btn.classList.remove('dimming');
        });

        for(let i = 0; i < count; i++) {
            activeKrWords[targetKrIndices[i]] = finalKrToInsert[i];
            activeEnWords[targetEnIndices[i]] = finalEnToInsert[i];
        }

        renderBoard();
        applyFadeIn(finalKrToInsert, finalEnToInsert);
    }

    function applyFadeIn(krList, enList) {
        const allButtons = board.querySelectorAll('.word-btn');
        allButtons.forEach(btn => {
            if(krList.includes(btn.innerText) || enList.includes(btn.innerText)) {
                if (btn.innerText !== "") btn.classList.add('fade-in');
            }
        });
    }

    // 5. 게임 클리어 시 통계 팝업 및 리셋 처리
    function checkGameClear() {
        if (completedKrSlots.length === 5 && completedEnSlots.length === 5) {
            clearInterval(timerInterval); // 타이머 정지
            
            const clearTime = totalTimeLimit - timeLeft; // 걸린 시간 계산

            setTimeout(() => {
                alert(`🎉 축하합니다! 모든 단어를 매칭했습니다.\n\n⏱️ 클리어 시간: ${clearTime}초\n🔥 최대 콤보: ${maxCombo} 콤보`);
                initGame();
            }, 400);
        }
    }

    // 상단 UI 요소 업데이트 (프로그래스바, 콤보, 타이머)
    function updateHUD() {
        // 1. 전체 진행 상황 업데이트
        const totalWords = wordDatabase.length;
        progressLabel.innerText = `${matchedCount} / ${totalWords}`;
        
        let progressPercent = totalWords > 0 ? (matchedCount / totalWords) * 100 : 0;
        gameProgress.style.width = `${progressPercent}%`;

        // 2. 콤보 텍스트 업데이트
        comboLabel.innerText = `${combo} 콤보`;

        // 4. 타이머 텍스트 업데이트
        timerLabel.innerText = `제한시간 ${timeLeft}초`;
    }

    if (window.location.pathname.indexOf('../03word_game/game.html') !== -1) {
        loadGameData();
    }   
});