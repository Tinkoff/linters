/**
 * @note:
 * don't export class for prevent IDE imports in any files
 */
abstract class AbstractBadMemberOrdering {
    /* TSError: private' modifier cannot be used with 'abstract' modifier */
    /* private abstract privateAbstract; */
    protected abstract protectedAbstract;
    abstract publicAbstract;

    abstract publicAbstractMethod();
    protected abstract protectedAbstractMethod();

    protected abstract set protectedAbstractSet(val: unknown);
    protected abstract get protectedAbstractGet(): unknown;

    abstract set publicAbstractSet(val: unknown);
    public abstract get publicAbstractGet(): unknown;
}

/**
 * @note:
 * don't export class for prevent IDE imports in any files
 */
class BadMemberOrdering extends AbstractBadMemberOrdering {
    private get publicGet() {
        return this.publicField;
    }

    private get privateGet() {
        return this.privateField;
    }

    protected get protectedGet() {
        return this.protectedField;
    }

    publicField;
    private privateField;
    protected protectedField;
    publicAbstract;
    protected protectedAbstract;

    @MethodDecorator()
    protected protectedDecoratedMethod() {
        return this.protectedGet;
    }

    @MethodDecorator()
    publicDecoratedMethod() {
        return this.publicGet;
    }

    constructor() {
        super();
    }

    protected protectedMethod() {
        return this.protectedGet;
    }

    publicMethod() {
        return this.publicGet;
    }

    private privateMethod() {
        return this.privateGet;
    }

    @FieldDecorator()
    private privateFieldDecorator() {
        return this.privateMethod();
    }

    @FieldDecorator()
    protected protectedFieldDecorator() {
        return this.protectedMethod();
    }

    @FieldDecorator()
    public publicFieldDecorator() {
        return this.publicMethod();
    }

    @FieldDecorator()
    private set privateSetFieldDecorator(_value) {}

    @FieldDecorator()
    protected set protectedSetFieldDecorator(_value) {}

    @FieldDecorator()
    public set publicSetFieldDecorator(_value) {}

    @FieldDecorator()
    private get privateGetFieldDecorator() {
        return 'some value';
    }

    @FieldDecorator()
    protected get protectedGetFieldDecorator() {
        return 'some value';
    }

    @FieldDecorator()
    get publicGetFieldDecorator() {
        return 'some value';
    }

    ['signature']: unknown;

    protected protectedAbstractMethod() {}

    publicAbstractMethod() {}

    protected get protectedAbstractGet(): unknown {
        return undefined;
    }

    get publicAbstractGet(): unknown {
        return undefined;
    }

    protected set protectedAbstractSet(val: unknown) {}

    set publicAbstractSet(val: unknown) {}
}

// @note: prevent IDE error about unused class
new BadMemberOrdering();

function FieldDecorator() {
    return (target, name, descriptor) => {
        descriptor.writable = false;
        return descriptor;
    };
}

function MethodDecorator() {
    return (target, name, descriptor) => descriptor;
}
