const COUNTRIES = {
  fr:{
    flag:"🇫🇷", name:"프랑스 · 파리", short:"파리", nights:"5박", dates:"9/14 – 9/19",
    intro:"미술관·피크닉·웨딩스냅이 이어지는 5일. 도보와 메트로 위주로 여유 있게 움직여요.",
    cards:[
      {icon:"📱", title:"교통 앱", list:[
        "<b>Bonjour RATP</b> · <b>IDF Mobilités</b> — 지하철은 구글맵 대신 이 앱들에서 확인하는 게 업데이트가 더 빨라요.",
        "나비고 앱에서 교통카드 등록해서 태깅하는 방법도 있지만, <b>안드로이드는 태그가 안 될 수 있어</b> 실물권을 추천드려요."
      ], links:[
        {u:"https://m.blog.naver.com/ducky777/224305132661", label:"나비고 앱 회원가입 방법"},
        {u:"https://blog.naver.com/ducky777/224314304381", label:"주간권 구매·등록 방법"}
      ]},
      {icon:"🎫", title:"나비고 주간권 vs 일회권", rows:[
        ["나비고 주간권","1인 <b>32.4유로</b> (발급 비용 5유로 별도) · 공항 포함 가격<br><span class='sm'>증명사진 필요 · 공항에서는 현재 주간권 구매가 어려움</span>","걷기보다 교통수단을 더 이용한다면"],
        ["나비고 이지 (1회권)","<b>2유로</b> (카드 발급) + 교통편마다 구매","공항 택시 + 숙소 이동 택시 + 걷기 많다면"]
      ]},
      {icon:"✈️", title:"공항 → 시내", list:[
        "<b>⭐ 볼트(Bolt) 추천</b> — 한국에서 미리 카드 등록해가기<br>· 파리 공항에서 <b>VTC</b>라고 적힌 검정 바닥 따라가기, 1gate 10d에서 탑승<br>· 공항에서 프로모션 코드 <b>BONVOYAGE</b> 입력하면 70% 할인코드 생성 → 그 후에 볼트 부르기",
        "<b>택시 (정찰제)</b> — 좌안 65유로 / 우안 56유로 · <b>시타딘은 좌안</b>",
        "<b>RER B 공항철도</b> (1인 14유로) — Saint-Michel Notre-Dame역 하차 후 도보 5분이면 시타딘 생제르망<br>· RER B 승강장 무인기계에서 나비고 이지 발급(2유로) + 공항전용 1회권(14유로) 추가 발급"
      ]}
    ]
  },
  ch:{
    flag:"🇨🇭", name:"스위스 · 그린델발트", short:"그린델발트", nights:"5박", dates:"9/19 – 9/24",
    intro:"산악 날씨가 매일을 좌우해요. 플랜 A/B를 늘 준비하고 아침에 결정하는 게 좋아요.",
    cards:[
      {icon:"🎫", title:"패스 정리", rows:[
        ["세이버 데이 패스","지역 내 기차·버스·유람선 대부분 커버","9/22 외시넨 · 9/23 옵션데이"],
        ["융프라우 VIP 패스","미리 인쇄+사전 구매 · 시작일은 <b>도착 다음 날</b>로","융프라우 왕복 1회 무료"],
        ["별도 구매 필요","외시넨 곤돌라 왕복 <b>CHF 36</b><br>고르너그라트 왕복권 (체르마트 옵션)<br>블라우제 입장료 <b>CHF 11</b>",""]
      ]},
      {icon:"⚠️", title:"융프라우 좌석 예약", list:[
        "9월 융프라우 철도는 좌석 예약이 <b>의무</b>입니다.",
        "<b>아이거글렛처 ↔ 융프라우요흐</b> 구간만 전날 미리 사전예약하면 돼요.",
        "타고자 하는 시간에 맞춰 <b>전날 그린델발트 역</b>에서 시간 예약.",
        "기차는 출발 <b>10분 전까지</b> 입장.",
        "그린델발트 → 융프라우요흐 약 45~50분."
      ], links:[{u:"https://www.jungfrau.co.kr/jungfrau/jung_view.asp?dsIdx=2230&dsType=MT&dsWriteDate=2025-7-6", label:"좌석 예약 방법 안내"}]},
      {icon:"🌤️", title:"날씨 판단", list:[
        "<b>MeteoSwiss</b> 앱을 받아 <b>Jungfraujoch</b> 지점을 추가해두고 전날 밤 확인하세요.",
        "산 정상이 흐리면 저지대 플랜(라우터브루넨 · 베른)으로 전환."
      ]},
      {icon:"🧳", title:"이동 주의", list:[
        "슈피츠 환승은 <b>3분</b>뿐 — 내리기 전 미리 짐 챙겨서 문 앞 대기, 놓치면 30분 뒤 차.",
        "스위스 기차는 짐칸이 좁아서 짐을 시야 안에 두세요."
      ]}
    ],
    tables:[
      {title:"🪂 패러글라이딩 비교 — 인터라켄 뷰 vs 그린델발트 피르스트 뷰",
       head:["항목","인터라켄 Big Blue","그린델발트 피르스트 파노라믹"],
       rows:[
        ["업체","Paragliding Interlaken","Paragliding Jungfrau"],
        ["이륙","베아텐베르크","피르스트"],
        ["착륙","인터라켄","그린델발트"],
        ["가격","<b>300,458원</b> (마이리얼트립)","CHF 220"],
        ["사진·영상","CHF 40 별도","CHF 40 별도"],
        ["실제 비행","10~20분","15~20분"],
        ["전체 소요","약 1시간 30분","약 1시간 30분"],
        ["풍경","호수(툰/브리엔츠) + 알프스","아이거 북벽 + 그린델발트 계곡"],
        ["이동","그린델발트→인터라켄 35~40분 필요","피르스트 일정에서 바로 연결"],
        ["일정상 추천","9/20 <b>15:30</b>","9/21 <b>13:00 전후</b>"]
       ],
       links:[
        {u:"https://experiences.myrealtrip.com/products/3508832", label:"인터라켄 Big Blue 예약"},
        {u:"https://www.paragliding-jungfrau.ch/wp/first-panoramic/?lang=ko", label:"피르스트 파노라믹 예약"}
       ]},
      {title:"🥾 트레킹 비교 — 아이거워크 vs 바흐알프제 호수",
       note:"아이거워크는 그린델발트 패러글라이딩(안2) 선택 시 / 바흐알프제는 인터라켄 패러글라이딩(안1) 선택 시",
       head:["항목","융프라우 아이거워크","바흐알프제 호수 왕복"],
       rows:[
        ["위치","아이거글렛처 ↔ 클라이네 샤이덱","피르스트 ↔ 바흐알프제"],
        ["소요시간","약 1시간","약 1시간 50분"],
        ["거리","약 2.5km","왕복 약 5~6km"],
        ["난이도","쉬움","쉬움~보통"],
        ["풍경 핵심","아이거 북벽","호수 + 산 반영"],
        ["느낌","고산 산책","가벼운 하이킹"],
        ["동선","융프라우요흐와 궁합 최고","피르스트와 궁합 최고"],
        ["체력 부담","낮음","조금 더 있음"]
       ]},
      {title:"🎢 피르스트 액티비티",
       head:["액티비티","구간","소요","느낌","가격"],
       rows:[
        ["피르스트 플라이어","피르스트 → 슈렉펠트","약 15분","집라인처럼 앉아서 날아 내려감, 최고 약 84km/h","CHF 35"],
        ["피르스트 글라이더","슈렉펠트 ↔ 피르스트","약 15분","독수리 모양 장치에 엎드려 매달려 비행","CHF 35"],
        ["마운틴카트","슈렉펠트 → 보르트","약 30분","알프스 비포장길을 카트로 내려감","CHF 25"],
        ["트로티바이크","보르트 → 그린델발트","약 30분","자전거+킥보드 형태로 산길 하강","CHF 25"]
       ]}
    ]
  },
  it:{
    flag:"🇮🇹", name:"이탈리아", short:"이탈리아", nights:"7박", dates:"9/24 – 10/1",
    intro:"나폴리 → 소렌토 → 카프리 → 로마. 매일 이동수단이 바뀌는 7일이에요.",
    cards:[
      {icon:"🚗", title:"렌트카 — 픽업할 때", list:[
        "계약서 / 보험 / 연료정책 확인",
        "외관 · 휠 · 유리 <b>영상 촬영</b> (분쟁 대비)",
        "<b>홀짝제</b> 대비 홀수 번호판 요청 — 다만 지역·날짜마다 규정이 달라서, <b>9/26 기준으로 어떤 번호판이 안전한지 직원에게 직접 확인</b>하세요.",
        "일정: 나폴리 중앙역 픽업 (9/25 13:00) → 로마 테르미니 반납 (9/28 17:00)"
      ]},
      {icon:"🔑", title:"렌트카 — 반납할 때", list:[
        "차량 전체 외관 영상","휠 / 범퍼 사진","주행거리","연료 게이지","반납 장소 사진",
        "직원 확인 후 <b>반납 확인서 / 이메일</b> 받아두기",
        "로마 진입 시 내비게이션 <b>ZTL 회피</b> 설정 필수",
        "주유 조건이 Full-to-Full이면 로마 외곽에서 마지막 주유"
      ]},
      {icon:"🚦", title:"차량 홀짝제란?", list:[
        "특정 날짜/시간대에 교통량을 줄이기 위해 <b>번호판 끝자리</b>가 홀수(1·3·5·7·9)인지 짝수(0·2·4·6·8)인지에 따라 통행이 제한되는 제도예요.",
        "예시: 짝수날엔 짝수 번호판 이용 금지 / 홀수날엔 홀수 번호판 이용 금지",
        "규정 시간대에 걸리면 <b>단속·과태료</b> 가능 + 일정이 꼬일 수 있어요.",
        "9/26 포지타노·아말피 가는 날이 핵심 — <b>10시 단속 전에 출발</b>하는 게 안전해요."
      ]},
      {icon:"🛡️", title:"안전 — 나폴리", list:[
        "유럽에서도 <b>소매치기·가방 날치기로 유명한 곳</b>, 특히 <b>가리발디 광장 / 중앙역 주변</b>.",
        "가방은 어깨에 걸지 말고 <b>몸 앞쪽으로</b>.",
        "스쿠터 날치기가 흔하니 <b>차도 쪽 팔에 가방을 걸지 않기</b>.",
        "스파카나폴리 골목에서도 크로스백 지퍼를 앞으로 돌려서."
      ]},
      {icon:"🛡️", title:"안전 — 로마", list:[
        "인파 많은 곳(콜로세움/트레비/스페인계단)에서 <b>가방 앞으로</b>, 지퍼 잠그기, 휴대폰 손목 스트랩 추천.",
        "레스토랑/카페에서 <b>의자에 가방 걸어두지 않기</b> (바닥도 X).",
        "이동/쇼핑이 많은 날은 택시/우버로 체력 아끼기.",
        "교통권: 시내 이동이 잦으면 72시간권도 고려 가능. 다만 '도보 + 필요할 때만 메트로/택시'가 보통 가장 편해요."
      ]},
      {icon:"⛴️", title:"페리 & 주차", list:[
        "소렌토 ↔ 카프리 약 25~30분 · 큰 짐은 편도 <b>€5 내외</b> 별도 (NLG 기준)",
        "예약사이트에서 짐 추가가 안 되면 항구에서 별도 짐표 구매",
        "카프리 도착 후 캐리어는 <b>Marina Grande 유료 짐 보관소</b>에 — 보트투어에 큰 짐 반입 불가",
        "소렌토 1박 주차 약 <b>60~75유로</b> · 입구에서 <code>Capri, one night</code> 고지",
        "추천 주차: Garage Marina Piccola (또는 Garage il Faro)"
      ]}
    ]
  }
};

