/*
 * @Author: zhangjiarun
 * @Date: 2022-03-30 19:38:21
 * @LastEditors: [you name]
 * @LastEditTime: 2022-03-31 10:43:31
 * @Description: 文件头的一些描述
 */
module.exports = {
    'env': {
        'browser': true,
        'es2021': true
    },
    'extends': [
        'eslint:recommended',
        'plugin:vue/recommended'
    ],
    'parserOptions': {
        'ecmaVersion': 12,
        'sourceType': 'module'
    },
    'plugins': [
        'vue'
    ],

    /**
     * "off" 或 0 - 关闭规则
     * "warn" 或 1 - 开启规则，使用警告级别的错误：warn (不会导致程序退出),
     * "error" 或 2 - 开启规则，使用错误级别的错误：error (当被触发的时候，程序会退出)
     */
    'rules': {

        /**
         * 代码风格 - https://eslint.bootcss.com/docs/rules/#stylistic-issues
         */
        'indent': [2, 4, { 'SwitchCase': 1 }], // 强制使用一致的缩进（4个空格）
        'quotes': [2, 'single'], // 要求尽可能地使用单引号
        'semi': [2, 'never'], // 禁止在语句末尾使用分号 (除了消除以 [、(、/、+ 或 - 开始的语句的歧义)
        'array-bracket-spacing': [2, 'never'], // 强制数组方括号中使用一致的空格
        'block-spacing': [2, 'always'], // 强制在代码块中开括号前和闭括号后有空格
        'brace-style': [2, '1tbs', { 'allowSingleLine': true }], // 强制在代码块中使用一致的大括号风格
        'comma-dangle': [2, 'never'], // 禁止使用拖尾逗号
        'comma-spacing': 2, // 强制在逗号前后使用一致的空格
        'comma-style': [2, 'last'], // 强制使用一致的逗号风格（标准风格, 即将逗号放置在当前行的末尾）
        'computed-property-spacing': [2, 'never'], // 禁止在计算属性内使用空格
        'consistent-this': 2, // 当获取当前执行环境的上下文时，强制使用一致的命名（默认 that）
        'func-call-spacing': [2, 'never'], // 禁止在函数标识符和其调用之间有空格
        'implicit-arrow-linebreak': 2, // 强制隐式返回的箭头函数体的位置
        'key-spacing': 2, // 强制对象属性的冒号左右的空格的一致性
        'keyword-spacing': 2, // 强制在关键字前后使用一致的空格
        'linebreak-style': 0, // 强制使用一致的换行风格（关闭规则）
        'lines-around-comment': 2, // 要求在块级注释之前有一空行
        'max-lines': [1, { 'max': 1000 }], // 强制文件的最大行数
        'multiline-ternary': [2, 'always-multiline'], // 要求或禁止在三元操作数中间换行
        'new-parens': 2, // 要求调用无参构造函数时带括号
        'no-multiple-empty-lines': [2, { 'max': 1 }], // 禁止出现多行空行
        'no-unneeded-ternary': 2, // 禁止可以在有更简单的可替代的表达式时使用三元操作符
        'no-whitespace-before-property': 2, // 禁止属性前有空白
        'object-curly-spacing': [2, 'always'], // 强制在大括号中使用一致的空格
        'space-before-blocks': [2, 'always'], // 强制在块之前使用一致的空格
        'space-before-function-paren': [2, 'never'], // 强制在 function的左括号之前使用一致的空格
        'space-in-parens': [2, 'never'], // 强制在圆括号内使用一致的空格
        'space-infix-ops': 2, // 要求操作符周围有空格
        'space-unary-ops': [2, { 'words': true, 'nonwords': false }], // 强制在一元操作符前后使用一致的空格
        'spaced-comment': [2, 'always', {
            'markers': ['global', 'globals', 'eslint', 'eslint-disable', '*package', '!', ',']
        }], // 强制在注释中 // 或 /* 使用一致的空格
        'switch-colon-spacing': 2, // 强制在 switch 的冒号左右有空格
        'wrap-regex': 2, // 要求正则表达式被包裹起来

        /**
         * ES6 - https://eslint.bootcss.com/docs/rules/#ecmascript-6
         */
        'arrow-parens': [2, 'as-needed'], // 是否要求箭头函数的参数使用圆括号
        'arrow-spacing': 2, // 强制箭头函数的箭头前后使用一致的空格
        'no-var': 2, // 要求使用 let 或 const 而不是 var
        'prefer-const': 2, // 要求使用 const 声明那些声明后不再被修改的变量
        'rest-spread-spacing': 2, // 强制剩余和扩展运算符及其表达式之间没有空格
        'template-curly-spacing': 2, // 强制模板字符串中空格的使用
         
        /**
         * Vue - https://github.com/vuejs/eslint-plugin-vue
         */
        'vue/html-indent': [2, 4], // 在 <template> 中强制一致的缩进
        'vue/max-attributes-per-line': 0, // 强制每行的最大属性数
        'vue/singleline-html-element-content-newline': 0, // 在单行元素的内容之前和之后需要换行
        'vue/component-name-in-template-casing': [2, 'kebab-case', { 'registeredComponentsOnly': false }], // 对模板中的组件命名强制使用特定的大小写
        'vue/custom-event-name-casing': 2, // 对自定义事件名称强制使用特定的大小写（默认 kebab-case）
        'vue/html-comment-content-spacing': 2, // 在HTML注释中强制统一间距
        'vue/no-potential-component-option-typo': 1, // 不允许组件属性中存在潜在的键入错误
        'vue/padding-line-between-blocks': 2, // Require padding lines between blocks

        /**
         * Possible Errors、Best Practices、Variables
         */
        'no-await-in-loop': 2, // 禁止在循环中出现 await（特殊情况建议使用标准的 ESLint 禁用注释来禁用规则）
        'no-console': 0, // 不禁用 console（通过构建剔除）
        'no-debugger': 1, // 不禁用 debugger（通过构建剔除）
        'curly': 2, // 当代码块只有一条语句时，也不允许省略大括号
        'default-case': 2, // 要求 Switch 语句中有 Default 分支或注释说明（no default）
        'dot-location': [2, 'property'], // 强制在点号之前换行
        'eqeqeq': 2, // 要求使用 === 和 !==
        'guard-for-in': 1, // 当 for in 循环没有使用 if 语句对结果进行筛选时，该规则将会发出警告
        'no-caller': 2, // 禁用 caller 或 callee
        'no-eval': 2, // 禁用 eval()
        'no-extend-native': 2, // 禁止扩展原生对象
        'no-extra-bind': 2, // 禁止不必要的 .bind() 调用
        'no-floating-decimal': 2, // 禁止数字字面量中使用前导和末尾小数点
        'no-throw-literal': 2, // 限制可以被抛出的异常
        'vars-on-top': 2, // 要求所有的 var 声明出现在它们所在的作用域顶部
        'no-use-before-define': 2 // 禁止在变量定义之前使用它们
    }
}
