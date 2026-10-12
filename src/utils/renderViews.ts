
export function renderViews(views: number) {
    if (views >= 1000 && views <= 999999) {
        return `${views / 1000} Mil`.replace('.', ',');
    }
    if (views >= 1000000 && views <= 999999999) {
        return `${views / 1000000} Mi`.replace('.', ',')
    }
    if (views >= 1000000000) {
        return `${views / 1000000000} Bi`.replace('.', ',')
    }
    return views;
}