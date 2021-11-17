import { __Foo__ as Foo, __Bar__ as Bar } from './shared-utils.fixture';

// Wrong cases for private-instance-field-fields
class InvalidFixture1 {
  private static readonly a1: string;
  private a2 = 'someString';
  protected static a3: string;
  private a4 = 5;
  protected a5;
  private a6;
  a7;
  private a8 = 5;
  public static a9 = 5;
  private a10: string;
  @Foo() a11 = 5;
  private a12;
  @Bar() a13 = 'someString';
  private a14;
  public get some15() {
    return 1;
  }
  private a16 = 5;
  set some17(_) {
    // noop
  }
  private a18;
  protected get some19() {
    return 1;
  }
  private readonly a20 = 5;
  protected set some21(_) {
    // noop
  }
  private readonly a22 = 5;
  private get some23() {
    return 1;
  }
  private readonly a24 = 5;
  private set some25(_) {
    // noop
  }
  private readonly a26;
  c27(a: number): number {
    return a;
  }
  private readonly a28;
  static c29(a: number): number {
    return a;
  }
  private readonly a30 = 5;
  protected c31(a: number): number {
    return a;
  }
  private readonly a32 = 5;
  protected static a33() {
    return 5;
  }
  private readonly a34 = 5;
  private b35(): number {
    return 5;
  }
  private readonly a36 = 'someString';
  private static a37() {
    return 5;
  }
  private readonly a38 = 5;
}

class InvalidFixture2 {
  private static readonly a1 = 5;
  private a2;
  protected static a3: string;
  private a4 = 5;
  protected a5;
  private a6: string;
  a7 = 'someString';
  private a8: string;
  public static a9 = 'someString';
  private a10: string;
  @Foo() a11 = 'someString';
  private a12 = 5;
  @Bar() a13 = 5;
  private a14 = 'someString';
  get some15() {
    return 1;
  }
  private a16 = 'someString';
  public set some17(_) {
    // noop
  }
  private a18 = 5;
  protected get some19() {
    return 1;
  }
  private readonly a20: string;
  protected set some21(_) {
    // noop
  }
  private readonly a22 = 5;
  private get some23() {
    return 1;
  }
  private readonly a24 = 5;
  private set some25(_) {
    // noop
  }
  private readonly a26 = 5;
  public b27(): number {
    return 5;
  }
  private readonly a28;
  public static b29(): number {
    return 5;
  }
  private readonly a30 = 5;
  protected c31(a: number): number {
    return a;
  }
  private readonly a32;
  protected static b33(): number {
    return 5;
  }
  private readonly a34 = 5;
  private b35(): number {
    return 5;
  }
  private readonly a36: string;
  private static a37() {
    return 5;
  }
  private readonly a38;
}

class InvalidFixture3 {
  private static readonly a1;
  private a2 = 'someString';
  protected static a3: string;
  private a4: string;
  protected a5 = 5;
  private a6 = 'someString';
  public a7;
  private a8 = 5;
  static a9 = 'someString';
  private a10: string;
  @Foo() a11 = 5;
  private a12;
  @Bar() a13 = 'someString';
  private a14;
  get some15() {
    return 1;
  }
  private a16 = 5;
  public set some17(_) {
    // noop
  }
  private a18 = 'someString';
  protected get some19() {
    return 1;
  }
  private readonly a20 = 5;
  protected set some21(_) {
    // noop
  }
  private readonly a22 = 5;
  private get some23() {
    return 1;
  }
  private readonly a24: string;
  private set some25(_) {
    // noop
  }
  private readonly a26;
  a27() {
    return 5;
  }
  private readonly a28 = 5;
  static a29() {
    return 5;
  }
  private readonly a30 = 'someString';
  protected c32(c: number): number {
    return c;
  }
  private readonly a33 = 'someString';
  protected static b34(): number {
    return 5;
  }
  private readonly a35;
  private b36(): number {
    return 5;
  }
  private readonly a37 = 'someString';
  private static a38() {
    return 5;
  }
  private readonly a39: string;
}

// Wrong cases for private-static-field-fields
class InvalidFixture4 {
  protected static a1 = 5;
  private static a2 = 5;
  protected a3;
  private static a4;
  public a5: string;
  private static a6 = 5;
  static a7 = 5;
  private static a8 = 5;
  @Foo() a9: string;
  private static a10: string;
  @Bar() a11 = 5;
  private static a12;
  get some12() {
    return 1;
  }
  private static a13 = 5;
  set some14(_) {
    // noop
  }
  private static a15 = 'someString';
  protected get some16() {
    return 1;
  }
  private static readonly a17 = 'someString';
  protected set some18(_) {
    // noop
  }
  private static readonly a19 = 5;
  private get some20() {
    return 1;
  }
  private static readonly a21 = 'someString';
  private set some22(_) {
    // noop
  }
  private static readonly a23: string;
  c24(a: number): number {
    return a;
  }
  private static readonly a25: string;
  static b26(): number {
    return 5;
  }
  private static readonly a27 = 'someString';
  protected c28(a: number): number {
    return a;
  }
  private static readonly a29 = 'someString';
  protected static a30() {
    return 5;
  }
  private static readonly a31 = 5;
  private c32(a: number): number {
    return a;
  }
  private static readonly a33: string;
  private static a34() {
    return 5;
  }
  private static readonly a35 = 5;
}

