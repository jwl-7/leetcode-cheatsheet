import { HLJSApi, Language } from 'highlight.js'


export default function python(hljs: HLJSApi): Language {
    const regex = hljs.regex
    const IDENT_RE = /[\p{XID_Start}_]\p{XID_Continue}*/u
    const RESERVED_WORDS = [
        'and',
        'as',
        'assert',
        'async',
        'await',
        'break',
        'case',
        'class',
        'continue',
        'def',
        'del',
        'elif',
        'else',
        'except',
        'finally',
        'for',
        'from',
        'global',
        'if',
        'import',
        'in',
        'is',
        'lambda',
        'match',
        'nonlocal|10',
        'not',
        'or',
        'pass',
        'raise',
        'return',
        'try',
        'while',
        'with',
        'yield'
    ]

    const OPERATORS = /[-+*\/%=<>&|^~]|\*\*?|\/\/?|<<=?|>>=?|\+=|-=|\*=|\/=|%=|@|<|>/

    const DATA_TYPES = [
        'bool',
        'complex',
        'dict',
        'float',
        'frozenset',
        'int',
        'list',
        'set',
        'str',
        'tuple',
    ]

    const CHEATSHEET_BUILT_INS = [
        'add_vertex',
        'add',
        'append',
        'backtrack',
        'bit_length',
        'clear',
        'collect_words',
        'connected',
        'counting_sort',
        'defaultdict',
        'deque',
        'dfs',
        'dp',
        'extend',
        'find_max_index',
        'find',
        'heapify',
        'heappop',
        'heappush',
        'insert',
        'insertion_sort',
        'join',
        'ListNode',
        'merge_sort',
        'pop',
        'popleft',
        'print_trie',
        'quick_sort',
        'RECURRENCE_RELATION',
        'remove',
        'shuffle',
        'sort',
        'TreeNode',
        'TrieNode',
        'union',
        'UnionFind',
        'update',
    ]

    const CHEATSHEET_LITERALS = [
        'BASE_CASE',
        'BOOLEAN',
        'CONDITION',
        'CRITERIA',
        'ITERATE_OVER_INPUT',
        'MAXIMUM_POSSIBLE_ANSWER',
        'MINIMUM_POSSIBLE_ANSWER',
        'OTHER_ARGUMENTS',
        'SMALLEST_SUBPROBLEM',
        'START_NODE',
        'STATE_FOR_WHOLE_INPUT',
        'STATE',
        'WINDOW_CONDITION_BROKEN',
    ]

    const BUILT_INS = [
        '__import__',
        'abs',
        'all',
        'any',
        'ascii',
        'bin',
        'bool',
        'breakpoint',
        'bytearray',
        'bytes',
        'callable',
        'chr',
        'classmethod',
        'compile',
        'complex',
        'delattr',
        'dict',
        'dir',
        'divmod',
        'enumerate',
        'eval',
        'exec',
        'filter',
        'float',
        'format',
        'frozenset',
        'getattr',
        'globals',
        'hasattr',
        'hash',
        'help',
        'hex',
        'id',
        'input',
        'int',
        'isinstance',
        'issubclass',
        'iter',
        'len',
        'list',
        'locals',
        'map',
        'max',
        'memoryview',
        'min',
        'next',
        'object',
        'oct',
        'open',
        'ord',
        'pow',
        'print',
        'property',
        'range',
        'repr',
        'reversed',
        'round',
        'set',
        'setattr',
        'slice',
        'sorted',
        'staticmethod',
        'str',
        'sum',
        'super',
        'tuple',
        'type',
        'vars',
        'zip',
        ...CHEATSHEET_BUILT_INS
    ]

    const LITERALS = [
        '__debug__',
        'Ellipsis',
        'False',
        'None',
        'NotImplemented',
        'True',
        ...CHEATSHEET_LITERALS
    ]

    const TYPES = [
        'Any',
        'Callable',
        'Coroutine',
        'Dict',
        'List',
        'Literal',
        'Generic',
        'Optional',
        'Sequence',
        'Set',
        'Tuple',
        'Type',
        'Union',
        ...DATA_TYPES
    ]

    const KEYWORDS = {
        $pattern: /[A-Za-z]\w+|__\w+__/,
        keyword: RESERVED_WORDS,
        built_in: BUILT_INS,
        literal: LITERALS,
        type: TYPES,
    }

    const PROMPT = {
        className: 'meta',
        begin: /^(>>>|\.\.\.) /
    }

    const SUBST = {
        className: 'subst',
        begin: /\{/,
        end: /\}/,
        keywords: KEYWORDS,
        illegal: /#/
    }

    const LITERAL_BRACKET = {
        begin: /\{\{/,
        relevance: 0
    }

    const STRING = {
        className: 'string',
        contains: [hljs.BACKSLASH_ESCAPE],
        variants: [
            {
                begin: /([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?'''/,
                end: /'''/,
                contains: [
                    hljs.BACKSLASH_ESCAPE,
                    PROMPT
                ],
                relevance: 10
            },
            {
                begin: /([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?'''/,
                end: /'''/,
                contains: [
                    hljs.BACKSLASH_ESCAPE,
                    PROMPT
                ],
                relevance: 10
            },
            {
                begin: /([fF][rR]|[rR][fF]|[fF])'''/,
                end: /'''/,
                contains: [
                    hljs.BACKSLASH_ESCAPE,
                    PROMPT,
                    LITERAL_BRACKET,
                    SUBST
                ]
            },
            {
                begin: /([fF][rR]|[rR][fF]|[fF])'''/,
                end: /'''/,
                contains: [
                    hljs.BACKSLASH_ESCAPE,
                    PROMPT,
                    LITERAL_BRACKET,
                    SUBST
                ]
            },
            {
                begin: /([uU]|[rR])'/,
                end: /'/,
                relevance: 10
            },
            {
                begin: /([uU]|[rR])'/,
                end: /'/,
                relevance: 10
            },
            {
                begin: /([bB]|[bB][rR]|[rR][bB])'/,
                end: /'/
            },
            {
                begin: /([bB]|[bB][rR]|[rR][bB])'/,
                end: /'/
            },
            {
                begin: /([fF][rR]|[rR][fF]|[fF])'/,
                end: /'/,
                contains: [
                    hljs.BACKSLASH_ESCAPE,
                    LITERAL_BRACKET,
                    SUBST
                ]
            },
            {
                begin: /([fF][rR]|[rR][fF]|[fF])'/,
                end: /'/,
                contains: [
                    hljs.BACKSLASH_ESCAPE,
                    LITERAL_BRACKET,
                    SUBST
                ]
            },
            hljs.APOS_STRING_MODE,
            hljs.QUOTE_STRING_MODE
        ]
    }

    const digitpart = '[0-9](_?[0-9])*'
    const pointfloat = `(\\b(${digitpart}))?\\.(${digitpart})|\\b(${digitpart})\\.`
    const lookahead = `\\b|${RESERVED_WORDS.join('|')}`

    const NUMBER = {
        className: 'number',
        relevance: 0,
        variants: [
            {
                begin: `(\\b(${digitpart})|(${pointfloat}))[eE][+-]?(${digitpart})[jJ]?(?=${lookahead})`
            },
            {
                begin: `(${pointfloat})[jJ]?`
            },
            {
                begin: `\\b([1-9](_?[0-9])*|0+(_?0)*)[lLjJ]?(?=${lookahead})`
            },
            {
                begin: `\\b0[bB](_?[01])+[lL]?(?=${lookahead})`
            },
            {
                begin: `\\b0[oO](_?[0-7])+[lL]?(?=${lookahead})`
            },
            {
                begin: `\\b0[xX](_?[0-9a-fA-F])+[lL]?(?=${lookahead})`
            },
            {
                begin: `\\b(${digitpart})[jJ](?=${lookahead})`
            }
        ]
    }

    const COMMENT_TYPE = {
        className: 'comment',
        begin: regex.lookahead(/# type:/),
        end: /$/,
        keywords: KEYWORDS,
        contains: [
            {
                begin: /# type:/
            },
            {
                begin: /#/,
                end: /\b\B/,
                endsWithParent: true
            }
        ]
    }

    const PARAMS = {
        className: 'params',
        variants: [
            {
                className: '',
                begin: /\(\s*\)/,
                skip: true
            },
            {
                begin: /\(/,
                end: /\)/,
                excludeBegin: true,
                excludeEnd: true,
                keywords: KEYWORDS,
                contains: [
                    'self',
                    PROMPT,
                    NUMBER,
                    STRING,
                    hljs.HASH_COMMENT_MODE,
                    {
                        scope: 'params.operator',
                        match: OPERATORS
                    },
                    {
                        scope: 'params.comma',
                        match: ','
                    },
                    {
                        scope: 'params.self',
                        match: /self/
                    },
                ]
            }
        ]
    }

    SUBST.contains = [
        STRING,
        NUMBER,
        PROMPT
    ]

    return {
        name: 'Python',
        aliases: [
            'py',
            'gyp',
            'ipython'
        ],
        unicodeRegex: true,
        keywords: KEYWORDS,
        illegal: /(<\/|\?)|=>/,
        contains: [
            PROMPT,
            NUMBER,
            {
                // very common convention
                begin: /\bself\b/
            },
            {
                // eat 'if' prior to string so that it won't accidentally be
                // labeled as an f-string
                beginKeywords: 'if',
                relevance: 0
            },
            STRING,
            COMMENT_TYPE,
            hljs.HASH_COMMENT_MODE,
            {
                match: [
                    /\bdef/, /\s+/,
                    IDENT_RE,
                ],
                scope: {
                    1: 'keyword.def',
                    3: 'title.function'
                },
                contains: [PARAMS]
            },
            {
                variants: [
                    {
                        match: [
                            /\bclass/, /\s+/,
                            IDENT_RE, /\s*/,
                            /\(\s*/, IDENT_RE, /\s*\)/
                        ],
                    },
                    {
                        match: [
                            /\bclass/, /\s+/,
                            IDENT_RE
                        ],
                    }
                ],
                scope: {
                    1: 'keyword.class',
                    3: 'title.class',
                    6: 'title.class.inherited',
                }
            },
            {
                className: 'meta',
                begin: /^[\t ]*@/,
                end: /(?=#)|$/,
                contains: [
                    NUMBER,
                    PARAMS,
                    STRING
                ]
            },
            {
                scope: 'operator',
                match: OPERATORS
            },
        ]
    }
}
