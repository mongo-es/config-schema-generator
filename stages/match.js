import { isObject } from "../utils/utils.js";
import { operate } from "../operators/operation.js";

const MATCH_KEY = "$match";

/**
 * 조건 분리 함수: Mongo 스테이지 조건에서 단순조건과 연산조건을 분리한다.
 * @param {Object} mongoStageCondition - MongoDB 스타일의 match 조건 객체
 * @returns {Object} - 단순조건과 연산조건을 포함하는 객체
 */
function extractConditions(mongoStageCondition) {
    const simpleConditions = {};
    const operationConditions = {};

    for (const [key, value] of Object.entries(mongoStageCondition)) {
        if (isObject(value)) {
            operationConditions[key] = value;
            continue;
        }
        simpleConditions[key] = value;
    }

    return { simpleConditions, operationConditions };
}

/**
 * 연산조건 처리 함수: 연산조건을 비교 문자열로 변환한다.
 * @param {Object} operationConditions - 연산조건을 포함하는 객체
 * @returns {Object} - 처리된 필드 조건을 포함하는 객체
 */
function processOperationConditions(operationConditions) {
    const results = {};
    for (const [field, criteria] of Object.entries(operationConditions)) {
        const result = processEachCriteria(criteria);
        if (result) {
            results[field] = result;
        }
    }
    return results;
}

/**
 * 각 조건별 처리 함수: 단일 조건을 받아 연산자에 따라 처리합니다.
 * @param {Object} criteria - 특정 필드의 연산조건 객체
 * @returns {string} - AND 연산을 사용하여 연결된 필드 조건 문자열
 */
function processEachCriteria(criteria) {
    return Object.entries(criteria)
        .map(([operator, value]) => {
            return operate(operator, value);
        })
        .filter(Boolean)
        .join(" AND ");
}

/**
 * match 함수: 주어진 Mongo 스테이지 조건을 분석하여 ConfigSchema 형태로 처리 결과를 반환합니다.
 * @param {Object} stage - MongoDB 스타일의 쿼리 스테이지 객체
 * @returns {Object} - ConfigSchema 형태의 처리된 결과 객체, 단순조건과 연산조건을 포함
 */
export default function $match(stage) {
    if (!stage[MATCH_KEY]) {
        return {};
    }

    const { simpleConditions, operationConditions } = extractConditions(
        stage[MATCH_KEY]
    );
    const processedOperationConditions =
        processOperationConditions(operationConditions);
    return { ...simpleConditions, ...processedOperationConditions };
}
