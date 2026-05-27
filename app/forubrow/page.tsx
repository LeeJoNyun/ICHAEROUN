const HERO_IMAGE = "/teacher.jpg";

const WORKS = [
  {
    image:
      "https://ldb-phinf.pstatic.net/20260318_195/1773836607376sSBMH_JPEG/KakaoTalk_20260312_230455796_02.jpg?type=f750_420_60_sharpen",
    alt: "브로우 왁싱 결과",
    service: "Brow Waxing",
    review:
      "원장님이 정말 꼼꼼하게 봐주세요. 1:1로 진행되니까 조용하고 편하게 받았어요. 결과물도 너무 자연스럽고 만족합니다.",
    author: "김O경",
    visit: "재방문 5회",
  },
  {
    image:
      "https://ldb-phinf.pstatic.net/20260327_37/1774606651018KRJyF_JPEG/copy_FE8FBB54-42F5-4214-B0DE-23737F8F6F87.jpeg?type=f750_420_60_sharpen",
    alt: "디자인 브로우",
    service: "Brow Design",
    review:
      "여러 곳 다녀봤는데 여기가 제일 잘 어울리게 잡아주세요. 얼굴형 보고 디자인 추천해주시는 게 다른 곳이랑 달라요.",
    author: "이O연",
    visit: "첫 방문",
  },
  {
    image:
      "https://ldb-phinf.pstatic.net/20260318_294/1773836607739fbmy3_JPEG/KakaoTalk_20260312_230743676_06.jpg?type=f750_420_60_sharpen",
    alt: "속눈썹 펌 결과",
    service: "Lash Perm",
    review:
      "속눈썹 펌 받으러 갔다가 브로우까지 했는데 둘 다 너무 마음에 들어요. 매장도 깨끗하고 분위기가 좋아요.",
    author: "박O진",
    visit: "재방문 2회",
  },
];

const SERVICES = [
  {
    name: "브로우 왁싱",
    desc: "고객님마다 다른 눈매에 맞춰 컬·결·라인을 디자인합니다. 단순한 털 제거가 아닌, 얼굴을 바꾸는 브로우.",
    duration: "약 40분",
    tag: "시그니처",
  },
  {
    name: "속눈썹 펌",
    desc: "자연스러운 컬과 들뜸 없는 마무리. 민감한 눈가에도 부담 없는 저자극 솔루션을 사용합니다.",
    duration: "약 60분",
    tag: "베스트",
  },
  {
    name: "페이스 · 바디 왁싱",
    desc: "피부가 예민한 분도 가능한 저자극 왁싱. 1회 사용 원칙의 위생 소모품으로 안심하고 받으실 수 있어요.",
    duration: "30~80분",
    tag: "토탈케어",
  },
];

const RATING = 4.9;
const REVIEW_COUNT = 47;

const NAVER_PLACE_ID = "0000000000";
function getNaverReviewUrl() {
  const d = new Date();
  const pad = (n: number) => String(n).padStart(2, "0");
  const ts = `${d.getFullYear()}${pad(d.getMonth() + 1)}${pad(d.getDate())}${pad(d.getHours())}${pad(d.getMinutes())}`;
  const q = encodeURIComponent("포유브로우");
  return `https://pcmap.place.naver.com/place/${NAVER_PLACE_ID}/review?bk_query=${q}&entry=bmp&fromPanelNum=2&locale=ko&searchText=${q}&svcName=map_pcv5&timestamp=${ts}`;
}
const NAVER_MAP_ENABLED = process.env.NEXT_PUBLIC_NAVER_MAP_ENABLED === "true";
const STATIC_MAP_URL = NAVER_MAP_ENABLED ? "/api/map" : null;

