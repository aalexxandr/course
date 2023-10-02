import { addProperties } from 'shared/lib/addProperties';

describe('addProperties', () => {
	test('should be properties from array', () => {
		const expectedRes = 'someClass1 someClass2 someClass3';

		expect(addProperties(['someClass1', 'someClass2', 'someClass3'])).toBe(
			expectedRes
		);
	});

	test('should be true and false boolean properties', () => {
		const expectedRes = 'testClass trueClass';

		expect(
			addProperties([], {
				testClass: true,
				falseClass: false,
				trueClass: true,
			})
		).toBe(expectedRes);
	});

	test('should be array and true, false boolean properties', () => {
		const expectedRes = 'someClass1 someClass2 testClass trueClass';

		expect(
			addProperties(['someClass1', 'someClass2'], {
				testClass: true,
				falseClass: false,
				trueClass: true,
			})
		).toBe(expectedRes);
	});
});
