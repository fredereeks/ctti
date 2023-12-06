'use client'
export const pluralize = (items: any[], word : number ) => {
    return (typeof items === 'number' && items > 1) || items.length > 1 ? word+"s" : word;
}