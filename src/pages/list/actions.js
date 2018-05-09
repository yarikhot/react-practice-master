export const EDIT_ITEMS = 'EDIT_ITEMS';
export const DELETE_ITEMS = 'DELETE_ITEMS';


export function editItems(item) {
    const {id, name, youtube} = item;
    return {
        type: EDIT_ITEMS,
        id, name, youtube
    };
}

export function deleteItems(id) {
    return {
        type: DELETE_ITEMS,
        id
    };
}
