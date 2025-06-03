# Prisma CLI 명령어 정리

## 초기화 및 설정

- `npx prisma init` : Prisma 프로젝트 초기화
- `npx prisma generate` : Prisma Client 생성
- `npx prisma validate` : schema.prisma 파일 유효성 검사

## 마이그레이션 관련

- `npx prisma migrate dev` : 개발 환경에서 마이그레이션 생성 및 적용

| 장점                            | 단점                                                |
| ------------------------------- | --------------------------------------------------- |
| 마이그레이션 히스토리 관리 가능 | 매번 마이그레이션 파일 생성으로 인한 추가 작업 필요 |
| 롤백 가능                       | 개발 초기 단계에서는 다소 번거로울 수 있음          |
| 팀 협업시 스키마 변경 추적 용이 |                                                     |
| 프로덕션 환경 배포 준비에 적합  |                                                     |

- `npx prisma migrate reset` : DB 초기화 및 마이그레이션 재실행
- `npx prisma migrate deploy` : 프로덕션 환경에 마이그레이션 적용
- `npx prisma migrate status` : 마이그레이션 상태 확인

## DB 관리

- `npx prisma db push` : schema.prisma를 DB에 직접 반영 (마이그레이션 파일 없이)

| 장점                          | 단점                              |
| ----------------------------- | --------------------------------- |
| 빠른 스키마 변경 가능         | 변경 이력 추적 불가               |
| 개발 초기 단계에서 유용       | 롤백 불가능                       |
| 프로토타이핑에 적합           | 프로덕션 환경에는 부적합          |
| 마이그레이션 파일 관리 불필요 | 팀 협업시 스키마 변경 관리 어려움 |

- `npx prisma db pull` : DB 스키마를 schema.prisma로 가져오기
- `npx prisma db seed` : 시드 데이터 적용

## 데이터 확인 및 관리

- `npx prisma studio` : Prisma Studio 실행 (웹 기반 DB 관리 도구)
- `npx prisma format` : schema.prisma 파일 포맷팅

## 기타

- `npx prisma --help` : 도움말 보기
- `npx prisma version` : Prisma 버전 확인

## 주요 옵션

- `--skip-generate` : Client 생성 단계 건너뛰기
- `--force` : 강제 실행
- `--preview-feature` : 프리뷰 기능 사용
- `--schema` : 다른 경로의 schema 파일 지정

## 유용한 사용 팁

### 개발 워크플로우 최적화

- 개발 초기에는 `db push`를 사용하여 빠른 반복 개발
- 스키마가 안정화되면 `migrate dev`로 전환하여 변경 이력 관리 시작
- 배포 전에는 반드시 `migrate reset`으로 전체 마이그레이션 테스트

### 성능 최적화

- `generate` 명령어는 큰 프로젝트에서 시간이 걸릴 수 있으므로 필요할 때만 실행
- 대규모 마이그레이션은 피크 시간을 피해 실행
- Studio 사용 시 대량의 데이터는 페이지네이션 활용

### 문제 해결

- 마이그레이션 충돌 시 `migrate reset`으로 깨끗한 상태에서 시작
- Client 생성 문제 시 `node_modules/.prisma` 삭제 후 재시도
- Schema 검증 오류는 `validate` 명령어로 먼저 확인

### 협업 팁

- 팀원 간 schema 파일 충돌 방지를 위해 작업 전 항상 최신 버전 pull
- 중요한 마이그레이션은 팀 내 코드 리뷰 진행
- 환경별 `.env` 파일 관리에 주의
