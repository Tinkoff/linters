interface RightInterface {
    isBoolean: boolean;
    error?: any;
    readonly x: number;
    [propName: string]: any;
    (source: string, subString: string): boolean;
}

interface RightInterfaceWithConstructor {
    isBoolean: boolean;
    error?: any;
    readonly x: number;
    new (hour: number, minute: number);
    [propName: string]: any;
    (source: string, subString: string): boolean;
}

type RightTree<T> = {
    value: T;
    left: Tree<T>;
    right: Tree<T>;
};

type RightLinkedList<T> = T & {next: LinkedList<T>};

type RightArray = Array<RightTree>;

type RightUnion = RightLinkedList | RightArray;

class RightCases {
    private readonly a: string;
    private static readonly a = 'someString';
    protected static a = 'someString';
    protected a = 5;
    public a;
    public static a = 'someString';
    @Input() a = 5;
    @Output() a = 'someString';
    public get some() {
        return 1;
    }
    public set some() {
        return 2;
    }
    protected get some() {
        return 1;
    }
    protected set some() {
        return 2;
    }
    private get some() {
        return 1;
    }
    private set some() {
        return 2;
    }
    public b(): number {
        return 5;
    }
    static b(): number {
        return 5;
    }
    protected b(): number {
        return 5;
    }
    protected static a() {
        return 5;
    }
    private c(a: number): number {
        return a;
    }
    private static b(): number {
        return 5;
    }
}

// Right cases

class RightCases {
    private readonly a: string;
    private static readonly a = 5;
    protected static a = 'someString';
    protected a;
    public a: string;
    static a = 'someString';
    @Input() a = 5;
    @Output() a: string;
    public get some() {
        return 1;
    }
    public set some() {
        return 2;
    }
    protected get some() {
        return 1;
    }
    protected set some() {
        return 2;
    }
    private get some() {
        return 1;
    }
    private set some() {
        return 2;
    }
    c(a: number): number {
        return a;
    }
    public static a() {
        return 5;
    }
    protected a() {
        return 5;
    }
    protected static a() {
        return 5;
    }
    private a() {
        return 5;
    }
    private static b(): number {
        return 5;
    }
}

class RightCases {
    private readonly a = 'someString';
    private static readonly a = 'someString';
    protected static a = 'someString';
    protected a = 5;
    public a = 5;
    static a = 'someString';
    @Input() a = 5;
    @Output() a;
    get some() {
        return 1;
    }
    set some() {
        return 2;
    }
    protected get some() {
        return 1;
    }
    protected set some() {
        return 2;
    }
    private get some() {
        return 1;
    }
    private set some() {
        return 2;
    }
    public b(): number {
        return 5;
    }
    static a() {
        return 5;
    }
    protected b(): number {
        return 5;
    }
    protected static b(): number {
        return 5;
    }
    private c(a: number): number {
        return a;
    }
    private static a() {
        return 5;
    }
}

class RightCases {
    private readonly a: string;
    private static readonly a = 'someString';
    protected static a = 'someString';
    protected a = 5;
    public a;
    public static a = 'someString';
    @Input() a = 5;
    @Output() a = 'someString';
    public get some() {
        return 1;
    }
    public set some() {
        return 2;
    }
    protected get some() {
        return 1;
    }
    protected set some() {
        return 2;
    }
    private get some() {
        return 1;
    }
    private set some() {
        return 2;
    }
    public b(): number {
        return 5;
    }
    static b(): number {
        return 5;
    }
    protected b(): number {
        return 5;
    }
    protected static a() {
        return 5;
    }
    private c(a: number): number {
        return a;
    }
    private static b(): number {
        return 5;
    }
}

// Wrong cases

// Wrong cases for private-instance-field-fields
class Failures {
    private static readonly a: string;
    private a = 'someString';
    protected static a: string;
    private a = 5;
    protected a;
    private a;
    a;
    private a = 5;
    public static a = 5;
    private a: string;
    @Input() a = 5;
    private a;
    @Output() a = 'someString';
    private a;
    public get some() {
        return 1;
    }
    private a = 5;
    set some() {
        return 2;
    }
    private a;
    protected get some() {
        return 1;
    }
    private readonly a = 5;
    protected set some() {
        return 2;
    }
    private readonly a = 5;
    private get some() {
        return 1;
    }
    private readonly a = 5;
    private set some() {
        return 2;
    }
    private readonly a;
    c(a: number): number {
        return a;
    }
    private readonly a;
    static c(a: number): number {
        return a;
    }
    private readonly a = 5;
    protected c(a: number): number {
        return a;
    }
    private readonly a = 5;
    protected static a() {
        return 5;
    }
    private readonly a = 5;
    private b(): number {
        return 5;
    }
    private readonly a = 'someString';
    private static a() {
        return 5;
    }
    private readonly a = 5;
}

class Failures {
    private static readonly a = 5;
    private a;
    protected static a: string;
    private a = 5;
    protected a;
    private a: string;
    a = 'someString';
    private a: string;
    public static a = 'someString';
    private a: string;
    @Input() a = 'someString';
    private a = 5;
    @Output() a = 5;
    private a = 'someString';
    get some() {
        return 1;
    }
    private a = 'someString';
    public set some() {
        return 2;
    }
    private a = 5;
    protected get some() {
        return 1;
    }
    private readonly a: string;
    protected set some() {
        return 2;
    }
    private readonly a = 5;
    private get some() {
        return 1;
    }
    private readonly a = 5;
    private set some() {
        return 2;
    }
    private readonly a = 5;
    public b(): number {
        return 5;
    }
    private readonly a;
    public static b(): number {
        return 5;
    }
    private readonly a = 5;
    protected c(a: number): number {
        return a;
    }
    private readonly a;
    protected static b(): number {
        return 5;
    }
    private readonly a = 5;
    private b(): number {
        return 5;
    }
    private readonly a: string;
    private static a() {
        return 5;
    }
    private readonly a;
}

