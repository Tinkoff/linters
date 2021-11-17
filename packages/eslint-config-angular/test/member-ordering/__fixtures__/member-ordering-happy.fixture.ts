import {__Foo__ as Foo, __Bar__ as Bar} from './shared-utils.fixture';

class ValidFixture1 {
    private a: string;
    protected b: string;
    public c: string;

    constructor() {}

    public d() {}
    protected e() {}
    private f() {}
}

abstract class ValidFixture2 {
    public abstract c1: string;
    protected abstract b1: string;
    private a: string;
    protected b: string;
    public c: string;

    public abstract d1();
    protected abstract e1();

    public d() {}
    protected e() {}
    private f() {}
}

abstract class ValidFixture3 {
    public static c2: string;
    protected static b2: string;
    public abstract c1: string;
    protected abstract b1: string;
    private a: string;
    protected b: string;
    public c: string;

    public static d2() {}
    protected static e2() {}
    public abstract d1();
    protected abstract e1();

    public d() {}
    protected e() {}
    private f() {}
}

abstract class ValidFixture4 {
    public static c2: string;
    protected static b2: string;
    public abstract c1: string;
    protected abstract b1: string;
    private a: string;
    protected b: string;
    public c: string;

    public static d2() {}
    protected static e2() {}
    public abstract d1();
    protected abstract e1();

    @Bar() public d3() {}
    public d() {}
    @Bar() protected e3() {}
    protected e() {}
    @Bar() private f1() {}
    private f() {}
}

abstract class ValidFixture5 {
    public static c2: string;
    protected static b2: string;
    public abstract c1: string;
    protected abstract b1: string;
    private a: string;
    protected b: string;
    public c: string;

    public static d2() {}
    protected static e2() {}
    public abstract d1();
    protected abstract e1();

    @Bar() public d3() {}
    public d() {}
    @Bar() protected e3() {}
    protected e() {}
    @Bar() private f1() {}
    private f() {}
}

abstract class ValidFixture6 {
    @Bar() private a2: string;
    private a1: string;
    @Bar() protected b2: string;
    protected b1: string;
    @Bar() public c2: string;
    public c1: string;
}

abstract class ValidFixture7 {
    public get a1() {
        return 1;
    }

    @Bar() public set a1(_) {}

    protected get a2() {
        return 1;
    }

    @Bar() protected set a2(_) {}

    private get a3() {
        return 1;
    }

    @Bar() private set a3(_) {}
}

abstract class ValidFixture8 {
    public static a = 'someString';
    protected static b = 'someString';
    private static readonly c = 'someString';
    public abstract d;
    protected abstract e;
    @Foo() private readonly f: string;
    private readonly g: string;
    protected h = 5;
    @Foo() i = 5;
    @Foo() j = 'someString';
    public k;

    public get l() {
        return 1;
    }

    public set l(_) {
        // noop
    }

    protected get m() {
        return 1;
    }

    protected set m(_) {
        // noop
    }

    private get n() {
        return 1;
    }

    private set n(_) {
        // noop
    }

    public static o(): number {
        return 5;
    }

    protected static p() {
        return 5;
    }

    private static q(): number {
        return 5;
    }

    public abstract r();

    protected abstract s();

    public t(): number {
        return 5;
    }

    protected u(): number {
        return 5;
    }

    private v(a: number): number {
        return a;
    }
}

class ValidFixture9 {
    @Foo() private a;
    private readonly b: string;
    @Foo() protected c;
    protected d;
    @Bar() public e;

    constructor() {}

    @Foo()
    public get g() {
        return 1;
    }

    @Foo()
    public get h() {
        return 1;
    }

    public get f() {
        return 1;
    }

    @Bar()
    public set f(_) {
        // noop
    }

    protected set g(_) {
        // noop
    }

    private set h(_) {
        // noop
    }
}

class ValidFixture10 {
    constructor() {}

    public get a() {
        return 1;
    }
    public set a(_) {}

    public get b() {
        return 1;
    }
    public set b(_) {}

    public get c() {
        return 1;
    }
    public set c(_) {}

    public etc() {}
}

class ValidFixture11 {
    constructor() {}

    public get a() {
        return 1;
    }
    public set a(_) {}

    public static get a() {
        return 1;
    }
    public static set a(_) {}

    public static get b() {
        return 1;
    }
    public static set b(_) {}

    public get b() {
        return 1;
    }
    public set b(_) {}

    public get c() {
        return 1;
    }
    public set c(_) {}

    public static get c() {
        return 1;
    }
    public static set c(_) {}

    public etc() {}
}
