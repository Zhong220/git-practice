import time

def sum1(n):
    result = 0
    for i in range(1, n + 1):
        result += i
    return result

def sum2(n):
    return (n * (n + 1)) // 2

if __name__ == "__main__":
    n = 100
    iterations = 100000

    start_time = time.time()
    for _ in range(iterations):
        sum1(n)
    end_time = time.time()
    print(f"sum1: {(end_time - start_time) * 1000:.3f} ms")

    start_time = time.time()
    for _ in range(iterations):
        sum2(n)
    end_time = time.time()
    print(f"sum2: {(end_time - start_time) * 1000:.3f} ms")
