#include <stdio.h>
#include <time.h>

long long sum1(int n) {
    long long result = 0;
    for (int i = 1; i <= n; i++) {
        result += i;
    }
    return result;
}

long long sum2(int n) {
    return (n * (n + 1)) / 2;
}

int main() {
    int n = 100;
    clock_t start, end;
    double cpu_time_used;

    start = clock();
    for (int i = 0; i < 100000; i++) {
        sum1(n);
    }
    end = clock();
    cpu_time_used = ((double) (end - start)) / CLOCKS_PER_SEC * 1000;  // 將秒轉換為毫秒
    printf("sum1: %f ms\n", cpu_time_used);

    start = clock();
    for (int i = 0; i < 100000; i++) {
        sum2(n);
    }
    end = clock();
    cpu_time_used = ((double) (end - start)) / CLOCKS_PER_SEC * 1000;  // 將秒轉換為毫秒
    printf("sum2: %f ms\n", cpu_time_used);

    return 0;
}
