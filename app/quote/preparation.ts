import { ADDON_PRICING } from './constants'

export interface PreparationItem {
  category: string
  items: string[]
}

// 기본 준비 항목 (모든 프로젝트)
const BASIC_PREPARATION: PreparationItem[] = [
  {
    category: '콘텐츠 준비',
    items: [
      '회사/서비스 로고 (PNG, SVG)',
      '사이트에 들어갈 텍스트 및 설명',
      '필요한 사진/이미지 (최소 해상도 1200x800px)',
    ],
  },
  {
    category: '기술 준비',
    items: [
      '도메인 이름 결정 (있으면 소유권 확인)',
      '호스팅 서버 (당사 추천: Vercel 무료 플랜)',
    ],
  },
]

// 추가 기능별 준비 항목
const ADDON_PREPARATION: Record<keyof typeof ADDON_PRICING, PreparationItem[]> = {
  payment: [
    {
      category: '결제 시스템 준비',
      items: [
        'Stripe 또는 Toss 개발자 계정 (당사가 도움)',
        '결제 정책 및 약관 준비',
        '환불 정책 결정',
      ],
    },
  ],
  userSystem: [
    {
      category: '회원 시스템 준비',
      items: [
        '회원가입 시 필요한 정보 결정',
        '개인정보처리방침 작성',
        '이메일/SMS 발송 서비스 계정 (필요시)',
      ],
    },
  ],
  admin: [
    {
      category: '관리자 대시보드 준비',
      items: [
        '관리할 데이터 항목 정의',
        '통계/리포트 필요 항목 결정',
        '관리자 권한 레벨 결정',
      ],
    },
  ],
  apiIntegration: [
    {
      category: 'API 연동 준비',
      items: [
        '네이버/카카오 비즈니스 계정 생성 (2-3주 소요)',
        'API 키 및 Secret 발급 준비',
        '연동하려는 서비스의 문서 검토',
      ],
    },
  ],
  realTimeChat: [
    {
      category: '실시간 채팅 준비',
      items: [
        '채팅 서비스 계정 (Drift, Intercom 등)',
        '고객 응대 팀 배정',
        '채팅 운영 시간 결정',
      ],
    },
  ],
  seo: [
    {
      category: 'SEO 최적화 준비',
      items: [
        '타겟 키워드 리스트 준비',
        'Google Search Console 및 Analytics 계정',
        '메타 설명, 관련 텍스트 콘텐츠 준비',
      ],
    },
  ],
}

export function getPreparationItems(addons: (keyof typeof ADDON_PRICING)[]): PreparationItem[] {
  let items = [...BASIC_PREPARATION]

  addons.forEach(addon => {
    const addonItems = ADDON_PREPARATION[addon]
    if (addonItems) {
      items = items.concat(addonItems)
    }
  })

  return items
}

export function formatPreparationText(addons: (keyof typeof ADDON_PRICING)[]): string {
  const items = getPreparationItems(addons)
  let text = ''

  items.forEach(item => {
    text += `\n${item.category}:\n`
    item.items.forEach(i => {
      text += `  • ${i}\n`
    })
  })

  return text
}
