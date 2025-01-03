
export function formatCurrency(amount: number): string {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);
}



export function formatDate(DateStr: string): string {
    const dateDbj = new Date (DateStr)
    const options : Intl.DateTimeFormatOptions = {
        weekday: 'long', 
        year: 'numeric',
        month: 'long', 
        day: 'numeric'

    }

    return new Intl.DateTimeFormat('es-Es', options).format(dateDbj)
}

/* Cambiar el formato el peso al dolar*/