class InvalidFixture5 {
  protected static a1 = 5;
  private static a2 = 5;
  protected a3 = 5;
  private static a4 = 5;
  public a5 = 5;
  private static a6 = 5;
  static a7: string;
  private static a8 = 5;
  @Foo() a9;
  private static a10 = 'someString';
  @Bar() a11 = 5;
  private static a12;
  get some13() {
    return 1;
  }
  private static a14;
  public set some15(_) {
    // noop
  }
  private static a16 = 5;
  protected get some17() {
    return 1;
  }
  private static readonly a18;
  protected set some19(_) {
    // noop
  }
  private static readonly a20: string;
  private get some21() {
    return 1;
  }
  private static readonly a22 = 'someString';
  private set some23(_) {
    // noop
  }
  private static readonly a24 = 5;
  c25(a: number): number {
    return a;
  }
  private static readonly a26: string;
  static a27() {
    return 5;
  }
  private static readonly a28 = 5;
  protected a29() {
    return 5;
  }
  private static readonly a30 = 5;
  protected static c31(a: number): number {
    return a;
  }
  private static readonly a32 = 5;
  private a33() {
    return 5;
  }
  private static readonly a34 = 5;
  private static a35() {
    return 5;
  }
  private static readonly a36;
}

class InvalidFixture6 {
  protected static a1 = 5;
  private static a2;
  protected a3 = 5;
  private static a4 = 5;
  public a5 = 5;
  private static a6 = 'someString';
  public static a7 = 5;
  private static a8 = 'someString';
  @Foo() a9: string;
  private static a10 = 5;
  @Bar() a11: string;
  private static a12 = 5;
  public get some13() {
    return 1;
  }
  private static a14 = 5;
  set some15(_) {
    // noop
  }
  private static a16;
  protected get some17() {
    return 1;
  }
  private static readonly a18 = 'someString';
  protected set some19(_) {
    // noop
  }
  private static readonly a20 = 5;
  private get some21() {
    return 1;
  }
  private static readonly a22 = 5;
  private set some23(_) {
    // noop
  }
  private static readonly a24 = 'someString';
  a25() {
    return 5;
  }
  private static readonly a26;
  static c27(a: number): number {
    return a;
  }
  private static readonly a29 = 'someString';
  protected b30(): number {
    return 5;
  }
  private static readonly a31: string;
  protected static a32() {
    return 5;
  }
  private static readonly a33 = 5;
  private c34(a: number): number {
    return a;
  }
  private static readonly a35 = 5;
  private static a36() {
    return 5;
  }
  private static readonly a37 = 5;
}

// Wrong cases for protected-static-field-fields
class InvalidFixture7 {
  protected a1: string;
  protected static a2;
  public a3 = 5;
  protected static a4 = 5;
  public static a5;
  protected static a6 = 5;
  @Foo() a7 = 5;
  protected static a8 = 5;
  @Bar() a9 = 'someString';
  protected static a10 = 5;
  public get some11() {
    return 1;
  }
  protected static a12 = 'someString';
  public set some13(_) {
    // noop
  }
  protected static a14: string;
  protected get some15() {
    return 1;
  }
  protected static a16: string;
  protected set some17(_) {
    // noop
  }
  protected static a18 = 'someString';
  private get some19() {
    return 1;
  }
  protected static a20 = 5;
  private set some21(_) {
    // noop
  }
  protected static a22: string;
  public b23(): number {
    return 5;
  }
  protected static a24 = 5;
  static b25(): number {
    return 5;
  }
  protected static a26: string;
  protected c27(a: number): number {
    return a;
  }
  protected static a28 = 5;
  protected static c29(a: number): number {
    return a;
  }
  protected static a30: string;
  private b31(): number {
    return 5;
  }
  protected static a32 = 'someString';
  private static a33() {
    return 5;
  }
  protected static a34;
}

class InvalidFixture8 {
  protected a1 = 'someString';
  protected static a2: string;
  a3 = 5;
  protected static a4: string;
  static a5: string;
  protected static a6 = 5;
  @Foo() a7 = 5;
  protected static a8;
  @Bar() a9 = 'someString';
  protected static a10 = 5;
  get some11() {
    return 1;
  }
  protected static a12 = 5;
  public set some13(_) {
    // noop
  }
  protected static a14;
  protected get some15() {
    return 1;
  }
  protected static a16 = 'someString';
  protected set some17(_) {
    // noop
  }
  protected static a18 = 5;
  private get some19() {
    return 1;
  }
  protected static a20;
  private set some21(_) {
    // noop
  }
  protected static a22 = 'someString';
  c23(a: number): number {
    return a;
  }
  protected static a24 = 'someString';
  public static a25() {
    return 5;
  }
  protected static a26 = 5;
  protected c27(a: number): number {
    return a;
  }
  protected static a28;
  protected static b29(): number {
    return 5;
  }
  protected static a30 = 5;
  private a31() {
    return 5;
  }
  protected static a32 = 'someString';
  private static c33(a: number): number {
    return a;
  }
  protected static a34 = 5;
}

class Failure9 {
  protected a1: string;
  protected static a2: string;
  public a3 = 5;
  protected static a4: string;
  public static a5 = 5;
  protected static a6: string;
  @Foo() a7: string;
  protected static a8: string;
  @Bar() a9;
  protected static a10: string;
  get some11() {
    return 1;
  }
  protected static a12 = 5;
  public set some13(_) {
    // noop
  }
  protected static a14 = 5;
  protected get some15() {
    return 1;
  }
  protected static a16;
  protected set some17(_) {
    // noop
  }
  protected static a18 = 5;
  private get some19() {
    return 1;
  }
  protected static a20 = 5;
  private set some21(_) {
    // noop
  }
  protected static a22 = 5;
  public c23(a: number): number {
    return a;
  }
  protected static a24 = 5;
  static c25(a: number): number {
    return a;
  }
  protected static a26: string;
  protected b27(): number {
    return 5;
  }
  protected static a28 = 5;
  protected static a29() {
    return 5;
  }
  protected static a30 = 'someString';
  private b31(): number {
    return 5;
  }
  protected static a32;
  private static c33(a: number): number {
    return a;
  }
  protected static a34 = 'someString';
}

