import { createHash } from 'crypto';

export const createPostHash = (userId: string) => {
	const uuid = crypto.randomUUID();

	const postHash = createHash('sha256')
		.update(userId + uuid)
		.digest('hex');
	return postHash;
};

export const createRevisionHash = (postHash: string) => {
	const uuid = crypto.randomUUID();

	const revisionHash = createHash('sha256')
		.update(postHash + uuid)
		.digest('hex');
	return revisionHash;
};
