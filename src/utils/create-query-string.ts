export const createQueryString = (params: Record<string, string | number | boolean | undefined>) => {
    const cleanedParams = Object.fromEntries(
        Object.entries(params)
        .filter(([_, value]) => value !== undefined)
        .map(([key, value]) => [key, value?.toString() ?? ""])
    );
    const searchParams = new URLSearchParams(cleanedParams);
    return searchParams.toString();
};