class Failures {
    private static readonly a;
    private a = 'someString';
    protected static a: string;
    private a: string;
    protected a = 5;
    private a = 'someString';
    public a;
    private a = 5;
    static a = 'someString';
    private a: string;
    @Input() a = 5;
    private a;
    @Output() a = 'someString';
    private a;
    get some() {
        return 1;
    }
    private a = 5;
    public set some() {
        return 2;
    }
    private a = 'someString';
    protected get some() {
        return 1;
    }
    private readonly a = 5;
    protected set some() {
        return 2;
    }
    private readonly a = 5;
    private get some() {
        return 1;
    }
    private readonly a: string;
    private set some() {
        return 2;
    }
    private readonly a;
    a() {
        return 5;
    }
    private readonly a = 5;
    static a() {
        return 5;
    }
    private readonly a = 'someString';
    protected c(a: number): number {
        return a;
    }
    private readonly a = 'someString';
    protected static b(): number {
        return 5;
    }
    private readonly a;
    private b(): number {
        return 5;
    }
    private readonly a = 'someString';
    private static a() {
        return 5;
    }
    private readonly a: string;
}

// Wrong cases for private-static-field-fields
class Failures {
    protected static a = 5;
    private static a = 5;
    protected a;
    private static a;
    public a: string;
    private static a = 5;
    static a = 5;
    private static a = 5;
    @Input() a: string;
    private static a: string;
    @Output() a = 5;
    private static a;
    get some() {
        return 1;
    }
    private static a = 5;
    set some() {
        return 2;
    }
    private static a = 'someString';
    protected get some() {
        return 1;
    }
    private static readonly a = 'someString';
    protected set some() {
        return 2;
    }
    private static readonly a = 5;
    private get some() {
        return 1;
    }
    private static readonly a = 'someString';
    private set some() {
        return 2;
    }
    private static readonly a: string;
    c(a: number): number {
        return a;
    }
    private static readonly a: string;
    static b(): number {
        return 5;
    }
    private static readonly a = 'someString';
    protected c(a: number): number {
        return a;
    }
    private static readonly a = 'someString';
    protected static a() {
        return 5;
    }
    private static readonly a = 5;
    private c(a: number): number {
        return a;
    }
    private static readonly a: string;
    private static a() {
        return 5;
    }
    private static readonly a = 5;
}

class Failures {
    protected static a = 5;
    private static a = 5;
    protected a = 5;
    private static a = 5;
    public a = 5;
    private static a = 5;
    static a: string;
    private static a = 5;
    @Input() a;
    private static a = 'someString';
    @Output() a = 5;
    private static a;
    get some() {
        return 1;
    }
    private static a;
    public set some() {
        return 2;
    }
    private static a = 5;
    protected get some() {
        return 1;
    }
    private static readonly a;
    protected set some() {
        return 2;
    }
    private static readonly a: string;
    private get some() {
        return 1;
    }
    private static readonly a = 'someString';
    private set some() {
        return 2;
    }
    private static readonly a = 5;
    c(a: number): number {
        return a;
    }
    private static readonly a: string;
    static a() {
        return 5;
    }
    private static readonly a = 5;
    protected a() {
        return 5;
    }
    private static readonly a = 5;
    protected static c(a: number): number {
        return a;
    }
    private static readonly a = 5;
    private a() {
        return 5;
    }
    private static readonly a = 5;
    private static a() {
        return 5;
    }
    private static readonly a;
}

class Failures {
    protected static a = 5;
    private static a;
    protected a = 5;
    private static a = 5;
    public a = 5;
    private static a = 'someString';
    public static a = 5;
    private static a = 'someString';
    @Input() a: string;
    private static a = 5;
    @Output() a: string;
    private static a = 5;
    public get some() {
        return 1;
    }
    private static a = 5;
    set some() {
        return 2;
    }
    private static a;
    protected get some() {
        return 1;
    }
    private static readonly a = 'someString';
    protected set some() {
        return 2;
    }
    private static readonly a = 5;
    private get some() {
        return 1;
    }
    private static readonly a = 5;
    private set some() {
        return 2;
    }
    private static readonly a = 'someString';
    a() {
        return 5;
    }
    private static readonly a;
    static c(a: number): number {
        return a;
    }
    private static readonly a = 'someString';
    protected b(): number {
        return 5;
    }
    private static readonly a: string;
    protected static a() {
        return 5;
    }
    private static readonly a = 5;
    private c(a: number): number {
        return a;
    }
    private static readonly a = 5;
    private static a() {
        return 5;
    }
    private static readonly a = 5;
}

// Wrong cases for protected-static-field-fields
class Failures {
    protected a: string;
    protected static a;
    public a = 5;
    protected static a = 5;
    public static a;
    protected static a = 5;
    @Input() a = 5;
    protected static a = 5;
    @Output() a = 'someString';
    protected static a = 5;
    public get some() {
        return 1;
    }
    protected static a = 'someString';
    public set some() {
        return 2;
    }
    protected static a: string;
    protected get some() {
        return 1;
    }
    protected static a: string;
    protected set some() {
        return 2;
    }
    protected static a = 'someString';
    private get some() {
        return 1;
    }
    protected static a = 5;
    private set some() {
        return 2;
    }
    protected static a: string;
    public b(): number {
        return 5;
    }
    protected static a = 5;
    static b(): number {
        return 5;
    }
    protected static a: string;
    protected c(a: number): number {
        return a;
    }
    protected static a = 5;
    protected static c(a: number): number {
        return a;
    }
    protected static a: string;
    private b(): number {
        return 5;
    }
    protected static a = 'someString';
    private static a() {
        return 5;
    }
    protected static a;
}

