export const booleanOperations = {
    /*
    명칭: $and
    설명: 모든 표현식이 true로 평가될 때 true를 반환합니다.
    */
    $and: (operands) => {
        return "Boolean";
    },

    /*
    명칭: $not
    설명: 주어진 표현식의 반대 boolean 값을 반환합니다.
    */
    $not: (operand) => {
        return "Boolean";
    },

    /*
    명칭: $or
    설명: 주어진 표현식 중 하나라도 true로 평가되면 true를 반환합니다.
    */
    $or: (operands) => {
        return "Boolean";
    },
};
