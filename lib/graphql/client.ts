// GraphQL 클라이언트 설정

import { GraphQLClient } from 'graphql-request';

// GitHub GraphQL API 엔드포인트
const GITHUB_GRAPHQL_ENDPOINT = 'https://api.github.com/graphql';

/**
 * GitHub GraphQL 클라이언트 생성
 * @param token - GitHub Personal Access Token (환경변수에서 가져옴)
 * @returns GraphQLClient 인스턴스
 */
export function createGitHubGraphQLClient() {
	const accessToken = process.env.GITHUB_GRAPHQL_ACCESS_TOKEN as string;

	if (!accessToken) {
		throw new Error('GitHub token 이 필요합니다.');
	}

	return new GraphQLClient(GITHUB_GRAPHQL_ENDPOINT, {
		headers: {
			Authorization: `Bearer ${accessToken}`,
			'Content-Type': 'application/json',
		},
	});
}

// 기본 GitHub GraphQL 클라이언트 인스턴스 (싱글톤)
let defaultClient: GraphQLClient | null = null;

/**
 * 기본 GitHub GraphQL 클라이언트 가져오기
 * @returns GraphQLClient 인스턴스
 */
export function getGitHubGraphQLClient(): GraphQLClient {
	if (!defaultClient) {
		defaultClient = createGitHubGraphQLClient();
	}
	return defaultClient;
}

/**
 * GitHub GraphQL 요청 실행 헬퍼 함수
 * @param query - GraphQL query 또는 mutation 문자열
 * @param variables - 변수 객체
 * @returns Promise<T>
 */
export async function executeGitHubGraphQL<T = unknown>(
	query: string,
	variables?: Record<string, unknown>
): Promise<T> {
	const client = getGitHubGraphQLClient();
	return client.request<T>(query, variables);
}