class Failures {
    protected a = 'someString';
    protected static a: string;
    a = 5;
    protected static a: string;
    static a: string;
    protected static a = 5;
    @Input() a = 5;
    protected static a;
    @Output() a = 'someString';
    protected static a = 5;
    get some() {
        return 1;
    }
    protected static a = 5;
    public set some() {
        return 2;
    }
    protected static a;
    protected get some() {
        return 1;
    }
    protected static a = 'someString';
    protected set some() {
        return 2;
    }
    protected static a = 5;
    private get some() {
        return 1;
    }
    protected static a;
    private set some() {
        return 2;
    }
    protected static a = 'someString';
    c(a: number): number {
        return a;
    }
    protected static a = 'someString';
    public static a() {
        return 5;
    }
    protected static a = 5;
    protected c(a: number): number {
        return a;
    }
    protected static a;
    protected static b(): number {
        return 5;
    }
    protected static a = 5;
    private a() {
        return 5;
    }
    protected static a = 'someString';
    private static c(a: number): number {
        return a;
    }
    protected static a = 5;
}

class Failures {
    protected a: string;
    protected static a: string;
    public a = 5;
    protected static a: string;
    public static a = 5;
    protected static a: string;
    @Input() a: string;
    protected static a: string;
    @Output() a;
    protected static a: string;
    get some() {
        return 1;
    }
    protected static a = 5;
    public set some() {
        return 2;
    }
    protected static a = 5;
    protected get some() {
        return 1;
    }
    protected static a;
    protected set some() {
        return 2;
    }
    protected static a = 5;
    private get some() {
        return 1;
    }
    protected static a = 5;
    private set some() {
        return 2;
    }
    protected static a = 5;
    public c(a: number): number {
        return a;
    }
    protected static a = 5;
    static c(a: number): number {
        return a;
    }
    protected static a: string;
    protected b(): number {
        return 5;
    }
    protected static a = 5;
    protected static a() {
        return 5;
    }
    protected static a = 'someString';
    private b(): number {
        return 5;
    }
    protected static a;
    private static c(a: number): number {
        return a;
    }
    protected static a = 'someString';
}

// Wrong cases for protected-instance-field-fields
class Failures {
    public a = 5;
    protected a = 5;
    public static a = 5;
    protected a = 5;
    @Input() a = 'someString';
    protected a = 'someString';
    @Output() a = 'someString';
    protected a = 5;
    get some() {
        return 1;
    }
    protected a = 5;
    set some() {
        return 2;
    }
    protected a = 'someString';
    protected get some() {
        return 1;
    }
    protected a: string;
    protected set some() {
        return 2;
    }
    protected a = 'someString';
    private get some() {
        return 1;
    }
    protected a = 5;
    private set some() {
        return 2;
    }
    protected a = 'someString';
    public c(a: number): number {
        return a;
    }
    protected a: string;
    public static a() {
        return 5;
    }
    protected a: string;
    protected b(): number {
        return 5;
    }
    protected a = 'someString';
    protected static c(a: number): number {
        return a;
    }
    protected a = 'someString';
    private b(): number {
        return 5;
    }
    protected a = 5;
    private static a() {
        return 5;
    }
    protected a = 5;
}

class Failures {
    public a;
    protected a: string;
    static a;
    protected a = 5;
    @Input() a: string;
    protected a = 'someString';
    @Output() a = 5;
    protected a = 5;
    public get some() {
        return 1;
    }
    protected a = 5;
    set some() {
        return 2;
    }
    protected a;
    protected get some() {
        return 1;
    }
    protected a: string;
    protected set some() {
        return 2;
    }
    protected a;
    private get some() {
        return 1;
    }
    protected a = 'someString';
    private set some() {
        return 2;
    }
    protected a: string;
    b(): number {
        return 5;
    }
    protected a = 5;
    static b(): number {
        return 5;
    }
    protected a;
    protected a() {
        return 5;
    }
    protected a = 'someString';
    protected static b(): number {
        return 5;
    }
    protected a = 5;
    private a() {
        return 5;
    }
    protected a = 'someString';
    private static c(a: number): number {
        return a;
    }
    protected a: string;
}

class Failures {
    public a;
    protected a = 5;
    public static a;
    protected a = 'someString';
    @Input() a = 5;
    protected a;
    @Output() a = 5;
    protected a = 5;
    get some() {
        return 1;
    }
    protected a: string;
    public set some() {
        return 2;
    }
    protected a = 5;
    protected get some() {
        return 1;
    }
    protected a;
    protected set some() {
        return 2;
    }
    protected a = 5;
    private get some() {
        return 1;
    }
    protected a = 5;
    private set some() {
        return 2;
    }
    protected a;
    public a() {
        return 5;
    }
    protected a: string;
    static c(a: number): number {
        return a;
    }
    protected a: string;
    protected b(): number {
        return 5;
    }
    protected a = 5;
    protected static a() {
        return 5;
    }
    protected a = 5;
    private b(): number {
        return 5;
    }
    protected a = 5;
    private static c(a: number): number {
        return a;
    }
    protected a: string;
}

