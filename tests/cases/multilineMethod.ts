// no highlights!

var obj = {
    get getter
(): number {
        return 0 // here
    },
    ["method0"]
(): number {
        return 0 // here
    },
    method1
(): number {
        return 0 // here
    },
    ["method" + "2"]
(): number {
        return 0 // here
    },
    methodWithTypeParameters0
<param>(): number {
        return 0 // here
    },
    methodWithTypeParameters1<
param>(): number {
        return 0 // here
    },
    methodWithTypeParameters2<param
>(): number {
        return 0 // here
    },
    methodWithTypeParameters3<param>
(): number {
        return 0 // here
    },
    methodWithTypeParameters4
<
param0
,
 param1
>
(): number {
        return 0 // here
    },
}