// Wrong cases for protected-instance-field-fields
class InvalidFixture10 {
  public a1 = 5;
  protected a2 = 5;
  public static a3 = 5;
  protected a4 = 5;
  @Foo() a5 = 'someString';
  protected a6 = 'someString';
  @Bar() a7 = 'someString';
  protected a8 = 5;
  get some9() {
    return 1;
  }
  protected a10 = 5;
  set some11(_) {
    // noop
  }
  protected a12 = 'someString';
  protected get some13() {
    return 1;
  }
  protected a14: string;
  protected set some15(_) {
    // noop
  }
  protected a16 = 'someString';
  private get some17() {
    return 1;
  }
  protected a18 = 5;
  protected set some19(_) {
    // noop
  }
  protected a20 = 'someString';
  public c21(a: number): number {
    return a;
  }
  protected a22: string;
  public static a23() {
    return 5;
  }
  protected a24: string;
  protected b25(): number {
    return 5;
  }
  protected a26 = 'someString';
  protected static c27(a: number): number {
    return a;
  }
  protected a28 = 'someString';
  private b29(): number {
    return 5;
  }
  protected a30 = 5;
  private static a31() {
    return 5;
  }
  protected a32 = 5;
}

class InvalidFixture11 {
  public a1;
  protected a2: string;
  static a3;
  protected a4 = 5;
  @Foo() a5: string;
  protected a6 = 'someString';
  @Bar() a7 = 5;
  protected a8 = 5;
  public get some9() {
    return 1;
  }
  protected a10 = 5;
  set some11(_) {
    // noop
  }
  protected a12;
  protected get some13() {
    return 1;
  }
  protected a14: string;
  protected set some15(_) {
    // noop
  }
  protected a16;
  private get some17() {
    return 1;
  }
  protected a18 = 'someString';
  protected set some19(_) {
    // noop
  }
  protected a20: string;
  b21(): number {
    return 5;
  }
  protected a22 = 5;
  static b23(): number {
    return 5;
  }
  protected a24;
  protected a25() {
    return 5;
  }
  protected a26 = 'someString';
  protected static b27(): number {
    return 5;
  }
  protected a28 = 5;
  private a29() {
    return 5;
  }
  protected a30 = 'someString';
  private static c31(a: number): number {
    return a;
  }
  protected a32: string;
}

class InvalidFixture12 {
  public a1;
  protected a2 = 5;
  public static a3;
  protected a4 = 'someString';
  @Foo() a5 = 5;
  protected a6;
  @Bar() a7 = 5;
  protected a8 = 5;
  get some9() {
    return 1;
  }
  protected a10: string;
  public set some11(_) {
    // noop
  }
  protected a12 = 5;
  protected get some13() {
    return 1;
  }
  protected a14;
  protected set some15(_) {
    // noop
  }
  protected a16 = 5;
  private get some17() {
    return 1;
  }
  protected a18 = 5;
  protected set some19(_) {
    // noop
  }
  protected a20;
  public a21() {
    return 5;
  }
  protected a22: string;
  static c23(a: number): number {
    return a;
  }
  protected a24: string;
  protected b25(): number {
    return 5;
  }
  protected a26 = 5;
  protected static a() {
    return 5;
  }
  protected a27 = 5;
  private b28(): number {
    return 5;
  }
  protected a29 = 5;
  private static c30(a: number): number {
    return a;
  }
  protected a31: string;
}

// Wrong cases for public-instance-field-fields
class InvalidFixture13 {
  public static a1 = 'someString';
  a2: string;
  @Foo() a3 = 'someString';
  public a4: string;
  @Bar() a5: string;
  a6;
  public get some7() {
    return 1;
  }
  a8 = 'someString';
  set some9(_) {
    // noop
  }
  public a10 = 5;
  protected get some11() {
    return 1;
  }
  a12: string;
  protected set some13(_) {
    // noop
  }
  public a14 = 5;
  private get some15() {
    return 1;
  }
  a16: string;
  protected set some17(_) {
    // noop
  }
  public a18: string;
  c19(a: number): number {
    return a;
  }
  a20 = 5;
  static c21(a: number): number {
    return a;
  }
  a22 = 5;
  protected a23() {
    return 5;
  }
  a24;
  protected static a25() {
    return 5;
  }
  a26 = 5;
  private c27(a: number): number {
    return a;
  }
  a28 = 5;
  private static b29(): number {
    return 5;
  }
  a30 = 5;
}

class InvalidFixture14 {
  static a1 = 5;
  public a2 = 5;
  @Foo() a3;
  a4 = 5;
  @Bar() a5;
  public a6 = 5;
  get some7() {
    return 1;
  }
  public a8 = 5;
  set some9(_) {
    // noop
  }
  public a10 = 5;
  protected get some11() {
    return 1;
  }
  public a12 = 'someString';
  protected set some13(_) {
    // noop
  }
  public a14 = 'someString';
  private get some15() {
    return 1;
  }
  public a16 = 5;
  protected set some17(_) {
    // noop
  }
  a18 = 5;
  public a19() {
    return 5;
  }
  public a20;
  static b21(): number {
    return 5;
  }
  public a22 = 5;
  protected c23(a: number): number {
    return a;
  }
  public a24 = 5;
  protected static b25(): number {
    return 5;
  }
  public a26 = 5;
  private b27(): number {
    return 5;
  }
  a28 = 5;
  private static a29() {
    return 5;
  }
  public a30: string;
}

class InvalidFixture15 {
  static a1: string;
  a2: string;
  @Foo() a3 = 'someString';
  a4 = 5;
  @Bar() a5: string;
  a6 = 5;
  public get some7() {
    return 1;
  }
  a8: string;
  set some9(_) {
    // noop
  }
  public a10 = 5;
  protected get some11() {
    return 1;
  }
  public a12;
  protected set some13(_) {
    // noop
  }
  public a14 = 5;
  private get some15() {
    return 1;
  }
  public a16 = 5;
  protected set some17(_) {
    // noop
  }
  a18 = 'someString';
  public b19(): number {
    return 5;
  }
  public a20: string;
  static c21(a: number): number {
    return a;
  }
  public a22;
  protected b23(): number {
    return 5;
  }
  public a24 = 5;
  protected static c25(a: number): number {
    return a;
  }
  a26 = 'someString';
  private a27() {
    return 5;
  }
  public a28 = 'someString';
  private static a29() {
    return 5;
  }
  public a30 = 5;
}