// Wrong cases for public-instance-field-fields
class Failures {
    public static a = 'someString';
    a: string;
    @Input() a = 'someString';
    public a: string;
    @Output() a: string;
    a;
    public get some() {
        return 1;
    }
    a = 'someString';
    set some() {
        return 2;
    }
    public a = 5;
    protected get some() {
        return 1;
    }
    a: string;
    protected set some() {
        return 2;
    }
    public a = 5;
    private get some() {
        return 1;
    }
    a: string;
    private set some() {
        return 2;
    }
    public a: string;
    c(a: number): number {
        return a;
    }
    a = 5;
    static c(a: number): number {
        return a;
    }
    a = 5;
    protected a() {
        return 5;
    }
    a;
    protected static a() {
        return 5;
    }
    a = 5;
    private c(a: number): number {
        return a;
    }
    a = 5;
    private static b(): number {
        return 5;
    }
    a = 5;
}

class Failures {
    static a = 5;
    public a = 5;
    @Input() a;
    a = 5;
    @Output() a;
    public a = 5;
    get some() {
        return 1;
    }
    public a = 5;
    set some() {
        return 2;
    }
    public a = 5;
    protected get some() {
        return 1;
    }
    public a = 'someString';
    protected set some() {
        return 2;
    }
    public a = 'someString';
    private get some() {
        return 1;
    }
    public a = 5;
    private set some() {
        return 2;
    }
    a = 5;
    public a() {
        return 5;
    }
    public a;
    static b(): number {
        return 5;
    }
    public a = 5;
    protected c(a: number): number {
        return a;
    }
    public a = 5;
    protected static b(): number {
        return 5;
    }
    public a = 5;
    private b(): number {
        return 5;
    }
    a = 5;
    private static a() {
        return 5;
    }
    public a: string;
}

class Failures {
    static a: string;
    a: string;
    @Input() a = 'someString';
    a = 5;
    @Output() a: string;
    a = 5;
    public get some() {
        return 1;
    }
    a: string;
    set some() {
        return 2;
    }
    public a = 5;
    protected get some() {
        return 1;
    }
    public a;
    protected set some() {
        return 2;
    }
    public a = 5;
    private get some() {
        return 1;
    }
    public a = 5;
    private set some() {
        return 2;
    }
    a = 'someString';
    public b(): number {
        return 5;
    }
    public a: string;
    static c(a: number): number {
        return a;
    }
    public a;
    protected b(): number {
        return 5;
    }
    public a = 5;
    protected static c(a: number): number {
        return a;
    }
    a = 'someString';
    private a() {
        return 5;
    }
    public a = 'someString';
    private static a() {
        return 5;
    }
    public a = 5;
}

// Wrong cases for public-static-field-fields
class Failures {
    @Input() a = 'someString';
    public static a = 5;
    @Output() a = 5;
    static a = 5;
    get some() {
        return 1;
    }
    static a = 5;
    public set some() {
        return 2;
    }
    public static a;
    protected get some() {
        return 1;
    }
    static a = 5;
    protected set some() {
        return 2;
    }
    static a;
    private get some() {
        return 1;
    }
    static a = 'someString';
    private set some() {
        return 2;
    }
    static a = 'someString';
    c(a: number): number {
        return a;
    }
    public static a: string;
    public static b(): number {
        return 5;
    }
    static a: string;
    protected b(): number {
        return 5;
    }
    public static a: string;
    protected static b(): number {
        return 5;
    }
    static a: string;
    private a() {
        return 5;
    }
    public static a: string;
    private static a() {
        return 5;
    }
    public static a = 5;
}

class Failures {
    @Input() a = 'someString';
    static a = 5;
    @Output() a = 5;
    public static a: string;
    get some() {
        return 1;
    }
    static a = 5;
    public set some() {
        return 2;
    }
    public static a: string;
    protected get some() {
        return 1;
    }
    public static a = 5;
    protected set some() {
        return 2;
    }
    static a = 5;
    private get some() {
        return 1;
    }
    static a = 5;
    private set some() {
        return 2;
    }
    static a = 5;
    public b(): number {
        return 5;
    }
    public static a = 'someString';
    public static b(): number {
        return 5;
    }
    public static a: string;
    protected b(): number {
        return 5;
    }
    static a;
    protected static a() {
        return 5;
    }
    static a = 5;
    private b(): number {
        return 5;
    }
    static a = 5;
    private static a() {
        return 5;
    }
    static a = 5;
}

class Failures {
    @Input() a: string;
    public static a = 5;
    @Output() a: string;
    static a;
    public get some() {
        return 1;
    }
    static a = 5;
    set some() {
        return 2;
    }
    public static a = 5;
    protected get some() {
        return 1;
    }
    static a;
    protected set some() {
        return 2;
    }
    public static a;
    private get some() {
        return 1;
    }
    public static a = 'someString';
    private set some() {
        return 2;
    }
    static a: string;
    a() {
        return 5;
    }
    static a: string;
    public static c(a: number): number {
        return a;
    }
    public static a: string;
    protected a() {
        return 5;
    }
    static a = 5;
    protected static b(): number {
        return 5;
    }
    public static a = 5;
    private a() {
        return 5;
    }
    static a;
    private static b(): number {
        return 5;
    }
    public static a: string;
}

// Wrong cases for @Input-fields
class Failures {
    @Output() a = 5;
    @Input() a;
    get some() {
        return 1;
    }
    @Input() a = 5;
    set some() {
        return 2;
    }
    @Input() a = 'someString';
    protected get some() {
        return 1;
    }
    @Input() a = 'someString';
    protected set some() {
        return 2;
    }
    @Input() a;
    private get some() {
        return 1;
    }
    @Input() a: string;
    private set some() {
        return 2;
    }
    @Input() a: string;
    public a() {
        return 5;
    }
    @Input() a: string;
    static c(a: number): number {
        return a;
    }
    @Input() a: string;
    protected b(): number {
        return 5;
    }
    @Input() a = 'someString';
    protected static b(): number {
        return 5;
    }
    @Input() a = 5;
    private a() {
        return 5;
    }
    @Input() a = 'someString';
    private static b(): number {
        return 5;
    }
    @Input() a = 5;
}

