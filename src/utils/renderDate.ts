export function renderDate(date: string) {
    const today = new Date();
    const dateOfPublication = new Date(date);

    const difference = Math.abs(today - dateOfPublication);
    const daysOfDifference = Math.floor(difference / (1000 * 60 * 60 * 24));
    if (daysOfDifference >= 30 && daysOfDifference <= 364) {
        const months = Math.floor(daysOfDifference / 30);
        return `há ${months} ${months === 1 ? 'mês' : 'meses'}`
    }
    if (daysOfDifference >= 365) {
        const years = Math.floor(daysOfDifference / 365);
        return `há ${years} ${years === 1 ? 'ano' : 'anos'}`
    }
    return `há ${daysOfDifference} ${daysOfDifference === 1 ? 'dia' : 'dias'}`
}