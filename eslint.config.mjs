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

import path from "node:path";
import {fileURLToPath} from "node:url";

import {FlatCompat} from "@eslint/eslintrc";
import js from "@eslint/js";

import stylistic from '@stylistic/eslint-plugin'

import typescript from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [{
    ignores: ["**/*.js"],
}, ...compat.extends(
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-type-checked",
    "plugin:@typescript-eslint/strict",
    "plugin:@typescript-eslint/strict-type-checked",
    "plugin:@typescript-eslint/stylistic",
    "plugin:@typescript-eslint/stylistic-type-checked",
), {
    plugins: {
        "@typescript-eslint": typescript,
        '@stylistic': stylistic
    },

    languageOptions: {
        parser: tsParser,
        ecmaVersion: 5,
        sourceType: "script",

        parserOptions: {
            projectService: {
                defaultProject: "./tsconfig.json"
            },
        },
    },

    rules: {
        "class-methods-use-this": "off",
        "@typescript-eslint/class-methods-use-this": "off",

        "dot-notation": "off",
        "@typescript-eslint/dot-notation": "error",

        "no-array-constructor": "off",
        "@typescript-eslint/no-array-constructor": "error",

        "no-empty-function": "off",
        "@typescript-eslint/no-empty-function": "error",

        "no-loop-func": "off",
        "@typescript-eslint/no-loop-func": "error",

        "no-loss-of-precision": "off",
        "@typescript-eslint/no-loss-of-precision": "error",

        "no-magic-numbers": "off",
        "@typescript-eslint/no-magic-numbers": "off",

        "no-shadow": "off",
        "@typescript-eslint/no-shadow": "error",

        "no-unused-expressions": "off",
        "@typescript-eslint/no-unused-expressions": "error",

        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": "error",

        "no-use-before-define": "off",
        "@typescript-eslint/no-use-before-define": "error",

        "no-useless-constructor": "off",
        "@typescript-eslint/no-useless-constructor": "error",

        "@typescript-eslint/class-literal-property-style": ["error", "getters"],

        "@typescript-eslint/consistent-type-definitions": ["error", "interface"],

        "@typescript-eslint/no-explicit-any": "off",

        "@typescript-eslint/no-extraneous-class": ["error", {
            allowStaticOnly: true,
        }],

        "@typescript-eslint/no-inferrable-types": "off",

        "@typescript-eslint/prefer-for-of": "off",

        "@stylistic/no-extra-semi": "error",

        "@stylistic/function-call-spacing": ['error', 'never'],

        "@stylistic/comma-dangle": ["error", "never"]
    }
}];