class Failures {
    @Output() a = 5;
    @Input() a: string;
    public get some() {
        return 1;
    }
    @Input() a: string;
    set some() {
        return 2;
    }
    @Input() a = 5;
    protected get some() {
        return 1;
    }
    @Input() a;
    protected set some() {
        return 2;
    }
    @Input() a = 5;
    private get some() {
        return 1;
    }
    @Input() a = 5;
    private set some() {
        return 2;
    }
    @Input() a = 'someString';
    b(): number {
        return 5;
    }
    @Input() a = 'someString';
    public static c(a: number): number {
        return a;
    }
    @Input() a = 'someString';
    protected a() {
        return 5;
    }
    @Input() a = 5;
    protected static c(a: number): number {
        return a;
    }
    @Input() a = 5;
    private c(a: number): number {
        return a;
    }
    @Input() a = 5;
    private static b(): number {
        return 5;
    }
    @Input() a: string;
}

class Failures {
    @Output() a = 5;
    @Input() a = 'someString';
    get some() {
        return 1;
    }
    @Input() a = 5;
    set some() {
        return 2;
    }
    @Input() a = 5;
    protected get some() {
        return 1;
    }
    @Input() a: string;
    protected set some() {
        return 2;
    }
    @Input() a: string;
    private get some() {
        return 1;
    }
    @Input() a = 5;
    private set some() {
        return 2;
    }
    @Input() a = 5;
    public c(a: number): number {
        return a;
    }
    @Input() a = 5;
    public static a() {
        return 5;
    }
    @Input() a = 5;
    protected c(a: number): number {
        return a;
    }
    @Input() a;
    protected static c(a: number): number {
        return a;
    }
    @Input() a: string;
    private b(): number {
        return 5;
    }
    @Input() a: string;
    private static c(a: number): number {
        return a;
    }
    @Input() a = 5;
}

// Wrong cases for @Output-fields
class Failures {
    get some() {
        return 1;
    }
    @Output() a;
    public set some() {
        return 2;
    }
    @Output() a = 5;
    protected get some() {
        return 1;
    }
    @Output() a: string;
    protected set some() {
        return 2;
    }
    @Output() a = 5;
    private get some() {
        return 1;
    }
    @Output() a: string;
    private set some() {
        return 2;
    }
    @Output() a = 'someString';
    c(a: number): number {
        return a;
    }
    @Output() a = 'someString';
    public static b(): number {
        return 5;
    }
    @Output() a;
    protected b(): number {
        return 5;
    }
    @Output() a = 5;
    protected static c(a: number): number {
        return a;
    }
    @Output() a = 5;
    private a() {
        return 5;
    }
    @Output() a = 5;
    private static c(a: number): number {
        return a;
    }
    @Output() a = 'someString';
}

class Failures {
    get some() {
        return 1;
    }
    @Output() a;
    public set some() {
        return 2;
    }
    @Output() a;
    protected get some() {
        return 1;
    }
    @Output() a;
    protected set some() {
        return 2;
    }
    @Output() a: string;
    private get some() {
        return 1;
    }
    @Output() a: string;
    private set some() {
        return 2;
    }
    @Output() a;
    public a() {
        return 5;
    }
    @Output() a = 'someString';
    public static c(a: number): number {
        return a;
    }
    @Output() a: string;
    protected a() {
        return 5;
    }
    @Output() a: string;
    protected static b(): number {
        return 5;
    }
    @Output() a;
    private a() {
        return 5;
    }
    @Output() a;
    private static c(a: number): number {
        return a;
    }
    @Output() a = 'someString';
}

class Failures {
    public get some() {
        return 1;
    }
    @Output() a;
    set some() {
        return 2;
    }
    @Output() a = 'someString';
    protected get some() {
        return 1;
    }
    @Output() a = 5;
    protected set some() {
        return 2;
    }
    @Output() a = 5;
    private get some() {
        return 1;
    }
    @Output() a: string;
    private set some() {
        return 2;
    }
    @Output() a = 'someString';
    c(a: number): number {
        return a;
    }
    @Output() a;
    public static c(a: number): number {
        return a;
    }
    @Output() a;
    protected a() {
        return 5;
    }
    @Output() a: string;
    protected static a() {
        return 5;
    }
    @Output() a = 5;
    private a() {
        return 5;
    }
    @Output() a = 'someString';
    private static c(a: number): number {
        return a;
    }
    @Output() a = 5;
}

// Wrong cases for public-getter-fields
class Failures {
    set some() {
        return 2;
    }
    get some() {
        return 1;
    }
    protected get some() {
        return 1;
    }
    get some() {
        return 1;
    }
    protected set some() {
        return 2;
    }
    public get some() {
        return 1;
    }
    private get some() {
        return 1;
    }
    get some() {
        return 1;
    }
    private set some() {
        return 2;
    }
    public get some() {
        return 1;
    }
    public a() {
        return 5;
    }
    public get some() {
        return 1;
    }
    public static a() {
        return 5;
    }
    public get some() {
        return 1;
    }
    protected a() {
        return 5;
    }
    public get some() {
        return 1;
    }
    protected static b(): number {
        return 5;
    }
    get some() {
        return 1;
    }
    private b(): number {
        return 5;
    }
    get some() {
        return 1;
    }
    private static c(a: number): number {
        return a;
    }
    public get some() {
        return 1;
    }
}