// Wrong cases for public-static-field-fields
class InvalidFixture16 {
  @Foo() a1 = 'someString';
  public static a2 = 5;
  @Bar() a2 = 5;
  static a3 = 5;
  get some4() {
    return 1;
  }
  static a5 = 5;
  public set some6(_) {
    // noop
  }
  public static a7;
  protected get some8() {
    return 1;
  }
  static a9 = 5;
  protected set some10(_) {
    // noop
  }
  static a11;
  private get some12() {
    return 1;
  }
  static a13 = 'someString';
  protected set some14(_) {
    // noop
  }
  static a15 = 'someString';
  c16(a: number): number {
    return a;
  }
  public static a17: string;
  public static b18(): number {
    return 5;
  }
  static a19: string;
  protected b20(): number {
    return 5;
  }
  public static a21: string;
  protected static b22(): number {
    return 5;
  }
  static a23: string;
  private a24() {
    return 5;
  }
  public static a25: string;
  private static a26() {
    return 5;
  }
  public static a27 = 5;
}

class InvalidFixture17 {
  @Foo() a1 = 'someString';
  static a2 = 5;
  @Bar() a3 = 5;
  public static a4: string;
  get some5() {
    return 1;
  }
  static a6 = 5;
  public set some7(_) {
    // noop
  }
  public static a8: string;
  protected get some9() {
    return 1;
  }
  public static a10 = 5;
  protected set some11(_) {
    // noop
  }
  static a12 = 5;
  private get some13() {
    return 1;
  }
  static a14 = 5;
  protected set some15(_) {
    // noop
  }
  static a16 = 5;
  public b17(): number {
    return 5;
  }
  public static a18 = 'someString';
  public static b19(): number {
    return 5;
  }
  public static a20: string;
  protected b21(): number {
    return 5;
  }
  static a22;
  protected static a23() {
    return 5;
  }
  static a24 = 5;
  private b25(): number {
    return 5;
  }
  static a26 = 5;
  private static a27() {
    return 5;
  }
  static a28 = 5;
}

class InvalidFixture18 {
  @Foo() a1: string;
  public static a2 = 5;
  @Bar() a3: string;
  static a4;
  public get some5() {
    return 1;
  }
  static a6 = 5;
  set some7(_) {
    // noop
  }
  public static a8 = 5;
  protected get some9() {
    return 1;
  }
  static a10;
  protected set some11(_) {
    // noop
  }
  public static a12;
  private get some13() {
    return 1;
  }
  public static a14 = 'someString';
  protected set some15(_) {
    // noop
  }
  static a16: string;
  a17() {
    return 5;
  }
  static a18: string;
  public static c19(a: number): number {
    return a;
  }
  public static a20: string;
  protected a21() {
    return 5;
  }
  static a22 = 5;
  protected static b23(): number {
    return 5;
  }
  public static a24 = 5;
  private a25() {
    return 5;
  }
  static a26;
  private static b27(): number {
    return 5;
  }
  public static a28: string;
}

// Wrong cases for @Input-fields
class InvalidFixture19 {
  @Bar() a1 = 5;
  @Foo() a2;
  get some3() {
    return 1;
  }
  @Foo() a4 = 5;
  set some5(_) {
    // noop
  }
  @Foo() a6 = 'someString';
  protected get some7() {
    return 1;
  }
  @Foo() a8 = 'someString';
  protected set some9(_) {
    // noop
  }
  @Foo() a10;
  private get some11() {
    return 1;
  }
  @Foo() a12: string;
  protected set some13(_) {
    // noop
  }
  @Foo() a14: string;
  public a15() {
    return 5;
  }
  @Foo() a16: string;
  static c17(a: number): number {
    return a;
  }
  @Foo() a18: string;
  protected b19(): number {
    return 5;
  }
  @Foo() a20 = 'someString';
  protected static b21(): number {
    return 5;
  }
  @Foo() a22 = 5;
  private a23() {
    return 5;
  }
  @Foo() a24 = 'someString';
  private static b25(): number {
    return 5;
  }
  @Foo() a26 = 5;
}

class InvalidFixture20 {
  @Bar() a1 = 5;
  @Foo() a2: string;
  public get some3() {
    return 1;
  }
  @Foo() a4: string;
  set some5(_) {
    // noop
  }
  @Foo() a6 = 5;
  protected get some7() {
    return 1;
  }
  @Foo() a8;
  protected set some9(_) {
    // noop
  }
  @Foo() a10 = 5;
  private get some11() {
    return 1;
  }
  @Foo() a12 = 5;
  protected set some13(_) {
    // noop
  }
  @Foo() a14 = 'someString';
  b15(): number {
    return 5;
  }
  @Foo() a16 = 'someString';
  public static c17(a: number): number {
    return a;
  }
  @Foo() a18 = 'someString';
  protected a19() {
    return 5;
  }
  @Foo() a20 = 5;
  protected static c21(a: number): number {
    return a;
  }
  @Foo() a22 = 5;
  private c23(a: number): number {
    return a;
  }
  @Foo() a24 = 5;
  private static b25(): number {
    return 5;
  }
  @Foo() a26: string;
}

