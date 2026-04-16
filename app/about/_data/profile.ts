export type Highlight = {
	title: string;
	metric?: string;
	detail?: string;
};

export type Career = {
	company: string;
	title: string;
	period: string;
	career_summary: string[];
};

export type Project = {
	id: string;
	name: string;
	subtitle?: string;
	period?: string;
	role?: string;
	customerSummary?: string;
	highlights: string[];
	tech?: string[];
	metrics?: string[];
};

export type SkillGroup = {
	group: string;
	items: string[];
};

export type ExternalLink = {
	label: string;
	href: string;
};

export type AboutProfile = {
	version: string;
	name: string;
	email: string;
	roleTitle: string;
	roleSubtitle: string;
	startDate: string;
	location: string;
	githubLabel: string;
	githubUrl: string;
	portraitUrl: string;
	tagline: string;
	summary: string[];
	highlights: Highlight[];
	career: Career[];
	projects: Project[];
	skills: SkillGroup[];
	links: ExternalLink[];
};

export const aboutProfile: AboutProfile = {
	version: 'v2.4.0-stable',
	name: '전윤호',
	email: 'wjse213@gmail.com',
	roleTitle: 'Backend Developer',
	roleSubtitle: 'Python 백엔드 / DevOps 엔지니어',
	startDate: '2021-12',
	location: '경기도 성남시',
	githubLabel: 'github.com/yunhoJ',
	githubUrl: 'https://github.com/yunhoJ',
	portraitUrl: '/images/resume.JPG',
	tagline: '운영 가능한 시스템을 만드는 백엔드/DevOps 엔지니어',

	summary: [
		'현재 상황과 문제에 따라 적합한 기술을 선택하고 근거와 트레이드오프를 설명할 수 있는 개발자입니다.',
		'',
		'보안 솔루션(AEZIZ)의 설계부터 개발, 금융권 배포, 유지보수까지 전 과정을 직접 경험하며 성공적으로 릴리즈하고 고도화했습니다.',
		'Jenkins 기반 CI/CD와 폐쇄망 환경 배포 자동화 스크립트를 구축하여 패키징과 배포 공수를 70%이상 단축시켰으며 백엔드 리팩토링을 통해 API의 안정성과 성능을 개선했습니다.',
	],
	highlights: [
		{
			title: '조회 API 성능 개선',
			metric: '2분 → 1초로 단축',
			detail: '현황 조회 API 최적화로 응답 시간을 대폭 단축',
		},
		{
			title: 'SBOM 처리 최적화',
			metric: '병렬 처리로 성능 최적화',
			detail: '멀티스레딩 기반 SBOM 파일 분석 최적화',
		},
		{
			title: '사내 DevOps 아키텍처 구성',
			detail:
				'사내 DevOps 아키텍처를 설계 및 구축하고 개발, 테스트, 운영 서버 환경의 자동화를 구성',
		},
		{
			title: '점검 범위 확장을 위한 기술 분석 및 개발 리드',
			detail:
				"ELF, PE, RPM 등 다양한 바이너리 기술 분석을 통해 점검 범위를 확장하고 관련 기능 개발을 리드",
		},
		{
			title: '누락 트래픽 방지',
			detail: 'Kafka 도입으로 Nexus 웹훅 이벤트 누락 방지',
		},
		{
			title: '누락 로그 방지',
			detail: '로그 유형별 분리 + 수집 프로세스 구축으로 누락 로그 방지',
		},
	],
	career: [
		{
			company: '쿤텍 주식회사',
			title: '백엔드 개발자 (선임연구원)',
			period: '2021.12 ~ 재직중',
			career_summary: [
				'공급망 보안 솔루션(AEZIZ) 백엔드 개발, DevOps 리드 및 인프라 관리',
				'AEZIZ-SCM 기술분석 및 점검 확장 개발을 주도',
				'AEZIZ 2.0 고도화 프로젝트 백엔드 개발 및 핵심 구조 개선',
				'결재, 점검, 알림등 주요 기능 설계 및 중복 요청 방지 처리',
				'금융, 공공기관 대상 보안 솔루션 구축 및 고객사 배포/운영 담당',
				'주요 고객사 : 교보증권, 국민은행, 농협중앙회,농협은행, 라이나생명, 미래에셋증권, 사이버작전사령부, 수협은행, 신한은행, 우리카드, 현대카드, 하나은행, KISA 등',
			],
		},
	],
	projects: [
		{
			id: 'aeziz-sca',
			name: 'AEZIZ-SCA',
			period: '2023.02 ~ 유지보수중',
			role: '백엔드',
			subtitle: 'Software Composition Analysis',
			highlights: [
				'FastAPI 기반 백엔드 API 설계/구현 (약 200개 엔드포인트)',
				'결재 워크플로우(요청, 승인, 일괄승인, 검토, 반려, 재상신, 승인회수, 요청취소) 로직 구현',
				'레디스 기반 데이터 캐시 구축으로 API 성능 개선 (10초 -> 0.1초로 단축)',
				'WebSocket 기반 실시간 점검 상태 전송 기능 구현',
				'청크 업로드 로직 적용으로 대용량 데이터 처리 시 서버 부하 감소',
				'데코레이터 기반 알림 설계 및 구현으로 재사용성 향상',
				'현황 조회 API 속도 개선 (인덱스 적용 및 불필요 조인 제거로 응답 시간을 2분 -> 1초로 단축)',
				'고객사 연동: SSO, DRM, TS-Engine, SMTP 메일, 고객사 알림 시스템 연동',
			],
			metrics: ['현황조회 API 응답 2분 → 1초로 단축'],
		},
		{
			id: 'aeziz-scm',
			name: 'AEZIZ-SCM',
			period: '2024.04 ~ 확장 개발중',
			role: '백엔드 리드 개발',
			subtitle: 'Supply Chain Management',
			highlights: [
				'ELF, PE, RPM등 공급망관리 점검 확장을 위해 바이너리 분석 및 메타데이터 추출, 위험식별 로직 구현',
				'분석 데이터의 구조와 핵심 지표를 정의하고 사용자에게 보여줄 결과 기준을 수립',
				'GPG 키 스토어 연동 및 DB 기반 키 관리, GPG 서명 검증 기능 구현',
				'바이너리 분석 데이터 확장에 따른 DB 스키마 확장 설계',
				'멀티스레딩 기반 SBOM 변환과 비교 처리 성능을 최적화',
				'Celery 기반 비동기 점검 파이프라인 구축으로 대용량 분석 안정성 확보',
			],
			metrics: [
				'SBOM 분석 병렬처리 성능 최적화',
				'Celery 기반 점검 안정성 확보',
				'Supply Chain 리드 개발',
			],
		},

		{
			id: 'aeziz-rms',
			name: 'AEZIZ-RMS',
			period: '2024.08 ~ 2025.02 (약 6개월)',
			role: '백엔드/DevOps',
			subtitle: 'Repository Management System',
			highlights: [
				'망연계 환경 대응 AEZIZ-RMS 아키텍처 설계',
				'오픈소스 패키지 반입 결재 및 반입 로직 개발',
				'Nexus 웹훅 처리를 Kafka 기반 큐로 전환해 누락 트래픽을 방지',
				'Watchdog/APScheduler 기반 스케줄링 구현으로 반입 패키지 사용자 추적',
				'Skopeo를 활용해 컨테이너 내에서 Nexus 저장소로 이미지 푸시',
			],
		},
		{
			id: 'aeziz-platform',
			name: 'AEZIZ-DevOps',
			period: '2023.02 ~ 유지보수중',
			role: 'DevOps (리드)',
			subtitle: '오픈소스 보안 점검 솔루션 DevOps',
			highlights: [
				'개발, QA, 운영 서버 GitOps 설계 및 Jenkins 기반 CI/CD 파이프라인 구축',
				'이미지 빌드, 배포 프로세스를 표준화하고 컨테이너 기반 배포 환경 구축',
				'Jenkins Shared Library로 공통 로직을 모듈화하고 파이프라인 중복 제거',
				'CVE 자동 검사 파이프라인 구축으로 배포 전 취약점 조기 탐지',
				'폐쇄망 환경기반 배포 자동화 스크립트로 배포시간 단축 및 안정성 향상',
				'모의해킹 및 주요정보통신기반시설 취약점 진단 결과 기반 조치 반영',
				'Podman/Docker rootless 도입으로 컨테이너 실행 보안 강화',
				'Nginx 리버스 프록시 구성 및 사설인증서 기반 SSL/TLS 적용(정책에 맞는 암호 스위트 설정)',
				'민감정보 암·복호화 적용',
			],
			metrics: ['사내 DevOps 환경 설계 및 구축 주도'],
		},
		{
			id: 'cyber-battlefield',
			name: '사이버 전장 체계 관리',
			subtitle: '자산 관리 및 취약점 점검 플랫폼',
			period: '2024.10 ~ 2025.07 (약 9개월)',
			role: '백엔드',
			highlights: [
				'유지보수 및 확장성 개선을 위해 백엔드 아키텍처 리팩토링 및 설계',
				'에러코드 기반 공통 에러 처리 구조 도입으로 안정성 향상',
				'공통 필터/함수 모듈화로 재사용성 향상, 엔티티 + Pydantic 결합으로 검증 강화',
				'멀티프로세스 로그 중앙화(QueueHandler + 로그 수집 프로세스)',
				'트랜잭션 처리 구조 개선: 자동 rollback/commit 제어 구현',
			],
		},

		{
			id: 'ai-engineer',
			name: 'AI Platform(Dataiku) 엔지니어',
			period: '2022.01 ~ 2022.12 (약 12개월)',
			role: 'AI Platform 엔지니어',
			highlights: [
				'AWS/Azure 기반 Dataiku 솔루션 인프라 구축',
				'S3,Snowflake, EKS, Spark등 연동 구현',
				'LG화학 AI Platform 도입 검증 및 데이터/모델 파이프라인 구축',
				'주요 고객사: 한화솔루션, SK디스커버리, LG화학, 한국자동차연구원 등',
			],
		},
	],
	skills: [
		{
			group: 'Language',
			items: ['Python', 'JAVA', 'JavaScript', 'TypeScript'],
		},

		{
			group: 'Databases',
			items: ['MariaDB', 'PostgreSQL', 'Oracle', 'Redis', 'Supabase'],
		},
		{
			group: 'Backend',
			items: [
				'FastAPI',
				'Gunicorn',
				'Pydantic',
				'SQLAlchemy',
				'Celery',
				'Spring',
				'Prisma',
				'Kafka',
				'Socket',
			],
		},
		{
			group: 'Frontend',
			items: ['React', 'NextJS'],
		},
		{
			group: 'DevOps & Infra',
			items: ['Docker', 'Podman', 'Jenkins', 'github actions', 'Nginx', 'Harbor', 'AWS', 'Vercel'],
		},
	],
	links: [
		{ label: 'Email', href: 'mailto:wjse@gmail.com' },
		{ label: 'GitHub', href: 'https://github.com/yunhoJ' },
	],
};