class Failures {
    set some() {
        return 2;
    }
    public get some() {
        return 1;
    }
    protected get some() {
        return 1;
    }
    public get some() {
        return 1;
    }
    protected set some() {
        return 2;
    }
    get some() {
        return 1;
    }
    private get some() {
        return 1;
    }
    public get some() {
        return 1;
    }
    private set some() {
        return 2;
    }
    get some() {
        return 1;
    }
    c(a: number): number {
        return a;
    }
    get some() {
        return 1;
    }
    public static b(): number {
        return 5;
    }
    public get some() {
        return 1;
    }
    protected b(): number {
        return 5;
    }
    get some() {
        return 1;
    }
    protected static a() {
        return 5;
    }
    get some() {
        return 1;
    }
    private a() {
        return 5;
    }
    get some() {
        return 1;
    }
    private static c(a: number): number {
        return a;
    }
    get some() {
        return 1;
    }
}

class Failures {
    set some() {
        return 2;
    }
    get some() {
        return 1;
    }
    protected get some() {
        return 1;
    }
    public get some() {
        return 1;
    }
    protected set some() {
        return 2;
    }
    public get some() {
        return 1;
    }
    private get some() {
        return 1;
    }
    public get some() {
        return 1;
    }
    private set some() {
        return 2;
    }
    public get some() {
        return 1;
    }
    public c(a: number): number {
        return a;
    }
    get some() {
        return 1;
    }
    public static c(a: number): number {
        return a;
    }
    get some() {
        return 1;
    }
    protected c(a: number): number {
        return a;
    }
    get some() {
        return 1;
    }
    protected static c(a: number): number {
        return a;
    }
    get some() {
        return 1;
    }
    private b(): number {
        return 5;
    }
    get some() {
        return 1;
    }
    private static a() {
        return 5;
    }
    public get some() {
        return 1;
    }
}

// Wrong cases for public-setter-fields
class Failures {
    protected get some() {
        return 1;
    }
    set some() {
        return 2;
    }
    protected set some() {
        return 2;
    }
    set some() {
        return 2;
    }
    private get some() {
        return 1;
    }
    set some() {
        return 2;
    }
    private set some() {
        return 2;
    }
    public set some() {
        return 2;
    }
    public c(a: number): number {
        return a;
    }
    public set some() {
        return 2;
    }
    static b(): number {
        return 5;
    }
    set some() {
        return 2;
    }
    protected b(): number {
        return 5;
    }
    set some() {
        return 2;
    }
    protected static b(): number {
        return 5;
    }
    public set some() {
        return 2;
    }
    private a() {
        return 5;
    }
    public set some() {
        return 2;
    }
    private static a() {
        return 5;
    }
    public set some() {
        return 2;
    }
}

class Failures {
    protected get some() {
        return 1;
    }
    set some() {
        return 2;
    }
    protected set some() {
        return 2;
    }
    set some() {
        return 2;
    }
    private get some() {
        return 1;
    }
    public set some() {
        return 2;
    }
    private set some() {
        return 2;
    }
    set some() {
        return 2;
    }
    public a() {
        return 5;
    }
    public set some() {
        return 2;
    }
    public static b(): number {
        return 5;
    }
    set some() {
        return 2;
    }
    protected a() {
        return 5;
    }
    set some() {
        return 2;
    }
    protected static b(): number {
        return 5;
    }
    set some() {
        return 2;
    }
    private c(a: number): number {
        return a;
    }
    public set some() {
        return 2;
    }
    private static b(): number {
        return 5;
    }
    public set some() {
        return 2;
    }
}

class Failures {
    protected get some() {
        return 1;
    }
    set some() {
        return 2;
    }
    protected set some() {
        return 2;
    }
    set some() {
        return 2;
    }
    private get some() {
        return 1;
    }
    set some() {
        return 2;
    }
    private set some() {
        return 2;
    }
    set some() {
        return 2;
    }
    public b(): number {
        return 5;
    }
    set some() {
        return 2;
    }
    static b(): number {
        return 5;
    }
    set some() {
        return 2;
    }
    protected c(a: number): number {
        return a;
    }
    set some() {
        return 2;
    }
    protected static a() {
        return 5;
    }
    set some() {
        return 2;
    }
    private b(): number {
        return 5;
    }
    public set some() {
        return 2;
    }
    private static c(a: number): number {
        return a;
    }
    set some() {
        return 2;
    }
}

// Wrong cases for protected-getter-fields
class Failures {
    protected set some() {
        return 2;
    }
    protected get some() {
        return 1;
    }
    private get some() {
        return 1;
    }
    protected get some() {
        return 1;
    }
    private set some() {
        return 2;
    }
    protected get some() {
        return 1;
    }
    public c(a: number): number {
        return a;
    }
    protected get some() {
        return 1;
    }
    static b(): number {
        return 5;
    }
    protected get some() {
        return 1;
    }
    protected a() {
        return 5;
    }
    protected get some() {
        return 1;
    }
    protected static b(): number {
        return 5;
    }
    protected get some() {
        return 1;
    }
    private a() {
        return 5;
    }
    protected get some() {
        return 1;
    }
    private static b(): number {
        return 5;
    }
    protected get some() {
        return 1;
    }
}

class Failures {
    protected set some() {
        return 2;
    }
    protected get some() {
        return 1;
    }
    private get some() {
        return 1;
    }
    protected get some() {
        return 1;
    }
    private set some() {
        return 2;
    }
    protected get some() {
        return 1;
    }
    public a() {
        return 5;
    }
    protected get some() {
        return 1;
    }
    static c(a: number): number {
        return a;
    }
    protected get some() {
        return 1;
    }
    protected c(a: number): number {
        return a;
    }
    protected get some() {
        return 1;
    }
    protected static c(a: number): number {
        return a;
    }
    protected get some() {
        return 1;
    }
    private c(a: number): number {
        return a;
    }
    protected get some() {
        return 1;
    }
    private static c(a: number): number {
        return a;
    }
    protected get some() {
        return 1;
    }
}

