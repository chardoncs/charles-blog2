import { $currentTab, switchToTab, TAB_ITEMS } from "../lib/tabs";
import { cn } from "../lib/utils";
import { useMemo } from "preact/hooks";

interface NavbarItemProps {
  active?: boolean;
  name: string;
  onClick?: () => void;
}

function NavbarItem({ active, name, onClick }: NavbarItemProps) {
  const displayName = useMemo(() => {
    const hotKeyIndex = name.indexOf("_");
    if (hotKeyIndex < 0) {
      return name;
    }

    name = name.replace("_", "[");
    return name.slice(0, hotKeyIndex + 2) + "]" + name.slice(hotKeyIndex + 2);
  }, [name]);

  return (
    <div class={cn("cursor-pointer px-2 hover:bg-blue-900/30", active && "font-bold")} onClick={onClick}>
      {displayName}
    </div>
  );
}

export function Navbar() {
  const currentTab = $currentTab.value;

  return (
    <nav class="flex flex-col md:flex-row bg-zinc-800 shrink-0">
      <div class="flex flex-col md:flex-row md:grow">
        {TAB_ITEMS.map(({ id, name, onClick }) => (
          <NavbarItem
            active={currentTab === id}
            name={name}
            onClick={onClick}
          />
        ))}
      </div>
      <div class="flex flex-col md:flex-row shrink-0">
        <NavbarItem
          name={"Light Mode"}
          onClick={() => {
            window.open("/images/cat-light-mode.gif");
          }}
        />
      </div>
    </nav>
  );
}