export default function ForYouBrowPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* ───────────────────────── Top Bar ───────────────────────── */}
      <header className="border-b border-line">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#" aria-label="포유브로우 홈" className="flex items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo.svg"
              alt="For U Brow"
              className="h-16 w-auto mix-blend-darken md:h-20"
            />
          </a>
          <a
            href="tel:010-1234-5678"
            className="hidden sm:inline text-sm text-muted hover:text-foreground transition"
          >
            010 · 1234 · 5678
          </a>
        </div>
      </header>

      {/* ───────────────────────── Hero ───────────────────────── */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-[1.1fr_1fr] md:items-center md:py-24">
          <div>
            <div className="mb-6 inline-flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-muted">
              <span className="h-px w-8 bg-current" />
              Founder · 대표원장
            </div>
            <h1 className="font-serif text-5xl leading-[1.05] md:text-7xl">
              한 시간,
              <br />
              한 분의 결.
              <span className="mt-4 block font-sans text-base font-light tracking-[0.04em] text-muted md:text-lg">
                12년차 대표원장 · 직접 시술
              </span>
            </h1>
            <p className="mt-8 max-w-md text-base leading-relaxed text-muted md:text-lg">
              공장형 시술이 아닌 <strong className="font-medium text-foreground">1:1 프라이빗 예약제</strong>로
              운영합니다. 상담부터 마무리까지 대표원장이 직접 봐드리고, 모든 소모품은
              1회 사용 원칙. 피부가 예민한 분도 안심할 수 있는 저자극 위생 시술.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="https://booking.naver.com/booking/13/bizes/0000000"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-accent px-8 py-4 text-sm tracking-wide text-background transition hover:opacity-90"
              >
                네이버 예약하기
              </a>
              <a
                href="tel:010-1234-5678"
                className="inline-flex items-center justify-center rounded-full border border-line px-8 py-4 text-sm tracking-wide text-foreground transition hover:bg-line/40"
              >
                전화 문의
              </a>
            </div>
            <div className="mt-12 flex items-center gap-6 text-sm text-muted">
              <div className="flex items-center gap-2">
                <span className="font-serif text-2xl text-foreground">
                  {RATING}
                </span>
                <span aria-hidden>★★★★★</span>
              </div>
              <div className="h-4 w-px bg-line" />
              <div>방문자 리뷰 {REVIEW_COUNT}</div>
              <div className="h-4 w-px bg-line" />
              <div>1:1 예약제</div>
            </div>
          </div>

          <div className="relative aspect-[4/5] overflow-hidden rounded-sm shadow-[0_30px_60px_-30px_rgba(58,42,31,0.35)]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={HERO_IMAGE}
              alt="포유브로우 대표 시술"
              referrerPolicy="no-referrer"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* ───────────────────────── Marquee ribbon ───────────────────────── */}
      <section className="border-y border-line bg-foreground/[0.03]">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-6 px-6 py-5 text-xs uppercase tracking-[0.2em] text-muted">
          <span>· 1:1 프라이빗 예약제</span>
          <span>· 12년차 대표원장 직접 시술</span>
          <span>· 저자극 위생 시술</span>
          <span>· 지하 주차 3시간 무료</span>
        </div>
      </section>

      {/* ───────────────────────── About ───────────────────────── */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-12 md:grid-cols-[1fr_1.4fr] md:gap-20">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-muted">
              About
            </div>
            <h2 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">
              한 분, 한 분의 결을
              <br />
              읽습니다.
            </h2>
          </div>
          <div className="space-y-6 text-[15px] leading-loose text-foreground/85">
            <p>
              포유브로우는 공장형 시술이 아닌
              <strong className="font-medium"> 100% 1:1 예약제</strong>로
              운영됩니다. 12년차 대표원장이 상담부터 마무리까지 직접 시술하며,
              한 시간에 한 분만 받습니다.
            </p>
            <p>
              모든 소모품은 1회 사용을 원칙으로 합니다. 피부가 예민한 분도
              부담 없이 받을 수 있는 저자극 왁싱을 사용해, 시술 후의 안정감까지
              디자인합니다.
            </p>
            <p className="text-muted">
              출산휴가 후, 새로운 공간에서 다시 시작합니다. 익숙한 분들도,
              처음 오시는 분들도 천천히 모시겠습니다.
            </p>
          </div>
        </div>
      </section>

      {/* ───────────────────────── Services ───────────────────────── */}
      <section className="border-t border-line bg-foreground/[0.02]">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="mb-16 flex items-end justify-between">
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-muted">
                Menu
              </div>
              <h2 className="mt-4 font-serif text-4xl md:text-5xl">시술 메뉴</h2>
            </div>
            <a
              href="https://booking.naver.com/booking/13/bizes/0000000"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden text-sm text-muted hover:text-foreground sm:inline"
            >
              가격 보기 →
            </a>
          </div>

          <div className="grid gap-px overflow-hidden rounded-sm bg-line md:grid-cols-3">
            {SERVICES.map((s) => (
              <article
                key={s.name}
                className="flex flex-col justify-between bg-background p-10 transition hover:bg-foreground/[0.02]"
              >
                <div>
                  <div className="text-[10px] uppercase tracking-[0.3em] text-muted">
                    {s.tag}
                  </div>
                  <h3 className="mt-3 font-serif text-2xl md:text-3xl">
                    {s.name}
                  </h3>
                  <p className="mt-5 text-sm leading-relaxed text-foreground/75">
                    {s.desc}
                  </p>
                </div>
                <div className="mt-10 flex items-center justify-between border-t border-line pt-5 text-xs tracking-wide text-muted">
                  <span>{s.duration}</span>
                  <span>예약 상담</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────────── Works × Reviews ───────────────────────── */}
      <section className="border-t border-line bg-foreground/[0.02]">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-muted">
                Works · Voice
              </div>
              <h2 className="mt-4 font-serif text-4xl md:text-5xl">
                작업과 후기
              </h2>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
                실제 시술 결과와 방문해주신 분들의 이야기.
                <br />
                네이버 플레이스 기준 평점 {RATING} · 리뷰 {REVIEW_COUNT}건.
              </p>
            </div>
            <div className="flex items-center gap-3 text-right text-sm text-muted">
              <div className="font-serif text-3xl text-foreground">
                {RATING}
              </div>
              <div className="leading-snug">
                <div aria-hidden>★★★★★</div>
                <div className="text-xs">방문자 리뷰 {REVIEW_COUNT}건</div>
              </div>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {WORKS.map((w, i) => (
              <article
                key={i}
                className="flex flex-col overflow-hidden rounded-sm border border-line bg-background"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={w.image}
                    alt={w.alt}
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover transition duration-700 hover:scale-[1.03]"
                  />
                  <div className="absolute left-4 top-4 inline-flex items-center rounded-full bg-background/85 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-foreground backdrop-blur-sm">
                    {w.service}
                  </div>
                </div>
                <div className="flex flex-1 flex-col justify-between p-7">
                  <p className="text-[14px] leading-loose text-foreground/85 before:mr-1 before:font-serif before:text-xl before:text-muted before:content-['“'] after:ml-1 after:font-serif after:text-xl after:text-muted after:content-['”']">
                    {w.review}
                  </p>
                  <footer className="mt-6 flex items-center justify-between border-t border-line pt-4 text-xs text-muted">
                    <span>{w.author}</span>
                    <span>{w.visit}</span>
                  </footer>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a
              href={getNaverReviewUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted underline-offset-4 hover:text-foreground hover:underline"
            >
              네이버 리뷰 전체 보기 →
            </a>
          </div>
        </div>
      </section>

      {/* ───────────────────────── Location ───────────────────────── */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-12 md:grid-cols-[1fr_1.3fr] md:gap-20">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-muted">
              Visit
            </div>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl">오시는 길</h2>
            <dl className="mt-10 space-y-6 text-sm">
              <div>
                <dt className="mb-1 text-xs uppercase tracking-wider text-muted">
                  주소
                </dt>
                <dd className="text-[15px] leading-relaxed">
                  서울특별시 강남구 테헤란로 123
                  <br />
                  샘플 빌딩 5F
                </dd>
              </div>
              <div>
                <dt className="mb-1 text-xs uppercase tracking-wider text-muted">
                  지하철
                </dt>
                <dd className="text-[15px]">
                  강남역 3번 출구에서 도보 5분
                </dd>
              </div>
              <div>
                <dt className="mb-1 text-xs uppercase tracking-wider text-muted">
                  주차
                </dt>
                <dd className="text-[15px]">
                  지하 주차장 3시간 무료
                </dd>
              </div>
              <div>
                <dt className="mb-1 text-xs uppercase tracking-wider text-muted">
                  연락처
                </dt>
                <dd className="text-[15px]">
                  <a
                    href="tel:010-1234-5678"
                    className="underline-offset-4 hover:underline"
                  >
                    010 · 1234 · 5678
                  </a>
                </dd>
              </div>
            </dl>
          </div>
          <a
            href={`https://map.naver.com/p/search/포유브로우/place/${NAVER_PLACE_ID}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex aspect-[4/3] flex-col items-center justify-center overflow-hidden rounded-sm border border-line bg-foreground/[0.03] transition hover:bg-foreground/[0.06]"
          >
            {STATIC_MAP_URL ? (
              <>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={STATIC_MAP_URL}
                  alt="포유브로우 위치 지도"
                  className="absolute inset-0 h-full w-full object-cover transition group-hover:scale-[1.02]"
                />
                <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-background/85 px-5 py-3 text-xs tracking-wide text-foreground backdrop-blur-sm">
                  <span>하계역 1번 출구 · 도보 450m</span>
                  <span className="text-muted group-hover:text-foreground">
                    네이버 지도 열기 →
                  </span>
                </div>
              </>
            ) : (
              <>
                <div
                  className="absolute inset-0 opacity-[0.04]"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(0deg, transparent, transparent 24px, currentColor 24px, currentColor 25px), repeating-linear-gradient(90deg, transparent, transparent 24px, currentColor 24px, currentColor 25px)",
                  }}
                />
                <svg
                  className="relative h-10 w-10 text-foreground/60 transition group-hover:scale-110"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <div className="relative mt-5 text-sm tracking-wide text-muted group-hover:text-foreground">
                  지도 앱으로 보기 →
                </div>
                <div className="relative mt-1 text-xs text-muted/80">
                  하계역 1번 출구 · 도보 450m
                </div>
              </>
            )}
          </a>
        </div>
      </section>

      {/* ───────────────────────── CTA ───────────────────────── */}
      <section className="border-t border-line bg-foreground/[0.03]">
        <div className="mx-auto max-w-6xl px-6 py-24 text-center">
          <div className="text-xs uppercase tracking-[0.3em] text-muted">
            Reservation
          </div>
          <h2 className="mt-6 font-serif text-4xl leading-tight text-foreground md:text-6xl">
            조용한 한 시간,
            <br />
            나에게 맞는 결.
          </h2>
          <p className="mx-auto mt-8 max-w-md text-sm leading-relaxed text-muted">
            하루 시술 인원이 제한되어 있어요.
            <br />
            원하시는 날짜가 있다면 미리 예약을 부탁드립니다.
          </p>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://booking.naver.com/booking/13/bizes/0000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-foreground px-10 py-4 text-sm tracking-wide text-background transition hover:opacity-90"
            >
              네이버 예약하기
            </a>
            <a
              href="tel:010-1234-5678"
              className="inline-flex items-center justify-center rounded-full border border-foreground/20 px-10 py-4 text-sm tracking-wide text-foreground transition hover:bg-foreground hover:text-background"
            >
              전화 문의
            </a>
          </div>
        </div>
      </section>

      {/* ───────────────────────── Footer (Studio Card / Dark) ───────────────────────── */}
      <footer className="bg-foreground text-background">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-12 md:grid-cols-[1.2fr_1fr_1fr]">
            <div>
              <div className="font-serif text-3xl tracking-wide md:text-4xl">
                For U Brow
              </div>
              <p className="mt-4 max-w-xs text-[13px] leading-relaxed text-background/70">
                12년차 대표원장의 1:1 프라이빗 예약제 브로우샵.
              </p>
              <a
                href="https://www.instagram.com/for_u_brow"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="For U Brow 인스타그램 @sample_brow"
                className="mt-8 inline-flex h-12 w-12 items-center justify-center rounded-full border border-background/30 text-background/80 transition hover:bg-background hover:text-foreground"
              >
                <svg
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
                </svg>
              </a>
            </div>

            <div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-background/50">
                Visit
              </div>
              <p className="mt-4 text-[13px] leading-relaxed text-background/85">
                서울특별시 강남구 테헤란로 123
                <br />
                샘플 빌딩 5F
                <br />
                <span className="text-xs text-background/60">
                  하계역 1번 출구 · 450m
                </span>
              </p>
              <div className="mt-6 text-[10px] uppercase tracking-[0.3em] text-background/50">
                Hours
              </div>
              <ul className="mt-3 space-y-1 text-[13px] text-background/85">
                <li>월–금 11:00 – 20:00</li>
                <li>토 11:00 – 18:00</li>
                <li>일 휴무</li>
              </ul>
            </div>

            <div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-background/50">
                Contact
              </div>
              <ul className="mt-4 space-y-2 text-[13px] text-background/85">
                <li>
                  <a href="tel:010-1234-5678" className="hover:underline">
                    010-1234-5678
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/for_u_brow"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    @sample_brow
                  </a>
                </li>
              </ul>
              <a
                href="https://booking.naver.com/booking/13/bizes/0000000"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center justify-center rounded-full bg-background px-6 py-3 text-xs tracking-wide text-foreground transition hover:opacity-90"
              >
                네이버 예약하기 →
              </a>
            </div>
          </div>

          <div className="mt-14 flex flex-col gap-2 border-t border-background/15 pt-6 text-xs text-background/55 md:flex-row md:items-center md:justify-between">
            <div>© 2026 포유브로우 · All rights reserved</div>
            <div>
              Designed &amp; Built with{" "}
              <span className="text-background/85">Stori</span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
