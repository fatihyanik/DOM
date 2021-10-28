function recu(n) {
    if(n===1) {
        console.log('middle', n)
        return 1
    }
    console.log('before', n)
    recu(n - 1)
    console.log('after', n)
}

recu(3) 

console.log('#############')

function middle(n) {
    console.log('middle', n)
}

function two(n) {
    console.log('before', n)
    middle(1)
    console.log('after', n)
}

function three(n) {
    console.log('before', n)
    two(2)
    console.log('after', n)

}

three(3)