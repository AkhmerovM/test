import {useDecreaseClick} from "modules/module/hooks/use-decrease-click";
import {useIncreaseClick} from "modules/module/hooks/use-increase-click";

export function useOnclick(count) {
    console.log('a');
    if (count > 5) {
        return useDecreaseClick();
    }
    return useIncreaseClick();
}