class Failures {
    protected set some() {
        return 2;
    }
    protected get some() {
        return 1;
    }
    private get some() {
        return 1;
    }
    protected get some() {
        return 1;
    }
    private set some() {
        return 2;
    }
    protected get some() {
        return 1;
    }
    b(): number {
        return 5;
    }
    protected get some() {
        return 1;
    }
    static a() {
        return 5;
    }
    protected get some() {
        return 1;
    }
    protected c(a: number): number {
        return a;
    }
    protected get some() {
        return 1;
    }
    protected static b(): number {
        return 5;
    }
    protected get some() {
        return 1;
    }
    private a() {
        return 5;
    }
    protected get some() {
        return 1;
    }
    private static c(a: number): number {
        return a;
    }
    protected get some() {
        return 1;
    }
}

// Wrong cases for protected-setter-fields
class Failures {
    private get some() {
        return 1;
    }
    protected set some() {
        return 2;
    }
    private set some() {
        return 2;
    }
    protected set some() {
        return 2;
    }
    public a() {
        return 5;
    }
    protected set some() {
        return 2;
    }
    public static b(): number {
        return 5;
    }
    protected set some() {
        return 2;
    }
    protected c(a: number): number {
        return a;
    }
    protected set some() {
        return 2;
    }
    protected static a() {
        return 5;
    }
    protected set some() {
        return 2;
    }
    private b(): number {
        return 5;
    }
    protected set some() {
        return 2;
    }
    private static a() {
        return 5;
    }
    protected set some() {
        return 2;
    }
}

class Failures {
    private get some() {
        return 1;
    }
    protected set some() {
        return 2;
    }
    private set some() {
        return 2;
    }
    protected set some() {
        return 2;
    }
    b(): number {
        return 5;
    }
    protected set some() {
        return 2;
    }
    public static c(a: number): number {
        return a;
    }
    protected set some() {
        return 2;
    }
    protected c(a: number): number {
        return a;
    }
    protected set some() {
        return 2;
    }
    protected static c(a: number): number {
        return a;
    }
    protected set some() {
        return 2;
    }
    private c(a: number): number {
        return a;
    }
    protected set some() {
        return 2;
    }
    private static b(): number {
        return 5;
    }
    protected set some() {
        return 2;
    }
}

class Failures {
    private get some() {
        return 1;
    }
    protected set some() {
        return 2;
    }
    private set some() {
        return 2;
    }
    protected set some() {
        return 2;
    }
    public a() {
        return 5;
    }
    protected set some() {
        return 2;
    }
    static c(a: number): number {
        return a;
    }
    protected set some() {
        return 2;
    }
    protected c(a: number): number {
        return a;
    }
    protected set some() {
        return 2;
    }
    protected static b(): number {
        return 5;
    }
    protected set some() {
        return 2;
    }
    private b(): number {
        return 5;
    }
    protected set some() {
        return 2;
    }
    private static a() {
        return 5;
    }
    protected set some() {
        return 2;
    }
}

// Wrong cases for private-getter-fields
class Failures {
    private set some() {
        return 2;
    }
    private get some() {
        return 1;
    }
    a() {
        return 5;
    }
    private get some() {
        return 1;
    }
    public static a() {
        return 5;
    }
    private get some() {
        return 1;
    }
    protected b(): number {
        return 5;
    }
    private get some() {
        return 1;
    }
    protected static c(a: number): number {
        return a;
    }
    private get some() {
        return 1;
    }
    private b(): number {
        return 5;
    }
    private get some() {
        return 1;
    }
    private static b(): number {
        return 5;
    }
    private get some() {
        return 1;
    }
}

class Failures {
    private set some() {
        return 2;
    }
    private get some() {
        return 1;
    }
    public a() {
        return 5;
    }
    private get some() {
        return 1;
    }
    static a() {
        return 5;
    }
    private get some() {
        return 1;
    }
    protected c(a: number): number {
        return a;
    }
    private get some() {
        return 1;
    }
    protected static a() {
        return 5;
    }
    private get some() {
        return 1;
    }
    private a() {
        return 5;
    }
    private get some() {
        return 1;
    }
    private static b(): number {
        return 5;
    }
    private get some() {
        return 1;
    }
}

class Failures {
    private set some() {
        return 2;
    }
    private get some() {
        return 1;
    }
    a() {
        return 5;
    }
    private get some() {
        return 1;
    }
    static a() {
        return 5;
    }
    private get some() {
        return 1;
    }
    protected c(a: number): number {
        return a;
    }
    private get some() {
        return 1;
    }
    protected static a() {
        return 5;
    }
    private get some() {
        return 1;
    }
    private a() {
        return 5;
    }
    private get some() {
        return 1;
    }
    private static c(a: number): number {
        return a;
    }
    private get some() {
        return 1;
    }
}

// Wrong cases for private-setter-fields
class Failures {
    a() {
        return 5;
    }
    private set some() {
        return 2;
    }
    static a() {
        return 5;
    }
    private set some() {
        return 2;
    }
    protected b(): number {
        return 5;
    }
    private set some() {
        return 2;
    }
    protected static a() {
        return 5;
    }
    private set some() {
        return 2;
    }
    private b(): number {
        return 5;
    }
    private set some() {
        return 2;
    }
    private static c(a: number): number {
        return a;
    }
    private set some() {
        return 2;
    }
}

