const TRIP = {
  title:"동혁 ❤ 지애",
  sub:"2026.9.14(월) — 10.1(목) · 총 17박 18일",
  route:"인천 → 파리(5박) → 그린델발트(5박) → 나폴리(1박) → 소렌토(2박) → 카프리(1박) → 로마(4박) → 인천",
  flights:[
    {label:"출국편 | 인천 → 파리", lines:["2026.9.14(월)","10:10 인천(ICN) 출발 → 18:10 파리 샤를드골(CDG) 도착","총 15시간"]},
    {label:"구간 | 취리히 → 나폴리", lines:["2026.9.24(목) · SWISS","16:50 취리히 출발 → 18:30 나폴리 도착"]},
    {label:"귀국편 | 로마 → 인천", lines:["2026.10.1(목) · 로마 FCO 출발","출발 3시간 전 도착 기준으로 역산"]}
  ],
  stays:[
    {c:"fr", t:"파리", lines:["9/14~9/17 시타딘 생제르망","9/18 풀만 투르 에펠"]},
    {c:"ch", t:"그린델발트", lines:["9/19 선스타 호텔","9/20~9/23 글레쳐블리크"]},
    {c:"it", t:"이탈리아", lines:["9/24 나폴리 스타호텔스 테르미누스","9/25~9/26 소렌토 카사 루치아","9/27 카프리 웨버 앰배서더","9/28~10/1 로마 콜론나 팰리스"]}
  ],
  apps:[
    "<b>지도</b> — Google Maps",
    "<b>교통</b> — Omio · Rome2rio · SBB(스위스) · Trainline",
    "<b>파리 지하철</b> — Bonjour RATP · IDF Mobilités",
    "<b>스위스 날씨</b> — MeteoSwiss (Jungfraujoch 지점 추가)",
    "<b>숙소</b> — 예약 확인서 미리 저장",
    "<b>통신</b> — WhatsApp / 유럽 유심·eSIM",
    "<b>번역</b> — Google Translate (오프라인 다운로드)",
    "<b>서류</b> — 국제운전면허증 + 한국 운전면허증 원본 + 여권 (이탈리아 렌트카용)"
  ]
};

const OVERVIEW = [
  [1,"9/14(월)","fr","파리 (시타딘 생제르망)","파리 도착 & 체크인","공항→시내 (RER B/택시)"],
  [2,"9/15(화)","fr","파리 (시타딘)","오르세 + 피크닉 + 몽마르뜨 + 바토무슈","바토무슈 19:30 / 20:00"],
  [3,"9/16(수)","fr","파리 (시타딘)","몽생미셸 투어","06:30 시작, 귀가 익일 01:30 전후"],
  [4,"9/17(목)","fr","파리 (시타딘)","르봉마르셰 + 루브르 가이드 + 오페라","13:30 루브르 · 19:30 공연"],
  [5,"9/18(금)","fr","파리 (풀만 투르 에펠)","웨딩스냅 + 마레 + 에펠탑","시타딘 → 풀만 이동"],
  [6,"9/19(토)","ch","그린델발트 (선스타)","파리 → 그린델발트 이동일","슈피츠 환승 3분 (16:06)"],
  [7,"9/20(일)","ch","그린델발트 (글레쳐블리크)","융프라우요흐 + 패러글라이딩 옵션","융프라우 좌석예약 필수"],
  [8,"9/21(월)","ch","그린델발트 (글레쳐블리크)","날씨 따라 피르스트 / 라우터브루넨","산악날씨 체크 (MeteoSwiss)"],
  [9,"9/22(화)","ch","그린델발트 (글레쳐블리크)","외시넨 호수 + 블라우제","곤돌라 왕복 CHF 36"],
  [10,"9/23(수)","ch","그린델발트 (글레쳐블리크)","옵션데이 (체르마트/슈피츠/베른)","이동시간 보고 선택"],
  [11,"9/24(목)","it","나폴리 (스타호텔스 테르미누스)","그린델발트 → 취리히 → 나폴리","SWISS 16:50 → 18:30"],
  [12,"9/25(금)","it","소렌토 (카사 루치아)","나폴리 구시가지 + 렌트카 + 소렌토","13:00~13:50 렌트카 픽업"],
  [13,"9/26(토)","it","소렌토 (카사 루치아)","포지타노 + 푸로레 + 아말피","주차·운전 동선"],
  [14,"9/27(일)","it","카프리 (웨버 앰배서더)","소렌토 → 카프리 페리 + 블루동굴","소렌토 주차 1박 €60~75"],
  [15,"9/28(월)","it","로마 (콜론나 팰리스)","카프리 → 소렌토 → 로마 드라이브","17:00~17:30 렌트카 반납"],
  [16,"9/29(화)","it","로마 (콜론나 팰리스)","바티칸 투어","13:30~18:00 전후"],
  [17,"9/30(수)","it","로마 (콜론나 팰리스)","로마 산책 + 쇼핑 + 일몰","핀초 언덕 일몰 18:53"],
  [18,"10/1(목)","it","로마 → 인천","귀국일","FCO 이동 (레오나르도/버스)"]
];

