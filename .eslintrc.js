module.exports = {
  "extends": [
    "plugin:vue/essential",
    "standard"
  ],
  "env": {
    "browser": true,
    "es6": true,
    "node": true,
    "commonjs": true
  },
  "globals": {
    // "before": true,
    // "after": true,
    // "assert": true,
    // "it": true,
    // "describe": true,
    "window": true
  },
  "plugins": [
    // "react"
    "vue"
  ],
  "rules": {
    // 1. "off" 或 0 - 关闭规则
    // 2. "warn" 或 1 - 开启规则，使用警告级别的错误：warn (不会导致程序退出)
    // 3. "error" 或 2 - 开启规则，使用错误级别的错误：error (当被触发的时候，程序会退出)        
    "prefer-const": 1, // 要求使用 const 声明那些声明后不再被修改的变量
    "require-jsdoc": 0, // 要求使用 JSDoc 注释    
    "no-useless-escape": 0, // 不必要的转义字符    
    "no-new": 0, // 禁止在使用new构造一个实例后不赋值        
    "eqeqeq": 1, // 必须使用全等 先警告？
    "func-names": 1, // 函数表达式必须有名字
    "callback-return": 1, // 避免多次调用回调    
    "no-use-before-define": 1, // 不允许在变量定义之前使用它们
    // "no-unused-vars": 1,    
    "no-unused-vars": [1, { // 禁止出现未使用过的变量
      "vars": "all",
      "args": "none"
    }],
    "no-unneeded-ternary": 1, // 禁止可以在有更简单的可替代的表达式时使用三元操作符    
    "no-extra-semi": 1, // 禁止多余的分号
    "semi-spacing": ["error", { // 分号前无空格 后有空格
      "before": false,
      "after": true
    }],
    "semi": [2, "always"], // 分号检查 必须有分号结尾
    "no-var": 2, // 禁用var，用let和const代替
    "no-undef": 2, // 不能有未定义的变量
    "no-dupe-keys": 2, // 禁止对象字面量中出现重复的 key    
    "no-cond-assign": 2, // 禁止条件表达式中出现赋值操作符
    "no-control-regex": 2, // 禁止在正则表达式中使用控制字符 ：new RegExp("\x1f")
    "no-undef-init": 2, // 禁止将变量初始化为 undefined
    "no-sequences": 2, // 禁止使用逗号运算符 
    "comma-spacing": [2, { // 控制逗号前后的空格
      "before": false, // 逗号前面不需要空格
      "after": true // 逗号后面必须有空格
    }],
    "comma-dangle": [2, "always-multiline"], // 数组和对象键值对最后一个逗号， never参数：不能带末尾的逗号,  always参数：必须带末尾的逗号，always-multiline：多行模式必须带逗号，单行模式不能带逗号            
    "comma-style": [2, "last"], // 逗号在行尾出现还是在行首出现 (默认行尾)
    "computed-property-spacing": [2, "never"], // 以方括号取对象属性时，[ 后面和 ] 前面是否需要空格, 可选参数 never, always
    "no-empty": 2, // 块语句中的内容不能为空
    "no-eval": 2, // 禁止使用eval
    "no-implied-eval": 2, // 禁止使用隐式eval
    "no-ex-assign": 2, // 禁止给catch语句中的异常参数赋值         
    "no-multiple-empty-lines": [1, { // 空行最多不能超过2行 
      "max": 2
    }],
    "no-new-func": 2, // 禁止使用new Function  用class定义
    "no-new-object": 2, // 禁止使用new Object()
    "no-new-require": 2, // 禁止使用new require
    "no-redeclare": 2, // 禁止重复声明变量
    "no-return-assign": 2, // return 语句中不能有赋值表达式    
    "no-unreachable": 2, // 不能有无法执行的代码
    "no-unused-expressions": 2, // 禁止无用的表达式 没用的代码可以先注释掉 等需要的时候在放开    
    "no-with": 2, // 禁用with   
    "default-case": 2, // switch语句最后必须有default
    "indent": ["error", 2, {
      "SwitchCase": 1
    }], // 缩进风格 2个空格
    "use-isnan": 2, // 禁止比较时使用NaN，只能用isNaN()
    "valid-typeof": 2, // 必须使用合法的typeof的值 强制 typeof 表达式与有效的字符串进行比较typeof foo === "undefimed" 错误
    "max-depth": [2, 4], // 嵌套块深度 最多四层
    "key-spacing": [2, { // 对象字面量中冒号的前后空格 
      "beforeColon": false, // 冒号前面没有空格
      "afterColon": true // 冒号后面有空格
    }],
    "no-mixed-spaces-and-tabs": [2, false], // 禁止混用tab和空格
    "no-iterator": 2, // 禁止使用__iterator__ 属性    
    "no-inner-declarations": [2, "functions"], // 禁止在块语句中使用声明（变量或函数）
    "no-param-reassign": 2, // 禁止给参数重新赋值 保持参数的不可变性 如需要可重新声明一个新的变量     
    "no-debugger": 2, // 禁用 debugger   
    "array-bracket-spacing": [2, "never"], // 指定数组的元素之间要以空格隔开(, 后面)， never参数：[ 之前和 ] 之后不能带空格，always参数：[ 之前和 ] 之后必须带空格         
    "no-dupe-args": 2, // 禁止 function 定义中出现重名参数    
    "no-duplicate-case": 2, // 禁止重复的 case 标签    
    "no-func-assign": 2, // 禁止对 function 声明重新赋值
    "no-obj-calls": 2, // 禁止把全局对象 (Math 和 JSON) 作为函数调用 错误：var math = Math();    
    "curly": [2, "all"], // 强制所有控制语句使用一致的括号风格    
    "no-alert": 2, // 禁用 alert、confirm 和 prompt    
    "no-caller": 2, // 禁用 arguments.caller 或 arguments.callee    
    "no-empty-function": 2, // 禁止出现空函数.如果一个函数包含了一条注释，它将不会被认为有问题。    
    "no-labels": 2, // 禁用标签语句    
    "no-new-wrappers": 2, // 禁止对 String，Number 和 Boolean 使用 new 操作符    
    "no-proto": 2, // 禁用 __proto__ 属性    
    "no-throw-literal": 2, // 禁止抛出非异常字面量 如 throw 'error!';    
    "radix": 2, // 强制在parseInt()使用基数参数 因为历史原因有坑 所以必须强制制定radix    
    "eol-last": 2, // 文件末尾强制换行
    "camelcase": 2, // 强制驼峰法命名
    "brace-style": [
      "error",
      "1tbs", //  refs: https://eslint.org/docs/rules/brace-style.html
      {
        "allowSingleLine": false // 不允许单行
      }
    ],
    "no-extend-native": 2, // 禁止扩展原生类型        
    "no-native-reassign": 2, // 禁止对原生对象赋值
    "no-fallthrough": 2, // 禁止 case 语句落空 https://eslint.org/docs/rules/no-fallthrough#disallow-case-statement-fallthrough-no-fallthrough    
    "no-floating-decimal": 2, // 禁止数字字面量中使用前导和末尾小数点    
    "no-unmodified-loop-condition": 2, // 禁用一成不变的循环条件    
    "key-spacing": [2, { // 强制在对象字面量的属性中键和值之间使用一致的间距 { a: 1 }
      "beforeColon": false,
      "afterColon": true
    }],
    "linebreak-style": [2, "unix"], // 强制使用一致的换行风格 "unix" (\n for LF.), "windows" (\r\n for CRLF)。 https://eslint.org/docs/rules/linebreak-style#enforce-consistent-linebreak-style-linebreak-style    
    "max-params": [2, 6], // 强制 function 定义中最多允许的参数数量    
    "new-cap": [2, { // 要求构造函数首字母大写 （要求调用 new 操作符时有首字母大小的函数，允许调用首字母大写的函数时没有 new 操作符。）
      "newIsCap": true,
      "capIsNew": false
    }],
    "no-array-constructor": 2, // 禁止使用 Array 构造函数 https://eslint.org/docs/rules/no-array-constructor#disallow-array-constructors-no-array-constructor    
    "one-var-declaration-per-line": ["error", "always"], // 强制函数中的变量声明 每个声明一行
    "no-spaced-func": 2, // 禁止 function 标识符和括号之间出现空格    
    "space-before-blocks": [2, "always"], // 强制在块之前使用一致的空格
    "space-before-function-paren": ["error", "never"], // 强制在 function的左括号之前使用一致的空格
    "no-trailing-spaces": 2, // 一行结束后面不要有空格
    "space-in-parens": ["error", "never"], // //在圆括号内使用一致的空格
    "spaced-comment": ["error", "always"],
    "space-infix-ops": ["error", { // 要求操作符周围有空格
      "int32Hint": false // a|0 操作除外
    }],
    "space-unary-ops": [ // 强制在一元操作符前后使用一致的空格
      2, {
        "words": true,
        "nonwords": false,
        // "overrides": {
        // "new": false,
        // "++": false
        // }
      }
    ],
    "arrow-body-style": ["error", // es6 要求箭头函数体使用大括号 根据需要是否有大括号, 返回值是object字面量的时候要求必须有大括号
      "as-needed", {
        "requireReturnForObjectLiteral": true
      }
    ],
    "arrow-parens": ["error", // 要求箭头函数的参数使用圆括号
      "as-needed", {
        "requireForBlockBody": true
      }
    ],
    "arrow-spacing": ["error", { // 箭头两侧的空格
      "before": true,
      "after": true
    }],
    "max-nested-callbacks": [2, 3], // 回调嵌套深度 最多三层 考虑使用 Promise来解决 回调嵌套的深渊
    "constructor-super": 2, // 强制在子类构造函数中用super()调用父类构造函数，TypeScrip的编译器也会提示    
    "no-class-assign": 2, // 禁止修改类声明的变量
    "no-const-assign": 2, // 禁止修改 const 声明的变量
    "no-confusing-arrow": ["error", { // 禁止可能会与比较混淆的箭头功能 https://eslint.org/docs/rules/no-confusing-arrow#disallow-arrow-functions-where-they-could-be-confused-with-comparisons-no-confusing-arrow
      "allowParens": true
    }],
    "no-dupe-class-members": 2, // 禁止类成员中出现重复的名称
    "no-duplicate-imports": 2, // 禁止模块重复导入    
    "no-new-symbol": 2, // 禁止 new Symbol
    "no-this-before-super": 2, // 在调用super()之前不能使用this或super
    // "no-restricted-imports": ["error", "import1", "import2"], // 禁止导入某些指定的模块    
    "no-useless-computed-key": 2, // 禁止在对象上使用不必要的计算属性key https://eslint.org/docs/rules/no-useless-computed-key#disallow-unnecessary-computed-property-keys-on-objects-no-useless-computed-key
    "no-sparse-arrays": 2, // 禁止稀疏数组， [1,,2]
    "quotes": [ // 字符串必须使用单引号
      "error",
      "single"
    ]
  }
};