class Failures {
    a() {
        return 5;
    }
    private set some() {
        return 2;
    }
    static c(a: number): number {
        return a;
    }
    private set some() {
        return 2;
    }
    protected c(a: number): number {
        return a;
    }
    private set some() {
        return 2;
    }
    protected static a() {
        return 5;
    }
    private set some() {
        return 2;
    }
    private b(): number {
        return 5;
    }
    private set some() {
        return 2;
    }
    private static c(a: number): number {
        return a;
    }
    private set some() {
        return 2;
    }
}

class Failures {
    public b(): number {
        return 5;
    }
    private set some() {
        return 2;
    }
    public static a() {
        return 5;
    }
    private set some() {
        return 2;
    }
    protected a() {
        return 5;
    }
    private set some() {
        return 2;
    }
    protected static a() {
        return 5;
    }
    private set some() {
        return 2;
    }
    private b(): number {
        return 5;
    }
    private set some() {
        return 2;
    }
    private static c(a: number): number {
        return a;
    }
    private set some() {
        return 2;
    }
}

// Wrong cases for public-instance-method-fields
class Failures {
    static b(): number {
        return 5;
    }
    c(a: number): number {
        return a;
    }
    protected b(): number {
        return 5;
    }
    public b(): number {
        return 5;
    }
    protected static b(): number {
        return 5;
    }
    public b(): number {
        return 5;
    }
    private a() {
        return 5;
    }
    public c(a: number): number {
        return a;
    }
    private static a() {
        return 5;
    }
    a() {
        return 5;
    }
}

class Failures {
    public static c(a: number): number {
        return a;
    }
    public c(a: number): number {
        return a;
    }
    protected b(): number {
        return 5;
    }
    public b(): number {
        return 5;
    }
    protected static b(): number {
        return 5;
    }
    public b(): number {
        return 5;
    }
    private a() {
        return 5;
    }
    a() {
        return 5;
    }
    private static c(a: number): number {
        return a;
    }
    a() {
        return 5;
    }
}

class Failures {
    public static c(a: number): number {
        return a;
    }
    public b(): number {
        return 5;
    }
    protected c(a: number): number {
        return a;
    }
    b(): number {
        return 5;
    }
    protected static c(a: number): number {
        return a;
    }
    public a() {
        return 5;
    }
    private a() {
        return 5;
    }
    public b(): number {
        return 5;
    }
    private static a() {
        return 5;
    }
    public a() {
        return 5;
    }
}

// Wrong cases for public-static-method-fields
class Failures {
    protected c(a: number): number {
        return a;
    }
    public static b(): number {
        return 5;
    }
    protected static b(): number {
        return 5;
    }
    static a() {
        return 5;
    }
    private a() {
        return 5;
    }
    public static b(): number {
        return 5;
    }
    private static c(a: number): number {
        return a;
    }
    public static a() {
        return 5;
    }
}

class Failures {
    protected c(a: number): number {
        return a;
    }
    static a() {
        return 5;
    }
    protected static c(a: number): number {
        return a;
    }
    public static c(a: number): number {
        return a;
    }
    private c(a: number): number {
        return a;
    }
    static b(): number {
        return 5;
    }
    private static c(a: number): number {
        return a;
    }
    public static a() {
        return 5;
    }
}

class Failures {
    protected c(a: number): number {
        return a;
    }
    static c(a: number): number {
        return a;
    }
    protected static c(a: number): number {
        return a;
    }
    public static b(): number {
        return 5;
    }
    private a() {
        return 5;
    }
    public static a() {
        return 5;
    }
    private static c(a: number): number {
        return a;
    }
    public static a() {
        return 5;
    }
}

// Wrong cases for protected-instance-method-fields
class Failures {
    protected static b(): number {
        return 5;
    }
    protected c(a: number): number {
        return a;
    }
    private c(a: number): number {
        return a;
    }
    protected c(a: number): number {
        return a;
    }
    private static a() {
        return 5;
    }
    protected b(): number {
        return 5;
    }
}

class Failures {
    protected static a() {
        return 5;
    }
    protected c(a: number): number {
        return a;
    }
    private c(a: number): number {
        return a;
    }
    protected c(a: number): number {
        return a;
    }
    private static c(a: number): number {
        return a;
    }
    protected b(): number {
        return 5;
    }
}

class Failures {
    protected static c(a: number): number {
        return a;
    }
    protected b(): number {
        return 5;
    }
    private c(a: number): number {
        return a;
    }
    protected b(): number {
        return 5;
    }
    private static b(): number {
        return 5;
    }
    protected a() {
        return 5;
    }
}

// Wrong cases for protected-static-method-fields
class Failures {
    private b(): number {
        return 5;
    }
    protected static a() {
        return 5;
    }
    private static b(): number {
        return 5;
    }
    protected static c(a: number): number {
        return a;
    }
}

class Failures {
    private a() {
        return 5;
    }
    protected static c(a: number): number {
        return a;
    }
    private static c(a: number): number {
        return a;
    }
    protected static b(): number {
        return 5;
    }
}

class Failures {
    private b(): number {
        return 5;
    }
    protected static a() {
        return 5;
    }
    private static a() {
        return 5;
    }
    protected static a() {
        return 5;
    }
}

// Wrong cases for private-instance-method-fields
class Failures {
    private static a() {
        return 5;
    }
    private a() {
        return 5;
    }
}

class Failures {
    private static b(): number {
        return 5;
    }
    private c(a: number): number {
        return a;
    }
}

class Failures {
    private static b(): number {
        return 5;
    }
    private b(): number {
        return 5;
    }
}
