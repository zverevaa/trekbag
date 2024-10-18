import Counter from "./Counter";
import Logo from "./Logo";
import { useItemsStore } from "../stores/itemsStore";

export default function Header() {
    const items = useItemsStore((state) => state.items);
    return (
        <header>
            <Logo />
            <Counter
                numberPacked={items.filter((item) => item.packed).length}
                totalNumber={items.length}
            />
        </header>
    );
}