const DAYS = [
/* ═══════════════ DAY 1 ═══════════════ */
{
  n:1, date:"9/14", dow:"월", country:"fr", city:"파리", stay:"시타딘 생제르망",
  title:"파리 도착", headline:"🛬 15시간 비행 끝, 생제르망의 첫 밤", tags:["이동일"],
  timeline:[
    {period:"저녁", time:"18:10", icon:"✈️", title:"샤를드골공항(CDG) 도착", key:true,
     sub:["입국심사 → 수하물 수령"]},
    {period:"저녁", icon:"🚕", title:"시내 이동", desc:"RER B 또는 택시 · 자세한 건 아래 '파리 교통권' 참고"},
    {period:"저녁", time:"20:30 전후", icon:"🏨", title:"시타딘 생제르망 체크인"},
    {period:"저녁", icon:"🌙", title:"센강 퐁뇌프 야간 산책", desc:"컨디션에 따라 생략 가능", soft:true}
  ],
  meals:[{slot:"저녁식사 (선택)", picks:[
    {n:"Brasserie des Prés", q:"Brasserie des Prés Paris", d:"숙소 도보 5분 · 어니언수프 · 뵈프 부르기뇽 · 자정까지 영업"},
    {n:"카페 두 마고", q:"Les Deux Magots Paris", d:"☕ 생제르망 대표 카페, 가볍게 한 잔"},
    {n:"카페 드 플뢰르", q:"Café de Flore Paris", d:"☕ 두 마고 바로 옆, 분위기 좋음"}
  ]}]
},
/* ═══════════════ DAY 2 ═══════════════ */
{
  n:2, date:"9/15", dow:"화", country:"fr", city:"파리", stay:"시타딘 생제르망",
  title:"오르세 · 피크닉 · 몽마르뜨 · 바토무슈", headline:"🎨 파리를 제대로 시작하는 날",
  tags:["예약 있음","일몰 20:02"],
  timeline:[
    {period:"오전", icon:"🚶", title:"숙소 출발 → 오르세까지 도보", desc:"약 20분 · 센강 따라 여유롭게 산책하며 가는 걸 추천"},
    {period:"오전", time:"09:30", icon:"🖼️", title:"오르세 미술관", key:true,
     desc:"선예약 후 입장 · 대기줄이 있을 수 있어요",
     sub:["5층부터 둘러보기 — 대표작이 위층에 모여 있어요","반 고흐 · 모네 · 르누아르 · 드가 · 대형 시계"]},
    {period:"오전", icon:"🥖", title:"피크닉 재료 사기",
     desc:"Maison Mulot (Rue de Seine) — 크루아상·키슈·파리지앵 샌드위치, 빠르게 들르기 좋음"},
    {period:"오후", icon:"🧺", title:"뤽상부르 공원 피크닉 (점심)",
     sub:["돗자리 들고 공원 즐기기","피크닉하며 점심 먹기"]},
    {period:"오후", icon:"⛪", title:"몽마르뜨 산책",
     sub:["사랑해벽","아베스 거리","골목 (라메종로즈 / 물랑루즈)","테르트르 광장","사크레쾨르 대성당"]},
    {period:"오후", icon:"🥞", title:"몽마르뜨 간식",
     sub:["Crêperie de Montmartre (Rue Dancourt) — 수제 크레페","Leonie Bakery (Av. Trudaine) — 아몬드 크루아상·키슈"]},
    {period:"저녁", time:"19:00~19:30", icon:"🍞", title:"바토무슈 대기 + 간단한 저녁",
     desc:"좋은 자리를 위해 미리 도착 · 승선장(Alma-Marceau) 근처 불랑제리에서 샌드위치 포장"},
    {period:"저녁", time:"19:30 또는 20:00", icon:"🚢", title:"바토무슈 탑승 (1시간)", key:true,
     sub:["일몰(20:02) → 블루아워 → 조명이 켜진 에펠탑"]},
    {period:"저녁", time:"21:35~23:30", icon:"🌃", title:"개선문 전망대 야경",
     sub:["바토무슈 후 21:35까지 개선문으로 이동","지하통로로 이동 후 보안검색·티켓 확인","⏰ 22:15까지 전망대 입장 완료 필요","파리 시내 360° 전망 — 에펠탑·라데팡스·샹젤리제","샹젤리제 거리 야간 산책 (치안이 좋아 밤에도 안전해요)"]}
  ],
  meals:[
    {slot:"승선 후 저녁 (선택)", picks:[
      {n:"Les Romantiques", q:"Les Romantiques Place de l'Alma Paris", d:"Place de l'Alma · 승선장 바로 앞 · 새벽 2시까지 · 로맨틱 디너, 오리콩피 평 좋음"}
    ]}
  ]
},
/* ═══════════════ DAY 3 ═══════════════ */
{
  n:3, date:"9/16", dow:"수", country:"fr", city:"파리", stay:"시타딘 생제르망",
  title:"몽생미셸 투어", headline:"🚌 새벽부터 새벽까지, 하루 종일 투어",
  tags:["종일 투어","이른 기상"],
  warn:"귀가가 익일 01:30 전후예요. 다음 날(9/17) 오전은 무리하지 않는 게 좋아요.",
  timeline:[
    {period:"오전", time:"06:30", icon:"📍", title:"미팅", key:true,
     sub:["메트로 6호선 Sèvres-Lecourbe역 1번 출구 앞","주소: 94 Bd Garibaldi, 75015 Paris"]},
    {period:"오전", time:"06:40", icon:"🚌", title:"출발"},
    {period:"오후", icon:"🏰", title:"몽생미셸 + 에트르타 + 옹플뢰르",
     desc:"제이스마트 3코스 · 수도원 내부 동행",
     sub:["중·석식은 현장에서 (별도 비용)"]},
    {period:"저녁", time:"익일 01:30 전후", icon:"🌙", title:"파리 도착"}
  ],
  prep:["간식","보조배터리","목베개","따뜻한 겉옷"],
  meals:[]
},
/* ═══════════════ DAY 4 ═══════════════ */
{
  n:4, date:"9/17", dow:"목", country:"fr", city:"파리", stay:"시타딘 생제르망",
  title:"르봉마르셰 · 루브르 · 오페라", headline:"🎭 쇼핑에서 오페라까지, 한 방향으로",
  tags:["예약 있음","공연"],
  timeline:[
    {period:"오전", time:"10:00", icon:"🛍️", title:"르봉마르셰 백화점 쇼핑", desc:"10시 오픈"},
    {period:"오전", icon:"🧀", title:"La Grande Épicerie (식품관)",
     desc:"피크닉 음식 구매 + 기념품 쇼핑 — 아래 기념품 리스트 참고"},
    {period:"오전", icon:"🧳", title:"짐이 많으면 숙소 들르기",
     sub:["쇼핑백 보관","튈르리 정원 이동 — 메트로 15분 / 도보 22분"],
     desc:"짐이 많지 않으면 바로 튈르리로"},
    {period:"오전", icon:"🧺", title:"튈르리 정원 피크닉 (점심)"},
    {period:"오후", time:"13:30", icon:"📍", title:"Le Café Marly 앞 미팅", key:true,
     sub:["루브르 유리 피라미드 근처","카페 마를리 테라스와 Passage Richelieu 사이 기둥 앞"]},
    {period:"오후", icon:"🖼️", title:"루브르 박물관 가이드 관람"},
    {period:"오후", icon:"🌳", title:"못 즐긴 튈르리 정원 더 즐기기"},
    {period:"오후", icon:"🚶", title:"오페라 가르니에 이동 + 주변 산책", desc:"메트로 13분 / 도보 18분"},
    {period:"저녁", time:"18:30", icon:"🏛️", title:"오페라 내부 관람",
     sub:["Grand Escalier (대계단)","Grand Foyer","샤갈 천장화"]},
    {period:"저녁", time:"19:30", icon:"🎭", title:"오페라 공연 시작", key:true,
     desc:"인터미션에 내부 재관람 가능"},
    {period:"저녁", time:"22:45~23:15", icon:"🏨", title:"숙소 복귀", desc:"메트로 20분 / 택시 13분"}
  ],
  souvenirGroups:[
    {g:"La Grande Épicerie 식품관", items:[
      "본마망 (Bonne Maman) 쿠키",
      "트러플 오일 — Artisan de la Truffe",
      "밤잼 — 클레망 포지에 (Clément Faugier)",
      "라메르 (La Mère) 과자"
    ]}
  ],
  meals:[{slot:"오페라 가르니에 근처 저녁식사 (선택)", note:"공연 전 여유롭게 식사", picks:[
    {n:"Hakata Choten", u:"https://maps.app.goo.gl/SyptyKMqme5UocNXA", d:"🍜 라멘집"},
    {n:"우동·소바 맛집", u:"https://maps.app.goo.gl/eg3p8CYPc143z6udA", d:"🍜 우동소바"},
    {n:"Les Bacchantes", u:"https://maps.app.goo.gl/9sh8s1ASSKRtwMXA9", d:"현지인 맛집 · 예약하고 가기"},
    {n:"(저장해둔 곳)", u:"https://maps.app.goo.gl/jU4D4kcQZZKfC7oy8", d:"지도에 저장해두신 오페라 근처 식당"},
    {n:"Café de la Paix", u:"https://maps.app.goo.gl/dYf2rjJShBtVQ71PA", d:"오페라 광장 바로 앞 · 클래식 브라스리, 공연 전 분위기 최고",
     sub:["테라스 좌석 예약 가능 → cafedelapaix.fr","가격대가 있는 편","예약금 120유로 선결제 (노쇼 방지용)"]},
    {n:"La Petite Bleue", q:"La Petite Bleue Paris", d:"🥐 브런치 스타일 카페, 가볍게"}
  ]}]
},
/* ═══════════════ DAY 5 ═══════════════ */
{
  n:5, date:"9/18", dow:"금", country:"fr", city:"파리", stay:"풀만 투르 에펠",
  title:"웨딩스냅 · 마레 · 에펠탑", headline:"📸 파리의 마지막 날, 에펠탑 아래에서",
  tags:["스냅 촬영","숙소 이동","일몰 19:56"],
  timeline:[
    {period:"오전", icon:"🧳", title:"기상 · 체크아웃 준비 · 짐 보관", desc:"캐리어는 시타딘에 보관"},
    {period:"오전", time:"09:00~11:00", icon:"📸", title:"웨딩스냅 촬영", key:true,
     desc:"에펠탑 주변 중심 — Pont de Bir-Hakeim · 트로카데로 일대"},
    {period:"오전", time:"11:00~12:00", icon:"☕", title:"에펠탑 근처 카페 휴식", desc:"스냅 후 쉬면서 정리 — 아래 카페 목록 참고"},
    {period:"오후", time:"12:00~12:50", icon:"🚇", title:"마레 이동", desc:"메트로 40~50분"},
    {period:"오후", time:"12:50~16:30", icon:"🛍️", title:"마레지구 구경 + 쇼핑",
     sub:["Merci · Rue des Francs-Bourgeois 중심 (편집샵/카페/쇼핑)","셰익스피어 서점","시테섬 산책"]},
    {period:"오후", time:"16:00~17:30", icon:"🏨", title:"시타딘 → 풀만 이동 & 체크인",
     desc:"캐리어 찾아서 먼저 옮겨두면 저녁이 편해요", key:true},
    {period:"저녁", time:"19:30~21:00", icon:"🧺", title:"마르스광장 피크닉", key:true,
     desc:"일몰 19:56 + 블루아워"},
    {period:"저녁", time:"21:00~21:10", icon:"✨", title:"에펠탑 스파클링"},
    {period:"저녁", icon:"🎷", title:"재즈바 Le Caveau de la Huchette (선택)", soft:true}
  ],
  meals:[
    {slot:"에펠탑 근처 카페", picks:[
      {n:"Café du Trocadéro", u:"https://maps.app.goo.gl/ofvequvnqhXMm3tT8", d:"테라스에서 에펠탑이 정면으로 보이는 클래식 스팟 · 피스타치오 라바케이크·에그 디시 평이 좋음 · 아침~밤늦게(02시)까지"},
      {n:"Constant", u:"https://maps.app.goo.gl/rpJMk2kn9Z9iu8td6", d:"에펠탑 근처"},
      {n:"Noir", u:"https://maps.app.goo.gl/fso347DzrojPkN59A", d:"파리 체인 카페 · 호지차라떼도 맛있음"},
      {n:"Carette", u:"https://maps.app.goo.gl/GepwGaBYzomCR6EM8", d:"트로카데로 티살롱 · 에펠탑 뷰"}
    ]},
    {slot:"점심식사 (선택)", picks:[
      {n:"Le Café de Mars", u:"https://maps.app.goo.gl/S4Z1iiHQNJCEFsxY6", d:"에펠탑 근처 저렴한 식당 · 로컬 감성 비스트로 카페, 조용한 골목이라 여유롭게 앉아있기 좋음"},
      {n:"Les Cocottes", q:"Les Cocottes Saint-Dominique Paris", d:"Rue Saint-Dominique · 에펠탑 도보 10분 · 캐주얼 비스트로"},
      {n:"L'As du Fallafel", q:"L'As du Fallafel Paris", d:"🥙 Rue des Rosiers (마레지구) · 맛+로컬감성 최상급 · ⚠️ 금요일은 11:00~15:30만 영업"}
    ]},
    {slot:"저녁식사 (선택)", picks:[
      {n:"Girafe ⭐", q:"Girafe Restaurant Paris", d:"트로카데로 · 에펠탑 정면 뷰 파인다이닝 · 에펠탑 뷰 원하면 고려, 2주 전 예약 오픈"},
      {n:"Francette", q:"Francette Paris", d:"에펠탑 옆 센강 보트 레스토랑"}
    ]}
  ]
},
/* ═══════════════ DAY 6 ═══════════════ */
{
  n:6, date:"9/19", dow:"토", country:"ch", city:"그린델발트", stay:"선스타 호텔",
  title:"파리 → 그린델발트", headline:"🚆 기차 4번 갈아타고 알프스로",
  tags:["이동일","환승 주의"],
  tips:[{icon:"🧳", title:"짐 관리 주의", lines:[
    "슈피츠 환승이 <b>3분</b>밖에 안 돼서 가장 위험한 구간이에요. 내리기 전에 미리 짐을 다 챙겨서 문 앞에 대기하는 게 좋아요.",
    "스위스 기차는 짐칸이 넓지 않아서 짐을 눈에 안 보이는 곳에 두지 말고, 가능하면 좌석 근처나 시야 안에 두세요."
  ]}],
  timeline:[
    {period:"오전", icon:"🧳", title:"체크아웃 → 파리 Est역 이동"},
    {period:"오전", time:"10:43~12:28", icon:"🚆", title:"파리 Est → 스트라스부르", desc:"Omio"},
    {period:"오후", time:"12:51~14:08", icon:"🚆", title:"스트라스부르 → 바젤 SBB", desc:"Omio"},
    {period:"오후", time:"14:30~16:03", icon:"🚆", title:"바젤 → 슈피츠", desc:"SBB Saver Day Pass", key:true},
    {period:"오후", time:"16:06~16:26", icon:"🚆", title:"슈피츠 → 인터라켄 Ost → 그린델발트",
     desc:"⚠️ 슈피츠 환승 3분 · 놓치면 30분 뒤 차"},
    {period:"저녁", icon:"🎫", title:"융프라우 VIP 패스 준비", key:true,
     sub:["미리 인쇄해가고 사전 구매","패스 시작일은 <b>다음 날</b>로 말하기","다음날 융프라우 기차 좌석 예약하기 (VIP 패스 왕복 1회 무료)"],
     link:{u:"https://www.jungfrau.co.kr/jungfrau/jung_view.asp?dsIdx=2230&dsType=MT&dsWriteDate=2025-7-6", label:"좌석 예약 방법 보기"}},
    {period:"저녁", icon:"🏨", title:"선스타 호텔 체크인"}
  ],
  meals:[{slot:"저녁식사 (선택)", picks:[
    {n:"Stallbeizli Heubode", u:"https://maps.app.goo.gl/VoJW8TQg8kttmWdN8", d:"마을 전망 보며 먹는 농가 퐁뒤 · ⚠️ 월·화 휴무 · 예약 권장"},
    {n:"coop 장보기", q:"Coop Grindelwald", d:"🛒 숙소에서 간단히 해먹기"}
  ]}]
},
/* ═══════════════ DAY 7 ═══════════════ */
{
  n:7, date:"9/20", dow:"일", country:"ch", city:"그린델발트", stay:"글레쳐블리크",
  title:"융프라우요흐", headline:"🏔️ 유럽의 지붕, 3,454m",
  tags:["좌석예약 필수","플랜 A/B"],
  tips:[
    {icon:"🎫", title:"융프라우 좌석 예약", lines:[
      "9월 융프라우 철도는 좌석 예약이 <b>의무</b>예요. <b>아이거글렛처 ↔ 융프라우요흐</b> 구간만 전날 미리 예약하면 됩니다.",
      "타고자 하는 시간에 맞춰 <b>전날 그린델발트 역</b>에서 시간 예약하세요.",
      "기차는 출발 <b>10분 전까지</b> 입장.",
      "그린델발트 → 융프라우요흐 약 45~50분 소요."
    ]},
    {icon:"🌤️", title:"날씨 확인", lines:[
      "가기 전 <b>MeteoSwiss</b> 앱을 받아 Jungfraujoch를 추가해두고, 갈 수 있는 날씨인지 확인하세요."
    ]}
  ],
  plans:[
    {label:"🪂 안 1 — 인터라켄 패러글라이딩을 타는 경우",
     items:[
      {time:"오전", t:"선스타 조식"},
      {time:"", t:"아이거 익스프레스 첫 차 → 융프라우요흐 도착 (미리 좌석 예약)"},
      {time:"", t:"융프라우요흐 관람 (약 2시간) — <b>컵라면 무료</b>로 먹기"},
      {time:"14:00", t:"그린델발트 → 인터라켄 동역 이동"},
      {time:"15:30", t:"Big Blue 패러글라이딩 🪂", link:"https://experiences.myrealtrip.com/products/3508832"},
      {time:"저녁", t:"인터라켄 산책 → 그린델발트 복귀, <b>글레쳐블리크 체크인</b>"}
     ]},
    {label:"🥾 안 2 — 그린델발트(피르스트) 패러글라이딩을 타는 경우",
     note:"이 경우 9/20엔 아이거워크로 고산 산책을 완성하고, 패러글라이딩은 9/21로",
     items:[
      {time:"오전", t:"선스타 호텔 조식"},
      {time:"", t:"아이거 익스프레스 → 융프라우요흐 관람 (약 2시간~2시간 30분) · 컵라면 무료"},
      {time:"", t:"융프라우 보고 내려오면서 <b>아이거글렛처</b>에서 하차"},
      {time:"오후", t:"37번 트레킹 아이거워크 (아이거글렛처 → 클라이네 샤이덱, 약 1시간)"},
      {time:"", t:"이 구간은 좌석 예약 불필요"},
      {time:"", t:"클라이네 샤이덱에서 그린델발트 복귀 · 숙소 이동"},
      {time:"", t:"시간 남으면 인터라켄 다녀오는 것도 추천"}
     ]},
    {label:"☔ 선택 2 — 산악 날씨가 좋지 않은 경우",
     items:[{time:"", t:"융프라우요흐 + 피르스트를 9/20 하루에 함께 소화"}]}
  ],
  meals:[{slot:"인터라켄 저녁식사 (선택 · 안 1인 경우)", picks:[
    {n:"아레식당", u:"https://maps.app.goo.gl/4x472aKPr32vsbrm8", d:"인터라켄 한식당 맛집"},
    {n:"Hüsi Bierhaus", u:"https://maps.app.goo.gl/nXT2YCys7FpvDrNC9", d:"한국인들에게 유명한 펍 · 폭립과 스위스식 돈까스인 슈니첼"},
    {n:"Little Thai", u:"https://maps.app.goo.gl/U3ugwtSHL5Bx8EQw8", d:"태국음식점 맛집"},
    {n:"Asllani's Corner", u:"https://maps.app.goo.gl/T6KGHxJGGgaDkKU28", d:"수제버거 맛집"},
    {n:"Interlaken Pizza", u:"https://maps.app.goo.gl/DTeoRQBdjhLPwLvt7", d:"피자, 케밥 판매"}
  ]}]
},
/* ═══════════════ DAY 8 ═══════════════ */
{
  n:8, date:"9/21", dow:"월", country:"ch", city:"그린델발트", stay:"글레쳐블리크",
  title:"피르스트 액티비티", headline:"🎢 절벽길 걷고, 카트 타고, 하늘 날고",
  tags:["오픈런","플랜 A/B"],
  timeline:[
    {period:"오전", time:"07:40", icon:"🚡", title:"피르스트 곤돌라역 오픈런", key:true, desc:"08:00 첫 곤돌라"},
    {period:"오전", icon:"🥾", title:"클리프워크 → 액티비티",
     desc:"플라이어 · 글라이더 · 마운틴카트 중 선택 (아래 액티비티 표 참고)"},
    {period:"오후", icon:"🥪", title:"점심식사", desc:"coop에서 미리 장 봐가기"}
  ],
  plans:[
    {label:"🥾 안 1 — 바흐알프제 호수 트레킹", note:"어제 인터라켄에서 패러글라이딩을 이미 탄 경우",
     items:[{time:"오후", t:"바흐알프제 호수 왕복 (약 2시간)"}]},
    {label:"🪂 안 2 — 그린델발트 패러글라이딩",
     items:[
      {time:"13:00 또는 14:30 전후", t:"First Panoramic 패러글라이딩 🪂", link:"https://www.paragliding-jungfrau.ch/wp/first-panoramic/?lang=ko"},
      {time:"", t:"WhatsApp 예약 가능 · 현지에서도 예약 가능"},
      {time:"", t:"시간 예약 문의해두기"}
     ]},
    {label:"☔ 선택 2 — 9/21 산악 날씨가 좋지 않은 경우", note:"라우터브루넨 폭포 뷰포인트 산책",
     items:[
      {time:"오전", t:"그린델발트 → 라우터브루넨 이동 <i>(비 오는 경우 폭포 수량이 많아져 오히려 장관)</i>"},
      {time:"오전~점심", t:"라우터브루넨 마을 산책 + 폭포 뷰포인트 · 동선 여유롭게 (카페/산책 위주) · 우산·레인자켓 권장"},
      {time:"오후", t:"그린델발트 복귀 또는 (시간/체력 여유 시) 인터라켄 짧은 산책"},
      {time:"저녁", t:"그린델발트 복귀 — 다음날 긴 일정 대비 컨디션 관리"}
     ]}
  ],
  nightBox:{icon:"♨️", title:"저녁 후 벨베데레 수영장 (선택)", lines:[
    "<b>20시 이후 CHF 22</b> — 수건·차·물·과일 포함",
    "야외에 36℃ 소금물 자쿠지, 실내 수영장은 29℃",
    "사우나까지 이용 시 20시 이후 <b>CHF 32</b> (수영장·자쿠지 포함)",
    "외부인 입장 수가 제한되어 있으니 당일 또는 미리 호텔에 이용 가능 여부 확인"
  ]},
  meals:[{slot:"저녁식사 (선택)", picks:[
    {n:"coop 장보기", q:"Coop Grindelwald", d:"🛒 숙소에서 간단히 해먹기"},
    {n:"Burger Station", u:"https://maps.app.goo.gl/zHxJnkg7aU6VMWGG8", d:"버거 맛집 (푸드트럭) · 저렴한 가격대"}
  ]}]
},
/* ═══════════════ DAY 9 ═══════════════ */
{
  n:9, date:"9/22", dow:"화", country:"ch", city:"그린델발트", stay:"글레쳐블리크",
  title:"외시넨 호수 + 블라우제", headline:"💙 알프스가 통째로 비치는 호수",
  tags:["종일 이동","세이버 데이 패스"],
  tips:[{icon:"🚆", title:"기차 시간 확인", lines:[
    "SBB 앱에서 <code>Grindelwald → Kandersteg</code> 경로를 검색해서 나오는 시간에 맞춰 타세요."
  ]}],
  guides:[{title:"외시넨 호수 가는 법", steps:[
    {label:"STEP 1 · 그린델발트 → 칸더슈테크", lines:["<b>07:15~07:30 전후</b> 🚆 그린델발트 출발 (세이버 데이 패스)","🚆 인터라켄 동역 → 🚆 슈피츠 → 🚆 칸더슈테크"]},
    {label:"STEP 2 · 칸더슈테크역 → 곤돌라 하부역", lines:["🚶 도보 약 10~15분","Kandersteg Bahnhof → Kandersteg Talstation Oeschinen"]},
    {label:"STEP 3 · 곤돌라 하부역 → 상부역", lines:["🚡 Kandersteg Talstation Oeschinen → Oeschinen Bergstation","<b>왕복 CHF 36 별도 구매 필요</b>"]},
    {label:"STEP 4 · 상부역 → 외시넨 호수", lines:["🚶 도보 약 30분"]}
  ]},
  {title:"블라우제 자연공원 가는 법", steps:[
    {label:"STEP 1 · 호수 → 칸더슈테크역", lines:["외시넨 호수 → 🚶 도보 약 30분 → 곤돌라 상부역","🚡 곤돌라 → 하부역 → 🚆 칸더슈테크역"]},
    {label:"STEP 2 · 버스 환승", lines:["칸더슈테크역에서 🚌 버스 → Blausee BE 정류장 하차","<b>입장료 CHF 11</b>"]},
    {label:"STEP 3 · 그린델발트 복귀", lines:["Blausee BE → 🚌 Frutigen Bahnhof → 🚆 Spiez → 🚆 Interlaken Ost → 🚆 Grindelwald","복귀 중 도시 구경 자유롭게"]}
  ]}],
  timeline:[
    {period:"오전~점심", icon:"💙", title:"외시넨 호수", key:true, desc:"산책 + 사진 + 여유 + 점심"},
    {period:"오후", icon:"🌲", title:"블라우제 자연공원", desc:"약 1~1.5시간 · 입장료 CHF 11"},
    {period:"저녁", time:"18:00 전후", icon:"🏨", title:"그린델발트 복귀", desc:"저녁은 그린델발트에서"}
  ],
  meals:[
    {slot:"점심 (호숫가, 선택)", picks:[
      {n:"Restaurant by Berghotel Oeschinensee", q:"Berghotel Oeschinensee restaurant", d:"호숫가 바로 앞 · 스위스 전통음식·파스타·버거·치즈플레이트 · 뷰 최고"},
      {n:"Restaurant Bergstübli", q:"Bergstubli Oeschinen Kandersteg", d:"곤돌라 상부역 근처 · 핫도그·수프·애플슈트루델, 가볍게"}
    ]},
    {slot:"저녁식사 (선택)", note:"※ Stallbeizli Heubode는 화요일 휴무", picks:[
      {n:"coop 장보기", q:"Coop Grindelwald", d:"🛒 숙소에서 간단히 해먹기"},
      {n:"Burger Station", u:"https://maps.app.goo.gl/zHxJnkg7aU6VMWGG8", d:"버거 맛집 (푸드트럭) · 저렴한 가격대"}
    ]}
  ]
},
/* ═══════════════ DAY 10 ═══════════════ */
{
  n:10, date:"9/23", dow:"수", country:"ch", city:"그린델발트", stay:"글레쳐블리크",
  title:"옵션 데이", headline:"🎲 컨디션·날씨 보고 아침에 결정하는 날",
  tags:["3가지 선택","세이버 데이 패스"],
  guides:[
    {title:"옵션 1 · 체르마트 당일치기 (마테호른)", badge:"이동 왕복 5~6시간",
     steps:[
      {label:"STEP 1 · 그린델발트 → 체르마트", lines:[
        "<b>06:00~06:30 전후</b> 🚆 그린델발트 출발 (세이버 데이 패스)",
        "Grindelwald → 🚆 Interlaken Ost → 🚆 Spiez → 🚆 Visp → 🚆 Zermatt",
        "약 2시간 40분~3시간 예상",
        "체르마트까지의 일반 열차 구간은 세이버 데이 패스로 별도 승차권 없이 이용"]},
      {label:"STEP 2 · 체르마트역 → 고르너그라트 철도", lines:[
        "🚶 체르마트역 맞은편 고르너그라트 철도역으로 이동",
        "🎫 <b>Zermatt ↔ Gornergrat 왕복권 별도 구매</b> — ⚠️ 세이버 데이 패스 미포함",
        "🚞 Zermatt → Gornergrat 약 33분",
        "로텐보덴(Rotenboden) 중간 하차 가능 → 리펠제 방문"],
       link:{u:"https://www.gornergrat.ch/en/products/ticket", label:"고르너그라트 티켓"}},
      {label:"STEP 3 · 고르너그라트 전망대", lines:[
        "🚶 마테호른·몬테로사 등 알프스 파노라마 감상",
        "사진 + 전망 감상 약 1시간 정도"]},
      {label:"STEP 4 · 리펠제 호수", lines:[
        "고르너그라트 → 🚞 로텐보덴 1정거장 하산",
        "로텐보덴역 → 🚶 리펠제(Riffelsee) 호수까지 약 10분",
        "날씨가 맑고 바람이 적으면 <b>마테호른 반영 사진</b> 포인트",
        "호수 산책 후 로텐보덴역 복귀 → 🚞 체르마트 하산"]},
      {label:"STEP 5 · 점심 & 마을 산책", lines:[
        "체르마트 마을에서 점심 (산 위에서 오래 먹기보다 내려와서 먹는 편 추천)",
        "반호프슈트라세 · 힌터도르프의 오래된 목조가옥 · 마테호른 뷰 포인트 · 카페·기념품 쇼핑",
        "체르마트 자체는 1.5~2시간 정도 여유 있게"]},
      {label:"STEP 6 · 그린델발트 복귀", lines:[
        "<b>16:00~16:30 전후</b> 체르마트 출발 추천",
        "Zermatt → 🚆 Visp → 🚆 Spiez → 🚆 Interlaken Ost → 🚆 Grindelwald",
        "저녁 19시대 전후 그린델발트 도착 예상",
        "⚠️ 세 옵션 중 이동시간이 압도적으로 길어요. 전날 저녁 마테호른 날씨 확인 후 결정 추천"]}
     ]},
    {title:"옵션 2 · 슈피츠 + 튠호수 유람선 + 툰 구시가지", badge:"여유로운 호수 코스",
     steps:[
      {label:"STEP 1 · 그린델발트 → 슈피츠", lines:[
        "<b>09:00 전후</b> 🚆 그린델발트 출발 (세이버 데이 패스)",
        "Grindelwald → 🚆 Interlaken Ost → 🚆 Spiez",
        "약 1시간 10~20분 예상"]},
      {label:"STEP 2 · 슈피츠역 → 성/호숫가", lines:[
        "Spiez Bahnhof → 🚶 슈피츠 호숫가 · 도보 약 15~20분",
        "역에서 내려오면서 툰호수 전망 감상"]},
      {label:"STEP 3 · 슈피츠 산책 (약 2시간)", lines:[
        "🏰 슈피츠 성 주변","🍇 포도밭","💙 툰호수 산책로","선착장 주변","점심은 호숫가에서"]},
      {label:"STEP 4 · 튠호수 유람선", lines:[
        "🚶 슈피츠 성/호숫가 → Spiez Schiffstation",
        "🚢 Spiez → Thun · 약 45~50분",
        "2026년 9/23은 툰호수 <b>여름 운항기간</b>에 해당",
        "시간표 기준 <code>15:34 Spiez → 16:20 Thun</code> 편이 일정 짜기 편함",
        "세이버 데이 패스 적용되는 BLS 정기 유람선이라 별도 승선권 불필요"]},
      {label:"STEP 5 · 툰 구시가지 & 복귀", lines:[
        "🚶 선착장 → 툰 구시가지 · 아레강 주변 → 구시가지 → 툰 성 주변 (약 1.5~2시간)",
        "시간 남으면 강변 카페",
        "<b>18:00 전후</b> 툰 출발 → Thun → 🚆 Interlaken Ost → 🚆 Grindelwald",
        "19:30~20:00 전후 그린델발트 복귀 예상"]}
     ]},
    {title:"옵션 3 · 베른", badge:"비 와도 괜찮은 코스",
     steps:[
      {label:"STEP 1 · 그린델발트 → 베른", lines:[
        "<b>09:00 전후</b> 🚆 그린델발트 출발 (세이버 데이 패스)",
        "Grindelwald → 🚆 Interlaken Ost → 🚆 Bern · 연결편에 따라 약 1시간 30~40분",
        "베른역을 나오면 <b>바로 구시가지</b>라 별도 교통편이 거의 필요 없음"]},
      {label:"STEP 2 · 오전~점심 · 구시가지", lines:[
        "🚶 베른역 → 슈피탈가세 → 마르크트가세 → 치트글로게 방향으로 천천히 산책",
        "🕰️ 치트글로게 시계탑",
        "⛲ 베른의 분수와 아케이드 구경",
        "🏠 아인슈타인 하우스 — 내부 전시까지 보면 약 30~45분",
        "베른은 명소를 하나씩 찍기보다 <b>구시가지 자체를 걸어보는</b> 방식 추천"]},
      {label:"STEP 3 · 점심", lines:[
        "베른 구시가지, 아케이드 안쪽 레스토랑이나 카페에서 여유롭게",
        "비가 와도 긴 아케이드가 있어서 세 옵션 중 <b>날씨 영향을 가장 적게</b> 받아요"]},
      {label:"STEP 4 · 오후", lines:[
        "🚶 베른 대성당 — 주변에서 아레강 방향 전망",
        "🚶 니데크 다리 + 곰공원 — 아레강과 구시가지 풍경",
        "🚶 장미공원 — 언덕 위에서 베른 구시가지 전체 조망, 사진 찍고 카페에서 쉬기",
        "구시가지로 내려와 쇼핑·카페 · 시간 남으면 기념품 구경"]},
      {label:"STEP 5 · 복귀", lines:["Bern → 🚆 Interlaken Ost → 🚆 Grindelwald"]}
     ]}
  ],
  meals:[{slot:"저녁식사", picks:[
    {n:"Stallbeizli Heubode", u:"https://maps.app.goo.gl/VoJW8TQg8kttmWdN8", d:"수요일 ~22시 영업 · 스위스 마지막 밤 퐁뒤로 마무리 · 예약 권장"}
  ]}]
},
];
