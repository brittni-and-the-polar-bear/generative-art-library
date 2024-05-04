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

import {RandomSelector} from "random";

describe('random selector tests', (): void => {
    test('get random element and remove with number type', (): void => {
        const list: number[] = [10, 68, 24.5, -3];
        const selector: RandomSelector<number> = new RandomSelector<number>(list);
        const choice: number | undefined = selector.getRandomElementAndRemove();
        expect(choice).toBeTruthy();
        expect(list).toContain(choice);

        // NOT DONE
    });

    test('get random element and remove with number type', (): void => {
        const list: number[] = [10, 68, 24.5, -3];
        const selector: RandomSelector<number> = new RandomSelector<number>(list);
        const choice: number | undefined = selector.getRandomElementAndRemove();
        expect(choice).toBeTruthy();
        expect(list).toContain(choice);

        // NOT DONE
    });

    test('get random element and remove with string type', (): void => {
        const list: string[] = ["george", "phillip", "hannah", "stephanie"];
        const selector: RandomSelector<string> = new RandomSelector<string>(list);
        const choice: string | undefined = selector.getRandomElementAndRemove();
        expect(choice).toBeTruthy();
        expect(list).toContain(choice);

        // NOT DONE
    });
});
