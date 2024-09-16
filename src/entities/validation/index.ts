type Validator<T> = (data: T) => boolean;
type Sign = { email: string; password: string };

export const validation: Validator<any> = (data): boolean => {
    for (let key in data) {
        if (data[key].length < 3 || data[key] == undefined) return false;
    }
    return true;
};
