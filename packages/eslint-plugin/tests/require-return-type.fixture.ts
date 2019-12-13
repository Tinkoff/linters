const Decorator = fn => {};

class a {
    b() {}
    public e(): string {
        return '123';
    }
    protected e2(): string {
        return '123';
    }
    private e3(): string {
        return '123';
    }
    private e4(): string {
        return '123';
    }
    static e5(): string {
        return '123';
    }
    @Decorator()
    d(): string {
        return '123';
    }
    d2(a: string): string {
        return '123';
    }

    c() {
        // Should fail
        return '123';
    }
    c2(/* 123 */) {
        // Should fail
        return '123';
    }
    c3() /* 123 */ {
        // Should fail
        return '123';
    }
    c4() {
        // 321 // Should fail
        return '123';
    }
    c5() {
        return;
    }
}

() => {
    new a();
};

(): string => {
    return '123';
};

() => {
    return '123';
};

const arrow = (): string => '123';
const arrow2 = (param: string): string => param;
const arrow3 = () => '123';
const arrow4 = () => '123';
const arrow5 = (param: string) =>
    param +
    function() {
        new a();
    };

+function(): string {
    return '123';
};

+function() {
    return '123';
};

function ab() {
    new a();
}

function ab2() {
    return;
}

function ab3() {
    // Should fail
    return '123';
}

// Edge case
// () => ({ action: 'xxx' }) as const