class InvalidFixture21 {
  @Bar() a1 = 5;
  @Foo() a2 = 'someString';
  get some3() {
    return 1;
  }
  @Foo() a4 = 5;
  set some5(_) {
    // noop
  }
  @Foo() a6 = 5;
  protected get some7() {
    return 1;
  }
  @Foo() a8: string;
  protected set some9(_) {
    // noop
  }
  @Foo() a10: string;
  private get some11() {
    return 1;
  }
  @Foo() a12 = 5;
  protected set some13(_) {
    // noop
  }
  @Foo() a14 = 5;
  public c15(a: number): number {
    return a;
  }
  @Foo() a16 = 5;
  public static a17() {
    return 5;
  }
  @Foo() a18 = 5;
  protected c19(a: number): number {
    return a;
  }
  @Foo() a20;
  protected static c21(a: number): number {
    return a;
  }
  @Foo() a22: string;
  private b23(): number {
    return 5;
  }
  @Foo() a24: string;
  private static c25(a: number): number {
    return a;
  }
  @Foo() a26 = 5;
}

// Wrong cases for @Output-fields
class InvalidFixture22 {
  get some1() {
    return 1;
  }
  @Bar() a2;
  public set some3(_) {
    // noop
  }
  @Bar() a4 = 5;
  protected get some5() {
    return 1;
  }
  @Bar() a6: string;
  protected set some7(_) {
    // noop
  }
  @Bar() a8 = 5;
  private get some9() {
    return 1;
  }
  @Bar() a10: string;
  protected set some11(_) {
    // noop
  }
  @Bar() a12 = 'someString';
  c(a: number): number {
    return a;
  }
  @Bar() a13 = 'someString';
  public static b(): number {
    return 5;
  }
  @Bar() a14;
  protected b15(): number {
    return 5;
  }
  @Bar() a16 = 5;
  protected static c17(a: number): number {
    return a;
  }
  @Bar() a18 = 5;
  private a19() {
    return 5;
  }
  @Bar() a20 = 5;
  private static c21(a: number): number {
    return a;
  }
  @Bar() a22 = 'someString';
}

class InvalidFixture23 {
  get some1() {
    return 1;
  }
  @Bar() a2;
  public set some3(_) {
    // noop
  }
  @Bar() a4;
  protected get some5() {
    return 1;
  }
  @Bar() a6;
  protected set some7(_) {
    // noop
  }
  @Bar() a8: string;
  private get some9() {
    return 1;
  }
  @Bar() a10: string;
  protected set some11(_) {
    // noop
  }
  @Bar() a12;
  public a13() {
    return 5;
  }
  @Bar() a14 = 'someString';
  public static c15(a: number): number {
    return a;
  }
  @Bar() a16: string;
  protected a17() {
    return 5;
  }
  @Bar() a18: string;
  protected static b19(): number {
    return 5;
  }
  @Bar() a20;
  private a() {
    return 5;
  }
  @Bar() a21;
  private static c22(a: number): number {
    return a;
  }
  @Bar() a23 = 'someString';
}

class InvalidFixture24 {
  public get some1() {
    return 1;
  }
  @Bar() a2;
  set some3(_) {
    // noop
  }
  @Bar() a4 = 'someString';
  protected get some5() {
    return 1;
  }
  @Bar() a6 = 5;
  protected set some7(_) {
    // noop
  }
  @Bar() a8 = 5;
  private get some9() {
    return 1;
  }
  @Bar() a10: string;
  protected set some11(_) {
    // noop
  }
  @Bar() a12 = 'someString';
  c13(a: number): number {
    return a;
  }
  @Bar() a14;
  public static c15(a: number): number {
    return a;
  }
  @Bar() a16;
  protected a17() {
    return 5;
  }
  @Bar() a18: string;
  protected static a() {
    return 5;
  }
  @Bar() a19 = 5;
  private a20() {
    return 5;
  }
  @Bar() a21 = 'someString';
  private static c22(a: number): number {
    return a;
  }
  @Bar() a23 = 5;
}

// Wrong cases for public-getter-fields
class InvalidFixture25 {
  set some1(_) {
    // noop
  }
  get some2() {
    return 1;
  }
  protected get some3() {
    return 1;
  }
  get some4() {
    return 1;
  }
  protected set some5(_) {
    // noop
  }
  public get some6() {
    return 1;
  }
  private get some7() {
    return 1;
  }
  get some8() {
    return 1;
  }
  protected set some9(_) {
    // noop
  }
  public get some10() {
    return 1;
  }
  public a11() {
    return 5;
  }
  public get some12() {
    return 1;
  }
  public static a13() {
    return 5;
  }
  public get some14() {
    return 1;
  }
  protected a15() {
    return 5;
  }
  public get some16() {
    return 1;
  }
  protected static b17(): number {
    return 5;
  }
  get some18() {
    return 1;
  }
  private b19(): number {
    return 5;
  }
  get some20() {
    return 1;
  }
  private static c21(a: number): number {
    return a;
  }
  public get some22() {
    return 1;
  }
}

class InvalidFixture26 {
  set some1(_) {
    // noop
  }
  public get some2() {
    return 1;
  }
  protected get some3() {
    return 1;
  }
  public get some4() {
    return 1;
  }
  protected set some5(_) {
    // noop
  }
  get some6() {
    return 1;
  }
  private get some7() {
    return 1;
  }
  public get some8() {
    return 1;
  }
  protected set some9(_) {
    // noop
  }
  get some10() {
    return 1;
  }
  c11(a: number): number {
    return a;
  }
  get some12() {
    return 1;
  }
  public static b13(): number {
    return 5;
  }
  public get some14() {
    return 1;
  }
  protected b15(): number {
    return 5;
  }
  get some16() {
    return 1;
  }
  protected static a17() {
    return 5;
  }
  get some18() {
    return 1;
  }
  private a19() {
    return 5;
  }
  get some20() {
    return 1;
  }
  private static c21(a: number): number {
    return a;
  }
  get some22() {
    return 1;
  }
}

