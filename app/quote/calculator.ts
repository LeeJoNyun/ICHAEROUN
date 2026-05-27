import { PRICING, PAGE_PRICING, ADDON_PRICING, DURATION_ESTIMATE, PAYMENT_TERMS, PROJECT_TYPES } from './constants'

export interface QuoteParams {
  projectType: keyof typeof PROJECT_TYPES
  additionalPages: number
  addons: (keyof typeof ADDON_PRICING)[]
}

export interface QuoteResult {
  // 기본 정보
  projectName: string
  projectType: string
  basePrice: number
  pageCost: number
  addonsCost: number

  // 총액
  subtotal: number

  // 결제 조건
  deposit: number
  mid: number
  final: number

  // 기간
  devDuration: number
  totalDuration: number

  // 상세 내역
  details: {
    pages: number
    addons: { name: string; price: number }[]
  }
}

export function calculateQuote(params: QuoteParams): QuoteResult {
  const projectType = PROJECT_TYPES[params.projectType]
  if (!projectType) {
    throw new Error('Invalid project type')
  }

  // 기본 페이지 수
  let totalPages: number = projectType.pages
  if (params.projectType === 'custom') {
    totalPages = Math.max(5, params.additionalPages)
  } else {
    totalPages += params.additionalPages
  }

  // 1. 기본 가격 계산
  let basePrice = 0
  let pageCost = 0

  if (params.projectType === 'custom') {
    // 커스텀: 페이지당 계산
    const pricePerPage = totalPages <= 5 ? PAGE_PRICING.basic : PAGE_PRICING.standard
    basePrice = totalPages * pricePerPage
  } else {
    // 프리셋: 기본 가격 + 추가 페이지 요금
    const isStandard = projectType.type === 'standard'
    const pricing = isStandard ? PRICING.standard : PRICING.basic
    basePrice = pricing.basePrice

    if (totalPages > pricing.pages) {
      const extraPages = totalPages - pricing.pages
      const pricePerPage = isStandard ? PAGE_PRICING.standard : PAGE_PRICING.basic
      pageCost = extraPages * pricePerPage
    }
  }

  // 2. 추가 기능 가격
  let addonsCost = 0
  const addonsDetail = params.addons
    .map(addon => ({
      name: getAddonName(addon),
      price: ADDON_PRICING[addon],
    }))
    .filter(addon => addon.price > 0)

  addonsCost = addonsDetail.reduce((sum, addon) => sum + addon.price, 0)

  // 3. 소계
  const subtotal = basePrice + pageCost + addonsCost

  // 4. 결제 조건
  const deposit = Math.round(subtotal * PAYMENT_TERMS.deposit)
  const mid = Math.round(subtotal * PAYMENT_TERMS.mid)
  const final = subtotal - deposit - mid

  // 5. 기간 추정
  let devDuration = 0
  let totalDuration = 0

  if (params.projectType === 'custom') {
    const isStandard = totalPages > 7
    devDuration = isStandard ? DURATION_ESTIMATE.standard.dev : DURATION_ESTIMATE.basic.dev
    totalDuration = isStandard ? DURATION_ESTIMATE.standard.total : DURATION_ESTIMATE.basic.total
  } else {
    const isStandard = projectType.type === 'standard'
    devDuration = isStandard ? DURATION_ESTIMATE.standard.dev : DURATION_ESTIMATE.basic.dev
    totalDuration = isStandard ? DURATION_ESTIMATE.standard.total : DURATION_ESTIMATE.basic.total
  }

  // 추가 기능별 기간 추가
  params.addons.forEach(addon => {
    const addonDuration = DURATION_ESTIMATE.perAddon[addon as keyof typeof DURATION_ESTIMATE.perAddon]
    if (addonDuration) {
      devDuration += addonDuration
      totalDuration += addonDuration
    }
  })

  return {
    projectName: projectType.name,
    projectType: params.projectType,
    basePrice,
    pageCost,
    addonsCost,
    subtotal,
    deposit,
    mid,
    final,
    devDuration,
    totalDuration,
    details: {
      pages: totalPages,
      addons: addonsDetail,
    },
  }
}

function getAddonName(addon: keyof typeof ADDON_PRICING): string {
  const names = {
    payment: '결제 시스템 연동',
    userSystem: '회원 시스템',
    admin: '관리자 대시보드',
    apiIntegration: 'API 연동 (네이버/카카오)',
    realTimeChat: '실시간 채팅',
    seo: 'SEO 최적화',
  }
  return names[addon] || addon
}

export function formatPrice(price: number): string {
  return `₩${price.toLocaleString('ko-KR')}`
}

export function formatDuration(days: number): string {
  const weeks = Math.ceil(days / 7)
  return `${days}일 (약 ${weeks}주)`
}
