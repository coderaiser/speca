import {types} from 'putout';

const {
    isBlockStatement,
    isLiteral,
    isBinaryExpression,
    isReturnStatement,
    isExpressionStatement,
    isCallExpression,
} = types;

export const report = () => 'Use Speca';

export const replace = ({options}) => ({
    'export const __a = __b': ({__a, __b}) => {
        const args = [];
        const ret = isBlockStatement(__b.body) && __b.body.body.pop() || __b.body;
        const maybeAsync = __b.async && 'async' || '';
        const maybeAwait = __b.async && 'await' || '';
        const operator = getOperator(ret);
        const filename = './' + (options.name || '<filename>');
        
        for (const param of __b.params) {
            args.push(`'${param.name}'`);
        }
        
        return `{
            import {${__a.name}} from '${filename}';
            
            test('name: ${__a.name}', ${maybeAsync} (t) => {
            const result = ${maybeAwait} ${__a.name}(${args.join(',')});
                ${operator}
                t.end();
            })
        }`;
    },
});

function getOperator(node) {
    const {argument} = node;
    
    if (!isReturnStatement(node))
        return parseNoReturn(node);
    
    return parseExpression(argument);
}

function parseExpression(node) {
    if (!node)
        return '';
    
    if (isLiteral(node) || isBinaryExpression(node))
        return `
            const expected = '';
            t.equal(result, expected);
    `;
    
    return `
        const expected = [];
        t.deepEqual(result, expected);
    `;
}

function parseNoReturn(node) {
    if (isExpressionStatement(node) && isCallExpression(node.expression)) {
        const {expression} = node;
        const {name} = expression.callee;
        const isArgs = expression.arguments.length;
        
        if (isArgs)
            return `
                const expected = [];
                t.calledWith(${name}, expected);
            `;
        
        return `
                t.calledWithNoArgs(${name});
        `;
    }
    
    return parseExpression(node);
}