class InvalidFixture27 {
  set some1(_) {
    // noop
  }
  get some2() {
    return 1;
  }
  protected get some3() {
    return 1;
  }
  public get some4() {
    return 1;
  }
  protected set some5(_) {
    // noop
  }
  public get some6() {
    return 1;
  }
  private get some7() {
    return 1;
  }
  public get some9() {
    return 1;
  }
  protected set some10(_) {
    // noop
  }
  public get some11() {
    return 1;
  }
  public c12(a: number): number {
    return a;
  }
  get some13() {
    return 1;
  }
  public static c14(a: number): number {
    return a;
  }
  get some15() {
    return 1;
  }
  protected c16(a: number): number {
    return a;
  }
  get some17() {
    return 1;
  }
  protected static c18(a: number): number {
    return a;
  }
  get some19() {
    return 1;
  }
  private b20(): number {
    return 5;
  }
  get some21() {
    return 1;
  }
  private static a22() {
    return 5;
  }
  public get some23() {
    return 1;
  }
}

// Wrong cases for public-setter-fields
class InvalidFixture28 {
  protected get some1() {
    return 1;
  }
  set some2(_) {
    // noop
  }
  protected set some3(_) {
    // noop
  }
  set some4(_) {
    // noop
  }
  private get some5() {
    return 1;
  }
  set some6(_) {
    // noop
  }
  protected set some7(_) {
    // noop
  }
  public set some9(_) {
    // noop
  }
  public c10(a: number): number {
    return a;
  }
  public set some11(_) {
    // noop
  }
  static b12(): number {
    return 5;
  }
  set some13(_) {
    // noop
  }
  protected b14(): number {
    return 5;
  }
  set some15(_) {
    // noop
  }
  protected static b16(): number {
    return 5;
  }
  public set some17(_) {
    // noop
  }
  private a18() {
    return 5;
  }
  public set some19(_) {
    // noop
  }
  private static a20() {
    return 5;
  }
  public set some21(_) {
    // noop
  }
}

class InvalidFixture29 {
  protected get some1() {
    return 1;
  }
  set some2(_) {
    // noop
  }
  protected set some3(_) {
    // noop
  }
  set some4(_) {
    // noop
  }
  private get some5() {
    return 1;
  }
  public set some6(_) {
    // noop
  }
  protected set some7(_) {
    // noop
  }
  set some8(_) {
    // noop
  }
  public a9() {
    return 5;
  }
  public set some10(_) {
    // noop
  }
  public static b11(): number {
    return 5;
  }
  set some12(_) {
    // noop
  }
  protected a13() {
    return 5;
  }
  set some14(_) {
    // noop
  }
  protected static b15(): number {
    return 5;
  }
  set some15(_) {
    // noop
  }
  private c16(a: number): number {
    return a;
  }
  public set some17(_) {
    // noop
  }
  private static b18(): number {
    return 5;
  }
  public set some19(_) {
    // noop
  }
}

class InvalidFixture30 {
  protected get some1() {
    return 1;
  }
  set some2(_) {
    // noop
  }
  protected set some3(_) {
    // noop
  }
  set some4(_) {
    // noop
  }
  private get some5() {
    return 1;
  }
  set some6(_) {
    // noop
  }
  protected set some7(_) {
    // noop
  }
  set some8(_) {
    // noop
  }
  public b9(): number {
    return 5;
  }
  set some10(_) {
    // noop
  }
  static b(): number {
    return 5;
  }
  set some11(_) {
    // noop
  }
  protected c12(a: number): number {
    return a;
  }
  set some13(_) {
    // noop
  }
  protected static a14() {
    return 5;
  }
  set some15(_) {
    // noop
  }
  private b16(): number {
    return 5;
  }
  public set some17(_) {
    // noop
  }
  private static c18(a: number): number {
    return a;
  }
  set some19(_) {
    // noop
  }
}

// Wrong cases for protected-getter-fields
class InvalidFixture31 {
  protected set some1(_) {
    // noop
  }
  protected get some2() {
    return 1;
  }
  private get some3() {
    return 1;
  }
  protected get some4() {
    return 1;
  }
  protected set some5(_) {
    // noop
  }
  protected get some6() {
    return 1;
  }
  public c7(a: number): number {
    return a;
  }
  protected get some8() {
    return 1;
  }
  static b9(): number {
    return 5;
  }
  protected get some10() {
    return 1;
  }
  protected a11() {
    return 5;
  }
  protected get some12() {
    return 1;
  }
  protected static b13(): number {
    return 5;
  }
  protected get some14() {
    return 1;
  }
  private a15() {
    return 5;
  }
  protected get some16() {
    return 1;
  }
  private static b17(): number {
    return 5;
  }
  protected get some18() {
    return 1;
  }
}

class InvalidFixture32 {
  protected set some1(_) {
    // noop
  }
  protected get some2() {
    return 1;
  }
  private get some3() {
    return 1;
  }
  protected get some4() {
    return 1;
  }
  protected set some5(_) {
    // noop
  }
  protected get some6() {
    return 1;
  }
  public a7() {
    return 5;
  }
  protected get some8() {
    return 1;
  }
  static c9(a: number): number {
    return a;
  }
  protected get some10() {
    return 1;
  }
  protected c11(a: number): number {
    return a;
  }
  protected get some12() {
    return 1;
  }
  protected static c13(a: number): number {
    return a;
  }
  protected get some14() {
    return 1;
  }
  private c15(a: number): number {
    return a;
  }
  protected get some16() {
    return 1;
  }
  private static c17(a: number): number {
    return a;
  }
  protected get some18() {
    return 1;
  }
}

