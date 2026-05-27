// 기본 가격 책정
export const PRICING = {
  // 기본형: 5페이지 기준
  basic: {
    pages: 5,
    basePrice: 750000,
    pricePerPage: 50000,
  },
  // 표준형: 8~10페이지 기준
  standard: {
    pages: 10,
    basePrice: 1500000,
    pricePerPage: 80000,
  },
}

// 페이지당 추가 요금
export const PAGE_PRICING = {
  basic: 50000,    // 기본형 추가 페이지
  standard: 80000, // 표준형 추가 페이지
}

// 추가 기능 가격
export const ADDON_PRICING = {
  payment: 800000,      // 결제 시스템 (Stripe/Toss)
  userSystem: 800000,   // 회원 시스템
  admin: 2000000,       // 관리자 대시보드
  apiIntegration: 500000, // API 연동 (네이버, 카카오 등)
  realTimeChat: 500000, // 실시간 채팅 (외부 서비스)
  seo: 300000,         // SEO 최적화
} as const

// 추가 기능 미리보기
export const ADDON_PREVIEWS = {
  payment: {
    title: '결제 시스템 연동',
    description: '안전한 온라인 결제 기능을 통해 고객이 직접 상품을 구매할 수 있습니다.',
    image: 'https://images.unsplash.com/photo-1556742212-5b321f3c261d?w=600&h=400&fit=crop',
  },
  userSystem: {
    title: '회원 시스템',
    description: '사용자 가입, 로그인, 마이페이지 등 회원 관리 기능을 제공합니다.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop',
  },
  admin: {
    title: '관리자 대시보드',
    description: '상품, 주문, 사용자를 한눈에 관리할 수 있는 전용 관리자 페이지입니다.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
  },
  apiIntegration: {
    title: 'API 연동',
    description: '소셜 로그인(카카오, 네이버), 배송 조회 등 외부 서비스와 연동됩니다.',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=400&fit=crop',
  },
  realTimeChat: {
    title: '실시간 채팅',
    description: '고객상담, 실시간 메시지 기능으로 즉각적인 소통이 가능합니다.',
    image: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&h=400&fit=crop',
  },
  seo: {
    title: 'SEO 최적화',
    description: '구글, 네이버 검색에서 상위노출되도록 최적화됩니다.',
    image: 'https://images.unsplash.com/photo-1460925895917-aae19ba36c71?w=600&h=400&fit=crop',
  },
} as const

// 프로젝트 타입 (기본 스코프)
export const PROJECT_TYPES = {
  landing: { name: 'Landing Page', pages: 3, type: 'basic' },
  website: { name: '기업 홈페이지', pages: 5, type: 'basic' },
  ecommerce: { name: '이커머스 쇼핑몰', pages: 8, type: 'standard' },
  service: { name: '서비스 소개 사이트', pages: 6, type: 'basic' },
  portfolio: { name: '포트폴리오/갤러리', pages: 5, type: 'basic' },
  booking: { name: '예약 플랫폼', pages: 7, type: 'standard' },
  community: { name: '커뮤니티', pages: 10, type: 'standard' },
  custom: { name: '커스텀', pages: 0, type: null },
} as const

// 기간 추정
export const DURATION_ESTIMATE = {
  basic: {
    dev: 7,      // 개발 기간
    total: 14,   // 포함 총 기간 (상담, 검수, 배포)
  },
  standard: {
    dev: 12,
    total: 22,
  },
  perPage: 1,    // 페이지당 추가 기간
  perAddon: {
    payment: 3,
    userSystem: 4,
    admin: 5,
    apiIntegration: 2,
    realTimeChat: 3,
    seo: 2,
  },
}

// 결제 조건
export const PAYMENT_TERMS = {
  deposit: 0.3,    // 계약금 30%
  mid: 0.4,        // 중금 40%
  final: 0.3,      // 잔금 30%
}

