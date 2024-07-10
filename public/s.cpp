#include <iostream>
using namespace std;

int main() {
    int X, Y;
    cin >> X >> Y;

    // Start with initial values
    long long current = X;
    int steps = 0;

    // Keep applying the transformation until current >= Y
    while (current < Y) {
        // Apply the transformation x(i) = x(i-1) * 10 + X
        current = current * 10 + X;
        steps++;
    }

    cout << steps << endl;

    return 0;
}\
