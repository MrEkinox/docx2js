/* eslint-disable */
module.exports = {
	transform: {
		'^.+\\.ts?$': ['ts-jest', { isolatedModules: true }],
	},
	testMatch: ['**/*.test.ts'],
	testTimeout: 60000,
	workerIdleMemoryLimit: '500MB',
	testEnvironment: 'node',
	testPathIgnorePatterns: [
		'/node_modules/',
		'/lib/',
	],
	coveragePathIgnorePatterns: [
		'/node_modules/',
		'/lib/',
	],
}