// 샘플 갤러리
export const SAMPLES = [
  {
    id: 'landing-1',
    projectType: 'landing' as const,
    name: 'SaaS 제품 랜딩',
    description: '클라우드 기반 SaaS 제품의 세련된 랜딩페이지.',
    image: 'https://images.unsplash.com/photo-1460925895917-aae19ba36c71?w=500&h=300&fit=crop',
    category: '기술 서비스',
    pages: ['Hero 섹션', '기능 소개', '가격 정보', '고객 후기', '문의 폼'],
    features: ['반응형 디자인', '애니메이션 효과', '자동 스크롤', 'SEO 최적화', 'CTA 버튼'],
    designNotes: '미니멀한 흰색과 파란색 톤으로 전문성을 표현. 각 섹션별 명확한 계층 구조와 큰 CTA 버튼으로 전환율 최적화.',
  },
  {
    id: 'landing-2',
    projectType: 'landing' as const,
    name: '앱 출시 랜딩',
    description: '모바일 앱 출시를 위한 고전환 랜딩페이지.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
    category: '모바일 앱',
    pages: ['Hero 섹션', '앱 스크린샷', '기능 설명', '사용자 후기', '다운로드 버튼'],
    features: ['모바일 최적화', '스크린샷 갤러리', '다중 플랫폼 링크', '리뷰 섹션', '이메일 구독'],
    designNotes: '밝고 활기찬 색상으로 젊은 사용자층을 공략. 앱의 주요 기능을 시각적으로 표현하고 다운로드 유도.',
  },
  {
    id: 'landing-3',
    projectType: 'landing' as const,
    name: '온라인 강좌 소개',
    description: '온라인 교육 과정의 수강생 모집 랜딩페이지.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop',
    category: '교육',
    pages: ['Hero 섹션', '커리큘럼', '강사 소개', '학생 후기', '가격 정보', '등록 폼'],
    features: ['커리큘럼 표시', '강사 프로필', '리뷰/평점', '결제 연동', '이메일 마케팅'],
    designNotes: '신뢰감 있는 흙색과 초록색 사용. 강사의 자격과 학생 성공 사례를 강조하여 신뢰 구축.',
  },
  {
    id: 'website-1',
    projectType: 'website' as const,
    name: '스타트업 기업사이트',
    description: '혁신적인 스타트업의 공식 홈페이지.',
    image: 'https://images.unsplash.com/photo-1487215078519-e21cc028cb29?w=500&h=300&fit=crop',
    category: '스타트업',
    pages: ['홈', '회사 소개', '제품/서비스', '팀', '뉴스', '문의'],
    features: ['반응형 레이아웃', '블로그 기능', '팀 소개 페이지', '뉴스레터', '소셜 연동'],
    designNotes: '미니멀한 검정색과 한 가지 강조 색상으로 현대적이고 깔끔한 이미지 표현.',
  },
  {
    id: 'website-2',
    projectType: 'website' as const,
    name: '컨설팅 펌 홈페이지',
    description: '비즈니스 컨설팅 회사의 전문성 있는 홈페이지.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=300&fit=crop',
    category: '비즈니스',
    pages: ['홈', '서비스 소개', '사례 연구', '팀', 'FAQ', '문의/상담'],
    features: ['케이스 스터디', '팀 소개', 'CMS 관리', '상담 예약', 'PDF 다운로드'],
    designNotes: '정중하고 프로페셔널한 톤. 짙은 파란색과 흰색으로 신뢰감과 안정성 표현.',
  },
  {
    id: 'website-3',
    projectType: 'website' as const,
    name: '법률사무소 웹사이트',
    description: '법률서비스 회사의 공식 웹사이트.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop',
    category: '전문 서비스',
    pages: ['홈', '변호사 소개', '법률 분야', '사건 결과', '블로그', '연락처'],
    features: ['변호사 프로필', '법률 지식 블로그', '사건 성과 표시', '온라인 상담 신청', '뉴스레터'],
    designNotes: '보수적이면서도 접근성 좋은 디자인. 짙은 색상으로 신뢰감을 주고 명확한 정보 구조.',
  },
  {
    id: 'ecommerce-1',
    projectType: 'ecommerce' as const,
    name: '패션 이커머스',
    description: '의류 및 액세서리 온라인 쇼핑몰.',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=300&fit=crop',
    category: '패션',
    pages: ['홈', '제품 목록', '제품 상세', '장바구니', '결제', '주문 확인', '마이페이지'],
    features: ['제품 검색/필터', '리뷰 시스템', '장바구니', '결제 시스템', '배송 추적', '위시리스트'],
    designNotes: '패션 제품을 돋보이게 하는 미니멀 디자인. 큰 이미지와 명확한 카테고리 분류.',
  },
  {
    id: 'ecommerce-2',
    projectType: 'ecommerce' as const,
    name: '전자제품 쇼핑몰',
    description: '전자기기와 액세서리를 판매하는 쇼핑몰.',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=300&fit=crop',
    category: '전자제품',
    pages: ['홈', '카테고리', '제품 상세', '비교 기능', '장바구니', '결제', '배송'],
    features: ['제품 비교', '상세 스펙', '360도 뷰', '리뷰/평점', '재고 관리', '구독 알림'],
    designNotes: '기술적이고 정확한 이미지. 제품의 세부 사항을 명확하게 보여주는 상세 정보 페이지.',
  },
  {
    id: 'ecommerce-3',
    projectType: 'ecommerce' as const,
    name: '식품 온라인 마켓',
    description: '수제 식품과 유기농 제품 판매 플랫폼.',
    image: 'https://images.unsplash.com/photo-1557804506-669714d2e9d8?w=500&h=300&fit=crop',
    category: '식품',
    pages: ['홈', '상품 카테고리', '상품 상세', '레시피', '블로그', '장바구니', '결제'],
    features: ['상품 추천', '레시피 연동', '영양 정보', '구독 서비스', '배송 정보', '리뷰'],
    designNotes: '신선함과 자연스러움을 표현하는 따뜻한 색상. 상품 사진을 크게 노출하고 스토리 전달.',
  },
  {
    id: 'service-1',
    projectType: 'service' as const,
    name: '디자인 스튜디오 소개',
    description: '크리에이티브 에이전시의 포트폴리오 + 서비스 소개.',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=300&fit=crop',
    category: '크리에이티브',
    pages: ['홈', '서비스', '포트폴리오', '팀', '블로그', '문의'],
    features: ['포트폴리오 갤러리', '프로젝트 케이스', '팀 소개', '블로그', '문의 폼', '소셜 링크'],
    designNotes: '창의적이고 모던한 디자인. 대담한 타이포그래피와 큰 시각적 요소로 주목 집중.',
  },
  {
    id: 'service-2',
    projectType: 'service' as const,
    name: '헬스장 서비스 소개',
    description: '피트니스 센터의 시설, 클래스, 강사 소개.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&h=300&fit=crop',
    category: '헬스/피트니스',
    pages: ['홈', '시설 소개', '클래스/프로그램', '강사 소개', '가격', '회원가입', '일정'],
    features: ['클래스 일정표', '강사 프로필', '시설 갤러리', '회원 가입', '온라인 예약', '뉴스'],
    designNotes: '활기차고 에너지 넘치는 색상. 운동하는 사람들의 이미지로 동기 부여와 신뢰감 표현.',
  },
  {
    id: 'service-3',
    projectType: 'service' as const,
    name: '부동산 중개소',
    description: '부동산 중개 서비스 소개 및 매물 검색.',
    image: 'https://images.unsplash.com/photo-1560448204-e02f7cbb8f0c?w=500&h=300&fit=crop',
    category: '부동산',
    pages: ['홈', '매물 검색', '매물 상세', '지역정보', '중개사 소개', '문의'],
    features: ['매물 검색/필터', '지도 연동', '360도 투어', '중개사 정보', '상담 신청', '찜 기능'],
    designNotes: '신뢰감 있고 깔끔한 디자인. 매물 사진을 크게 표시하고 검색 기능을 강조.',
  },
  {
    id: 'portfolio-1',
    projectType: 'portfolio' as const,
    name: '사진작가 포트폴리오',
    description: '전문 사진작가의 작품을 전시하는 갤러리.',
    image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=500&h=300&fit=crop',
    category: '사진',
    pages: ['홈', '포트폴리오', '카테고리별 작품', '약력', '문의'],
    features: ['이미지 갤러리', '라이트박스', '카테고리 필터', '작품 상세정보', '연락처', '소셜 링크'],
    designNotes: '사진을 돋보이게 하는 미니멀 배경. 어두운 색상으로 이미지의 색감을 극대화.',
  },
  {
    id: 'portfolio-2',
    projectType: 'portfolio' as const,
    name: '개발자 포트폴리오',
    description: '웹 개발자의 프로젝트 포트폴리오 및 이력서.',
    image: 'https://images.unsplash.com/photo-1633356713697-e86fab4cabcd?w=500&h=300&fit=crop',
    category: '개발',
    pages: ['홈', '프로젝트', '기술 스택', '경력', '블로그', '문의'],
    features: ['프로젝트 전시', '기술 카테고리', '깃허브 링크', '블로그', '이력서 다운로드', 'CTA 버튼'],
    designNotes: '현대적이고 깔끔한 기술자 이미지. 코드 스타일의 배경과 깔끔한 타이포그래피.',
  },
  {
    id: 'portfolio-3',
    projectType: 'portfolio' as const,
    name: '일러스트레이터 갤러리',
    description: '디지털 아트 및 일러스트 작품 전시.',
    image: 'https://images.unsplash.com/photo-1579783902614-e3fb5141b0cb?w=500&h=300&fit=crop',
    category: '미술',
    pages: ['홈', '작품 갤러리', '시리즈별', '의뢰/협력', '소개', '문의'],
    features: ['작품 갤러리', '확대 뷰', '가격 정보', '커미션 요청', '소셜 피드', '뉴스레터'],
    designNotes: '창의적이고 다채로운 색상. 작품의 개성을 드러내면서도 통일된 브랜드 이미지 유지.',
  },
  {
    id: 'booking-1',
    projectType: 'booking' as const,
    name: '호텔 예약 플랫폼',
    description: '숙박시설 예약 시스템.',
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=500&h=300&fit=crop',
    category: '관광/숙박',
    pages: ['홈', '검색', '호텔 상세', '객실 선택', '결제', '예약 확인', '마이페이지'],
    features: ['날짜 검색', '지도 필터', '객실 선택', '결제 시스템', '예약 확인', '리뷰 시스템'],
    designNotes: '여행의 즐거움을 표현하는 따뜻한 톤. 큰 이미지와 간단한 검색 프로세스.',
  },
  {
    id: 'booking-2',
    projectType: 'booking' as const,
    name: '미용 서비스 예약',
    description: '뷰티 살롱의 온라인 예약 시스템.',
    image: 'https://images.unsplash.com/photo-1552133573-44f45270e29f?w=500&h=300&fit=crop',
    category: '뷰티',
    pages: ['홈', '서비스 선택', '시술사 선택', '일정 선택', '결제', '예약 확인'],
    features: ['서비스 카테고리', '시술사 프로필', '실시간 예약', '결제 연동', '리마인더 알림', '후기'],
    designNotes: '우아하고 세련된 분위기. 밝은 핑크와 흰색으로 신뢰감과 전문성 표현.',
  },
  {
    id: 'booking-3',
    projectType: 'booking' as const,
    name: '렌터카 예약 시스템',
    description: '자동차 렌탈 서비스의 온라인 예약 플랫폼.',
    image: 'https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=500&h=300&fit=crop',
    category: '교통',
    pages: ['홈', '차량 검색', '차량 상세', '예약 정보', '결제', '예약 확인'],
    features: ['차량 검색/필터', '가격 비교', '보험 옵션', '픽업/반납', '결제', '예약 관리'],
    designNotes: '신뢰감 있고 전문적인 톤. 차량 이미지를 크게 표시하고 명확한 가격 정보.',
  },
  {
    id: 'community-1',
    projectType: 'community' as const,
    name: '취미 커뮤니티',
    description: '공통 관심사를 가진 사람들의 소통 커뮤니티.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop',
    category: '소셜',
    pages: ['홈', '포럼', '사용자 프로필', '그룹', '메시지', '이벤트'],
    features: ['포럼 시스템', '사용자 프로필', '직접 메시징', '그룹 생성', '이벤트 관리', '검색'],
    designNotes: '활기차고 커뮤니티 느낌의 디자인. 사용자 생성 콘텐츠를 강조.',
  },
  {
    id: 'community-2',
    projectType: 'community' as const,
    name: '학습 커뮤니티',
    description: '지식 공유와 질문 답변 교육 커뮤니티.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop',
    category: '교육',
    pages: ['홈', '질문 목록', '질문 상세', '토론', '사용자 프로필', '랭킹'],
    features: ['질문/답변 시스템', '댓글 기능', '평점 투표', '사용자 뱃지', '검색', '카테고리'],
    designNotes: '교육적이고 신뢰감 있는 톤. 명확한 콘텐츠 구조와 쉬운 네비게이션.',
  },
  {
    id: 'community-3',
    projectType: 'community' as const,
    name: '비즈니스 네트워킹',
    description: '전문가들이 연결되고 협업하는 B2B 커뮤니티.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop',
    category: '비즈니스',
    pages: ['홈', '전문가 검색', '프로필', '프로젝트', '메시지', '이벤트'],
    features: ['전문가 검색', '상세 프로필', '프로젝트 공고', '직접 메시징', '평판 시스템', '이벤트'],
    designNotes: '프로페셔널하고 신뢰감 있는 디자인. 비즈니스 색상과 명확한 정보 구조.',
  },
] as const
