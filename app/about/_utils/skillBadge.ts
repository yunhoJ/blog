export type SkillBadge = {
	label: string;
	alt: string;
	/** Shields.io Flat — 라이트 배경용 (기본 왼쪽 라벨색) */
	src: string;
};

/** markdown-badges / Shields.io — UI에서는 Flat으로 통일 (README는 for-the-badge가 많음) */
const SHIELDS_STYLE = 'Flat';

/**
 * profile.ts `skills[].items` 문자열과 매칭.
 * 출처: https://github.com/Ileriayo/markdown-badges (동일 Shields.io 패턴, style만 Flat)
 */
const BADGE_MAP_CI: Record<string, SkillBadge> = {
	// --- Language (📋 Languages) ---
	PYTHON: {
		label: 'Python',
		alt: 'Python',
		src: `https://img.shields.io/badge/python-3670A0?style=${SHIELDS_STYLE}&logo=python&logoColor=ffdd54`,
	},
	JAVA: {
		label: 'Java',
		alt: 'Java',
		src: `https://img.shields.io/badge/java-%23ED8B00.svg?style=${SHIELDS_STYLE}&logo=openjdk&logoColor=white`,
	},
	JAVASCRIPT: {
		label: 'JavaScript',
		alt: 'JavaScript',
		src: `https://img.shields.io/badge/javascript-%23323330.svg?style=${SHIELDS_STYLE}&logo=javascript&logoColor=%23F7DF1E`,
	},
	TYPESCRIPT: {
		label: 'TypeScript',
		alt: 'TypeScript',
		src: `https://img.shields.io/badge/typescript-%23007ACC.svg?style=${SHIELDS_STYLE}&logo=typescript&logoColor=white`,
	},
	GO: {
		label: 'Go',
		alt: 'Go',
		src: `https://img.shields.io/badge/go-%2300ADD8.svg?style=${SHIELDS_STYLE}&logo=go&logoColor=white`,
	},

	// --- Databases (💾 Databases) ---
	MARIADB: {
		label: 'MariaDB',
		alt: 'MariaDB',
		src: `https://img.shields.io/badge/MariaDB-003545?style=${SHIELDS_STYLE}&logo=mariadb&logoColor=white`,
	},
	POSTGRES: {
		label: 'Postgres',
		alt: 'Postgres',
		src: `https://img.shields.io/badge/postgres-%23316192.svg?style=${SHIELDS_STYLE}&logo=postgresql&logoColor=white`,
	},
	POSTGRESQL: {
		label: 'PostgreSQL',
		alt: 'PostgreSQL',
		src: `https://img.shields.io/badge/postgres-%23316192.svg?style=${SHIELDS_STYLE}&logo=postgresql&logoColor=white`,
	},
	ORACLE: {
		label: 'Oracle',
		alt: 'Oracle',
		src: `https://img.shields.io/badge/Oracle-F80000?style=${SHIELDS_STYLE}&logo=oracle&logoColor=white`,
	},
	REDIS: {
		label: 'Redis',
		alt: 'Redis',
		src: `https://img.shields.io/badge/redis-%23DD0031.svg?style=${SHIELDS_STYLE}&logo=redis&logoColor=white`,
	},
	SUPABASE: {
		label: 'Supabase',
		alt: 'Supabase',
		src: `https://img.shields.io/badge/Supabase-3ECF8E?style=${SHIELDS_STYLE}&logo=supabase&logoColor=white`,
	},

	// --- Backend & API (📚 Frameworks — FastAPI, Pydantic, Celery, Spring / 🎋 ORM — SQLAlchemy) ---
	FASTAPI: {
		label: 'FastAPI',
		alt: 'FastAPI',
		src: `https://img.shields.io/badge/FastAPI-%23009688.svg?style=${SHIELDS_STYLE}&logo=fastapi&logoColor=white`,
	},
	PYDANTIC: {
		label: 'Pydantic',
		alt: 'Pydantic',
		src: `https://img.shields.io/badge/pydantic-%23E92063.svg?style=${SHIELDS_STYLE}&logo=pydantic&logoColor=white`,
	},
	SQLALCHEMY: {
		label: 'SQLAlchemy',
		alt: 'SQLAlchemy',
		src: `https://img.shields.io/badge/sqlalchemy-%23D71F00.svg?style=${SHIELDS_STYLE}&logo=sqlalchemy&logoColor=white`,
	},
	CELERY: {
		label: 'Celery',
		alt: 'Celery',
		src: `https://img.shields.io/badge/celery-%23a9cc54.svg?style=${SHIELDS_STYLE}&logo=celery&logoColor=ddf4a4`,
	},
	GUNICORN: {
		label: 'Gunicorn',
		alt: 'Gunicorn',
		src: `https://img.shields.io/badge/gunicorn-%23298729.svg?style=${SHIELDS_STYLE}&logo=gunicorn&logoColor=white`,
	},
	SPRING: {
		label: 'Spring',
		alt: 'Spring',
		src: `https://img.shields.io/badge/springboot-%236DB33F.svg?style=${SHIELDS_STYLE}&logo=springboot&logoColor=white`,
	},
	WATCHDOG: {
		label: 'Watchdog',
		alt: 'Watchdog',
		src: `https://img.shields.io/badge/Watchdog-3776AB?style=${SHIELDS_STYLE}&logo=python&logoColor=white`,
	},
	PRISMA: {
		label: 'Prisma',
		alt: 'Prisma',
		src: `https://img.shields.io/badge/Prisma-3982CE?style=${SHIELDS_STYLE}&logo=prisma&logoColor=white`,
	},
	// --- Messaging & Realtime ---
	KAFKA: {
		label: 'Kafka',
		alt: 'Kafka',
		src: `https://img.shields.io/badge/Kafka-000?style=${SHIELDS_STYLE}&logo=apachekafka&logoColor=white`,
	},
	SOCKET: {
		label: 'Socket.io',
		alt: 'Socket.io',
		src: `https://img.shields.io/badge/Socket.io-010101?style=${SHIELDS_STYLE}&logo=socket.io&logoColor=white`,
	},

	// --- Frontend (📚 Frameworks — React, Next JS) ---
	REACT: {
		label: 'React',
		alt: 'React',
		src: `https://img.shields.io/badge/react-%2320232a.svg?style=${SHIELDS_STYLE}&logo=react&logoColor=%2361DAFB`,
	},
	NEXTJS: {
		label: 'Next.js',
		alt: 'Next.js',
		src: `https://img.shields.io/badge/Next-black?style=${SHIELDS_STYLE}&logo=next.js&logoColor=white`,
	},

	// --- DevOps & Infra (🗄️ Servers, 🥅 Other — Docker / ☁️ Hosting 등) ---
	DOCKER: {
		label: 'Docker',
		alt: 'Docker',
		src: `https://img.shields.io/badge/docker-%230db7ed.svg?style=${SHIELDS_STYLE}&logo=docker&logoColor=white`,
	},
	JENKINS: {
		label: 'Jenkins',
		alt: 'Jenkins',
		src: `https://img.shields.io/badge/jenkins-%23D24939.svg?style=${SHIELDS_STYLE}&logo=jenkins&logoColor=white`,
	},
	'GITHUB ACTIONS': {
		label: 'GitHub Actions',
		alt: 'GitHub Actions',
		src: `https://img.shields.io/badge/github%20actions-%232671E5.svg?style=${SHIELDS_STYLE}&logo=githubactions&logoColor=white`,
	},
	PODMAN: {
		label: 'Podman',
		alt: 'Podman',
		src: `https://img.shields.io/badge/Podman-892CA0?style=${SHIELDS_STYLE}&logo=podman&logoColor=white`,
	},
	NGINX: {
		label: 'Nginx',
		alt: 'Nginx',
		src: `https://img.shields.io/badge/nginx-%23009639.svg?style=${SHIELDS_STYLE}&logo=nginx&logoColor=white`,
	},
	HARBOR: {
		label: 'Harbor',
		alt: 'Harbor',
		src: `https://img.shields.io/badge/Harbor-60B932?style=${SHIELDS_STYLE}&logo=harbor&logoColor=white`,
	},
	NEXUS: {
		label: 'Nexus',
		alt: 'Nexus',
		src: `https://img.shields.io/badge/Nexus-34BF97?style=${SHIELDS_STYLE}&logo=sonatype&logoColor=white`,
	},
	SKOPEO: {
		label: 'Skopeo',
		alt: 'Skopeo',
		src: `https://img.shields.io/badge/Skopeo-EE0000?style=${SHIELDS_STYLE}&logoColor=white`,
	},
	AWS: {
		label: 'AWS',
		alt: 'AWS',
		src: `https://img.shields.io/badge/AWS-%23FF9900.svg?style=${SHIELDS_STYLE}&logo=amazon-aws&logoColor=white`,
	},
	VERCEL: {
		label: 'Vercel',
		alt: 'Vercel',
		src: `https://img.shields.io/badge/vercel-%23000000.svg?style=${SHIELDS_STYLE}&logo=vercel&logoColor=white`,
	},
};

export function getSkillBadge(item: string): SkillBadge | null {
	const key = item.trim().replace(/\s+/g, ' ').toUpperCase();
	const base = BADGE_MAP_CI[key];
	if (!base) return null;
	return base;
}