class InvalidFixture33 {
  protected set some1(_) {
    // noop
  }
  protected get some2() {
    return 1;
  }
  private get some3() {
    return 1;
  }
  protected get some4() {
    return 1;
  }
  protected set some5(_) {
    // noop
  }
  protected get some6() {
    return 1;
  }
  b7(): number {
    return 5;
  }
  protected get some8() {
    return 1;
  }
  static a9() {
    return 5;
  }
  protected get some10() {
    return 1;
  }
  protected c11(a: number): number {
    return a;
  }
  protected get some12() {
    return 1;
  }
  protected static b13(): number {
    return 5;
  }
  protected get some14() {
    return 1;
  }
  private a15() {
    return 5;
  }
  protected get some16() {
    return 1;
  }
  private static c17(a: number): number {
    return a;
  }
  protected get some18() {
    return 1;
  }
}

// Wrong cases for protected-setter-fields
class InvalidFixture34 {
  private get some1() {
    return 1;
  }
  protected set some2(_) {
    // noop
  }
  protected set some3(_) {
    // noop
  }
  protected set some4(_) {
    // noop
  }
  public a5() {
    return 5;
  }
  protected set some6(_) {
    // noop
  }
  public static b(): number {
    return 5;
  }
  protected set some7(_) {
    // noop
  }
  protected c8(a: number): number {
    return a;
  }
  protected set some9(_) {
    // noop
  }
  protected static a10() {
    return 5;
  }
  protected set some11(_) {
    // noop
  }
  private b12(): number {
    return 5;
  }
  protected set some13(_) {
    // noop
  }
  private static a14() {
    return 5;
  }
  protected set some15(_) {
    // noop
  }
}

class InvalidFixture35 {
  private get some1() {
    return 1;
  }
  protected set some2(_) {
    // noop
  }
  protected set some3(_) {
    // noop
  }
  protected set some4(_) {
    // noop
  }
  b4(): number {
    return 5;
  }
  protected set some5(_) {
    // noop
  }
  public static c6(a: number): number {
    return a;
  }
  protected set some7(_) {
    // noop
  }
  protected c8(a: number): number {
    return a;
  }
  protected set some9(_) {
    // noop
  }
  protected static c10(a: number): number {
    return a;
  }
  protected set some11(_) {
    // noop
  }
  private c12(a: number): number {
    return a;
  }
  protected set some13(_) {
    // noop
  }
  private static b14(): number {
    return 5;
  }
  protected set some15(_) {
    // noop
  }
}

class InvalidFixture36 {
  private get some1() {
    return 1;
  }
  protected set some2(_) {
    // noop
  }
  protected set some3(_) {
    // noop
  }
  protected set some4(_) {
    // noop
  }
  public a5() {
    return 5;
  }
  protected set some6(_) {
    // noop
  }
  static c7(a: number): number {
    return a;
  }
  protected set some8(_) {
    // noop
  }
  protected c9(a: number): number {
    return a;
  }
  protected set some10(_) {
    // noop
  }
  protected static b11(): number {
    return 5;
  }
  protected set some12(_) {
    // noop
  }
  private b13(): number {
    return 5;
  }
  protected set some14(_) {
    // noop
  }
  private static a15() {
    return 5;
  }
  protected set some16(_) {
    // noop
  }
}

// Wrong cases for private-getter-fields
class InvalidFixture37 {
  protected set some1(_) {
    // noop
  }
  private get some2() {
    return 1;
  }
  a3() {
    return 5;
  }
  private get some4() {
    return 1;
  }
  public static a5() {
    return 5;
  }
  private get some6() {
    return 1;
  }
  protected b7(): number {
    return 5;
  }
  private get some8() {
    return 1;
  }
  protected static c9(a: number): number {
    return a;
  }
  private get some10() {
    return 1;
  }
  private b11(): number {
    return 5;
  }
  private get some12() {
    return 1;
  }
  private static b13(): number {
    return 5;
  }
  private get some14() {
    return 1;
  }
}

class InvalidFixture38 {
  protected set some1(_) {
    // noop
  }
  private get some2() {
    return 1;
  }
  public a3() {
    return 5;
  }
  private get some4() {
    return 1;
  }
  static a5() {
    return 5;
  }
  private get some6() {
    return 1;
  }
  protected c7(a: number): number {
    return a;
  }
  private get some8() {
    return 1;
  }
  protected static a9() {
    return 5;
  }
  private get some10() {
    return 1;
  }
  private a11() {
    return 5;
  }
  private get some12() {
    return 1;
  }
  private static b13(): number {
    return 5;
  }
  private get some14() {
    return 1;
  }
}

class InvalidFixture39 {
  protected set some1(_) {
    // noop
  }
  private get some2() {
    return 1;
  }
  a3() {
    return 5;
  }
  private get some4() {
    return 1;
  }
  static a5() {
    return 5;
  }
  private get some6() {
    return 1;
  }
  protected c7(a: number): number {
    return a;
  }
  private get some8() {
    return 1;
  }
  protected static a9() {
    return 5;
  }
  private get some10() {
    return 1;
  }
  private a10() {
    return 5;
  }
  private get some11() {
    return 1;
  }
  private static c12(a: number): number {
    return a;
  }
  private get some13() {
    return 1;
  }
}

// Wrong cases for private-setter-fields
class InvalidFixture40 {
  a1() {
    return 5;
  }
  protected set some2(_) {
    // noop
  }
  static a3() {
    return 5;
  }
  protected set some4(_) {
    // noop
  }
  protected b5(): number {
    return 5;
  }
  protected set some6(_) {
    // noop
  }
  protected static a7() {
    return 5;
  }
  protected set some8(_) {
    // noop
  }
  private b9(): number {
    return 5;
  }
  protected set some10(_) {
    // noop
  }
  private static c11(a: number): number {
    return a;
  }
  protected set some12(_) {
    // noop
  }
}

class InvalidFixture41 {
  a1() {
    return 5;
  }
  protected set some2(_) {
    // noop
  }
  static c3(a: number): number {
    return a;
  }
  protected set some4(_) {
    // noop
  }
  protected c5(a: number): number {
    return a;
  }
  protected set some6(_) {
    // noop
  }
  protected static a7() {
    return 5;
  }
  protected set some8(_) {
    // noop
  }
  private b9(): number {
    return 5;
  }
  protected set some10(_) {
    // noop
  }
  private static c11(a: number): number {
    return a;
  }
  protected set some12(_) {
    // noop
  }
}

