interface Item {
    id: number,
    name: string,
    count: number,
    count_sort: number,
    count_full: number
}

interface ItemCreate {
    name: string,
    count: number,
    count_sort: number,
    count_full: number
}