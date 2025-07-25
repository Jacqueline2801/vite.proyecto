import Item from "./Item"
function ItemList ({ items}) {
    return(
        <div className="grid grid-cols-3 gap-4 p-3">
            {items.map (prod => <Item prod = {prod}/>)}
        </div>
    )
}
export default ItemList