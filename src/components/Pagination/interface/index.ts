export default interface IPagination{
    nbOfPages: number,
    activePage: number,
    onClick: (pageNumber: number) => void,
}