const MAPLIST = {
  fr:"https://maps.app.goo.gl/L9XHQSS3AJovYHU2A",
  ch:"https://maps.app.goo.gl/T7GqtdsApdMzo16Q6",
  it:"https://maps.app.goo.gl/z3cyr8YntSGf6MPk7"
};

const PLACES = {
  fr:[
    {city:"생제르망 · 6구", items:[
      {n:"Brasserie des Prés", q:"Brasserie des Prés Paris", d:"어니언수프·뵈프 부르기뇽 · 자정까지", day:1},
      {n:"카페 두 마고", q:"Les Deux Magots Paris", d:"생제르망 대표 카페", day:1},
      {n:"카페 드 플뢰르", q:"Café de Flore Paris", d:"두 마고 바로 옆", day:1},
      {n:"Maison Mulot", q:"Maison Mulot Paris", d:"피크닉용 키슈·샌드위치·크루아상", day:2}
    ]},
    {city:"마레 · 3·4구", items:[
      {n:"L'As du Fallafel", q:"L'As du Fallafel Paris", d:"팔라펠 · ⚠️ 금요일 11:00~15:30만", day:5},
      {n:"Le Marais Restaurant", q:"Le Marais Restaurant Rue de Turbigo Paris", d:"기념일 서프라이즈 서비스"},
      {n:"Partisan Café Artisanal", q:"Partisan Café Artisanal Paris", d:"스페셜티 커피"},
      {n:"Mao dumpling bar", q:"Mao dumpling bar Paris", d:"중식·딤섬 · 월요일 휴무"}
    ]},
    {city:"몽마르뜨 · 9·18구", items:[
      {n:"Crêperie de Montmartre", q:"Creperie de Montmartre Rue Dancourt Paris", d:"수제 크레페", day:2},
      {n:"Leonie Bakery", q:"Leonie Bakery Paris", d:"아몬드 크루아상·키슈", day:2},
      {n:"Square Jehan Rictus", q:"Square Jehan Rictus Paris", d:"🌿 사랑해벽", day:2}
    ]},
    {city:"에펠탑 · 트로카데로 · 7구", items:[
      {n:"Girafe", q:"Girafe Restaurant Paris", d:"에펠탑 정면 뷰 파인다이닝 · 2주 전 예약", day:5},
      {n:"Café du Trocadéro", u:"https://maps.app.goo.gl/ofvequvnqhXMm3tT8", d:"에펠탑 정면 테라스 · 02시까지", day:5},
      {n:"Carette", u:"https://maps.app.goo.gl/GepwGaBYzomCR6EM8", d:"트로카데로 티살롱 · 에펠탑 뷰", day:5},
      {n:"Constant", u:"https://maps.app.goo.gl/rpJMk2kn9Z9iu8td6", d:"에펠탑 근처", day:5},
      {n:"Noir", u:"https://maps.app.goo.gl/fso347DzrojPkN59A", d:"체인 카페 · 호지차라떼", day:5},
      {n:"Le Café de Mars", u:"https://maps.app.goo.gl/S4Z1iiHQNJCEFsxY6", d:"조용한 골목 로컬 비스트로", day:5},
      {n:"Les Cocottes", q:"Les Cocottes Saint-Dominique Paris", d:"캐주얼 비스트로", day:5},
      {n:"Francette", q:"Francette Paris", d:"센강 보트 레스토랑", day:5},
      {n:"L'Howea", q:"L'Howea Paris", d:"🌿 꽃집 — 에펠탑 뷰 포토스팟"}
    ]},
    {city:"오페라 · 1·2·8·9구", items:[
      {n:"Café de la Paix", u:"https://maps.app.goo.gl/dYf2rjJShBtVQ71PA", d:"오페라 광장 앞 · 예약금 120유로", day:4},
      {n:"Les Bacchantes", u:"https://maps.app.goo.gl/9sh8s1ASSKRtwMXA9", d:"현지인 맛집 · 예약 필수", day:4},
      {n:"Hakata Choten", u:"https://maps.app.goo.gl/SyptyKMqme5UocNXA", d:"라멘", day:4},
      {n:"우동·소바 맛집", u:"https://maps.app.goo.gl/eg3p8CYPc143z6udA", d:"오페라 근처", day:4},
      {n:"(저장해둔 곳)", u:"https://maps.app.goo.gl/jU4D4kcQZZKfC7oy8", d:"오페라 근처", day:4},
      {n:"La Petite Bleue", q:"La Petite Bleue Paris", d:"브런치 카페", day:4},
      {n:"Azur Café", q:"Azur Cafe Paris", d:"브런치 · 샹젤리제 근처"},
      {n:"Dessirier", q:"Dessirier Paris", d:"고급 해산물 · 17구"},
      {n:"BAMBINO", q:"BAMBINO restaurant Paris", d:"와인바 · 11구"}
    ]},
    {city:"바토무슈 · 알마", items:[
      {n:"Les Romantiques", q:"Les Romantiques Place de l'Alma Paris", d:"승선장 앞 · 새벽 2시까지 · 오리콩피", day:2}
    ]}
  ],
  ch:[
    {city:"그린델발트", items:[
      {n:"Stallbeizli Heubode", u:"https://maps.app.goo.gl/VoJW8TQg8kttmWdN8", d:"마을 전망 농가 퐁뒤 · ⚠️ 월·화 휴무", day:6},
      {n:"Burger Station", u:"https://maps.app.goo.gl/zHxJnkg7aU6VMWGG8", d:"푸드트럭 버거 · 저렴", day:8},
      {n:"coop 그린델발트", q:"Coop Grindelwald", d:"🛒 장보기 · 점심 도시락"},
      {n:"Belvedere Hotel 수영장", q:"Belvedere Swiss Quality Hotel Grindelwald", d:"♨️ 20시 이후 CHF 22 (사우나 포함 32)", day:8}
    ]},
    {city:"인터라켄", items:[
      {n:"아레식당", u:"https://maps.app.goo.gl/4x472aKPr32vsbrm8", d:"인터라켄 한식당 맛집", day:7},
      {n:"Hüsi Bierhaus", u:"https://maps.app.goo.gl/nXT2YCys7FpvDrNC9", d:"폭립·슈니첼 · 한국인 유명 펍", day:7},
      {n:"Little Thai", u:"https://maps.app.goo.gl/U3ugwtSHL5Bx8EQw8", d:"태국음식점 맛집", day:7},
      {n:"Asllani's Corner", u:"https://maps.app.goo.gl/T6KGHxJGGgaDkKU28", d:"수제버거 맛집", day:7},
      {n:"Interlaken Pizza", u:"https://maps.app.goo.gl/DTeoRQBdjhLPwLvt7", d:"피자, 케밥 판매", day:7}
    ]},
    {city:"외시넨 · 칸더슈테크", items:[
      {n:"Berghotel Oeschinensee", q:"Berghotel Oeschinensee restaurant", d:"호숫가 바로 앞 · 뷰 최고", day:9},
      {n:"Restaurant Bergstübli", q:"Bergstubli Oeschinen Kandersteg", d:"곤돌라 상부역 근처 · 가볍게", day:9},
      {n:"Chalet Arva", q:"Chalet Arva Oeschinensee", d:"애플슈트루델 · ⚠️ 화요일 휴무"}
    ]}
  ],
  it:[
    {city:"나폴리", items:[
      {n:"L'Antica Pizzeria da Michele", u:"https://maps.app.goo.gl/Mdpor4iHHx7bSDtt9", d:"나폴리 3대 피자 · 10:30 오픈런", day:12},
      {n:"Antica Pizza Fritta da Zia Esterina Sorbillo", u:"https://maps.app.goo.gl/JVJaoujpkWPzSJBq6", d:"튀김피자 · 스파카나폴리", day:12},
      {n:"Chalet Ciro (중앙역)", u:"https://maps.app.goo.gl/NrLT2WjNUV4pp7678", d:"그라파(감자도넛)+커피", day:12},
      {n:"Chalet Ciro 1952 (메르젤리나)", q:"Chalet Ciro 1952 Mergellina Napoli", d:"그라파 본점"},
      {n:"Sfogliatelle Attanasio", u:"https://maps.app.goo.gl/V5jYyhHRyeMPNF13A", d:"나폴리 대표 페이스트리", day:12},
      {n:"O' Sole Mio Pizza & More", q:"O Sole Mio Pizza Piazza Garibaldi Napoli", d:"호텔 도보 2~3분", day:11},
      {n:"10 Diego Vitagliano (Bagnoli)", q:"10 Diego Vitagliano Pizzeria Bagnoli", d:"나폴리 3대 피자"},
      {n:"10 Diego Vitagliano (Santa Lucia)", q:"10 Diego Vitagliano Pizzeria Santa Lucia Napoli", d:"육식맨 추천"},
      {n:"Pizzeria passionamij", q:"Pizzeria passionamij Napoli", d:"현지 피자 맛집"},
      {n:"Il Ruttino", q:"Il Ruttino Napoli", d:"나폴리 피자"},
      {n:"Gran Caffè Gambrinus", q:"Gran Caffe Gambrinus Napoli", d:"헤밍웨이 단골 · 스트라짜빠토"},
      {n:"Pescheria Mattiucci", q:"Pescheria Mattiucci Napoli", d:"해산물"},
      {n:"Mr.Clood Bistrot", q:"Mr Clood Bistrot Napoli", d:"나폴리맛피아 추천 현지맛집"},
      {n:"Ristorante Senti Profumo", q:"Ristorante Senti Profumo Napoli", d:"중식"},
      {n:"Il Gelato Mennella", q:"Il Gelato Mennella Napoli", d:"젤라또"}
    ]},
    {city:"소렌토", items:[
      {n:"Bagni Delfino", u:"https://maps.app.goo.gl/jtfT1tVFETiCBTcy9", d:"Marina Grande · 석양+해산물 · 예약", day:12},
      {n:"Il Gozzo Sorrento", u:"https://maps.app.goo.gl/NKprAmUqWoP4DcWP6", d:"항구 뷰", day:12},
      {n:"Naima Restaurant", u:"https://maps.app.goo.gl/CFACPNW7DbYgwGyx5", d:"평점 최상위", day:12},
      {n:"Ndrè", u:"https://maps.app.goo.gl/zWhkG74p5GW1nDDc9", d:"16석 파인다이닝 · 더포크 예약", day:12},
      {n:"La Cantinaccia del Popolo", q:"La Cantinaccia del Popolo Sorrento", d:"현지인 줄서는 집 · 대기 30~45분", day:13},
      {n:"Porta Marina Seafood", q:"Porta Marina Seafood Sorrento", d:"문어구이·홍합조개찜·모듬튀김", day:13},
      {n:"AZZ! Italian Tavern", q:"AZZ Italian Tavern Sorrento", d:"라자냐 맛집", day:13},
      {n:"Nalù Trattoria italiana", q:"Nalu Trattoria Sorrento", d:"현지인 웨이팅 파스타 맛집"},
      {n:"Ristorante Pizzeria Tasso", q:"Ristorante Pizzeria Tasso Sorrento", d:"피자 · 글루텐프리 대응"},
      {n:"SpizzichiAMO", q:"SpizzichiAMO Sorrento", d:"샌드위치·포카치아"},
      {n:"Raki", q:"Raki gelato Sorrento", d:"레몬 젤라또 · stuffed lemon"},
      {n:"Bagni Regina Giovanna", q:"Bagni Regina Giovanna Sorrento", d:"🏊 로마유적 자연풀 수영"},
      {n:"the Pignatella Beach", q:"Pignatella Beach Sorrento", d:"🏊 바위+모래 해변 · 입장료"},
      {n:"Spiaggia La Marinella", q:"Spiaggia La Marinella Sorrento", d:"🏊 시설형 해변 · 선베드·샤워", day:12},
      {n:"Marina Piccola", q:"Marina Piccola Sorrento", d:"🏖️ 소렌토 메인 해변"},
      {n:"Sorrento Municipal Park", q:"Villa Comunale Sorrento", d:"🌅 일몰 명당", day:12},
      {n:"비토리아 광장", q:"Piazza Vittoria Sorrento", d:"🌅 일몰 구경", day:12},
      {n:"Garage Marina Piccola", q:"Garage Marina Piccola Sorrento", d:"🅿️ 카프리 전 1박 주차", day:14}
    ]},
    {city:"포지타노 · 아말피 해안", items:[
      {n:"Posides", q:"Posides Positano", d:"가족 운영 · 예약 불가 오픈런", day:13},
      {n:"Da Gabrisa", u:"https://maps.app.goo.gl/BH749b4PkZZgLfPZ6", d:"파노라마 뷰 · positanese 파스타", day:13},
      {n:"까자 에 보떼가", q:"Casa e Bottega Positano", d:"가벼운 브런치", day:13},
      {n:"Cafe Positano", q:"Cafe Positano", d:"테라스 뷰"},
      {n:"Calajanara", u:"https://maps.app.goo.gl/AxKGXKoRYkdRWB576", d:"Conca dei Marini · 절벽뷰 파스타", day:13},
      {n:"Furore Fjord", q:"Fiordo di Furore", d:"🏊 피오르드 절벽 수영", day:13},
      {n:"포지타노 주차장", u:"https://maps.app.goo.gl/w988fD5i1rokaCC66", d:"🅿️ Di Gennaro 사전예약 권장", day:13}
    ]},
    {city:"카프리", items:[
      {n:"Pizza e Pasta", u:"https://maps.app.goo.gl/4Y5hzDbVrfeBQt4KA", d:"아나카프리 피자 맛집", day:14},
      {n:"Al Grottino", u:"https://maps.app.goo.gl/KfJbjwz7H4PLDp7N7", d:"가족 운영 · 레몬 파스타", day:14},
      {n:"Pulalli", q:"Pulalli Capri", d:"피아체타 시계탑 위 · 전망", day:14},
      {n:"Buonocore", q:"Buonocore Capri gelato", d:"카프리 젤라또 맛집", day:14},
      {n:"Alimenta Bistrot Anacapri", q:"Alimenta Bistrot Anacapri Villa Rosa", d:"아나카프리 비스트로"},
      {n:"La Zagara", q:"La Zagara Anacapri", d:"레몬 가든 안 식사"}
    ]},
    {city:"로마 — 판테온 · 트레비", items:[
      {n:"La Campana", u:"https://maps.app.goo.gl/X29RnXVDL6Uf3DYW9", d:"로마 최고령 · 호박꽃튀김 · 전화예약만 · 월휴무", day:15},
      {n:"Trattoria Antonio al Pantheon", u:"https://maps.app.goo.gl/CitCJQdoyTg1vgtr8", d:"판테온 근처 맛집", day:17},
      {n:"La Casa del Caffè Tazza d'Oro", u:"https://maps.app.goo.gl/2fh7nkkhvukHhFSh9", d:"로마 3대 커피", day:15},
      {n:"Gelateria Della Papessa", u:"https://maps.app.goo.gl/UfjwkGQPLq1YJzmy9", d:"젤라또 · 트레비~스페인계단", day:15},
      {n:"Two Sizes", u:"https://maps.app.goo.gl/rQr7c9JyFwkZqSVY6", d:"3대 티라미수", day:17},
      {n:"Mr. 100 Tiramisù", u:"https://maps.app.goo.gl/6B1PTkkY9AQSThwe8", d:"3대 티라미수", day:17},
      {n:"Nest — Handmade Chinese Dumpling", u:"https://maps.app.goo.gl/6u3H8TnUCrdci2H29", d:"샤오롱바오", day:15},
      {n:"Shiroya", u:"https://maps.app.goo.gl/qjefUNQGXLoTaKXL7", d:"미슐랭 · 스파이시 라멘·연어롤", day:15},
      {n:"Pastevere", q:"Pastevere Roma", d:"수제 파스타 · 화요일 휴무"},
      {n:"토라 스시", q:"Tora Sushi Roma", d:"일식"},
      {n:"53 Untitled", q:"53 Untitled Roma", d:"파인다이닝"}
    ]},
    {city:"로마 — 스페인계단 · 포폴로", items:[
      {n:"Life 식당", u:"https://maps.app.goo.gl/cRMf2N9HShqYi2ao7", d:"스페인광장 근처 지중해식 · 예약", day:17},
      {n:"Pompi", u:"https://maps.app.goo.gl/Vsa8HX5Sh9iyyCck8", d:"티라미수 원조", day:17},
      {n:"Terrazza e bar Rinascente", u:"https://maps.app.goo.gl/paP72xxfZ15L8ngV8", d:"루프탑 바", day:16},
      {n:"안티코 카페 그레코", q:"Antico Caffe Greco Roma", d:"로마 3대 카페 · ⚠️ 임시휴업 확인"}
    ]},
    {city:"로마 — 바티칸 · 프라티", items:[
      {n:"La Soffitta Renovatio", u:"https://maps.app.goo.gl/tqKA9F6hV8orrkp8A", d:"성벽 앞 도보 2분 · 피자·라자냐", day:16},
      {n:"Vinsanto Vino & Cucina", u:"https://maps.app.goo.gl/LUkhwXkMHMpuoJgQ7", d:"연어 스테이크", day:16},
      {n:"올드브릿지 젤라또", u:"https://maps.app.goo.gl/RVM5voLRTs2f31u97", d:"바티칸 근처 젤라또", day:16}
    ]},
    {city:"로마 — 쇼핑", items:[
      {n:"CONAD (Via Buonarroti)", q:"Conad Via Buonarroti Roma", d:"🛒 마트 기념품 쇼핑", day:17}
    ]}
  ]
};
