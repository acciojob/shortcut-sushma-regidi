function shortcut(a, b) {
    // If either string is empty, return empty string
    if (!a || !b) {
        return '';
    }

    // Return the first character of both strings
    return a[0] + b[0];
}