class InvalidFixture42 {
  public b1(): number {
    return 5;
  }
  protected set some2(_) {
    // noop
  }
  public static a3() {
    return 5;
  }
  protected set some4(_) {
    // noop
  }
  protected a5() {
    return 5;
  }
  protected set some6(_) {
    // noop
  }
  protected static a7() {
    return 5;
  }
  protected set some8(_) {
    // noop
  }
  private b9(): number {
    return 5;
  }
  protected set some10(_) {
    // noop
  }
  private static c11(a: number): number {
    return a;
  }
  protected set some12(_) {
    // noop
  }
}

// Wrong cases for public-instance-method-fields
class InvalidFixture43 {
  static b1(): number {
    return 5;
  }
  c2(a: number): number {
    return a;
  }
  protected b3(): number {
    return 5;
  }
  public b4(): number {
    return 5;
  }
  protected static b5(): number {
    return 5;
  }
  public b6(): number {
    return 5;
  }
  private a7() {
    return 5;
  }
  public c8(a: number): number {
    return a;
  }
  private static a9() {
    return 5;
  }
  a10() {
    return 5;
  }
}

class InvalidFixture44 {
  public static c1(a: number): number {
    return a;
  }
  public c2(a: number): number {
    return a;
  }
  protected b3(): number {
    return 5;
  }
  public b4(): number {
    return 5;
  }
  protected static b5(): number {
    return 5;
  }
  public b6(): number {
    return 5;
  }
  private a7() {
    return 5;
  }
  a8() {
    return 5;
  }
  private static c9(a: number): number {
    return a;
  }
  a10() {
    return 5;
  }
}

class InvalidFixture45 {
  public static c1(a: number): number {
    return a;
  }
  public b2(): number {
    return 5;
  }
  protected c3(a: number): number {
    return a;
  }
  b4(): number {
    return 5;
  }
  protected static c5(a: number): number {
    return a;
  }
  public a6() {
    return 5;
  }
  private a7() {
    return 5;
  }
  public b8(): number {
    return 5;
  }
  private static a9() {
    return 5;
  }
  public a10() {
    return 5;
  }
}

// Wrong cases for public-static-method-fields
class InvalidFixture46 {
  protected c1(a: number): number {
    return a;
  }
  public static b2(): number {
    return 5;
  }
  protected static b3(): number {
    return 5;
  }
  static a4() {
    return 5;
  }
  private a5() {
    return 5;
  }
  public static b6(): number {
    return 5;
  }
  private static c7(a: number): number {
    return a;
  }
  public static a8() {
    return 5;
  }
}

class InvalidFixture47 {
  protected c1(a: number): number {
    return a;
  }
  static a2() {
    return 5;
  }
  protected static c3(a: number): number {
    return a;
  }
  public static c4(a: number): number {
    return a;
  }
  private c5(a: number): number {
    return a;
  }
  static b6(): number {
    return 5;
  }
  private static c7(a: number): number {
    return a;
  }
  public static a8() {
    return 5;
  }
}

class InvalidFixture48 {
  protected c1(a: number): number {
    return a;
  }
  static c2(a: number): number {
    return a;
  }
  protected static c3(a: number): number {
    return a;
  }
  public static b4(): number {
    return 5;
  }
  private a5() {
    return 5;
  }
  public static a6() {
    return 5;
  }
  private static c7(a: number): number {
    return a;
  }
  public static a8() {
    return 5;
  }
}

// Wrong cases for protected-instance-method-fields
class InvalidFixture49 {
  protected static b1(): number {
    return 5;
  }
  protected c2(a: number): number {
    return a;
  }
  private c3(a: number): number {
    return a;
  }
  protected c4(a: number): number {
    return a;
  }
  private static a5() {
    return 5;
  }
  protected b6(): number {
    return 5;
  }
}

class InvalidFixture50 {
  protected static a1() {
    return 5;
  }
  protected c2(a: number): number {
    return a;
  }
  private c3(a: number): number {
    return a;
  }
  protected c4(a: number): number {
    return a;
  }
  private static c5(a: number): number {
    return a;
  }
  protected b6(): number {
    return 5;
  }
}

class InvalidFixture51 {
  protected static c1(a: number): number {
    return a;
  }
  protected b2(): number {
    return 5;
  }
  private c3(a: number): number {
    return a;
  }
  protected b4(): number {
    return 5;
  }
  private static b5(): number {
    return 5;
  }
  protected a6() {
    return 5;
  }
}

// Wrong cases for protected-static-method-fields
class InvalidFixture52 {
  private b1(): number {
    return 5;
  }
  protected static a2() {
    return 5;
  }
  private static b3(): number {
    return 5;
  }
  protected static c4(a: number): number {
    return a;
  }
}

class InvalidFixture53 {
  private a1() {
    return 5;
  }
  protected static c2(a: number): number {
    return a;
  }
  private static c3(a: number): number {
    return a;
  }
  protected static b4(): number {
    return 5;
  }
}

class InvalidFixture54 {
  private b1(): number {
    return 5;
  }
  protected static a2() {
    return 5;
  }
  private static a3() {
    return 5;
  }
  protected static a4() {
    return 5;
  }
}

// Wrong cases for private-instance-method-fields
class InvalidFixture55 {
  private static a1() {
    return 5;
  }
  private a2() {
    return 5;
  }
}

class InvalidFixture56 {
  private static b1(): number {
    return 5;
  }
  private c2(a: number): number {
    return a;
  }
}

class InvalidFixture57 {
  private static b1(): number {
    return 5;
  }
  private b2(): number {
    return 5;
  }
}
