const DAYS2 = [
/* ═══════════════ DAY 11 ═══════════════ */
{
  n:11, date:"9/24", dow:"목", country:"it", city:"나폴리", stay:"스타호텔스 테르미누스",
  title:"그린델발트 → 나폴리", headline:"✈️ 알프스에서 지중해로",
  tags:["이동일","국가 이동"],
  tips:[{icon:"🛡️", title:"나폴리 소매치기 주의", lines:[
    "나폴리는 유럽에서도 <b>소매치기·가방 날치기로 유명한 곳</b>이에요. 특히 호텔이 있는 <b>가리발디 광장 / 중앙역 주변</b>이 그렇습니다.",
    "가방은 어깨에 걸지 말고 <b>몸 앞쪽으로</b> 메기.",
    "스쿠터 날치기가 흔하니 <b>차도 쪽 팔에 가방을 걸지 않기</b>.",
    "스파카나폴리 골목 산책 중에도 크로스백은 지퍼를 앞으로 돌려서 메는 게 안전해요."
  ]}],
  timeline:[
    {period:"오전", time:"10:59~11:56", icon:"🚆", title:"인터라켄 Ost → 베른"},
    {period:"오후", time:"12:02~13:14", icon:"🚆", title:"베른 → 취리히 공항"},
    {period:"오후", time:"16:50~18:30", icon:"✈️", title:"취리히 공항 → 나폴리 공항", desc:"SWISS", key:true},
    {period:"저녁", time:"18:30~19:20", icon:"🛂", title:"입국심사 · 수하물", desc:"지연 가능성 고려"},
    {period:"저녁", time:"19:20~19:50", icon:"🚕", title:"공항 → 스타호텔스 테르미누스", desc:"고정요금 택시 약 €21"},
    {period:"저녁", time:"19:50~20:30", icon:"🏨", title:"체크인 · 샤워 · 휴식", desc:"렌터카는 다음 날 픽업"}
  ],
  meals:[{slot:"저녁식사 (선택)", picks:[
    {n:"O' Sole Mio Pizza & More", q:"O Sole Mio Pizza Piazza Garibaldi Napoli", d:"가리발디 광장 · 호텔 도보 2~3분 · 도착 첫날 부담 없는 나폴리 화덕피자"},
    {n:"Chalet Ciro - Stazione Centrale", u:"https://maps.app.goo.gl/NrLT2WjNUV4pp7678", d:"🍩 근처 도넛집 — 다음 날 아침용으로 기억해두기"}
  ]}]
},
/* ═══════════════ DAY 12 ═══════════════ */
{
  n:12, date:"9/25", dow:"금", country:"it", city:"소렌토", stay:"카사 루치아",
  title:"나폴리 → 소렌토", headline:"🍕 피자의 고향에서 반나절, 그리고 바다로",
  tags:["렌트카 픽업"],
  timeline:[
    {period:"오전", time:"08:30~09:30", icon:"☕", title:"기상 · 느긋한 준비"},
    {period:"오전", time:"09:30~11:00", icon:"🚶", title:"나폴리 '짧고 굵게' 구경",
     desc:"스파카나폴리(구시가지) 산책 + 스페인 지구 구경"},
    {period:"오전", time:"11:00~11:40", icon:"🍕", title:"브런치 / 간단식", desc:"나폴리 피자 — 아래 점심 목록 참고"},
    {period:"오전", time:"11:40~12:30", icon:"🧳", title:"짐 맡기기 + 픽업 지점 이동",
     desc:"짐은 들고 다니거나 보관소 활용 (차에 두고 관광 X)"},
    {period:"오후", time:"12:30~12:50", icon:"⏱️", title:"버퍼 — 픽업 지점 도착/대기", soft:true},
    {period:"오후", time:"13:00~13:50", icon:"🚗", title:"렌트카 픽업 (나폴리 중앙역)", key:true,
     sub:["계약서 / 보험 / 연료정책 확인","외관 · 휠 · 유리 <b>영상 촬영</b>","🚗 차량 홀짝제 대비 <b>홀수 번호판 요청</b>","9/26에 포지타노-아말피 갈 건데 <b>그날 기준 어떤 번호판이 안전한지</b> 직원에게 한 번 더 물어보기"]},
    {period:"오후", time:"13:50~15:20", icon:"🚗", title:"나폴리 → 소렌토 이동", desc:"픽업 직후 바로 출발"},
    {period:"오후", time:"15:20~15:50", icon:"🏨", title:"카사 루치아 체크인 + 주차 세팅", desc:"주차장 위치 / 차량 출입 동선 확인"},
    {period:"오후", time:"16:30~18:00", icon:"🌊", title:"소렌토 해변 수영", key:true,
     desc:"9월 말엔 햇살 있는 오후 시간대가 더 따뜻해요 · 아래 해변 비교표 참고"},
    {period:"저녁", time:"18:30~22:00", icon:"🍽️", title:"저녁식사 & 산책", desc:"젖은 짐은 숙소에 두고 가볍게"},
    {period:"저녁", icon:"🌅", title:"일몰 명당", desc:"Sorrento Municipal Park (Villa Comunale) · 비토리아 광장 (Piazza Vittoria)", soft:true},
    {period:"저녁", time:"23:00", icon:"😴", title:"취침", desc:"다음날 카프리 대비"}
  ],
  tips:[{icon:"🏊", title:"소렌토 해변 고르기", lines:[
    "소렌토는 절벽 지형이라 '모래사장'보다는 <b>바위/플랫폼형</b>이 많아요.",
    "12일차는 장거리 이동 후라 <b>시설형(샤워/라커/선베드)</b>이면 체력 관리가 훨씬 쉬워요."
  ]}],
  table:{title:"소렌토 해변 후보 비교", head:["해변","타입/분위기","장점","단점/주의"], rows:[
    ["Spiaggia La Marinella","시설형(리도/비치클럽)<br><span class='sm'>무료 수영 가능</span>","선베드/샤워/탈의 등 편하게 즐기기 좋음","성수기엔 예약/만석 변수, 무료 자연해변 감성은 덜함"],
    ["Pignatella 해변","바위/돌 플랫폼 (현지감성)<br><span class='sm'>히든 수영 명소</span>","물 맑고 '자연스팟' 느낌, 수영 만족도 높음","바위 접근이라 아쿠아슈즈 권장, 젖은 짐/샤워 불편할 수 있음"],
    ["Bagni Regina Giovanna","자연 풀(라군) + 유적/절경<br><span class='sm'>히든 수영 명소</span>","사진/풍경/로맨틱 '스팟' 강함","시설 거의 없음, 바위 지형/도보 이동 부담"]
  ]},
  meals:[
    {slot:"점심식사 (선택)", picks:[
      {n:"L'Antica Pizzeria da Michele", u:"https://maps.app.goo.gl/Mdpor4iHHx7bSDtt9", d:"🍕 나폴리 3대 피자 · 10:30 오픈런 추천 (줄 길면 근처 Pizzeria del Purgatorio)"},
      {n:"Antica Pizza Fritta da Zia Esterina Sorbillo", u:"https://maps.app.goo.gl/JVJaoujpkWPzSJBq6", d:"🍕 스파카나폴리 한복판 · 튀김피자, 걸으며 먹기 좋음"},
      {n:"Chalet Ciro - Stazione Centrale", u:"https://maps.app.goo.gl/NrLT2WjNUV4pp7678", d:"🍩 가리발디 광장 · 나폴리식 그라파(도넛)+커피",
       sub:["그라파: 나폴리 스타일의 갓 튀긴 폭신 쫄깃한 설탕 도넛","반죽에 삶은 감자를 으깨어 넣는 게 특징"]},
      {n:"Sfogliatelle Attanasio", u:"https://maps.app.goo.gl/V5jYyhHRyeMPNF13A", d:"🥐 중앙역 근처 · 나폴리 대표 페이스트리 · 소렌토 가면서 차 안 간식용으로!"}
    ]},
    {slot:"저녁식사 (선택) — 예약 필수인 곳만!", picks:[
      {n:"Bagni Delfino", u:"https://maps.app.goo.gl/jtfT1tVFETiCBTcy9", d:"Marina Grande · 석양 + 해산물"},
      {n:"Il Gozzo Sorrento", u:"https://maps.app.goo.gl/NKprAmUqWoP4DcWP6", d:"같은 항구"},
      {n:"Naima Restaurant", u:"https://maps.app.goo.gl/CFACPNW7DbYgwGyx5", d:"평점 최상위"},
      {n:"Ndrè", u:"https://maps.app.goo.gl/zWhkG74p5GW1nDDc9", d:"16석 파인다이닝 · <b>더포크 앱으로 예약 필수</b>"}
    ]}
  ],
  refList:{title:"나폴리 저장 맛집 리스트 (참고용)", items:[
    "Gran Caffè Gambrinus — 헤밍웨이 카페",
    "Pescheria Mattiucci — 해산물",
    "10 Diego Vitagliano — 나폴리 3대 피자 (바뇰리 / 산타루치아)",
    "Pizzeria passionamij · Il Ruttino — 현지 피자",
    "Ristorante Senti Profumo — 중식"
  ]}
},
/* ═══════════════ DAY 13 ═══════════════ */
{
  n:13, date:"9/26", dow:"토", country:"it", city:"소렌토", stay:"카사 루치아",
  title:"포지타노 · 아말피", headline:"🚗 아말피 해안도로, 절벽과 바다 사이",
  tags:["이른 기상","운전","홀짝제"],
  tips:[{icon:"🚗", title:"차량 홀짝제란?", lines:[
    "특정 날짜/시간대에 교통량을 줄이기 위해, <b>차량 번호판 끝자리</b>가 홀수(1·3·5·7·9)인지 짝수(0·2·4·6·8)인지에 따라 <b>통행이 제한</b>되는 제도예요. (지역/시기마다 규정이 달라요)",
    "예시: 짝수날엔 짝수 번호판 이용 금지 / 홀수날엔 홀수 번호판 이용 금지",
    "규정 시간대에 걸리면 <b>단속·과태료</b> 가능 + 일정이 꼬일 수 있어요.",
    "현지 렌터카 픽업 시 직원에게 <b>포지타노·아말피 갈 예정</b>이라고 말하고 안전한 번호판을 확인하세요."
  ]}],
  timeline:[
    {period:"오전", time:"07:00~07:25", icon:"🎒", title:"기상 / 간단 준비",
     desc:"수영복·타월·아쿠아슈즈·선크림을 <b>차에 미리 세팅</b>"},
    {period:"오전", time:"07:30", icon:"🚗", title:"소렌토 숙소 출발", key:true,
     sub:["<b>10:00 홀짝제 단속 전</b>에 이동","새벽엔 버스/정체가 적어서 SS163 드라이브 만족도 최고"]},
    {period:"오전", time:"08:40~09:00", icon:"🅿️", title:"포지타노 도착 & 주차장 확보",
     sub:["9시 이후 만차가 흔해서 그 전에 도착","추천: Parcheggio Mandara / Parcheggio Di Gennaro","<b>Di Gennaro 주차장은 사전예약</b>하고 가기"],
     link:{u:"https://parkingpositano.com/en", label:"포지타노 주차 예약"}},
    {period:"오전", time:"09:00~11:30", icon:"📸", title:"전망대 · 골목 · 부티크 산책",
     sub:["전망대에서 사진","비알레 파시테아(Viale Pasitea) 골목 산책","부티크·리넨샵 구경","위에서 아래로 내려오며 해변까지 이동"]},
    {period:"오후", time:"13:30~15:50", icon:"🏊", title:"포지타노 해변 수영",
     desc:"메인: Spiaggia Grande · 조금 더 조용: Fornillo · 필요시 해변 샤워 시설 활용"},
    {period:"오후", icon:"🏞️", title:"피오르도 디 푸로레 (Fiordo di Furore)",
     sub:["포지타노에서 🚗 약 20~25분 드라이브","절벽 아래 작은 해변이라 규모는 작지만 가장 인상적인 스팟","다리 위에서 사진 찍기"]},
    {period:"오후", time:"17:00~18:50", icon:"⛪", title:"아말피 관광",
     desc:"피오르도 → 아말피 🚗 약 15분 · 아말피 성당 · 골목 · 레몬 그라니타"},
    {period:"저녁", icon:"🚗", title:"아말피 → 소렌토", desc:"🚗 약 1시간 20분 · 번호판 규제 종료 후 운전"},
    {period:"저녁", time:"21:00 이후", icon:"🍽️", title:"소렌토 도착 · 저녁식사"}
  ],
  meals:[
    {slot:"점심식사 (선택)", picks:[
      {n:"Posides", q:"Posides Positano", d:"Viale Pasitea · 가족 운영 로컬 맛집, 현지 평가 최상위 · <b>예약 불가·오픈런 필수</b>, 11:30~11:45 도착 추천"},
      {n:"Da Gabrisa", u:"https://maps.app.goo.gl/BH749b4PkZZgLfPZ6", d:"Viale Pasitea · 파노라마 뷰 파인다이닝, 12시 오픈 · 예약 필요",
       sub:["fried calamari","스테이크","positanese 파스타"]},
      {n:"까자 에 보떼가", q:"Casa e Bottega Positano", d:"🥪 가벼운 브런치"},
      {n:"Calajanara", u:"https://maps.app.goo.gl/AxKGXKoRYkdRWB576", d:"Conca dei Marini · 절벽뷰 해산물 파스타 · 맛있는 파스타를 먹고 싶다면! 포지타노-아말피 사이 도로변이라 <b>Furore Fjord</b> 갈 때 함께 추천"}
    ]},
    {slot:"저녁식사 (선택, 소렌토 복귀 후)", picks:[
      {n:"La Cantinaccia del Popolo", q:"La Cantinaccia del Popolo Sorrento", d:"현지인들이 매일 줄 서는 로컬 맛집 · 대기 30~45분 각오"},
      {n:"Porta Marina Seafood", q:"Porta Marina Seafood Sorrento", d:"Marina Grande · 가족 운영 생선구이",
       sub:["문어구이 (Polpo alla brace)","홍합조개찜 (Sautée di cozze e vongole)","새우+문어튀김 (Frittura di gamberi e calamari)"]},
      {n:"AZZ! Italian Tavern", q:"AZZ Italian Tavern Sorrento", d:"라자냐 맛집"}
    ]}
  ],
  refList:{title:"소렌토 저장 맛집 리스트 (참고용)", items:[
    "Bagni Regina Giovanna — 로마유적 + 수영",
    "SpizzichiAMO — 샌드위치",
    "Ristorante Pizzeria Tasso — 글루텐프리 대응",
    "Nalù Trattoria italiana — 현지인 웨이팅 파스타 맛집",
    "Raki — 레몬 젤라또, stuffed lemon으로 먹기"
  ]}
},
/* ═══════════════ DAY 14 ═══════════════ */
{
  n:14, date:"9/27", dow:"일", country:"it", city:"카프리", stay:"웨버 앰배서더",
  title:"소렌토 → 카프리", headline:"⛴️ 푸른 동굴이 있는 섬",
  tags:["페리","짐 보관"],
  guides:[{title:"카프리 가는 법", steps:[
    {label:"STEP 1 · 조식 + 체크아웃", lines:["06:30~07:00 기상","조식 후 짐 정리","🚗 소렌토 Marina Piccola 항구로 이동"]},
    {label:"STEP 2 · 렌터카 주차", lines:[
      "소렌토 항구 인근 주차장에 차량 1박 주차",
      "추천: <b>Garage Marina Piccola</b> (또는 Garage il Faro)",
      "다음 날 카프리에서 돌아올 때까지 차는 소렌토에 두기",
      "⚠️ 주차할 때 직원에게 <code>Capri, one night</code>이라고 말해 익일 출차임을 확실히 전달",
      "9/28 차량 회수 예정시간까지 약 27시간이므로 <b>'24시간 요금 + 초과요금'</b> 확인",
      "1박(24시간) 약 <b>60~75유로</b>"]},
    {label:"STEP 3 · 소렌토 → 카프리", lines:[
      "07:30 전후 항구 도착 추천",
      "🎫 미리 예약한 페리 체크인",
      "⛴️ 08:00 전후 Sorrento → Capri · 약 25~30분",
      "카프리에서는 <b>Marina Grande</b>에 도착"]},
    {label:"STEP 4 · 카프리 도착 후 짐 보관", lines:[
      "캐리어를 들고 보트투어를 할 수 없으므로 <b>항구에서 먼저 짐 보관</b>",
      "일부 보트업체는 큰 짐 탑승 불가 — Marina Grande의 <b>유료 짐 보관소</b> 이용 안내",
      "수영복·선크림·선글라스·얇은 겉옷 정도만 작은 가방에 챙기기"]}
  ]}],
  timeline:[
    {period:"오전", time:"09:30~11:00", icon:"🚤", title:"카프리 섬 일주 · 블루동굴 보트 투어", key:true,
     sub:["대부분 마리나 그란데 항구 인근에서 출발","투어 업체에 <b>당일 블루동굴 운영 여부</b> 확인","파도와 대기시간에 따라 블루동굴 입장은 불가능할 수 있음"],
     link:{u:"https://www.getyourguide.com/capri-l693/capri-boat-tour-with-stop-by-the-blue-grotto-t170874/", label:"보트투어 예약"}},
    {period:"오전", icon:"🚌", title:"아나카프리 이동",
     sub:["보트투어 종료 후 Marina Grande 복귀","🚌 버스로 Anacapri 이동 (항구 옆 정류장)","캐리어는 계속 Marina Grande에 보관해두는 게 편함"]},
    {period:"오후", icon:"🚠", title:"몬테 솔라로 체어리프트",
     sub:["🚶 아나카프리 중심 → 체어리프트 승강장","🚠 몬테 솔라로 정상으로 이동","정상에서 카프리섬·파라글리오니·나폴리만 전망","왕복 포함 약 1~1.5시간 확보 추천","☁️ 구름이 많거나 바람이 강하면 과감하게 생략하고 아나카프리 골목 산책"]},
    {period:"오후", time:"13:10~15:00", icon:"🛍️", title:"카프리타운 (Piazzetta) 산책 + 쇼핑",
     desc:"명품·부티크 쇼핑이나 골목 구경 · 기념품 · 젤라또"},
    {period:"오후", time:"15:00", icon:"🏨", title:"웨버 앰배서더 호텔 체크인", key:true,
     desc:"카프리에서 무료 셔틀 이용"},
    {period:"오후", time:"15:30~18:00", icon:"🏖️", title:"호텔 프라이빗 해변 수영 & 휴식",
     desc:"호텔 바로 앞 마리나 피콜라 해변에서 수영 + 선베드 휴식"},
    {period:"저녁", time:"19:00 이후", icon:"🌅", title:"저녁 식사 & 야경", desc:"석양 보며 저녁 → 낭만적인 카프리 밤"}
  ],
  meals:[
    {slot:"점심식사", picks:[
      {n:"Pizza e Pasta", u:"https://maps.app.goo.gl/4Y5hzDbVrfeBQt4KA", d:"🍕 아나카프리 피자 맛집"}
    ]},
    {slot:"간식", picks:[
      {n:"Buonocore", q:"Buonocore Capri gelato", d:"🍨 Via Vittorio Emanuele · 카프리 젤라또 맛집"}
    ]},
    {slot:"저녁식사 (선택)", picks:[
      {n:"Al Grottino", u:"https://maps.app.goo.gl/KfJbjwz7H4PLDp7N7", d:"Via Longano · 가족 운영 로컬 맛집 · 레몬 파스타 · 카프레제 라비올리"},
      {n:"Pulalli", q:"Pulalli Capri", d:"피아체타 시계탑 위 · 피아체타 바로 옆이라 뷰가 장점 · 전망 최고, 예약 권장"}
    ]}
  ]
},
/* ═══════════════ DAY 15 ═══════════════ */
{
  n:15, date:"9/28", dow:"월", country:"it", city:"로마", stay:"콜론나 팰리스",
  title:"카프리 → 소렌토 → 로마", headline:"🚗 페리 타고, 3시간 반 달려 로마로",
  tags:["이동일","렌트카 반납"],
  timeline:[
    {period:"오전", time:"07:30~09:50", icon:"🧳", title:"조식 · 짐 정리 · 체크아웃",
     sub:["호텔 셔틀 등을 이용해 Marina Grande 이동","페리 출발 <b>30분 전</b>에는 항구 도착 추천"]},
    {period:"오전", time:"10:00~10:30 전후", icon:"⛴️", title:"카프리 → 소렌토 페리",
     desc:"약 20~30분 · 늦어도 10:30 전후 출발"},
    {period:"오전", time:"11:00", icon:"🚗", title:"소렌토 도착 — 차량·캐리어 회수", desc:"전날 맡겨둔 렌터카 찾기"},
    {period:"오후", time:"11:00~12:00", icon:"🥪", title:"소렌토에서 간단히 점심",
     sub:["로마까지 운전이 길어서 1시간 이상 식사하기보다 <b>샌드위치·파니니</b> 정도로 간단히","11:30~12:00에는 로마로 출발하는 걸 목표로"]},
    {period:"오후", time:"12:00~16:30", icon:"🚗", title:"소렌토 → 로마", key:true,
     sub:["약 3시간~3시간 30분 · 휴게소 1회","내비게이션에서 <b>유료도로 이용 + ZTL 회피</b> 설정","주유 조건이 Full-to-Full이면 로마 외곽에서 마지막 주유"]},
    {period:"오후", time:"17:00~17:30", icon:"🔑", title:"로마 테르미니역 렌트카 반납", key:true,
     sub:["차량 전체 외관 영상","휠 / 범퍼 사진","주행거리","연료 게이지","반납 장소 사진","직원 확인 후 <b>반납 확인서/이메일</b> 받아두기"]},
    {period:"저녁", time:"17:30~", icon:"🏨", title:"콜론나 팰리스 체크인 & 휴식",
     sub:["반납 후 택시/도보로 숙소 이동","캐리어 정리 + 샤워 / 잠깐 쉬기"]},
    {period:"저녁", icon:"🌃", title:"야경 산책",
     desc:"트레비 분수 → 판테온 → 나보나 광장 (컨디션에 맞춰 1~2곳만)"}
  ],
  tips:[
    {icon:"🚇", title:"로마 교통권 메모", lines:[
      "시내 이동이 잦으면 <b>72시간권</b>도 고려 가능해요.",
      "다만 로마는 '도보 + 필요할 때만 메트로/택시' 조합이 보통 가장 편했어요."
    ]},
    {icon:"🛡️", title:"로마 안전/소지품 메모", lines:[
      "인파 많은 곳(콜로세움/트레비/스페인계단)에서는 <b>가방 앞으로</b>, 지퍼 잠그기, 휴대폰 손목 스트랩 추천",
      "레스토랑/카페에서 <b>의자에 가방 걸어두지 않기</b> (바닥도 X)",
      "'오늘은 이동/쇼핑이 많다' 싶은 날은 택시/우버로 체력 아끼기"
    ]}
  ],
  meals:[{slot:"저녁식사 (선택)", picks:[
    {n:"Nest - Handmade Chinese Dumpling", u:"https://maps.app.goo.gl/6u3H8TnUCrdci2H29", d:"샤오롱바오 · 파스타에 지쳤을 때!"},
    {n:"Shiroya", u:"https://maps.app.goo.gl/qjefUNQGXLoTaKXL7", d:"미슐랭 맛집 · 매콤한 국물이 땡긴다면 스파이시 라멘과 연어롤!"},
    {n:"La Campana", u:"https://maps.app.goo.gl/X29RnXVDL6Uf3DYW9", d:"로마 최고령 레스토랑 · 호박꽃 튀김, 아티초크가 맛있음 · ⚠️ 전화 예약만 가능 · <b>월요일 휴무라 다른 날 가기</b>"},
    {n:"Life 식당", u:"https://maps.app.goo.gl/cRMf2N9HShqYi2ao7", d:"로마 스페인 광장 근처 지중해식 맛집 · 예약 필요"},
    {n:"Two Sizes", u:"https://maps.app.goo.gl/rQr7c9JyFwkZqSVY6", d:"☕ 3대 티라미수 맛집"},
    {n:"Mr. 100 Tiramisù", u:"https://maps.app.goo.gl/6B1PTkkY9AQSThwe8", d:"☕ 3대 티라미수 맛집"},
    {n:"Pompi", u:"https://maps.app.goo.gl/Vsa8HX5Sh9iyyCck8", d:"☕ 3대 티라미수 맛집"},
    {n:"La Casa del Caffè Tazza d'Oro", u:"https://maps.app.goo.gl/2fh7nkkhvukHhFSh9", d:"☕ 판테온 바로 옆 · 로마 3대 커피 중 하나"},
    {n:"Gelateria Della Papessa", u:"https://maps.app.goo.gl/UfjwkGQPLq1YJzmy9", d:"🍨 트레비-스페인계단 사이"}
  ]}]
},
/* ═══════════════ DAY 16 ═══════════════ */
{
  n:16, date:"9/29", dow:"화", country:"it", city:"로마", stay:"콜론나 팰리스",
  title:"바티칸 투어", headline:"⛪ 오전은 회복, 오후는 미켈란젤로",
  tags:["예약 있음"],
  timeline:[
    {period:"오전", icon:"😴", title:"늦잠 / 조식 / 브런치 + 컨디션 관리", desc:"오후 투어 대비해서 오전은 '회복' 위주"},
    {period:"오후", time:"12:30~13:10", icon:"🚶", title:"바티칸 이동 & 입장 준비", desc:"보안검색/대기 고려해서 여유 있게"},
    {period:"오후", time:"13:30~18:00 전후", icon:"⛪", title:"바티칸 패스트트랙 투어", key:true,
     desc:"4~5시간 소요 (투어 종료 시간은 현장 상황에 따라 변동)"},
    {period:"저녁", time:"18:00~20:00", icon:"🍽️", title:"저녁", desc:"프라티/바티칸 주변에서 가볍게"},
    {period:"저녁", icon:"🍨", title:"올드브릿지 젤라또", link:{u:"https://maps.app.goo.gl/RVM5voLRTs2f31u97", label:"지도"}},
    {period:"저녁", icon:"🌃", title:"콜로세움 야경 (선택)", soft:true}
  ],
  meals:[
    {slot:"점심식사 (선택)", picks:[
      {n:"Terrazza e bar Rinascente", u:"https://maps.app.goo.gl/paP72xxfZ15L8ngV8", d:"로마 루프탑 바"},
      {n:"Nest - Handmade Chinese Dumpling", u:"https://maps.app.goo.gl/6u3H8TnUCrdci2H29", d:"샤오롱바오 · 파스타에 지쳤을 때!"},
      {n:"Shiroya", u:"https://maps.app.goo.gl/qjefUNQGXLoTaKXL7", d:"미슐랭 맛집 · 스파이시 라멘과 연어롤"},
      {n:"La Campana", u:"https://maps.app.goo.gl/X29RnXVDL6Uf3DYW9", d:"로마 최고령 레스토랑 · 호박꽃 튀김, 아티초크 · 전화 예약만 · 월요일 휴무"},
      {n:"Life 식당", u:"https://maps.app.goo.gl/cRMf2N9HShqYi2ao7", d:"스페인 광장 근처 지중해식 · 예약 필요"}
    ]},
    {slot:"저녁식사 (선택)", picks:[
      {n:"La Soffitta Renovatio", u:"https://maps.app.goo.gl/tqKA9F6hV8orrkp8A", d:"바티칸 성벽 앞 · 투어 끝나고 도보 2분 · 피자·라자냐"},
      {n:"Vinsanto Vino & Cucina", u:"https://maps.app.goo.gl/LUkhwXkMHMpuoJgQ7", d:"투어 끝나고 연어 스테이크 맛집"}
    ]}
  ]
},
/* ═══════════════ DAY 17 ═══════════════ */
{
  n:17, date:"9/30", dow:"수", country:"it", city:"로마", stay:"콜론나 팰리스",
  title:"로마 산책 + 쇼핑", headline:"🌅 마지막 밤, 핀초 언덕의 일몰",
  tags:["쇼핑","일몰 18:53"],
  timeline:[
    {period:"오전", icon:"☕", title:"여유롭게 기상 & 조식/브런치"},
    {period:"오전", time:"11:30~13:00", icon:"🏛️", title:"콜로세움 외관 + 주변 산책",
     desc:"사진/분위기 위주, 내부 입장 X",
     sub:["콘스탄티누스 개선문","Via dei Fori Imperiali 주변 산책","포로 로마노는 밖에서 전망만","약 1~1.5시간이면 충분"]},
    {period:"오후", time:"14:30~16:30", icon:"🛍️", title:"스페인 계단 → 콘도티 → 코르소 쇼핑",
     desc:"아래 마트 쇼핑 리스트 참고"},
    {period:"오후", time:"16:30~19:00", icon:"🌳", title:"보르게세 공원(호수) 산책", desc:"가볍게 산책/휴식 후 일몰 포인트로 이동"},
    {period:"저녁", time:"18:00 전후부터", icon:"🌅", title:"핀초 언덕 (Pincio Terrace) 일몰", key:true,
     desc:"9월 30일 로마 일몰은 약 <b>18:53</b> · 18시 전후부터 올라가 자리 잡기 추천"},
    {period:"저녁", icon:"⛲", title:"포폴로 광장으로 내려오기", desc:"핀초 테라스 → 포폴로 광장 (야경/분위기)"},
    {period:"저녁", time:"19:00~21:00", icon:"🍽️", title:"저녁식사"},
    {period:"저녁", icon:"🌃", title:"야경 1곳 (선택)", desc:"컨디션 좋으면 트레비/판테온/나보나 중 1곳만", soft:true}
  ],
  souvenirGroups:[
    {g:"1. 이탈리아 과자", items:[
      "<b>포켓커피</b> (2유로) — 여름엔 판매 중단, 빨강=카페인 있음 / 파랑=디카페인. 선물용으로 더 살 걸 아쉬워하는 후기 많음",
      "<b>Baiocchi 피스타치오 과자</b> (3.79유로) — 현지인들도 많이 먹음, 맛있지만 가격이 좀 비싼 편",
      "<b>누텔라 B-레디</b> (1.3유로) — 한국엔 없는 제품, 걷다가 지칠 때 간식으로 추천",
      "<b>1936 감자칩</b> (3.15유로) — 사이즈별 가격 다양, 유명한 브랜드라 무난한 맛",
      "<b>피스타치오 캔디(로사나)</b> — 헤이즐넛맛도 있음, 피스타치오 좋아하면 추천 / 호불호 있을 수 있음",
      "<b>레몬캔디</b> — 요즘은 다이소에서도 구매 가능해 현지 구매 메리트 줄어듦"
    ]},
    {g:"2. 트러플 · 올리브오일", items:[
      "<b>트러플 글라인더</b> (19.50유로) — 안 사서 후회한다는 후기 → \"보이면 무조건 사라\"",
      "<b>트러플 소스</b> (6.8유로) — 한국보다 저렴, 마트용으로 충분히 만족",
      "<b>올리브오일</b> — 종류가 매우 다양하지만 유리병이라 무거움. 사려면 캐리어 여유 필요"
    ]},
    {g:"3. 커피", items:[
      "<b>라바짜 금색(오로)</b> — 현지인 추천 1순위지만 실제 판매하는 곳이 적음",
      "<b>CONAD PB 커피</b> — 합리적 가격, 단 드립/에스프레소/모카포트용 <b>입자 굵기 구분</b> 주의 필요",
      "<b>모카포트(비알레티)</b> — 이탈리아 대표 기념품, 요즘은 전기포트처럼 쓸 수 있는 제품도 있음",
      "<b>오르조(보리커피)</b> (1.2유로) — 커피 못 마시는 사람에게 추천, 아이스라떼로도 가능, 한국보다 훨씬 저렴해 <b>강력 추천템</b>"
    ]},
    {g:"4. 파스타", items:[
      "<b>바릴라</b> — 유명 브랜드라 품절 많음 (마트 4곳 다 품절인 경우도)",
      "<b>CONAD 리조또용 쌀</b> — 크림소스로 해먹었는데 매우 만족"
    ]},
    {g:"5. 와인", items:[
      "이탈리아 쇼핑리스트 필수템, 3~5천원대 저가 와인도 구매",
      "유리병이라 무거우니 <b>항공 수하물 무게</b> 고려 필요"
    ]},
    {g:"6. 기타", items:[
      "<b>마비스 치약</b> — 대표 기념품, 세트 판매 多, 요즘 한국서도 구매 가능",
      "<b>보로탈코 바디크림</b> (4.2유로) — 가이드 추천, 현지인도 많이 씀, 베이비파우더 향",
      "<b>바질/피스타치오 페스토</b> — 다양하고 가격 좋지만 무거워서 많이 못 사옴"
    ]}
  ],
  souvenirNote:"쇼핑 장소: 로마 CONAD (Via Buonarroti, 41852, 00185 Roma RM)",
  meals:[
    {slot:"점심식사 (선택)", picks:[
      {n:"Ristorante Trattoria Antonio al Pantheon", u:"https://maps.app.goo.gl/CitCJQdoyTg1vgtr8", d:"판테온 근처 맛집"},
      {n:"La Casa del Caffè Tazza d'Oro", u:"https://maps.app.goo.gl/2fh7nkkhvukHhFSh9", d:"☕ 판테온 바로 옆 · 로마 3대 커피 중 하나"}
    ]},
    {slot:"저녁식사 (선택)", picks:[
      {n:"Nest - Handmade Chinese Dumpling", u:"https://maps.app.goo.gl/6u3H8TnUCrdci2H29", d:"샤오롱바오 · 파스타에 지쳤을 때!"},
      {n:"Shiroya", u:"https://maps.app.goo.gl/qjefUNQGXLoTaKXL7", d:"미슐랭 맛집 · 스파이시 라멘과 연어롤"},
      {n:"La Campana", u:"https://maps.app.goo.gl/X29RnXVDL6Uf3DYW9", d:"로마 최고령 레스토랑 · 호박꽃 튀김, 아티초크 · 전화 예약만 · 수요일이라 <b>오늘 방문 가능</b>"},
      {n:"Life 식당", u:"https://maps.app.goo.gl/cRMf2N9HShqYi2ao7", d:"스페인 광장 근처 지중해식 · 예약 필요"}
    ]},
    {slot:"디저트", picks:[
      {n:"Two Sizes", u:"https://maps.app.goo.gl/rQr7c9JyFwkZqSVY6", d:"☕ 3대 티라미수 맛집"},
      {n:"Mr. 100 Tiramisù", u:"https://maps.app.goo.gl/6B1PTkkY9AQSThwe8", d:"☕ 3대 티라미수 맛집"},
      {n:"Pompi", u:"https://maps.app.goo.gl/Vsa8HX5Sh9iyyCck8", d:"☕ 3대 티라미수 맛집"},
      {n:"La Casa del Caffè Tazza d'Oro", u:"https://maps.app.goo.gl/2fh7nkkhvukHhFSh9", d:"☕ 로마 3대 커피"},
      {n:"Gelateria Della Papessa", u:"https://maps.app.goo.gl/UfjwkGQPLq1YJzmy9", d:"🍨 트레비-스페인계단 사이"}
    ]}
  ]
},
/* ═══════════════ DAY 18 ═══════════════ */
{
  n:18, date:"10/1", dow:"목", country:"it", city:"로마 → 인천", stay:"—",
  title:"귀국일", headline:"🏠 집으로",
  tags:["이동일"],
  timeline:[
    {period:"오전", icon:"🧳", title:"체크아웃 준비 + 마지막 산책/카페", desc:"숙소 근처 짧게"},
    {period:"오후", icon:"🚆", title:"테르미니 → FCO", desc:"레오나르도 익스프레스 또는 공항버스"},
    {period:"오후", icon:"✈️", title:"FCO 출발", key:true, desc:"출발 3시간 전 도착 기준으로 역산"}
  ],
  meals:[]
}
];
