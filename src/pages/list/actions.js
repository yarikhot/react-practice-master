export const EDIT_ITEMS = 'EDIT_ITEMS';


export function editItems(item) {
    const {id, name, youtube} = item;
    return {
        type: EDIT_ITEMS,
        id, name, youtube
    };
}
