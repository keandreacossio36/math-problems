function isPrime(n: number): boolean {
    if (n <= 1) return false;
    if (n <= 3) return true;

    if (n % 2 === 0 || n % 3 === 0) return false;

    for (let i = 5; i * i <= n; i += 6)
        if (n % i === 0 || n % (i + 2) === 0) return false;

    return true;
}

function findLargestPrimeFactor(n: number): number {
    let largestPrime = 1;
    for (let i = 2; i <= n / i && n % i === 0; i++)
        if (isPrime(i))
            largestPrime = i;
    return largestPrime;
}
