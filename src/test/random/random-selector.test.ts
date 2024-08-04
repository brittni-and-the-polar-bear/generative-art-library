/*
 * Copyright (C) 2024 brittni and the polar bear LLC.
 *
 * This file is a part of brittni and the polar bear's Generative Art Library,
 * which is released under the GNU Affero General Public License, Version 3.0.
 * You may not use this file except in compliance with the license.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. See LICENSE or go to
 * https://www.gnu.org/licenses/agpl-3.0.en.html for full license details.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU Affero General Public License for more details.
 */

import { RandomSelector } from 'random';

import { RANDOM_TEST_TRIES } from 'unit-test/shared';

describe('random selector tests', (): void => {
    test('get random element and remove with number type', (): void => {
        const list: number[] = [10, 68, 24.5, -3];
        const selector: RandomSelector<number> = new RandomSelector<number>(list);
        const actualSelections: Set<number> = new Set<number>();
        let expectedSize: number = list.length;

        for (let i: number = 0; i < list.length; i++) {
            expect(selector.size).toBe(expectedSize);
            const choice: number | undefined = selector.getRandomElementAndRemove();
            expect(choice).toBeTruthy();
            expect(list).toContain(choice);
            expectedSize--;

            if (choice) {
                actualSelections.add(choice);
            }
        }

        expect(actualSelections.size).toBe(list.length);

        for (let i: number = 0; i < RANDOM_TEST_TRIES; i++) {
            expect(selector.size).toBe(0);
            const choice: number | undefined = selector.getRandomElementAndRemove();
            expect(choice).toBeUndefined();
        }
    });

    test('get random element and remove with string type', (): void => {
        const list: string[] = ['happy', 'sad', 'all time low', 'candy', 'kentucky', 'beeline'];
        const selector: RandomSelector<string> = new RandomSelector<string>(list);
        const actualSelections: Set<string> = new Set<string>();
        let expectedSize: number = list.length;

        for (let i: number = 0; i < list.length; i++) {
            expect(selector.size).toBe(expectedSize);
            const choice: string | undefined = selector.getRandomElementAndRemove();
            expect(choice).toBeTruthy();
            expect(list).toContain(choice);
            expectedSize--;

            if (choice) {
                actualSelections.add(choice);
            }
        }

        expect(actualSelections.size).toBe(list.length);

        for (let i: number = 0; i < RANDOM_TEST_TRIES; i++) {
            expect(selector.size).toBe(0);
            const choice: string | undefined = selector.getRandomElementAndRemove();
            expect(choice).toBeUndefined();
        }
    });

    test('get random element and remove with empty number list', (): void => {
        const list: number[] = [];
        const selector: RandomSelector<number> = new RandomSelector<number>(list);

        for (let i: number = 0; i < RANDOM_TEST_TRIES; i++) {
            expect(selector.size).toBe(0);
            const choice: number | undefined = selector.getRandomElementAndRemove();
            expect(choice).toBeUndefined();
        }
    });

    test('get random element and remove with empty string list', (): void => {
        const list: string[] = [];
        const selector: RandomSelector<string> = new RandomSelector<string>(list);

        for (let i: number = 0; i < RANDOM_TEST_TRIES; i++) {
            expect(selector.size).toBe(0);
            const choice: string | undefined = selector.getRandomElementAndRemove();
            expect(choice).toBeUndefined();
        }
    });

    test('get random element with number type', (): void => {
        const list: number[] = [10, 68, 24.5, -3];
        const selector: RandomSelector<number> = new RandomSelector<number>(list);

        for (let i: number = 0; i < RANDOM_TEST_TRIES; i++) {
            const choice: number | undefined = selector.getRandomElement();
            expect(choice).toBeTruthy();
            expect(list).toContain(choice);
        }
    });

    test('get random element with string type', (): void => {
        const list: string[] = ['hello', 'goodbye', 'jack', 'sally', 'george'];
        const selector: RandomSelector<string> = new RandomSelector<string>(list);

        for (let i: number = 0; i < RANDOM_TEST_TRIES; i++) {
            const choice: string | undefined = selector.getRandomElement();
            expect(choice).toBeTruthy();
            expect(list).toContain(choice);
        }
    });

    test('get random element with empty number list', (): void => {
        const list: number[] = [];
        const selector: RandomSelector<number> = new RandomSelector<number>(list);

        for (let i: number = 0; i < RANDOM_TEST_TRIES; i++) {
            const choice: number | undefined = selector.getRandomElement();
            expect(choice).toBeUndefined();
        }
    });

    test('get random element with empty string list', (): void => {
        const list: string[] = [];
        const selector: RandomSelector<string> = new RandomSelector<string>(list);

        for (let i: number = 0; i < RANDOM_TEST_TRIES; i++) {
            const choice: string | undefined = selector.getRandomElement();
            expect(choice).toBeUndefined();
        }
    });
});
